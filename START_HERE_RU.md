# EduZan 2.0 — комплект подготовки к интеграции

Дата сборки: 27.11.2026

## Состав архива

- Корневой каталог — статический Portal EduZan.
- `academy/` — приложение Next.js / TypeScript / Prisma.
- `academy/prisma/migrations/20261127130000_init/migration.sql` — начальная миграция БД.
- `.github/workflows/static.yml` — публикация только Portal через GitHub Pages.
- `.github/workflows/academy-lockfile-bootstrap.yml` — генерация настоящего `academy/package-lock.json` на GitHub Actions.
- `.github/workflows/academy-ci.yml` — CI Academy с PostgreSQL 16, проверкой миграций, сравнением схемы и сборкой.
- `scripts/` — подготовка Pages-артефакта и аудит миграции.
- `docs/` — архитектура, защита данных, инструкции и отчёты.

## Уточнения и исправления

1. Начальная Prisma-миграция **присутствует**. Утверждение об её отсутствии относилось к другому архиву/снимку проекта.
2. `academy/package-lock.json` намеренно не включён: его нужно создать достоверно из `package.json` на GitHub Actions, а не генерировать вручную.
3. Первый запуск Academy CI может завершиться ошибкой `npm ci`, пока lock-файл не создан. После успешного bootstrap вручную запусти `EduZan Academy CI` через `workflow_dispatch`: push, созданный `GITHUB_TOKEN`, обычно не запускает новые workflow.
4. Реальных production-секретов в архиве нет; для CI используются фиктивные значения.
5. `_archive/` сохраняется в репозитории, но исключается из Pages-артефакта.

## Безопасный порядок интеграции

1. Создать отдельную ветку `test/academy-lockfile` от актуального `main`.
2. Загрузить комплект только в эту тестовую ветку. `main` и `develop` не менять.
3. Дождаться `EduZan Academy Lockfile Bootstrap` и проверить лог создания `academy/package-lock.json`.
4. Вручную запустить `EduZan Academy CI` после появления lock-файла.
5. Проверить PostgreSQL 16, `prisma migrate deploy`, повторный deploy, статусы миграций, schema diff и `next build`.
6. Только после успешных проверок готовить PR. Merge и публикация требуют отдельного решения владельца проекта.

## Статус проверки

Проверяются целостность ZIP, наличие ключевых workflow и миграции, YAML, статическая сверка Prisma schema/SQL и скрипты Pages. Это не заменяет GitHub Actions и реальное применение миграции к PostgreSQL 16. Успешный `npm ci`, `prisma validate`, `migrate deploy` или `next build` заранее не заявляется.
