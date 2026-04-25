import Link from "next/link";
import { AppLayout } from "@/components/layout";
import { MetricCard } from "@/components/metric-card";
import { assets, getTopLongs, getTopShorts, regimeSnapshot } from "@/lib/data";

export default function WorkspacePage() {
  const longs = getTopLongs();
  const shorts = getTopShorts();

  return (
    <AppLayout>
      <section className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Regime" value={regimeSnapshot.name} hint={`confidence ${Math.round(regimeSnapshot.confidence * 100)}%`} />
        <MetricCard label="Market Vol Index" value="58.3" hint="derived composite" />
        <MetricCard label="Last CFTC Date" value="2026-04-21" hint="weekly report date" />
        <MetricCard label="Source Freshness" value="OK" hint="macro/news/calendar/cot" />
      </section>

      <section className="mt-6 grid gap-4 lg:grid-cols-3">
        <div className="card lg:col-span-2">
          <h2 className="text-lg font-semibold">Top signals</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <div>
              <p className="text-sm font-medium text-emerald-400">Top longs</p>
              <ul className="mt-2 space-y-2 text-sm">
                {longs.map((asset) => (
                  <li key={asset.slug} className="flex items-center justify-between rounded-lg border border-slate-800 p-2">
                    <Link href={`/asset/${asset.slug}`} className="hover:text-sky-300">
                      {asset.name}
                    </Link>
                    <span>{asset.score.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-medium text-rose-400">Top shorts</p>
              <ul className="mt-2 space-y-2 text-sm">
                {shorts.map((asset) => (
                  <li key={asset.slug} className="flex items-center justify-between rounded-lg border border-slate-800 p-2">
                    <Link href={`/asset/${asset.slug}`} className="hover:text-sky-300">
                      {asset.name}
                    </Link>
                    <span>{asset.score.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold">AI brief</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Growth remains resilient while inflation is sticky. Positioning favors metals and selective FX longs.
            Risk flags: next inflation print, central-bank communication, energy volatility.
          </p>
        </div>
      </section>

      <section className="mt-6 card">
        <h2 className="text-lg font-semibold">Asset snapshot</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-400">
              <tr>
                <th className="py-2">Asset</th>
                <th className="py-2">Sector</th>
                <th className="py-2">Score</th>
                <th className="py-2">z-score</th>
                <th className="py-2">COT index</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.slug} className="border-t border-slate-800">
                  <td className="py-2">
                    <Link href={`/asset/${asset.slug}`} className="hover:text-sky-300">
                      {asset.name}
                    </Link>
                  </td>
                  <td className="py-2">{asset.sector}</td>
                  <td className="py-2">{asset.score.toFixed(2)}</td>
                  <td className="py-2">{asset.zscore.toFixed(2)}</td>
                  <td className="py-2">{asset.cotIndex}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppLayout>
  );
}
