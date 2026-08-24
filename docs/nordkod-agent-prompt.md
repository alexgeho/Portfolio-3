# Промт для нового агента (проект Nordkod)

> Открой терминал в новой пустой папке `/Users/alexandergerhard/Nordkod`, запусти `claude` и вставь всё, что ниже (между линиями).

---

Ты создаёшь **новый отдельный проект** — маркетинговый B2B-сайт IT-агентства **Nordkod** для генерации входящих лидов из органики и рекламы. Это НЕ портфолио. Работай только в текущей папке (`/Users/alexandergerhard/Nordkod`). Существующий проект `/Users/alexandergerhard/Portfolio-3` — только ЧИТАТЬ (переиспользовать сборку/дизайн), НИЧЕГО там не менять.

## Контекст бизнеса
- **Бренд:** Nordkod · домен **nordkod.se** (уже куплен и подтверждён).
- **Юрлицо:** RealMar AB (работаем под брендом Nordkod).
- **Услуги:** webbutveckling (сайты), apputveckling (приложения iOS/Android), systemutveckling (бизнес-системы, интеграции, API, автоматизация), e-handel, teknisk SEO / prestanda.
- **Аудитория:** малый бизнес и компании Швеции (B2B). Работаем удалённо по **всей Швеции**.
- **Язык сайта:** шведский (основной) + английский. sv = default.
- **Позиционирование:** быстрый, надёжный шведский IT-партнёр. Ключевое УТП — **скорость и качество** (Core Web Vitals, blixtsnabba sajter), прозрачные цены.

## Реальные кейсы (использовать как proof)
- **ByggExp** — byggexp.se — платформа для стройкомпаний (учёт времени, управление проектами, фактурирование): лендинг + мобильное приложение + админ-панель, интеграции Visma/Fortnox. Стек: React, TypeScript, Node/NestJS, MongoDB.
- **Gjuta Betongplatta** — https://gjutabetongplatta.se/ — нишевый локальный лид-сайт (заливка бетонных плит). Пример модели «нишевый SEO-лендинг под услугу» — можно упомянуть как формат, который Nordkod делает для клиентов.
- (Основатель: Alexander Gerhard, личное портфолио alexgeho.dev — линкуем со страницы «Om oss» для доверия.)

## Технический стек (ЗЕРКАЛИТЬ Portfolio-3)
Сначала прочитай эти файлы в `/Users/alexandergerhard/Portfolio-3`, чтобы повторить рабочую конфигурацию: `package.json`, `next.config.mjs`, `tsconfig.json`, `src/app/[lang]/layout.tsx`, `src/i18n/dictionaries.ts`, `src/styles/_variables.scss`, `src/styles/main.scss`.
- **Next.js 15 (App Router) + React 19 + TypeScript**, `output: 'export'` (статический экспорт), `trailingSlash: true`, `images.unoptimized: true`.
- **SCSS** (sass) с дизайн-токенами (`_variables.scss`). Alias `@/*` → `./src/*`.
- Кастомный i18n через словарь (как в `src/i18n/dictionaries.ts`), маршрут `src/app/[lang]/...`, `generateStaticParams` для sv/en.
- Никаких лишних зависимостей: только next, react, react-dom + dev: sass, typescript, типы.

## Структура сайта (ОТДЕЛЬНЫЕ URL — важно для SEO)
```
/[lang]/                          Hem — оффер + главная конверсия
/[lang]/tjanster/                 Услуги (хаб, линки на под-страницы)
/[lang]/tjanster/webbutveckling/  Сайты (WordPress + skräddarsytt)
/[lang]/tjanster/apputveckling/   Приложения
/[lang]/tjanster/systemutveckling/ Системы, интеграции, API, автоматизация
/[lang]/tjanster/e-handel/        E-commerce
/[lang]/tjanster/teknisk-seo/     Скорость / Core Web Vitals
/[lang]/case/                     Кейсы (хаб)
/[lang]/case/byggexp/             Кейс ByggExp
/[lang]/priser/                   Цены/пакеты («vad kostar»-магнит)
/[lang]/om-oss/                   О нас + основатель (ссылка на alexgeho.dev)
/[lang]/kontakt/                  Контакт + форма
/[lang]/begar-offert/             Запрос оффера — главный CTA
```
(Локальные лендинги `/tjanster/webbutveckling/[stad]` под Stockholm/Göteborg/Malmö/Jönköping/Trollhättan/Uppsala — добавить позже, НЕ в первом MVP.)

