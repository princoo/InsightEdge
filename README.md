# InsightEdge

InsightEdge is a [Next.js](https://nextjs.org) web application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It features authentication, a dashboard for web vitals, and a posts system.

## Features

- **Authentication**: Secure login/logout using [NextAuth.js](https://next-auth.js.org/), with role-based access control.
- **Dashboard**: View collected web vitals metrics in a user-friendly dashboard.
- **Posts**: Browse and view detailed posts, including author info, tags, and cover images.
- **Responsive UI**: Built with modern React components and Tailwind CSS for styling.
- **Image Optimization**: Uses Next.js image component with remote patterns for optimized loading.
- **Protected Routes**: Middleware restricts access to dashboard routes based on user roles.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the homepage by modifying [`src/app/page.tsx`](src/app/page.tsx). The page auto-updates as you edit the file.

## Project Structure

```
src/
  app/
    dashboard/
      page.tsx
    posts/
      [id]/
        page.tsx
    page.tsx
  components/
    AuthActions.tsx
    SimpleDashboard.tsx
    ...
  lib/
    posts.ts
    utils/
      dateFormat.ts
      stringFormat.ts
      MakeRole.ts
    webVitalsStore.ts
middleware.ts
auth.config.ts
next.config.ts
```

## Authentication

- Configured in [`auth.config.ts`](auth.config.ts)
- Role assignment via email
- Protected dashboard routes via [`src/middleware.ts`](src/middleware.ts)

## Dashboard

- Displays web vitals metrics using [`SimpleDashboard`](src/components/SimpleDashboard.tsx)
- Metrics are stored and retrieved from [`WebVitalsStorage`](src/app/lib/webVitalsStore.ts)

## Posts

- List and view posts on the homepage and detail pages
- Post details include tags, author, date, and cover image

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub](https://github.com/vercel/next.js)

---

Feel free to contribute or