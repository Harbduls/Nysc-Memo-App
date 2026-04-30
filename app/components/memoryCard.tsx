import Image from "next/image";

type MemoryCardProps = {
  id: number;
  src: string;
  title: string;
  phase: string;
  likes: number;
  liked: boolean;
  showMessageBox: boolean;
  draftMessage: string;
  onLike: (id: number) => void;
  onToggleMessage: (id: number) => void;
  onMessageChange: (id: number, value: string) => void;
  onSendMessage: (id: number) => void;
};

export default function MemoryCard({
  id,
  src,
  title,
  phase,
  likes,
  liked,
  showMessageBox,
  draftMessage,
  onLike,
  onToggleMessage,
  onMessageChange,
  onSendMessage,
}: MemoryCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <Image
        src={src}
        alt={title}
        width={600}
        height={600}
        className="h-72 w-full object-cover"
      />

      <div className="space-y-4 p-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-500">{phase}</p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => onLike(id)}
            className={
              liked
                ? "rounded-md bg-green-900 px-4 py-2 text-sm font-semibold text-white"
                : "rounded-md border border-green-900 px-4 py-2 text-sm font-semibold text-green-900 hover:bg-green-50"
            }
          >
            {liked ? "Liked" : "Like"} ({likes})
          </button>

          <button
            type="button"
            onClick={() => onToggleMessage(id)}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50"
          >
            Message
          </button>
        </div>

        {showMessageBox ? (
          <div className="space-y-3 rounded-lg bg-gray-50 p-3">
            <textarea
              value={draftMessage}
              onChange={(event) => onMessageChange(id, event.target.value)}
              rows={3}
              placeholder="Write a message..."
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-green-700"
            />
            <button
              type="button"
              onClick={() => onSendMessage(id)}
              className="rounded-md bg-green-900 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700"
            >
              Send
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
