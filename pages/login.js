import { HiLockClosed } from "react-icons/hi";
import { GiRetroController } from "react-icons/gi";
import Link from "next/link";

function Login() {
  return (
    <div className="flex bg-gray-50 h-screen py-12 px-4 sm:px-6 lg:px-8 items-center justify-center">
      <div className="w-full max-w-lg">
        {" "}
        <GiRetroController className="mx-auto h-20 w-auto text-blue-600" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your eTournaments account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{" "}
          <a href="/signup" className="font-medium text-blue-600 hover:text-blue-500">
            {" "}
            start your 14-day free trial
          </a>
        </p>
        <form action="#" method="POST" className="mt-8 space-y-6">
          <div>
            <input
              id="email-address"
              name="email"
              type="email"
              required
              placeholder="Email address"
              className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
            />
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Password"
              className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label className="ml-2 block text-sm text-gray-900">
                {" "}
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          
        </form>
        <div>
          <Link href="/profile">
            <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiLockClosed className="h-5 w-5 text-blue-500 group-hover:text-white" />
              </span>
              Sign in
            </button>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Login;
