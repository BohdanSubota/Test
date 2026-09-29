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

function formatPost(item: any): BlogPostEntry {
  const fields = item.fields;
  
  // Format date to "September 18, 2026"
  const formattedDate = fields.date 
    ? new Date(fields.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : '';

  // Extract image URL
  const imageSrc = fields.image?.fields?.file?.url 
    ? `https:${fields.image.fields.file.url}`
    : '/images/img-1.png'; // Fallback

  return {
    title: fields.title || '',
    slug: fields.slug || '',
    category: fields.category || 'All posts',
    description: fields.description || '',
    date: formattedDate,
    readTime: fields.readTime || '5 min read',
    featured: !!fields.featured,
    imageSrc,
    content: fields.content || null,
  };
}

export async function getBlogPosts(category?: string) {
  try {
    const query: any = {
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
