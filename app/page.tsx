export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <h1 className="text-4xl font-bold">Alwajer ERP System</h1>
      <p className="mt-4 text-slate-400">System initialization complete. Database & AI Connected.</p>
      <div className="mt-8 grid grid-cols-1 gap-4">
        <div className="p-6 bg-slate-800 rounded-xl border border-slate-700">
          <h2 className="text-xl font-semibold">AI Command Center</h2>
          <p className="text-sm text-slate-500">Claude & Gemini standing by...</p>
        </div>
      </div>
    </main>
  );
}
