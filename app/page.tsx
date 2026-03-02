import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">
        JEE Behavior-Aware Learning System 🚀
      </h1>

      <p className="text-gray-500">
        Train smarter. Track psychology. Improve performance.
      </p>

      <Link
        href="/practice"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Start Practice 🎯
      </Link>
    </main>
  );
}
