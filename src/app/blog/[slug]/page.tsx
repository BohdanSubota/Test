import { NewsletterForm } from "@/components/NewsletterForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";
import { BlogSidebar } from "./BlogSidebar";
import { serverTrpc } from "@/trpc/server";
import { notFound } from "next/navigation";
import Link from "next/link";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default async function BlogPost({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  let post;
  try {
    post = await serverTrpc.blog.getBySlug({ slug: decodedSlug });
  } catch (error) {
    notFound();
  }

  const { posts } = await serverTrpc.blog.getAll({});
  const relatedPosts = posts.filter(p => p.slug !== decodedSlug).slice(0, 2);
  const morePosts = posts.filter(p => p.slug !== decodedSlug).slice(2, 5);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full">
        {/* Breadcrumb */}
        <div className="px-4 lg:px-11 pt-6 lg:pt-[140px] max-w-[1396px] mx-auto">
          <div className="text-[14px] text-muted">
            <Link href="/blog" className="hover:text-ink">Blog</Link>
            <span className="mx-2">/</span>
            <span>{post.category}</span>
          </div>
        </div>

        {/* Article + Sidebar */}
        <section className="px-4 lg:px-11 pt-6 lg:pt-8 pb-10 lg:pb-24 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-start">
            {/* Article */}
            <article>
              <h1 className="text-[32px] lg:text-[44px] leading-[1.15] font-semibold tracking-[-0.01em] text-ink mb-4 lg:mb-6">
                {post.title}
              </h1>
              <p className="text-[18px] lg:text-[20px] text-body-text leading-[1.5] mb-6">
                {post.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[15px] text-muted mb-8 lg:mb-10">
                <span className="text-rk-green font-semibold">{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
                <span>Written by our team</span>
              </div>

              {/* Hero image */}
              <img src={post.imageSrc} alt={post.title} className="w-full rounded-[16px] object-cover mb-10 lg:mb-12" />

              {/* Article body */}
              <div className="space-y-8 max-w-[680px] prose prose-lg prose-headings:font-semibold prose-headings:text-ink prose-p:text-body-text prose-a:text-rk-green">
                {post.content ? (
                  documentToReactComponents(post.content)
                ) : (
                  <p>Content is empty.</p>
                )}

                <h2 className="text-[24px] lg:text-[28px] font-semibold text-ink mt-12">Hurt in a crash? Ask us first.</h2>
                <p className="text-[17px] text-body-text leading-[1.7] mb-6">
                  Tell us what happened and we&apos;ll call you back. No win, no fee.
                </p>
                <Link href="/contact" className="block">
                  <Button size="lg" className="justify-center h-[52px]">Request my free review</Button>
                </Link>

                <div className="border-t border-divider pt-8 mt-8">
                  <p className="text-[14px] text-muted leading-[1.6]">
                    This article is general information, not legal advice. Every situation is different. If you have questions about your own case, call us at (760) 338-9712.
                  </p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <BlogSidebar />
          </div>
        </section>

        {/* Related posts */}
        <section className="px-4 lg:px-11 py-10 lg:py-16 max-w-[1396px] mx-auto border-t border-divider">
          <h2 className="text-[30px] lg:text-[36px] font-semibold text-ink mb-4">Keep reading</h2>
          <p className="text-[18px] text-body-text mb-10">More plain answers about injuries, lemon cars and workers&apos; comp in California.</p>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_300px] gap-8">
            {relatedPosts.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`}>
                <PostCard
                  imageSrc={p.imageSrc}
                  category={p.category}
                  title={p.title}
                  date={p.date}
                  readTime={p.readTime}
                />
              </Link>
            ))}

            <div>
              <h3 className="text-[18px] font-semibold text-ink mb-6">More from the blog</h3>
              <div className="flex flex-col gap-6">
                {morePosts.map(p => (
                  <div key={p.slug}>
                    <span className="text-[13px] font-semibold text-rk-green uppercase tracking-wider">{p.category}</span>
                    <Link href={`/blog/${p.slug}`} className="block text-[16px] font-semibold text-ink hover:text-rk-green mt-1 leading-[1.3]">{p.title}</Link>
                  </div>
                ))}
                <Link href="/blog" className="text-[16px] font-semibold text-rk-green hover:underline mt-2">See all posts</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 max-w-[1396px] mx-auto border-t border-divider">
          <div className="bg-tint rounded-lg p-6 lg:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8">
            <div className="max-w-xl">
              <h2 className="text-[28px] lg:text-[32px] font-semibold text-ink mb-3 lg:mb-4">Know your rights, in plain language</h2>
              <p className="text-[17px] lg:text-[18px] text-body-text">
                Short updates on California injury, lemon law and workers&apos; comp. Unsubscribe anytime.
              </p>
            </div>
            <NewsletterForm className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
