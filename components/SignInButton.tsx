'use client';

import { signIn } from 'next-auth/react';

export default function SignInButton() {
  return (
    <button 
      onClick={() => signIn('google')}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Sign in with Google
    </button>
  );
}