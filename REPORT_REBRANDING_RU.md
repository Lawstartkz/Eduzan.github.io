# REPORT_REBRANDING_RU — LAWSTART → EduZan (минимальный ребрендинг)

Дата: 03.11.2026. Основа: текущая ветка `main` (коммит `e4ed239`, уже содержит многостраничную версию и README с названием EduZan.github.io). Ничего не публиковалось, коммитов нет, файлы не удалялись.

## 1. Изменённые файлы (10)
`index.html`, `kazakhstan.html`, `international.html`, `languages.html`, `catalog.html`, `legal-english.html`, `lawstart-legal-english.js` (7 видимых строк), `favicon.svg` (буквы LS → EZ), `og.jpg` (перерисован: тот же макет и цвета, логотип EduZan и «EduZan Index»; адрес lawstartkz.github.io остался, это реальный URL), `README.md`.
Остальные 53 файла идентичны исходным (CSS, остальные JS, sitemap, robots, data, картинки, старые HTML, zip, workflows).

## 2. Заменённые упоминания
| Файл | Замена | Кол-во |
|---|---|---|
| `index.html` | логотип LAW<i>START</i> → Edu<i>Zan</i> | 1 |
| `index.html` | LAWSTART INDEX → EduZan Index | 20 |
| `index.html` | LAWSTART → EduZan | 43 |
| `kazakhstan.html` | логотип LAW<i>START</i> → Edu<i>Zan</i> | 1 |
| `kazakhstan.html` | LAWSTART INDEX → EduZan Index | 2 |
| `kazakhstan.html` | LAWSTART → EduZan | 9 |
| `international.html` | логотип LAW<i>START</i> → Edu<i>Zan</i> | 1 |
| `international.html` | LAWSTART INDEX → EduZan Index | 3 |
| `international.html` | LAWSTART → EduZan | 27 |
| `languages.html` | логотип LAW<i>START</i> → Edu<i>Zan</i> | 1 |
| `languages.html` | LAWSTART INDEX → EduZan Index | 2 |
| `languages.html` | LAWSTART → EduZan | 18 |
| `catalog.html` | логотип LAW<i>START</i> → Edu<i>Zan</i> | 1 |
| `catalog.html` | LAWSTART INDEX → EduZan Index | 2 |
| `catalog.html` | LAWSTART → EduZan | 13 |
| `legal-english.html` | логотип LAW<i>START</i> → Edu<i>Zan</i> | 1 |
| `legal-english.html` | LAWSTART INDEX → EduZan Index | 2 |
| `legal-english.html` | LAWSTART → EduZan | 26 |
| `lawstart-legal-english.js` | LAWSTART → EduZan | 7 |
| `favicon.svg` | LAWSTART → EduZan | 1 |
| `favicon.svg` | буквы LS → EZ | 1 |

Заменено везде, где слово обозначало бренд: логотип в шапке (`LAW<i>START</i>` → `Edu<i>Zan</i>`, тот же стиль), title, description, Open Graph/Twitter, JSON-LD (name, alternateName, BreadcrumbList), заголовки, меню, подвал, тексты тестов и словаря, подписи alt и aria-label.

## 3. Не заменено (технические/исторические имена) — по вашему правилу
- URL: `lawstartkz.github.io/…` (canonical, og:url, og:image, sitemap, robots), `github.com/Lawstartkz/lawstartkz.github.io/…`, репозиторий и ссылка на Discussions.
- Имена файлов: `lawstart.css`, `lawstart-nav.js`, `lawstart-catalog.js`, `lawstart-legal-english.js`, `lawstart-international.js`, `lawstart-legal-kazakh.js`, `lawstart-img-*.jpg/png` — переименование потребовало бы менять структуру репозитория.
- `localStorage`-ключ `lawstart.legalEnglish.progress.v1`: если его сменить, у пользователей пропадёт прогресс курса Legal English.
- `window.lawstartQA`: внутренний идентификатор.
- Комментарии в CSS/JS (7 штук, не видны пользователю).
- Старые файлы `index (2).html`, `index (3).html`, `index-2026-*.html`, `index-proposed.html`, `REPORT_RU.md`, `changes.diff`, `files.txt`, zip-архивы: исторические, по условию не менялись; в них остаётся LAWSTART.

## 4. Проверки (автоматически, Chromium, локальный сервер; сравнение с исходным main)
- Все 6 страниц: нет дублей id, битых внутренних ссылок и ошибок консоли; title/description/canonical/H1 уникальны; название EduZan в title, og:title, логотипе, футере.
- Нормализация текста: после замены «LAWSTART/EduZan» в 7 изменённых текстовых файлах содержимое идентично исходному, то есть изменилось только название.
- `lawstart-catalog.js`, `sitemap.xml`, `robots.txt`, `data/qa.json` — байт-в-байт без изменений; 182 программы и данные M078 не тронуты.
- EduZan Index: 8 вопросов кликами и все 4374 комбинации, 12 ссылок результатов рабочие.
- Каталог: 7 сценариев поиска/фильтров идентичны прежним. Словарь Legal English: Enter, кнопка, «нет результата» (сообщение теперь «в словаре EduZan»). Озвучивание на имитации: английский, en-GB.
- Международный раздел: фильтры Венгрии идентичны, копирование письма, Kectil. Legal Kazakh: страница и 3 внешние ссылки без ошибок.
- Меню (мобильное и десктоп), Escape, фокус, 37 якорей, 130 старых якорей; ширины 320/393/768/900/1024/1280 без горизонтальной прокрутки; контраст WCAG AA в светлой и тёмной теме.

## 5. Замечания и не проверено
- Не проверено: реальный Android, реальный звук, разметка live-сайта, внешние ссылки, сборка Pages. Миниатюры в Telegram и других мессенджерах кэшируют старый og.jpg: обновятся не сразу.
- Домен и репозиторий по-прежнему называются lawstartkz: на сайте это видно только в адресной строке и в og.jpg (строка адреса). Решение о смене домена — за вами, в этой задаче не затрагивалось.
- Поисковые системы будут некоторое время показывать старое название LAWSTART. В JSON-LD старое имя убрано полностью; при желании его можно оставить в alternateName.
- LK_TERMS (словарь Legal Kazakh) по-прежнему пустой, не менялся.
- Брендовый логотип выбран как «Edu<i>Zan</i>» (второй слой цветом, как было у LAWSTART).

## 6. Как применить
Загрузить в корень репозитория 10 изменённых файлов из `eduzan-changed-files.zip` (или весь набор из `eduzan-full-site.zip`). Откат: предыдущие версии есть в истории коммитов GitHub.
