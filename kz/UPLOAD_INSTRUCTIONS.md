# UPLOAD_INSTRUCTIONS — комплект для GitHub (подготовка, не публикация)

Репозиторий: `Lawstartkz/Eduzan.github.io`. Все файлы комплекта **новые**: ни один существующий файл не заменяется. Сайт не меняется, пока вы сами не загрузите файлы в `main`.

## Что добавляется
| Файл в комплекте | Путь в репозитории | Назначение |
|---|---|---|
| `kz/kz-catalog.html` | `kz/kz-catalog.html` | Новая казахская страница каталога (`lang="kk"`, пока `noindex,follow`) |
| `kz/kz-lawstart-catalog-kk.js` | `kz/kz-lawstart-catalog-kk.js` (рядом с `kz-lawstart-quiz-kk.js`) | Скрипт казахского каталога; данные вузов/программ скопированы без изменений |
| `data/universities_kk_names.json` | `data/universities_kk_names.json` | Справочник казахских названий (52 записи); страница читает его по `../data/…` |
| реестр CSV/XLSX, `EduZan_verification_report.md`, `EduZan_site_update_report.md`, `UPLOAD_INSTRUCTIONS.md` | `docs/audit/` | Документы (необязательно) |

Страница зависит от трёх файлов вместе: `kz/kz-catalog.html`, `kz/kz-lawstart-catalog-kk.js`, `data/universities_kk_names.json` (без JSON названия вузов будут показаны по-русски, страница не сломается). Страница использует уже существующие `lawstart.css`, `favicon.svg`, `lawstart-img-catalog-01.jpg`, `og.jpg`.

## Что заменяется
Ничего. Если GitHub предложит перезаписать файл — остановитесь: такого файла в комплекте быть не должно.

## Что не трогать
`kz/kz-catalog-preview(1).html` (существующий файл), `kz/index.html`, `kz/kz-international.html`, `kz/kz-kazakhstan.html`, `kz/kz-languages.html`, `kz/kz-legal-english.html`, `kz/kz-lawstart-quiz-kk.js`, `catalog.html`, `lawstart-catalog.js`, `lawstart.css`, `lawstart-nav.js`, `index.html`, `kz/index.html`, `kazakhstan.html`, `international.html`, `languages.html`, `sitemap.xml`, `robots.txt`, `qa.json`, остальные файлы `data/`, `.github/workflows/`.

## Последовательность загрузки
1. Создайте ветку (например, `kk-catalog`), не `main`.
2. **Add file → Upload files** в этой ветке: перетащите папки `kz` и `data` целиком (в `kz` лежат `kz-catalog.html` и `kz-lawstart-catalog-kk.js`, в `data` — JSON); документы — в `docs/audit/`. Существующие файлы папки `kz/` не затрагиваются.
3. Не сливайте в `main`, пока не проверите: GitHub Pages публикует `main`.
4. Просмотр до слияния — локально: скачать ветку и в корне выполнить `python3 -m http.server`, открыть `http://localhost:8000/kz/kz-catalog.html` (через `file://` JSON не загрузится).

## Что проверить после загрузки
1. `/kz/kz-catalog.html`: 65 карточек, строка «ЖОО — 52 · бағдарламалар — 182» (как в русском каталоге); фильтр «Бакалавриат» — 51 карточка, «Магистратура» — 16.
2. Поиск по казахскому названию («Ясауи»), по русскому («Кунаева»), по коду («6B04201»), по городу («Қарағанды»).
3. Названия без подтверждённого казахского варианта (№10, 20, 30, 46) показаны по-русски с пометкой, пустых заголовков нет.
4. Русский каталог `/catalog.html` открывается и работает как раньше.
5. Меню и переключатель языка: на `kz/kz-catalog.html` нет полного меню (его разметка из `kz/index.html` не копировалась). Решение владельца — добавить меню и поменять ссылку «Каталог (әзірге орысша)» на `kz/kz-catalog.html` в казахских страницах (отдельным шагом; эти файлы комплект не меняет).
6. Когда страница одобрена — убрать `noindex` из `<meta name="robots">` и добавить страницу в `sitemap.xml` (не входит в комплект).

## Как вернуть прежнее состояние
Файлы только добавлены: удалите `kz/kz-catalog.html`, `kz/kz-lawstart-catalog-kk.js`, `data/universities_kk_names.json`, `docs/audit/` в той же ветке или удалите ветку, не сливая её. Если уже слили — на странице коммита нажмите **Revert**.
