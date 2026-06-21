import { TaskCard } from "./TaskCard";

const columns = [
  {
    title: "Inbox",
    tasks: [
      { title: "Update Docs", project: "ClearWave", id: 78, assignee: "A" },
      { title: "Finalize Report", project: "SkyBridge", id: 79, assignee: "B" },
    ],
  },
  {
    title: "Today",
    tasks: [
      {
        title: "Team Standup",
        project: "BlueHorizon",
        id: 80,
        time: "8:00 AM",
        assignee: "C",
      },
      {
        title: "Review PRs",
        project: "Focus Today",
        id: 81,
        assignee: "D",
        done: true,
      },
    ],
  },
  {
    title: "Dec 4, Thursday",
    tasks: [
      {
        title: "Client Call",
        project: "ClearWave",
        id: 82,
        time: "2:00 PM",
        assignee: "A",
      },
    ],
  },
  {
    title: "Dec 5, Friday",
    tasks: [
      {
        title: "Sprint Planning",
        project: "SkyBridge",
        id: 83,
        time: "10:00 AM",
        assignee: "B",
      },
      {
        title: "Deploy Release",
        project: "BlueHorizon",
        id: 84,
        assignee: "C",
      },
    ],
  },
];

export function WeekBoard() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
        <div>
          <p className="text-xs text-gray-500">My work</p>
          <h1 className="text-xl font-semibold text-gray-900">Week</h1>
        </div>
        <div className="flex gap-2">
          {["Week", "List", "Calendar"].map((view, i) => (
            <button
              key={view}
              type="button"
              className={`rounded-lg px-3 py-1.5 text-sm ${
                i === 0
                  ? "bg-blue-100 font-medium text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {view}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 gap-4 overflow-x-auto p-6">
        {columns.map((column) => (
          <section key={column.title} className="flex w-72 shrink-0 flex-col">
            <header className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-700">{column.title}</h2>
              <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500">
                {column.tasks.length}
              </span>
            </header>
            <div className="flex flex-col gap-3">
              {column.tasks.map((task) => (
                <TaskCard key={task.id} {...task} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
