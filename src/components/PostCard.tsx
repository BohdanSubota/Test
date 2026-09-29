interface PostCardProps {
  imageSrc: string;
  category: string;
  title: string;
  description?: string;
  date: string;
  readTime: string;
}

export function PostCard({ imageSrc, category, title, description, date, readTime }: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 group cursor-pointer">
      <div className="w-full h-[240px] rounded-[16px] overflow-hidden relative bg-tint">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${imageSrc}')` }}
        />
      </div>
      <div>
        <div className="text-[13px] font-semibold text-rk-green mb-2 lg:mb-3">{category}</div>
        <h3 className="text-[20px] lg:text-[22px] font-semibold text-ink leading-[1.3] mb-3 group-hover:text-rk-green transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-[16px] text-body-text leading-[1.5] mb-4">
            {description}
          </p>
        )}
        <div className="text-[14px] text-muted flex items-center gap-2">
          <span>{date}</span>
          <span className="w-[3px] h-[3px] rounded-full bg-divider"></span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
