# NextJS Boilerplate with TypeScript, SCSS, NextAuth

## Introduction
This project serves as a boilerplate for Next.js applications with TypeScript, SCSS, and NextAuth. It provides a solid foundation for building web applications with features such as authentication, styling, and database connectivity.

## Getting Started
To get started with this project, follow these steps:

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install the dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
```bash
DATABASE_URL="postgres://postgres:postgres@localhost:5432/next-auth"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your_next_auth_secret"
NEXT_PUBLIC_EMAIL="abc@abc.com"
NEXT_PUBLIC_EMAIL_PASSWORD="your_email_password"
```
you can ignore the `NEXT_PUBLIC_EMAIL` and `NEXT_PUBLIC_EMAIL_PASSWORD` if you don't want to send emails.

4. Change the database type in `prisma/schema.prisma`:

5. Run the development server:
```bash
npm run dev
```

## Features
- Prisma: Database connectivity
- Chakra UI: Component library for styling
- NextAuth: Authentication
- SCSS: Styling preprocessor
- NodeMailer: Email sending capability
- Tailwind CSS: Utility-first CSS framework

## Docs

- **Protected API Route** - `/pages/api/user/fetch.ts` is a protected route that requires authentication. If the user is not authenticated, they will be sent a 401 status code and unauthorized message. Also see `/lib/auth.ts` for the authentication logic.

- **Checking User Session in ServerSideProps** - You can check if the user is authenticated in the `getServerSideProps` function of a page by using the `getSession` function from NextAuth. See `/pages/meow.tsx` for an example.

- **Fetching the user in the client side** - You can fetch the user in the client side by using the `useSession` hook from NextAuth. See `/pages/meow.tsx` for an example.


Notes:
1. If you change the database type in `prisma/schema.prisma`, you need to run the following command to generate the Prisma client:
```
npx prisma generate
```

2. If you change the Prisma schema, you need to run the following command to update the database:
```
npx prisma db push
```

3. To run prisma studio, run the following command:
```
npx prisma studio
```