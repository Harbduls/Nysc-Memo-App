"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from "react";

export default function UploadPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [title, setTitle] = useState("");
  const [phase, setPhase] = useState("orientation-camp");
  const [location, setLocation] = useState("");
  const [caption, setCaption] = useState("");

  const previews = useMemo(
    () =>
      files.map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      })),
    [files],
  );

  useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview.url));
    };
  }, [previews]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    formData.append("title", title);
    formData.append("phase", phase);
    formData.append("location", location);
    formData.append("caption", caption);

    console.log("Ready to send", Object.fromEntries(formData.entries()));
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <main className="px-6 py-12">
        <section className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Add a Memory</h1>
            <p className="mt-3 text-gray-600">
              Share a moment from your NYSC journey.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Choose files
                  </label>
                  <label className="block cursor-pointer rounded-xl border-2 border-dashed border-green-700 bg-green-50 px-6 py-10 text-center">
                    <span className="block text-lg font-semibold text-green-900">
                      Click to upload photos or videos
                    </span>
                    <span className="mt-2 block text-sm text-gray-600">
                      JPG, PNG and MP4 files work well here
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Memory title
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                    placeholder="Camp registration day"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Service phase
                  </label>
                  <select
                    value={phase}
                    onChange={(e) => setPhase(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                   >
                    <option value="orientation-camp">Orientation Camp</option>
                    <option value="swearing-in">Swearing In</option>
                    <option value="ppa">PPA Experience</option>
                    <option value="cds">CDS Activities</option>
                    <option value="pop">Passing Out Parade</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                    placeholder="Kubwa camp"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Caption
                  </label>
                  <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                    rows={5}
                    placeholder="Tell the story behind this memory"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-md bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-700"
                >
                  Upload Memory
                </button>
              </div>
            </form>

            <aside className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">Preview</h2>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {previews.length > 0 ? (
                    previews.map((preview) => (
                      <div
                        key={preview.name}
                        className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50"
                      >
                        <Image
                          src={preview.url}
                          alt={preview.name}
                          width={300}
                          height={128}
                          unoptimized
                          className="h-32 w-full object-cover"
                        />
                        <p className="truncate px-3 py-2 text-xs text-gray-600">{preview.name}</p>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 rounded-lg bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
                      Your selected files will show here.
                    </div>
                  )}
                </div>
              </div>

            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}
