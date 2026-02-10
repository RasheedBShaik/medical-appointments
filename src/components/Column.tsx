interface JonesItem {
  name: string;
  bgc: string;
  borderTop: string;
  lastSeen?: string;
  address?: string;
  time?: string;
}

interface ColumnProps {
  list: JonesItem[];
  title: string;
}

const Column = ({ list, title }: ColumnProps) => {
  const cardHeight = 160;

  return (
    <div className="flex flex-col h-full bg-slate-50/50">
      {/* Header */}
      <header className="h-16 flex shrink-0 items-center justify-between px-6 bg-white border-b border-slate-200 sticky top-0 z-110">
        <div className="flex flex-col">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Department
          </span>
          <span className="text-sm font-bold text-slate-800 uppercase tracking-tight">
            {title}
          </span>
        </div>
        <div className="bg-slate-900 text-white px-2.5 py-1 rounded-full text-[10px] font-black tabular-nums">
          {list.length.toString().padStart(2, "0")}
        </div>
      </header>

      {/* Scroll Area */}
      <div className="flex-1 relative overflow-y-auto px-4 pt-4 custom-scrollbar scroll-smooth">
        {list.map((item, index) => {
          const stepReduction = 20 + ((index * 23) % 60);

          return (
            <div
              key={index}
              className="sticky"
              style={{
                width: `calc(100% - ${stepReduction}px)`,
                top: `20px`, 
                zIndex: index,
                marginTop: index === 0 ? "0px" : "-115px",
                transform: `translateY(${index * 5}px)`,
              }}
            >
              {/* Card */}
              <div
                className="relative rounded-tr-[20px] rounded-br-none rounded-bl-none rounded-tl-none transition-all duration-500 hover:-translate-y-6 hover:shadow-2xl cursor-pointer group overflow-hidden border border-black/5 will-change-transform"
                style={{
                  backgroundColor: item.bgc,
                  borderTop: `5px solid ${item.borderTop}`,
                  height: `${cardHeight}px`,
                }}
              >
                {/* Right Accent (right border) */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-1.5 opacity-40 group-hover:opacity-100 transition-all duration-300"
                  style={{ backgroundColor: item.borderTop }}
                />

                {/* Content */}
                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-[15px] font-semibold group-hover:font-bold text-slate-900 uppercase tracking-tight leading-tight flex-1 transition-all duration-300">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Lighting Layer */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
              </div>
            </div>
          );
        })}

        {/* Bottom Spacer */}
        <div className="h-100" />
      </div>
    </div>
  );
};

export default Column;
