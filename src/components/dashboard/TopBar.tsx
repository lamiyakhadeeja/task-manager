export function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-gray-200 bg-white px-6">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-blue-500">
            <span className="text-xs font-bold text-white">G</span>
          </div>
          <span className="text-lg font-semibold text-gray-900">GoodDay</span>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          {["Product", "Solutions", "Resources", "Pricing"].map((item) => (
            <button
              key={item}
              type="button"
              className="text-sm text-gray-600 transition hover:text-gray-900"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="hidden text-sm text-gray-600 hover:text-gray-900 sm:block"
        >
          Contact Sales
        </button>
        <button type="button" className="text-sm text-gray-600 hover:text-gray-900">
          Login
        </button>
        <button
          type="button"
          className="rounded-lg border-2 border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-600 transition hover:bg-blue-50"
        >
          Sign up
        </button>
      </div>
    </header>
  );
}
