## You can view the site here
[Click Me](https://vanchev-engineering-shadcn-dashboard-task.vercel.app/)

# Shadcn Dashboard Application

This is a web application designed to demonstrate a robust authentication system using Clerk alongside Next.js and TypeScript. This project focuses on implementing an efficient login and signup mechanism and securing a user-specific dashboard that serves as a protected route.

## Features

- **Seamless User Onboarding**: Users can easily sign up using a streamlined process facilitated by Clerk. The sign-up form is designed to be intuitive and user-friendly, requiring minimal input from users while ensuring data security and compliance with privacy standards.
- **Flexible Authentication Options**: Clerk supports various authentication methods, including traditional email and password, phone number authentication, and third-party logins (such as Google, Facebook, etc.). This flexibility allows users to choose the most convenient method for them, enhancing the user experience.
- **Secure Session Management**:Once logged in, users enjoy secure session management where Clerk handles all aspects of session security, including token generation, renewal, and revocation. This ensures that user sessions are secure and that any potential security risks are mitigated promptly.
- **Real-Time Authentication Status**:Clerk provides hooks and APIs that enable the application to receive real-time updates about the user's authentication status. This feature allows the application to react immediately to changes in user status, such as logging out or session expiration.
- **User Profile Management**:Users can manage their profiles directly within the application. Clerk facilitates not only the initial registration process but also subsequent user data management, allowing users to update their information securely.
- **Route Guarding**:The application uses Next.js middleware or Clerk’s client-side routing guards to protect sensitive routes. The Dashboard route is only accessible to users who are authenticated, ensuring that unauthorized access is prevented.

## Technologies Used

- Next.js v14
- Clerk
- Shadcn/ui
- TypeScript
- Tailwind CSS

## Setup Instructions

1. Clone the repository: **git clone https://github.com/RamadanEmin/Vanchev_Engineering_Shadcn_Dashboard_Task.git**
2. Install dependencies: `npm install` or `yarn install`
3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Define the following environment variables:
     - NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
     - CLERK_SECRET_KEY=
     - NEXT_PUBLIC_CLERK_SIGN_IN_URL=
     - NEXT_PUBLIC_CLERK_SIGN_UP_URL=
4. Start the development server: `npm run dev` or `yarn dev`
