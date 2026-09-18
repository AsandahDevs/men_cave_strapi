# Men Cave Strapi

Strapi 5 CMS, packaged to run in Docker with persistent SQLite and upload volumes.

## Run with Docker

1. Create the runtime environment file and replace every `replace-with-...` value with a unique secret:

   ```sh
   cp .env.example .env
   ```

2. Build and start the development service:

   ```sh
   docker compose up --build -d
   ```

3. Open `http://localhost:1337/admin` and create the initial administrator account.

This runs Strapi in watch mode, so source changes reload automatically. The named `strapi-node-modules`, `strapi-data`, and `strapi-uploads` volumes retain dependencies, database content, and media across container recreation. Stop the service with `docker compose down`; add `--volumes` only when you intentionally want to erase that data.

For logs, use `docker compose logs -f strapi`.

### Content API CORS

The Content API allows the local frontend origins in `.env.example`. Add your deployed frontend domain to the comma-separated `CORS_ORIGINS` value before production deployment, for example:

```env
CORS_ORIGINS=https://www.example.com
```

## Local development

Install dependencies and start Strapi in watch mode:

```sh
npm install
npm run develop
```

The local application also requires the variables in `.env`.

## Strapi commands

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
