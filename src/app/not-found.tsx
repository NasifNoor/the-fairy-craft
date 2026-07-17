import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-bold">Page Not Found</h1>

      <p className="mt-2 text-gray-500">This page does not exist.</p>

      <Link
        href="/"
        className="mt-6 inline-block rounded bg-black px-5 py-3 text-white"
      >
        Back to Home
      </Link>
    </div>
  );
}
