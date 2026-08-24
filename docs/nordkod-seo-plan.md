# Nordkod (nordkod.se) — SEO & лид-стратегия

**Бренд:** Nordkod · **Юрлицо:** RealMar AB (работаем под брендом Nordkod / varumärke)
**Позиционирование:** шведский IT-партнёр — **webb, appar, system**. Вся Швеция, remote.
**Аудитория:** малый бизнес / компании (B2B).
**Язык:** sv-first, en как второй.

---

## 1. Архитектура сайта (SEO-driven)

```
/                         Hem — оффер + главная конверсия
/tjanster                 Услуги (хаб)
  /webbutveckling         Сайты (WordPress + skräddarsytt)
  /apputveckling          Приложения (iOS/Android, cross-platform)
  /systemutveckling       Бизнес-системы, интеграции, API, automatisering
  /e-handel               E-commerce / webshop
  /teknisk-seo            Скорость, Core Web Vitals, teknisk SEO
/case                     Кейсы (хаб)
  /case/byggexp           Кейс ByggExp (+ др.)
/priser                   Цены/пакеты (см. §3 — «vad kostar»-магнит)
/om-oss                   О нас + основатель (ссылка на alexgeho.dev)
/kontakt                  Контакт + форма
/begar-offert             Запрос оффера — главный CTA-лендинг
/blogg                    Контент-движок SEO
```

### Локальные лендинги (local SEO по Швеции)
Делать **качественно и немного**, НЕ 290 kommuner (тонкие дубли = штраф Google).
Стартовый набор под реальный спрос (из Offerta + рынок):
`/webbutveckling/stockholm`, `/goteborg`, `/malmo`, `/jonkoping`, `/trollhattan`, `/uppsala`
+ отдельная страница «Webbyrå för hela Sverige — vi jobbar remote».

---

## 2. Карта ключевых слов (шведский, коммерческий интент)

| Кластер | Основные запросы |
|---|---|
| Сайты | webbutveckling, webbyrå, bygga hemsida företag, wordpress-utvecklare, hemsida till företag |
| Приложения | apputveckling, apputvecklare, bygga app kostnad, iOS/Android app företag |
| Системы | systemutveckling, skräddarsydda system, systemutvecklare, integrationer, API, automatisering |
| E-handel | e-handelsbyrå, bygga webshop, woocommerce/shopify-utvecklare |
| Teknisk SEO | teknisk seo, core web vitals, snabb hemsida, sidhastighet |
| Консалтинг | frontend/backend/fullstack-konsult, it-konsult |

**Транзакционные (высокий интент, приоритет):** запросы со словами `pris`, `kostnad`, `offert`, `företag`.

---

## 3. Контент-движок (блог) — темы прямо из спроса Offerta

Люди, которые покупают, задают эти вопросы — под них делаем страницы:
- **«Vad kostar en hemsida 2026?»** ← «vad kostar»-запросы = золото, высокий интент
- **«Vad kostar en app att utveckla?»**
- «WordPress vs skräddarsytt — vad ska du välja?»
- «Core Web Vitals: varför din sajt är långsam och vad det kostar dig»
- «BankID-integration för appar — så funkar det»
- «GDPR för appar och system — checklista»

> Приём: собирай заголовки лидов из Offerta каждую неделю → это готовая карта тем и посадочных.

---

## 4. Технический SEO (у тебя уже сильная база — Next.js SSG)

- ✅ Next.js static export — быстро (лид Offerta прямо требовал Core Web Vitals — это твоё УТП)
- hreflang sv/en, canonical
- sitemap.xml + robots.txt (уже есть в портфолио — перенести)
- Schema.org: `Organization`, `Service`, `FAQPage`, `BreadcrumbList`, `Review`
- Оптимизация изображений (у тебя уже сжаты — привычка есть)
- Скорость: LCP < 2.5s, CLS < 0.1 — держать в зелёном

---

## 5. Конверсия (чтобы трафик → лиды)

- Главный CTA везде: **«Begär offert — svar inom 24h»**
- Форма короткая (namn, e-post, vad vill du bygga) + опция Calendly-звонка
- Соцдоказательство: кейсы, логотипы клиентов, recensioner/отзывы
- Телефон + email видны, шведский орг.номер (доверие B2B)

---

## 6. Каналы: быстрые лиды сейчас + SEO вдолгую

| Канал | Скорость | Заметка |
|---|---|---|
| **Google Business Profile** (RealMar/Nordkod) | дни | бесплатно, локальная выдача + карта + отзывы |
| **Google Ads** (search, высокий интент) | дни | эксклюзивный лид vs неэксклюзивный Offerta; узкие kw + «offert/företag» |
| **Локальный + сервисный SEO** | 3–6 мес | твой канал, лиды бесплатные и эксклюзивные |
| **LinkedIn outreach** | недели | прямой B2B |
| **Offerta** | сейчас | не бросать резко; считать cost-per-won vs свои каналы, потом урезать |

**Ключевой аргумент против Offerta:** там лид неэксклюзивный (продаётся 3–5 подрядчикам — «3 till kan låsa upp»). Свой канал = лид только твой.

---

## 7. Порядок запуска

1. [ ] `nordkod.se` — verifiera + автопродление ✅ (в процессе)
2. [ ] Google Business Profile (быстрые лиды)
3. [ ] MVP сайта: Hem + 3 страницы услуг + 1 кейс + форма оффера
4. [ ] Schema + sitemap + Google Search Console
5. [ ] 2–3 «vad kostar»-статьи (первый органический трафик)
6. [ ] Google Ads на 5–10 запросов (лиды пока SEO разгоняется)
7. [ ] Локальные лендинги под 5–6 городов
8. [ ] Считать cost-per-won → урезать Offerta
