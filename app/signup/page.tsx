import Image from "next/image";
import Link from "next/link";

export default function Signup() {
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
            <h1 className="text-4xl font-bold text-black">Create Your Account</h1>
            <p className="mt-2 text-gray-600">Start documenting your service year journey</p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-semibold text-gray-700">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label htmlFor="password" className="mb-1 block text-sm font-semibold text-gray-700">
                  Password *
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="stateCode" className="mb-1 block text-sm font-semibold text-gray-700">
                    State Code *
                  </label>
                  <input
                    id="stateCode"
                    type="text"
                    placeholder="KD/23A/0312"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                  />
                </div>

                <div>
                  <label htmlFor="batch" className="mb-1 block text-sm font-semibold text-gray-700">
                    Batch Year *
                  </label>
                  <input
                    id="batch"
                    type="text"
                    placeholder="2023 Batch"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="institution" className="mb-1 block text-sm font-semibold text-gray-700">
                  Institution *
                </label>
                <input
                  id="institution"
                  type="text"
                  placeholder="Enter your institution"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-green-700"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-green-900 px-4 py-2 font-semibold text-white hover:bg-green-700"
              >
                Create Account
              </button>
            </form>

            <p className="mt-5 text-center text-sm text-gray-700">
              Already have an account?{" "}
              <Link href="/login" className="font-semibold text-green-700">
                Login here
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
