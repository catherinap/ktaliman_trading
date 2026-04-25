export type Sector =
  | "FX"
  | "Metals"
  | "Equity / Vol"
  | "Energy"
  | "Softs"
  | "Grains"
  | "Crypto";

export interface Asset {
  slug: string;
  name: string;
  sector: Sector;
  reportFamily: "legacy" | "tff" | "disagg";
  priceSymbol: string;
  score: number;
  zscore: number;
  cotIndex: number;
  weeklyChangePctOi: number;
}

export interface RegimeSnapshot {
  name: string;
  confidence: number;
  factors: {
    growth: number;
    inflation: number;
    policy: number;
    liquidity: number;
    volatility: number;
  };
}
