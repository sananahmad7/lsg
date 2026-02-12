export default function AddCardsPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h1 className="text-3xl font-bold text-white">Add New Slabs</h1>
        <p className="text-zinc-400">
          Register new cards into the LSG grading system.
        </p>
      </div>

      <div className="max-w-2xl bg-zinc-900 p-8 rounded-2xl border border-white/10">
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Card Name</label>
              <input
                className="p-3 bg-black border border-white/10 rounded-lg text-white"
                placeholder="e.g. Charizard"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-zinc-400">Set Name</label>
              <input
                className="p-3 bg-black border border-white/10 rounded-lg text-white"
                placeholder="Base Set"
              />
            </div>
          </div>
          <button className="w-full py-3 bg-[#00D0FF] text-black font-bold rounded-lg hover:bg-[#00D0FF]/90 transition-all">
            Save Card Entry
          </button>
        </form>
      </div>
    </div>
  );
}
