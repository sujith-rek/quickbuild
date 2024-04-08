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

