import Link from "next/link";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">ktaliman trading</h1>
          <p className="text-sm text-slate-400">Personal COT + Macro terminal MVP</p>
        </div>
        <nav className="flex gap-3 text-sm">
          <Link className="rounded-lg border border-slate-700 px-3 py-1 hover:bg-slate-800" href="/workspace">
            Workspace
          </Link>
          <Link className="rounded-lg border border-slate-700 px-3 py-1 hover:bg-slate-800" href="/asset/gold">
            Asset view
          </Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
