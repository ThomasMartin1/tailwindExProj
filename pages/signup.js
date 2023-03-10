import { BsPencilSquare } from "react-icons/bs";
import { GiRetroController } from "react-icons/gi";
import Link from "next/link";

function Signup() {
  return (
    <div className="flex bg-gray-50 h-screen py-12 px-4 sm:px-6 lg:px-8 items-center justify-center">
      <div className="w-full max-w-lg">
        {" "}
        <GiRetroController className="mx-auto h-20 w-auto text-blue-600" />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Create eTournaments account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
            {" "}
            sign in here
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
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="Verify Password"
              className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
          </div>
          
        </form>
        <div>
          <Link href="/profile">
            <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <BsPencilSquare className="h-5 w-5 text-blue-500 group-hover:text-white" />
              </span>
              Create Account
            </button>
            </Link>
          </div>
      </div>
    </div>
  );
}

export default Signup;