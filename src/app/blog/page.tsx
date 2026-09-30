import { NewsletterForm } from "@/components/NewsletterForm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { PostCard } from "@/components/PostCard";
import { serverTrpc } from "@/trpc/server";
import Link from "next/link";

export default async function Blog({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; page?: string }>
}) {
  const { category: rawCategory, page: pageParam } = await searchParams;
  const currentPage = pageParam ? parseInt(pageParam) : 1;
  const category = rawCategory ? decodeURIComponent(rawCategory) : undefined;
  const { featured, posts, totalPages } = await serverTrpc.blog.getAll({ category, page: currentPage });
  const categories = ["All posts", "Personal injury", "Lemon law", "Workers&apos; comp", "Firm news"];

  const getPageLink = (pageNum: number) => {
    if (pageNum === 1) return category ? `/blog?category=${encodeURIComponent(category)}` : "/blog";
    return category ? `/blog?category=${encodeURIComponent(category)}&page=${pageNum}` : `/blog?page=${pageNum}`;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 w-full">
        {/* Intro */}
        <section className="px-4 lg:px-11 pt-10 lg:pt-[140px] pb-10 lg:pb-16 max-w-[1396px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-16">
            <div>
              <h1 className="text-[36px] lg:text-[56px] leading-[1.15] lg:leading-[1.1] font-semibold tracking-[-0.015em] text-ink mb-4">Blog</h1>
              <p className="text-[18px] lg:text-[20px] leading-[1.5] text-body-text mb-8">
                Plain answers about injuries, lemon cars and workers&apos; comp in California. Written by our team in Victorville for people who want to know where they stand.
              </p>

              {/* Category chips */}
              <div className="flex flex-wrap gap-3">
                {categories.map((cat, i) => {
                  const isActive = category === cat || (!category && i === 0);
                  return (
                    <Link
                      key={cat}
                      href={i === 0 ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                      className={`px-4 py-2 rounded-lg border text-[16px] transition-colors ${
                        isActive
                          ? 'bg-rk-green border-rk-green text-white font-semibold'
                          : 'bg-white border-chip-border text-ink hover:bg-tint font-medium'
                      }`}
                    >
                      {cat}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-tint rounded-lg p-6 lg:p-8 h-fit">
              <h3 className="text-[20px] font-semibold text-ink mb-3">Reading because something happened?</h3>
              <p className="text-[17px] text-body-text leading-[1.5] mb-6">Tell us about it. The review is free, and you pay nothing unless we win.</p>
              <Link href="/contact" className="block w-full">
                <Button variant="secondary" size="lg" className="w-full justify-center h-[48px] mb-6">Start your free review</Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-5 h-5">
                  <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <span className="text-[14px] font-bold text-ink">5.0</span>
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-3 h-3" />
                  ))}
                </div>
                <span className="text-[13px] text-body-text ml-1">49 Google reviews</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured post */}
        {featured && (!category || category === 'All posts') && (
          <section className="px-4 lg:px-11 py-10 lg:py-16 max-w-[1440px] mx-auto border-t border-divider">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-tint rounded-[24px] p-6 lg:p-12">
              <div>
                <img src={featured.imageSrc} alt={featured.title} className="w-full rounded-[16px] object-cover aspect-[4/3]" />
              </div>
              <div>
                <span className="text-[14px] font-semibold text-rk-green uppercase tracking-wider mb-3 block">{featured.category}</span>
                <h2 className="text-[28px] lg:text-[36px] leading-[1.2] font-semibold text-ink mb-4">{featured.title}</h2>
                <p className="text-[17px] text-body-text leading-[1.5] mb-6">
                  {featured.description}
                </p>
                <div className="text-[15px] text-muted mb-4">{featured.date} · {featured.readTime}</div>
                <Link href={`/blog/${featured.slug}`} className="text-[16px] font-semibold text-rk-green hover:underline">Read more</Link>
              </div>
            </div>
          </section>
        )}

        {/* Latest posts */}
        <section className="px-4 lg:px-11 py-10 lg:py-16 max-w-[1396px] mx-auto">
          <h2 className="text-[30px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-10 lg:mb-12">Latest posts</h2>
          
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <PostCard
                    imageSrc={post.imageSrc}
                    category={post.category}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    readTime={post.readTime}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-body-text text-lg">No posts found in this category.</p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
          <div className="flex items-center gap-2 mt-12">
            {currentPage > 1 ? (
              <Link href={getPageLink(currentPage - 1)} className="h-10 px-4 rounded-lg border border-chip-border text-[16px] font-medium text-ink hover:bg-tint flex items-center justify-center transition-colors">Previous</Link>
            ) : (
              <span className="h-10 px-4 rounded-lg border border-chip-border text-[16px] font-medium text-muted flex items-center justify-center opacity-50 cursor-not-allowed">Previous</span>
            )}
            
            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNum = i + 1;
              const isActive = pageNum === currentPage;
              return (
                <Link
                  key={pageNum}
                  href={getPageLink(pageNum)}
                  className={`w-10 h-10 rounded-lg border flex items-center justify-center text-[16px] transition-colors ${isActive ? 'bg-rk-green border-rk-green text-white font-semibold' : 'border-chip-border text-ink hover:bg-tint font-medium'}`}
                >
                  {pageNum}
                </Link>
              );
            })}

            {currentPage < totalPages ? (
              <Link href={getPageLink(currentPage + 1)} className="h-10 px-4 rounded-lg border border-chip-border text-[16px] font-medium text-ink hover:bg-tint flex items-center justify-center transition-colors">Next</Link>
            ) : (
              <span className="h-10 px-4 rounded-lg border border-chip-border text-[16px] font-medium text-muted flex items-center justify-center opacity-50 cursor-not-allowed">Next</span>
            )}
          </div>
        )}
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

        {/* CTA Band */}
        <section className="px-4 lg:px-11 py-10 lg:py-24 border-t border-divider">
          <div className="max-w-[1396px] mx-auto bg-tint rounded-lg p-6 lg:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-[28px] lg:text-[40px] leading-[1.15] lg:leading-[46px] font-semibold text-ink mb-4">Unsure if you have a case?</h2>
              <p className="text-[17px] lg:text-[20px] text-body-text">Tell us what happened. The review is free, and you pay nothing unless we win.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button size="lg" className="justify-center h-[52px]">
                <img src="/icons/icon-phone.svg" alt="Phone" className="w-5 h-5 mr-2 brightness-0 invert" />
                Call (760) 338-9712
              </Button>
              <Link href="/contact">
                <Button variant="secondary" size="lg" className="justify-center h-[52px]">Start your free review</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
