import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
     <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">Welcome to DevOps Demo App</h1>
      <p className="mt-4 text-gray-700">Next.js + NestJS + RDS + Kubernetes</p>

      <div className="mt-6 flex gap-4">
        <Link href="/login" className="px-4 py-2 bg-blue-600 text-white rounded">Login</Link>
        <Link href="/signup" className="px-4 py-2 bg-gray-700 text-white rounded">Signup</Link>
      </div>
    </main>
  );
}
