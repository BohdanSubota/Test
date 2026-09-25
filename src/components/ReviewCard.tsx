interface ReviewCardProps {
  name: string;
  time?: string;
  text: string;
  chips?: string[];
  avatarInitial?: string;
  avatarBg?: string;
  avatarImg?: string;
  translated?: boolean;
}

export function ReviewCard({ name, time, text, chips = [], avatarInitial, avatarBg, avatarImg, translated = false }: ReviewCardProps) {
  return (
    <div className="bg-tint rounded-lg p-6 lg:p-8 flex flex-col w-full lg:w-[400px] shrink-0">
      {/* Top */}
      <div className="flex items-center gap-4 mb-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-[20px] relative bg-cover bg-center"
          style={avatarImg ? { backgroundImage: `url('${avatarImg}')` } : { backgroundColor: avatarBg }}
        >
          {!avatarImg && avatarInitial}
          {/* Google Logo small */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-sm">
            <svg viewBox="0 0 24 24" width="14" height="14" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
        <div>
          <div className="text-[16px] font-semibold text-ink leading-tight">{name}</div>
          <div className="text-[14px] text-muted">{time}</div>
        </div>
      </div>
      
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[1,2,3,4,5].map(i => (
          <img key={i} src="/icons/icon-star.svg" alt="Star" className="w-[18px] h-[18px]" />
        ))}
      </div>

      {/* Text */}
      <p className="text-[16px] text-body-text leading-[1.5] mb-6 flex-1">
        &ldquo;{text}&rdquo;
      </p>

      {/* Footer (Translated + Chips) */}
      <div className="mt-auto">
        {translated && (
          <div className="text-[13.5px] text-muted mb-3">Translated by Google</div>
        )}
        <div className="flex flex-wrap gap-2">
          {chips.map((chip, i) => (
            <div key={i} className="px-3 py-1.5 bg-white border border-chip-border rounded-sm text-[13.5px] font-medium text-ink">
              {chip}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
