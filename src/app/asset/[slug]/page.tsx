import { notFound } from "next/navigation";
import { AppLayout } from "@/components/layout";
import { getAssetBySlug } from "@/lib/data";

interface AssetPageProps {
  params: Promise<{ slug: string }>;
}

export default async function AssetPage({ params }: AssetPageProps) {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) {
    notFound();
  }

  const side = asset.score > 0 ? "Long bias" : "Short bias";

  return (
    <AppLayout>
      <section className="card">
        <h2 className="text-2xl font-semibold">{asset.name}</h2>
        <p className="mt-1 text-sm text-slate-400">{asset.sector} · {asset.reportFamily.toUpperCase()} family · {asset.priceSymbol}</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="card">
          <h3 className="text-lg font-semibold">COT metrics</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-200">
            <li>Signal side: <span className="font-medium">{side}</span></li>
            <li>Signal score: <span className="font-medium">{asset.score.toFixed(2)}</span></li>
            <li>z-score (156w): <span className="font-medium">{asset.zscore.toFixed(2)}</span></li>
            <li>COT index: <span className="font-medium">{asset.cotIndex}</span></li>
            <li>Weekly Δ net % OI: <span className="font-medium">{(asset.weeklyChangePctOi * 100).toFixed(2)}%</span></li>
          </ul>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">Narrative brief</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Structured positioning suggests {side.toLowerCase()} for {asset.name}. Watch upcoming macro releases and
            volatility proxies before sizing risk.
          </p>
        </div>
      </section>
    </AppLayout>
  );
}
