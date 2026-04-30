import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-white text-black">
      <main className="px-6 py-12">
        <section className="mx-auto w-full max-w-md">
          <div className="mb-6 text-center">
            <div className="mb-3 flex justify-center">
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-green-800">
                <Image
                  src="/images/icons8-camera-50.png"
                  alt="Camera Icon"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
                NYSC Memories
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Welcome Back</h1>
            <p className="mt-2 text-gray-600">Continue your journey</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">Email Address *</label>
                <br />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-semibold text-gray-700">Password * </label>
                <br />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                />
              </div>

          
              <button
                type="submit"
                className="w-full rounded-md bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-700"
              >
                Login
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-gray-700">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-semibold text-green-700">
                signup for free
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
