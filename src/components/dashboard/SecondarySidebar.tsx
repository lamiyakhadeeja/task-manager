const homeItems = [
  { label: "My Work", active: true },
  { label: "Notifications", badge: 2 },
  { label: "My Time" },
  { label: "Documents" },
];

const viewItems = ["All Tasks", "Vacation Calendar", "Pastdue Tasks", "Due Today"];

const pinnedItems = [
  { name: "ClearWave", color: "bg-blue-500" },
  { name: "SkyBridge", color: "bg-purple-500" },
  { name: "BlueHorizon", color: "bg-cyan-500" },
  { name: "Focus Today", color: "bg-orange-500" },
];

function NavItem({
  label,
  active,
  badge,
}: {
  label: string;
  active?: boolean;
  badge?: number;
}) {
  return (
    <button
      type="button"
      className={`relative flex w-full items-center justify-between rounded-r-lg py-2 pl-4 pr-3 text-sm transition ${
        active
          ? "bg-blue-50 font-medium text-blue-700"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r bg-blue-600" />
      )}
      <span>{label}</span>
      {badge != null && (
        <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs text-gray-600">
          {badge}
        </span>
      )}
    </button>
  );
}

export function SecondarySidebar() {
  return (
    <aside className="flex w-56 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="border-b border-gray-100 px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Home</p>
        <div className="mt-2 flex flex-col gap-0.5">
          {homeItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </div>
      </div>

      <div className="border-b border-gray-100 px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">Views</p>
        <div className="mt-2 flex flex-col gap-0.5">
          {viewItems.map((label) => (
            <NavItem key={label} label={label} />
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          Pinned Items
        </p>
        <div className="mt-2 flex flex-col gap-1">
          {pinnedItems.map((item) => (
            <button
              key={item.name}
              type="button"
              className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <span className={`h-2 w-2 rounded-sm ${item.color}`} />
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
