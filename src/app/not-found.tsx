import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16 text-center">
      <h1 className="text-3xl font-bold">Asset not found</h1>
      <p className="mt-3 text-slate-400">Перевір slug або повернись у workspace.</p>
      <Link href="/workspace" className="mt-6 inline-block rounded-lg border border-slate-700 px-4 py-2 hover:bg-slate-800">
        Go to workspace
      </Link>
    </main>
  );
}
