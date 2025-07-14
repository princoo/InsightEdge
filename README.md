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


## Technical Insights

### 1. Performance Improvements with `next/image`
Using Next.js’s built-in [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) component provided automatic image optimization, lazy loading, and responsive sizing. This reduced Largest Contentful Paint (LCP) and improved overall page load speed, especially for post cover images and author avatars.

### 2. Middleware for Access Control and Request Tracking
Custom middleware (`src/middleware.ts`) was used to:
- Restrict access to protected routes (like `/dashboard`) based on user roles.
- Redirect unauthorized users to the login or unauthorized page.
- Log incoming request headers for debugging and analytics.
- Add custom response headers (e.g., `x-powered-by: InsightEdge`) for branding and tracking.

### 3. ISR with Revalidation for Posts
Incremental Static Regeneration (ISR) was implemented for posts, allowing pages to be statically generated at build time and revalidated on demand. This ensured fast initial loads and up-to-date content without full rebuilds. Revalidation was triggered based on post updates, keeping the post list fresh while maintaining performance.

### 4. Authentication Setup Challenges
Setting up authentication with NextAuth.js involved:
- Configuring custom callbacks for JWT and session management.
- Assigning roles based on user email.
- Handling edge cases for missing user images and session data.
- Ensuring protected routes worked seamlessly with middleware and session state.

### 5. Web Vitals Most Impacted by Optimizations
The following Web Vitals saw the greatest improvements:
- **LCP (Largest Contentful Paint):** Optimized images and reduced render-blocking resources.
- **FID (First Input Delay):** Minimal JavaScript and fast hydration.
- **CLS (Cumulative Layout Shift):** Reserved space for images and consistent layout structure.