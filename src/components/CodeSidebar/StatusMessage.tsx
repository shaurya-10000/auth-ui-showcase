interface StatusMessageProps {
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function StatusMessage({ message, actionLabel, onAction }: StatusMessageProps) {
  return (
    <div
      role="status"
      className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center text-sm text-neutral-400"
    >
      <p>{message}</p>
      {actionLabel && onAction && (
        <button
          type="button"
          onClick={onAction}
          className="rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 font-medium text-white transition-colors hover:bg-neutral-800"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
}
