import Cards from "./NavCards";

const LeftNav = () => {
  return (
    <div className="h-full flex flex-col bg-slate-50/80 backdrop-blur-sm">
      {/* Header: Centered, Bold, and Clean */}
      <div className="h-14 flex items-center justify-between px-6 border-b border-slate-200 bg-white/50">
        <div className="flex items-center gap-3">
          {/* Subtle Live Indicator */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <h1 className="font-bold text-sm uppercase tracking-[0.15em] text-slate-600">
            Coming Up
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar relative">
        <div className="sticky top-0 h-4 w-full bg-linear-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
        
        <div className="px-2">
           <Cards />
        </div>
        
      </div>

      {/* Footer: Quick Info or User Profile */}
      <div className="p-4 border-t border-slate-200 bg-white/50 mt-auto">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500 border border-slate-300">
            AS
          </div>
          <div className="flex flex-col">
            <span className="text-[11px] font-bold text-slate-700">Admin System</span>
            <span className="text-[9px] font-medium text-slate-400 uppercase tracking-tighter">Admin Dashboard</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;