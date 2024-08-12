// next-auth.d.ts
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    role?: string; // Add optional role property to the User type
  }

  interface Session {
    user: User; // Use the extended User type in the Session
  }
}