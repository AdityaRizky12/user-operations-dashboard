# User Operations Dashboard

A modern user operations dashboard built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Jest, and React Testing Library.

This project was created as a Frontend Engineer technical test. It focuses on presenting user-related data in a clean, responsive, and easy-to-navigate interface.

## Features

- Users list page at `/users`
- User detail page at `/users/[id]`
- Fetch users from JSONPlaceholder API
- Fetch additional user-related data from posts and todos API
- Display user activity signals:
  - Total posts
  - Completed todos
  - Pending todos
- Search users by name or email
- Sort users by name and most pending todos
- Filter users by high pending todos
- Responsive desktop table
- Mobile-friendly user cards
- Dashboard overview page
- Profile page
- Settings page
- Loading skeletons
- Error states
- Empty state when search or filter returns no result
- Invalid user ID handling with not found page
- SEO metadata using `generateMetadata`
- ISR caching with `revalidate: 60`
- Unit tests using Jest and React Testing Library

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React
- Jest
- React Testing Library

## Pages

| Route | Description |
|---|---|
| `/` | Dashboard overview with user, post, and todo summary |
| `/users` | Users list with search, sort, filter, and activity signals |
| `/users/[id]` | User detail page with profile, company, address, posts, and todos |
| `/profile` | Basic profile information |
| `/settings` | Dashboard preferences and app information |

## API Source

Data is fetched from JSONPlaceholder:

- Users: `https://jsonplaceholder.typicode.com/users`
- User Detail: `https://jsonplaceholder.typicode.com/users/{userId}`
- Posts: `https://jsonplaceholder.typicode.com/posts`
- Todos: `https://jsonplaceholder.typicode.com/todos`

## Getting Started

Install dependencies:

```bash
npm install

Run the development server:
npm run dev

Open the app:
http://localhost:3000

Run Tests:
npm run test

Run Lint:
npm run lint

Build for Production:
npm run build

Test Result

The project includes unit tests for users list and user detail components.

Current test result:
Test Suites: 2 passed, 2 total
Tests: 10 passed, 10 total

Project Structure
user-operations-dashboard/
├── app/
│   ├── profile/
│   ├── settings/
│   ├── users/
│   │   ├── [id]/
│   │   ├── page.tsx
│   │   ├── loading.tsx
│   │   └── error.tsx
│   ├── page.tsx
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
│
├── components/
│   ├── dashboard/
│   ├── layout/
│   ├── user-details/
│   ├── users/
│   └── ui/
│
├── services/
│   ├── users.service.ts
│   ├── posts.service.ts
│   └── todos.service.ts
│
├── types/
│   ├── user.ts
│   ├── post.ts
│   └── todo.ts
│
├── utils/
│   ├── enrich-users.ts
│   ├── filters.ts
│   └── sort.ts
│
├── __tests__/
│   ├── users.test.tsx
│   └── user-details.test.tsx
│
├── jest.config.ts
├── jest.setup.ts
└── package.json

Author:
Aditya Rizky Ramadhan
