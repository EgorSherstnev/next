import SignInButton from '../components/SignInButton';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">NextJS</h1>
      <SignInButton />
    </div>
  )
}
