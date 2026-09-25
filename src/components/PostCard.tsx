interface PostCardProps {
  imageSrc: string;
  category: string;
  title: string;
  date: string;
  readTime: string;
}

export function PostCard({ imageSrc, category, title, date, readTime }: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="w-full h-[240px] rounded-lg overflow-hidden relative bg-tint">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      </div>
      <div>
        <div className="text-[14px] font-semibold text-rk-green mb-2 uppercase tracking-wide">{category}</div>
        <h3 className="text-[20px] font-semibold text-ink leading-[1.3] mb-3 group-hover:text-rk-green transition-colors">
          {title}
        </h3>
        <div className="text-[14px] text-muted flex items-center gap-2">
          <span>{date}</span>
          <span className="w-1 h-1 rounded-full bg-divider"></span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
