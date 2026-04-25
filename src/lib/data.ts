import { Asset, RegimeSnapshot } from "@/lib/types";

export const assets: Asset[] = [
  {
    slug: "gold",
    name: "Gold",
    sector: "Metals",
    reportFamily: "legacy",
    priceSymbol: "GC",
    score: 0.84,
    zscore: 1.92,
    cotIndex: 86,
    weeklyChangePctOi: 0.017,
  },
  {
    slug: "eur",
    name: "Euro",
    sector: "FX",
    reportFamily: "legacy",
    priceSymbol: "6E",
    score: 0.63,
    zscore: 1.22,
    cotIndex: 73,
    weeklyChangePctOi: 0.011,
  },
  {
    slug: "wti",
    name: "WTI Crude",
    sector: "Energy",
    reportFamily: "legacy",
    priceSymbol: "CL",
    score: -0.66,
    zscore: -1.18,
    cotIndex: 24,
    weeklyChangePctOi: -0.013,
  },
  {
    slug: "usd_index",
    name: "US Dollar Index",
    sector: "FX",
    reportFamily: "legacy",
    priceSymbol: "DX",
    score: -0.71,
    zscore: -1.41,
    cotIndex: 18,
    weeklyChangePctOi: -0.016,
  },
  {
    slug: "bitcoin",
    name: "Bitcoin",
    sector: "Crypto",
    reportFamily: "tff",
    priceSymbol: "BTC",
    score: 0.41,
    zscore: 0.79,
    cotIndex: 67,
    weeklyChangePctOi: 0.006,
  },
  {
    slug: "vix",
    name: "VIX",
    sector: "Equity / Vol",
    reportFamily: "legacy",
    priceSymbol: "VIX",
    score: 0.23,
    zscore: 0.42,
    cotIndex: 58,
    weeklyChangePctOi: 0.002,
  },
];

export const regimeSnapshot: RegimeSnapshot = {
  name: "Growth up / Inflation sticky",
  confidence: 0.72,
  factors: {
    growth: 0.61,
    inflation: 0.78,
    policy: -0.15,
    liquidity: -0.08,
    volatility: 0.34,
  },
};

export function getTopLongs(limit = 3): Asset[] {
  return assets.filter((asset) => asset.score > 0).sort((a, b) => b.score - a.score).slice(0, limit);
}

export function getTopShorts(limit = 3): Asset[] {
  return assets.filter((asset) => asset.score < 0).sort((a, b) => a.score - b.score).slice(0, limit);
}

export function getAssetBySlug(slug: string): Asset | undefined {
  return assets.find((asset) => asset.slug === slug);
}
