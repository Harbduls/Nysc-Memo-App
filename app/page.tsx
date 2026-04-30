import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Timeline Photo",
    description: "Upload and organize photos from every stage of your journey.",
  },
  {
    title: "Batch Community",
    description: "Connect with platoon mates and build lasting friendships.",
  },
  {
    title: "PPA Insights",
    description: "Read reviews and share experiences about your posting location.",
  },
  {
    title: "Memory Book",
    description: "Download all your memories as a digital album after POP.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <section className="px-6 py-12 text-center sm:py-16">
        <div className="mb-4 flex justify-center">
          <Image
            src="/images/icons8-camera-50.png"
            alt="Camera Icon"
            width={48}
            height={48}
            className="h-12 w-12"
          />
        </div>

        <h1 className="mb-4 text-4xl font-bold sm:text-4xl">Your NYSC Journey</h1>
        <h2 className="mb-6 text-4xl text-green-900 sm:text-5xl">Deserves to be Remembered</h2>

        <p className="mb-2 text-lg font-semibold text-gray-700 sm:text-2xl">
          Document every moment from orientation camp to passing out parade.
        </p>

        <p className="mb-2 text-lg font-semibold text-gray-800 sm:text-2xl">
          Connect with your batch, share experiences, and preserve memories
          <br className="hidden sm:block" /> that last forever.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/signup"
            className="w-full rounded-md bg-green-900 px-6 py-3 text-white sm:w-auto"
          >
            Start Your Journey
          </Link>

          <Link
            href="/login"
            className="w-full rounded-md border border-green-600 px-6 py-3 text-green-600 hover:bg-green-600 hover:text-white sm:w-auto"
          >
            Login
          </Link>
        </div>

        <p className="mb-12 mt-6 text-sm text-gray-600">
          Join 10,000+ corp members preserving their service year.
        </p>
      </section>
      <section className="px-6 pb-4">
        <h3 className="mb-6 text-center text-3xl font-bold sm:text-4xl">
          Everything You Need for Your Service Year
        </h3>
        <div className="mx-auto grid max-w-6xl gap-6 text-center md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="mx-auto w-full max-w-xs">
              <h4 className="text-lg font-bold sm:text-xl">{feature.title}</h4>
              <p className="mt-2 text-base leading-7 sm:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-16">
        <div className="bg-green-900 px-6 py-12 text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Start Documenting?</h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-green-100">
            Your service year is a once-in-a-lifetime experience. Make sure you remember every
            moment.
          </p>

          <Link
            href="/signup"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-semibold text-green-900 hover:bg-green-100"
          >
            Create Free Account
          </Link>
        </div>

        <div className="bg-white px-6 py-4 text-center text-sm text-gray-600">
          <p>&copy; 2024 NYSC Memories. Celebrating service to Nigeria.</p>
        </div>
      </footer>
    </div>
  );
}