## SEO-требования (это лид-машина, SEO — приоритет №1)
- В `generateMetadata` на КАЖДОЙ странице: уникальные `title` + `description` (шведские, с коммерческими ключами: webbutveckling, apputveckling, systemutveckling, «offert», «företag», «pris/kostnad»).
- `alternates.canonical` + `hreflang` sv/en/x-default на каждой странице.
- Schema.org JSON-LD: `Organization` (глобально в layout), `Service` (на страницах услуг), `BreadcrumbList`, `FAQPage` (на страницах услуг и priser), `WebSite`.
- `public/robots.txt` (Allow + Sitemap: https://nordkod.se/sitemap.xml) и `public/sitemap.xml` (или генерация через `app/sitemap.ts`).
- `metadataBase = https://nordkod.se`. OpenGraph + Twitter cards, og-image.
- Семантическая разметка (h1 один на страницу, h2/h3 иерархия), alt у картинок, внутренняя перелинковка услуги↔кейсы↔offert.
- Производительность: LCP < 2.5s, CLS < 0.1 (статический экспорт этому способствует). Картинки сжатые, шрифт Inter.

## Контент (писать по-шведски, зеркалить en)
- **Hem:** сильный H1 («Vi bygger snabba sajter, appar och system för svenska företag» — переформулируй красиво), под-оффер, 3 карточки услуг, блок «Varför Nordkod» (скорость, прозрачные цены, en kontakt — hela leveransen), кейсы, крупный CTA «Begär offert – svar inom 24h».
- **Страницы услуг:** проблема клиента → что делаем → как проходит проект (process) → технологии → мини-FAQ → CTA. Упор на бизнес-результат, не на технологии.
- **Priser:** ориентировочные пакеты/вилки цен + «vad kostar en hemsida/app» — это конверсионный магнит (мало кто из шведских агентств пишет цены открыто).
- **Кейс ByggExp:** задача → решение → результат, скриншоты (можно взять из Portfolio-3 `public/assets/projects/`).
- **Begär offert / Kontakt:** короткая форма (namn, e-post, företag, vad vill du bygga). ВАЖНО: сайт статический → форму подключить к внешнему бэкенду (Formspree / Web3Forms / собственный endpoint) ИЛИ mailto как временный fallback. Спроси владельца, что предпочитает; по умолчанию — Web3Forms (бесплатно, без бэкенда).

## Деплой
- Статический экспорт (`out/`). Хостинг: GitHub Pages ИЛИ Inleed (домен куплен там). Уточни у владельца.
- Добавь `CNAME` = `nordkod.se` (apex) если GitHub Pages. Настрой DNS отдельно.
- `git init` — это отдельный репозиторий.

## Порядок работы
1. Прочитай конфиги Portfolio-3, воспроизведи scaffold (package.json, next.config, tsconfig, styles, i18n-каркас).
2. Заведи бренд: свой акцентный цвет (предложи 2-3 варианта для B2B-tech — тёмно-синий/индиго или графит+акцент), логотип-текст «Nordkod».
3. Собери общий каркас (Nav + Footer + layout + i18n) и Hem.
4. Сделай страницы услуг (webb, app, system) со Schema и FAQ.
5. Priser + кейс ByggExp + Om oss + Begär offert (форма).
6. robots.txt, sitemap, метаданные, проверь `next build` (экспорт без ошибок).
7. Покажи владельцу локальный запуск (`npm run dev`) и что задеплоить.

Есть подробный SEO-план: прочитай `/Users/alexandergerhard/Portfolio-3/docs/nordkod-seo-plan.md` и держи его как источник истины по структуре и ключам.

Начни с шага 1 и 2, покажи мне вилку по бренд-цвету, потом продолжай.
