const navItems = [
  { label: "Home", active: true },
  { label: "Projects" },
  { label: "Reports" },
  { label: "Knowledge" },
];

export function PrimarySidebar() {
  return (
    <aside className="flex w-14 shrink-0 flex-col items-center border-r border-blue-700 bg-[#1e6fd9] py-4">
      <button
        type="button"
        className="mb-6 flex h-9 w-9 items-center justify-center rounded-lg bg-white/20 text-white"
        aria-label="Dashboard"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      </button>

      <nav className="flex flex-1 flex-col items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            title={item.label}
            className={`flex h-10 w-10 items-center justify-center rounded-lg transition ${
              item.active
                ? "bg-white/25 text-white"
                : "text-white/70 hover:bg-white/15 hover:text-white"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
          </button>
        ))}
      </nav>

      <div className="mt-auto flex flex-col items-center gap-2">
        {["Search", "Settings"].map((label) => (
          <button
            key={label}
            type="button"
            title={label}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white/70 hover:bg-white/15 hover:text-white"
          >
            <span className="text-xs">{label[0]}</span>
          </button>
        ))}
        <div className="mt-2 h-9 w-9 overflow-hidden rounded-full bg-orange-300 ring-2 ring-white/30">
          <div className="flex h-full w-full items-center justify-center text-sm font-medium text-orange-800">
            U
          </div>
        </div>
      </div>
    </aside>
  );
}
