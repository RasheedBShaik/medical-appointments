import Column from "./components/Column";
import LeftNav from "./components/LeftNav";

// Import all the lists from your data file
import { JonesList, MillerList, NurseEastList, RicheyList, TracyList } from "./components/Lists";

function App() {
  const categories = [
    { title: "Jones", data: JonesList },
    { title: "Miller East", data: MillerList },
    { title: "Richey", data: RicheyList },
    { title: "Tracy", data: TracyList },
    { title: "Nurse East", data: NurseEastList },
  ];

  return (
    <div className="h-screen w-screen bg-slate-200 p-4 lg:p-6 overflow-hidden flex items-center justify-center">
      
      <div className="h-full w-full max-w-400 bg-white rounded-[40px] border border-slate-300/50 shadow-2xl overflow-hidden flex">
        
        <aside className="h-full w-70 shrink-0 border-r border-slate-200 bg-slate-50">
          <LeftNav />
        </aside>

        <main className="flex-1 flex overflow-x-auto overflow-y-hidden divide-x divide-slate-100 bg-white custom-scrollbar">
          {categories.map((cat, idx) => (
            <section 
              key={idx} 
              className="h-full shrink-0 min-w-100 max-w-137.5"
            >
              <Column list={cat.data} title={cat.title} />
            </section>
          ))}
        </main>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 8px; height: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}} />
    </div>
  );
}

export default App;