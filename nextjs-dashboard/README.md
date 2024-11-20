## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

![Project Overview](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdashboard.png&w=1920&q=75&dpl=dpl_CCaivxfJVdTaUCJ3hZix5Tz8qrQM)

For this course, I will be building a simplified version of the financial dashboard that has:

- A public home page.
- A login page.
- Dashboard pages that are protected by authentication.
- The ability for users to add, edit, and delete invoices.

> [!NOTE]
> The dashboard will also have an accompanying databse, which I'll set up in a later chapter.

## Chapters

### Chapter 1: Getting Started

- ✔ Understanding the folder structure.
- ✔ Understanding placeholder data.

### Chapter 2: CSS Styling

- ✔ How to add a global CSS file to your application.
- ✔ Two different ways of styling: Tailwind and CSS modules.
- ✔ How to conditionally add class names with the `clsx` library.

### Chapter 3: Optimizing Fonts and Images

- ✔ How to add custom fonts with `next/font`.
- ✔ How to add images with `next/image`.
- ✔ How fonts and images are optimized in Next.js.

### Chapter 4: Creating Layouts and Pages

- ✔ Create the `dashboard` routes using file-system routing.
- ✔ Understand the role of folders and files when creating new route segments.
- ✔ Create a nested layout that can be shared between multiple dashboard pages.
- ✔ Understand what colocation, partial rendering, and the root layout are.

### Chapter 5: Navigating Between Pages

- ✔ How to use the `next/link` component.
- ✔ How to show an active link with the `usePathname()` hook.
- ✔ How navigation works in Next.js.

### Chapter 6: Setting Up Your Database

- ✔ Push your project to GitHub.
- ✔ Set up a Vercel account and link your GitHub repo for instant previews and deployments.
- ✔ Create and link your project to a Postgres database.
- ✔ Seed the database with initial data.

### Chapter 7: Fetching Data

- ✔ Learn about some approaches to fetching data: APIs, ORMs, SQL, etc.
- ✔ How Server Components can help you access back-end resources more securely.
- ✔ What network waterfalls are.
- ✔ How to implement parallel data fetching using a JavaScript Pattern.

### Chapter 8: Static and Dynamic Rendering

- ✔ What static rendering is and how it can improve your application's performance.
- ✔ What dynamic rendering is and when to use it.
- ✔ Different approaches to make your dashboard dynamic.
- ✔ Simulate a slow data fetch to see what happens.

### Chapter 9: Streaming

- ✔ What streaming is and when you might use it.
- ✔ How to implement streaming with `loading.tsx` and Suspense.
- ✔ What loading skeletons are.
- ✔ What route groups are, and when you might use them.
- ✔ Where to place Suspense boundaries in your application.

### Chapter 10: Partial Prerendering

- ✔ What Partial Prerendering is.
- ✔ How Partial Prerendering works.

### Chapter 11: Adding Search and Pagination

- ✔ Learn how to use the Next.js APIs: `useSearchParams`, `usePathname`, and `useRouter`.
- ✔ Implement search and pagination using URL search params.

### Chapter 12: Mutating Data

- ✔ What React Server Actions are and how to use them to mutate data.
- ✔ How to work with forms and Server Components.
- ✔ Best practices for working with the native `formData` object, including type validation.
- ✔ How to revalidate the client cache using the `revalidatePath` API.
- ✔ How to create dynamic route segments with specific IDs.

### Chapter 13: Handling Error

- 🚧 How to use the special error.tsx file to catch errors in your route segments, and show a fallback UI to the user.
- 🚧 How to use the `notFound` function and `not-found` file to handle 404 errors _(for resources that don’t exist)_.
