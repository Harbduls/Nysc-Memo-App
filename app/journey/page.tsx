"use client";

import { useState } from "react";
import MemoryCard from "../components/memoryCard";

type Memory = {
  id: number;
  src: string;
  title: string;
  phase: string;
  likes: number;
  liked: boolean;
  showMessageBox: boolean;
  draftMessage: string;
};

const initialMemories: Memory[] = [
  {
    id: 1,
    src: "/images/my journey1.jpg",
    title: "Camp registration day",
    phase: "Orientation",
    likes: 12,
    liked: false,
    showMessageBox: false,
    draftMessage: "",
  },
  {
    id: 2,
    src: "/images/my journey2.jpg",
    title: "First morning parade",
    phase: "Orientation",
    likes: 9,
    liked: false,
    showMessageBox: false,
    draftMessage: "",
  },
  {
    id: 3,
    src: "/images/my journey3.jpg",
    title: "A full day at PPA",
    phase: "PPA Days",
    likes: 15,
    liked: false,
    showMessageBox: false,
    draftMessage: "",
  },
  {
    id: 4,
    src: "/images/my journey4.jpg",
    title: "CDS community outreach",
    phase: "CDS",
    likes: 7,
    liked: false,
    showMessageBox: false,
    draftMessage: "",
  },
  {
    id: 5,
    src: "/images/my journey5.jpg",
    title: "Passing out parade joy",
    phase: "Passing Out",
    likes: 18,
    liked: false,
    showMessageBox: false,
    draftMessage: "",
  },
];

const filters = ["All posts", "Orientation", "PPA Days", "CDS", "Passing Out"];

export default function Journey() {
  const [activeFilter, setActiveFilter] = useState("All posts");
  const [memories, setMemories] = useState(initialMemories);

  const visibleMemories =
    activeFilter === "All posts"
      ? memories
      : memories.filter((memory) => memory.phase === activeFilter);

  const handleLike = (id: number) => {
    setMemories((currentMemories) =>
      currentMemories.map((memory) => {
        if (memory.id !== id) {
          return memory;
        }

        const liked = !memory.liked;

        return {
          ...memory,
          liked,
          likes: liked ? memory.likes + 1 : memory.likes - 1,
        };
      }),
    );
  };

  const toggleMessageBox = (id: number) => {
    setMemories((currentMemories) =>
      currentMemories.map((memory) =>
        memory.id === id
          ? { ...memory, showMessageBox: !memory.showMessageBox }
          : memory,
      ),
    );
  };

  const handleMessageChange = (id: number, value: string) => {
    setMemories((currentMemories) =>
      currentMemories.map((memory) =>
        memory.id === id ? { ...memory, draftMessage: value } : memory,
      ),
    );
  };

  const handleSendMessage = (id: number) => {
    setMemories((currentMemories) =>
      currentMemories.map((memory) =>
        memory.id === id
          ? { ...memory, draftMessage: "", showMessageBox: false }
          : memory,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black">
      <section className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1 className="-mt-6 text-3xl font-bold text-gray-900">Community Timeline</h1>
          <p className="mt-2 text-gray-600">See what fellow corp members are sharing.</p>
        </div>

        <div className="-mt-4 mb-8 flex flex-wrap gap-4">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  isActive
                    ? "rounded-md bg-green-900 px-6 py-2 text-white"
                    : "rounded-md border border-green-900 px-6 py-2 text-green-900 hover:bg-green-50"
                }
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleMemories.map((memory) => (
            <MemoryCard
              key={memory.id}
              id={memory.id}
              src={memory.src}
              title={memory.title}
              phase={memory.phase}
              likes={memory.likes}
              liked={memory.liked}
              showMessageBox={memory.showMessageBox}
              draftMessage={memory.draftMessage}
              onLike={handleLike}
              onToggleMessage={toggleMessageBox}
              onMessageChange={handleMessageChange}
              onSendMessage={handleSendMessage}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
