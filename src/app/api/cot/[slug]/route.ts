import { NextResponse } from "next/server";
import { getAssetBySlug } from "@/lib/data";

interface RouteProps {
  params: Promise<{ slug: string }>;
}

export async function GET(_: Request, { params }: RouteProps) {
  const { slug } = await params;
  const asset = getAssetBySlug(slug);

  if (!asset) {
    return NextResponse.json({ error: "Asset not found" }, { status: 404 });
  }

  return NextResponse.json({
    asOf: "2026-04-21",
    lookback: 156,
    asset,
    metrics: {
      signalSide: asset.score > 0 ? "long" : "short",
      signalStrength: Math.abs(asset.score),
      zscore: asset.zscore,
      cotIndex: asset.cotIndex,
      weeklyChangePctOi: asset.weeklyChangePctOi,
    },
  });
}
