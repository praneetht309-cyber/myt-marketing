interface PhoneMockupProps {
  className?: string;
}

export function PhoneMockup({ className }: PhoneMockupProps) {
  return (
    <div className={className} style={{ width: 260 }}>
      {/* Phone frame */}
      <div
        className="relative overflow-hidden rounded-[36px] border-[3px] border-neutral-700 bg-surface-page shadow-2xl"
        style={{ aspectRatio: "9 / 19.5" }}
      >
        {/* Notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-28 -translate-x-1/2 rounded-b-2xl bg-neutral-700" />

        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-8 pb-2">
          <div className="h-2 w-8 rounded-full bg-neutral-300" />
          <div className="flex gap-1">
            <div className="h-2 w-4 rounded-full bg-neutral-300" />
            <div className="h-2 w-4 rounded-full bg-neutral-300" />
          </div>
        </div>

        {/* Skeleton content mimicking MYT dashboard */}
        <div className="space-y-3 px-4 pt-2">
          {/* App bar with avatar + greeting */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20" />
            <div className="space-y-1">
              <div className="h-2 w-16 rounded-full bg-neutral-300" />
              <div className="h-2.5 w-24 rounded-full bg-primary/30" />
            </div>
          </div>

          {/* Balance card */}
          <div className="rounded-xl bg-primary p-3">
            <div className="h-2 w-16 rounded-full bg-white/30" />
            <div className="mt-2 h-4 w-28 rounded-full bg-white/50" />
            <div className="mt-3 flex gap-2">
              <div className="h-6 flex-1 rounded-lg bg-secondary/60" />
              <div className="h-6 flex-1 rounded-lg bg-white/20" />
            </div>
          </div>

          {/* Quick actions row */}
          <div className="flex justify-between">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div className="h-8 w-8 rounded-xl bg-neutral-200" />
                <div className="h-1.5 w-7 rounded-full bg-neutral-300" />
              </div>
            ))}
          </div>

          {/* List items */}
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-lg bg-white p-2.5"
            >
              <div className="h-8 w-8 shrink-0 rounded-lg bg-primary/10" />
              <div className="flex-1 space-y-1">
                <div
                  className="h-2 rounded-full bg-neutral-300"
                  style={{ width: `${70 - i * 12}%` }}
                />
                <div
                  className="h-1.5 rounded-full bg-neutral-200"
                  style={{ width: `${50 - i * 8}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-around border-t border-neutral-200 bg-white px-2 py-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5">
              <div
                className={`h-4 w-4 rounded-md ${i === 0 ? "bg-primary/40" : "bg-neutral-200"}`}
              />
              <div className="h-1 w-5 rounded-full bg-neutral-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
