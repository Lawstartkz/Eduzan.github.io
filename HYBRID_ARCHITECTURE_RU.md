# EduZan 2.0 — единый репозиторий, два независимых модуля

Актуальная архитектура, схема размещения и границы модулей описаны в [`docs/ARCHITECTURE_RU.md`](docs/ARCHITECTURE_RU.md).

Ключевое решение:

- один GitHub-репозиторий для Portal и Academy;
- Portal остаётся статическим сайтом в корне и публикуется через GitHub Pages;
- Academy находится в `academy/` и размещается отдельно на Node.js-хостинге;
- PostgreSQL обслуживает серверную часть Academy;
- процессы сборки и размещения модулей независимы;
- `main` — стабильная ветка, `develop` — интеграционная, `feature/*` — временные ветки.

Сертификаты, дипломы, QR-проверка и раздел выдачи документов в Academy не предусмотрены. После успешного теста отправляется информационное письмо, а история обучения и попыток хранится в базе данных.

См. также:

- [`docs/DEPLOYMENT_RU.md`](docs/DEPLOYMENT_RU.md) — публикация Portal и Academy;
- [`docs/GIT_BRANCHING_RU.md`](docs/GIT_BRANCHING_RU.md) — работа с ветками;
- [`docs/DATA_PROTECTION_RU.md`](docs/DATA_PROTECTION_RU.md) — защита данных;
- [`docs/REPOSITORY_MERGE_CHECKLIST_RU.md`](docs/REPOSITORY_MERGE_CHECKLIST_RU.md) — проверка перед push.
