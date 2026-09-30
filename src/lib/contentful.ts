import { createClient } from 'contentful';
import type { Entry, Asset } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export type BlogPostSkeleton = {
  contentTypeId: 'blogPost';
  fields: {
    title: { type: 'Symbol' };
    slug: { type: 'Symbol' };
    category: { type: 'Symbol' };
    description: { type: 'Text' };
    date: { type: 'Date' };
    readTime: { type: 'Symbol' };
    featured: { type: 'Boolean' };
    image: { type: 'Link', linkType: 'Asset' };
    content: { type: 'RichText' };
  };
};

export type BlogPostEntry = {
  title: string;
  slug: string;
  category: string;
  description: string;
  date: string;
  readTime: string;
  featured: boolean;
  imageSrc: string;
  content: Document | null;
};

function formatPost(item: unknown): BlogPostEntry {
  const entry = item as { fields: Record<string, unknown> };
  const fields = entry.fields;
  
  // Format date to "September 18, 2026"
  const formattedDate = typeof fields.date === 'string'
    ? new Date(fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : '';

  // Extract image URL
  const imageField = fields.image as { fields?: { file?: { url?: string } } } | undefined;
  const imageSrc = imageField?.fields?.file?.url 
    ? `https:${imageField.fields.file.url}`
    : '/images/img-1.png'; // Fallback

  return {
    title: (fields.title as string) || '',
    slug: (fields.slug as string) || '',
    category: (fields.category as string) || 'All posts',
    description: (fields.description as string) || '',
    date: formattedDate,
    readTime: (fields.readTime as string) || '5 min read',
    featured: !!fields.featured,
    imageSrc,
    content: (fields.content as Document) || null,
  };
}

export async function getBlogPosts(category?: string) {
  try {
    const query: Record<string, unknown> = {
      content_type: 'blogPost',
      order: ['-fields.date'],
    };

    if (category && category !== 'All posts') {
      query['fields.category'] = category;
    }

    const response = await contentfulClient.getEntries(query);
    return response.items.map(formatPost);
  } catch (error) {
    console.error('Contentful fetch error:', error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string) {
  try {
    const response = await contentfulClient.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });

    if (!response.items.length) {
      return null;
    }

    return formatPost(response.items[0]);
  } catch (error) {
    console.error('Contentful fetch error:', error);
    return null;
  }
}
