import { GoogleIcon } from "@/components/GoogleIcon";
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
            <GoogleIcon />
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
