type TaskCardProps = {
  title: string;
  project: string;
  id: number;
  time?: string;
  assignee?: string;
  done?: boolean;
};

export function TaskCard({ title, project, id, time, assignee, done }: TaskCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-3 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-2">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded bg-gray-100 text-gray-500">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-semibold text-gray-900">{title}</h3>
          <p className="truncate text-xs text-gray-500">
            {project} · #{id}
          </p>
        </div>

        {assignee && (
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-200 text-xs font-medium text-violet-700">
            {assignee}
          </div>
        )}
      </div>

      <div className="mt-2 flex items-center justify-between">
        {time ? (
          <span className="text-xs font-medium text-blue-600">{time}</span>
        ) : (
          <span />
        )}
        {done && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600">
            ✓
          </span>
        )}
      </div>
    </article>
  );
}
