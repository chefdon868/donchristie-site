import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const JOURNAL_DIR = path.join(process.cwd(), 'content', 'journal');

export type JournalCategory =
  | 'Build Log'
  | 'Hospitality Notes'
  | 'AI Experiments'
  | 'Procurement AI'
  | 'Travel AI'
  | 'TacklingFish SEO'
  | 'ExeChef Updates'
  | 'Personal Reflections';

export const JOURNAL_CATEGORIES: JournalCategory[] = [
  'Build Log',
  'Hospitality Notes',
  'AI Experiments',
  'Procurement AI',
  'Travel AI',
  'TacklingFish SEO',
  'ExeChef Updates',
  'Personal Reflections',
];

export interface JournalFrontmatter {
  title: string;
  date: string; // ISO 8601
  category: JournalCategory;
  summary: string;
  tags?: string[];
  draft?: boolean;
}

export interface JournalPost {
  slug: string;
  frontmatter: JournalFrontmatter;
  content: string;
  readingTimeMinutes: number;
}

function estimateReadingMinutes(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

function listMdxFiles(): string[] {
  if (!fs.existsSync(JOURNAL_DIR)) return [];
  return fs
    .readdirSync(JOURNAL_DIR)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'));
}

export function getAllPosts(options?: { includeDrafts?: boolean }): JournalPost[] {
  const includeDrafts = options?.includeDrafts ?? false;
  const files = listMdxFiles();

  const posts = files.map((file): JournalPost => {
    const filePath = path.join(JOURNAL_DIR, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);
    const frontmatter = data as JournalFrontmatter;
    const slug = file.replace(/\.mdx?$/, '');
    return {
      slug,
      frontmatter,
      content,
      readingTimeMinutes: estimateReadingMinutes(content),
    };
  });

  return posts
    .filter((post) => includeDrafts || !post.frontmatter.draft)
    .sort((a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
    );
}

export function getPostBySlug(slug: string): JournalPost | null {
  const safeSlug = slug.replace(/[^a-z0-9-]/gi, '');
  const candidates = [
    path.join(JOURNAL_DIR, `${safeSlug}.mdx`),
    path.join(JOURNAL_DIR, `${safeSlug}.md`),
  ];
  const filePath = candidates.find((p) => fs.existsSync(p));
  if (!filePath) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const frontmatter = data as JournalFrontmatter;
  return {
    slug: safeSlug,
    frontmatter,
    content,
    readingTimeMinutes: estimateReadingMinutes(content),
  };
}

export function getAllSlugs(): string[] {
  return listMdxFiles().map((file) => file.replace(/\.mdx?$/, ''));
}

export function formatPostDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
