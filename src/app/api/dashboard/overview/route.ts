import { NextResponse } from "next/server";
import { getTopLongs, getTopShorts, regimeSnapshot } from "@/lib/data";

export async function GET() {
  return NextResponse.json({
    asOf: "2026-04-24",
    regime: regimeSnapshot,
    topLongs: getTopLongs(),
    topShorts: getTopShorts(),
    marketVolIndex: 58.3,
    lastCftcDate: "2026-04-21",
    freshness: {
      macro: "ok",
      calendar: "ok",
      news: "ok",
      cot: "ok",
    },
  });
}
