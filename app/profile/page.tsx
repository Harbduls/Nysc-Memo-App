import Image from "next/image";

const memories = [
  "/images/my journey1.jpg",
  "/images/my journey2.jpg",
  "/images/my journey3.jpg",
  "/images/my journey4.jpg",
  "/images/my journey5.jpg",
];

export default function Profile() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Profile Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Profile Header Card */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col items-center text-center">
            {/* Profile Picture */}
            <div className="mb-4">
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                <Image
                  src="/images/icons8-camera-50.png" 
                  alt="Profile Picture" 
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Name */}
            <h1 className="text-2xl font-bold text-gray-900">
              User  Name
            </h1>

            {/* State Code */}
            <p className="mt-1 text-lg font-medium text-green-700">
              KD/23A/0312
            </p>

            {/* Batch Year */}
            <p className="mt-1 text-sm text-gray-600">
              Batch 2024
            </p>

            {/* Institution */}
            <p className="mt-1 text-sm text-gray-500">
              University of Lagos
            </p>

            {/* Edit Profile Button */}
            <button 
              type="button"
              className="mt-6 rounded-md border border-gray-300 bg-white px-6 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:bg-green-600 hover:text-white"
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-gray-900">24</p>
            <p className="text-sm text-gray-600">Memories</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-gray-900">156</p>
            <p className="text-sm text-gray-600">Likes</p>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-4 text-center shadow-sm">
            <p className="text-2xl font-bold text-gray-900">12</p>
            <p className="text-sm text-gray-600">Friends</p>
          </div>
        </div>

        {/* Recent Memories Section */}
        <div className="mt-8">
          <h2 className="mb-4 text-xl font-bold text-gray-900">My Journey</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {memories.map((memory, index) => (
              <div key={memory} className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={memory}
                  alt={`My journey memory ${index + 1}`}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
            {/* Empty Slot */}
            <div className="aspect-square rounded-xl bg-gray-100 flex items-center justify-center">
              <p className="text-sm text-gray-400">Add more</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
