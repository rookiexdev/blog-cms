import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Container />
    </div>
  );
}

function Container() {
  return (
    <div className="w-4xl flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
      <div className="mb-8 text-center">
        <h1 className="my-3 text-4xl font-bold">Login</h1>
        <p className="text-sm dark:text-gray-600">
          Login to access your account
        </p>
      </div>
      <form action="" className="space-y-12">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm">
              Username
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="******"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button
              type="button"
              className="w-full px-8 py-3 font-semibold rounded-md dark:text-gray-50 dark:bg-gray-600 cursor-pointer"
            >
              Login
            </button>
          </div>
          <p className="px-6 text-sm text-center dark:text-gray-600">
            Don't have an account yet?
            <Link
              rel="noopener noreferrer"
              href="/signup"
              className="hover:underline dark:text-default-600"
            >
              Sign up
            </Link>
            .
          </p>
        </div>
      </form>
    </div>
  );
}
