# ktaliman trading

Повноцінний MVP вебдодатка для персонального трейдингового workflow у стилі NFIF:

- COT-аналітика (скори, z-score, COT index, long/short bias)
- Macro/workspace dashboard
- Asset detail view
- JSON API для інтеграції фронтенда/ETL

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Швидкий старт

```bash
npm install
npm run dev
```

Після старту:

- `http://localhost:3000/workspace` — головний дашборд
- `http://localhost:3000/asset/gold` — сторінка активу

## Доступні API

- `GET /api/assets`
- `GET /api/dashboard/overview`
- `GET /api/cot/:slug`

## Структура проєкту

- `src/app/workspace/page.tsx` — dashboard
- `src/app/asset/[slug]/page.tsx` — asset page
- `src/app/api/**` — backend endpoints
- `src/lib/data.ts` — mock дані для MVP

## Примітка

Поточна версія — робочий MVP зі статичними демо-даними. Наступний крок: підключення реального ETL (CFTC/FRED/календар) і Postgres/Supabase.
