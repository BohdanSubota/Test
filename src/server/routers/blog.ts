import { router, publicProcedure } from '../trpc';
import { z } from 'zod';
import { getBlogPosts, getBlogPostBySlug } from '@/lib/contentful';

export const blogRouter = router({
  getAll: publicProcedure
    .input(z.object({
      category: z.string().optional(),
      page: z.number().default(1),
    }).optional())
    .query(async ({ input }) => {
      const posts = await getBlogPosts(input?.category);
      
      const isFiltering = input?.category && input.category !== 'All posts';
      
      const featured = isFiltering ? undefined : (posts.find(p => p.featured) || posts[0]);
      const regularPosts = featured ? posts.filter(p => p.slug !== featured.slug) : posts;
      
      const page = input?.page || 1;
      const POSTS_PER_PAGE = 9;
      const totalPages = Math.ceil(regularPosts.length / POSTS_PER_PAGE);
      const paginatedPosts = regularPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
      
      return {
        featured,
        posts: paginatedPosts,
        totalPages,
        currentPage: page,
      };
    }),
    
  getBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input }) => {
      const post = await getBlogPostBySlug(input.slug);
      if (!post) {
        throw new Error('Post not found');
      }
      return post;
    }),
});
