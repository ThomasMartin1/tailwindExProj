import { FcCheckmark } from "react-icons/fc";
import { ImCross } from "react-icons/im";
import Link from "next/link";

function Pricing() {
  return (
    <div id="pricing" className="grid lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 scroll-m-28">
      <div className="relative rounded-2xl border p-8 shadow-lg flex-col hover:border-blue-500 hover:-translate-y-5 duration-300">
        <h3 className="text-lg font-semibold leading-5">Bronze</h3>
        <p className="mt-4 text-slate-700 text-sm leading-6">
          The essentials to start your gaming journey with access to all of our
          public tournaments.
        </p>
        <div className="mt-4 bg-blue-100 p-6 rounded-lg -mx-6">
          <p className=" flex text-sm font-semibold text-slate-500 items-center">
            <span>USD</span>
            <span className="text-4xl text-slate-900 ml-3">$0.99</span>
            <span className="ml-1.5">monthly</span>
          </p>
        </div>
        <ul className="my-6 space-y-6 text-sm text-slate-700">
          <li>
            {" "}
            <FcCheckmark className="float-left mr-3 translate-y-1" />
            <span className="ml-3">Private Tournaments</span>
          </li>
          <li>
            <ImCross className="text-red-700 float-left mr-3 translate-y-1" />
            <span className="ml-3 ">Public Tournaments</span>
          </li>
          <li>
            <ImCross className="text-red-700 float-left mr-3 translate-y-1" />
            <span className="ml-3">Up to 128-seed bracket</span>
          </li>
          <li>
            <ImCross className="text-red-700 float-left mr-3 translate-y-1" />
            <span className="ml-3">Exclusive League forum page</span>
          </li>
        </ul>
        <Link href="/"><a className="block mt-8 px-6 py-4 text-sm font-semibold leading-4 rounded-lg shadow-md text-blue-700 bg-blue-50 hover:bg-blue-100">Purchase Plan</a></Link>
      </div>
      <div className="relative rounded-2xl border p-8 shadow-xl flex-col hover:border-blue-500 hover:-translate-y-5 duration-300 ">
        <h3 className="text-lg font-semibold leading-5">Silver</h3>
        <p className="absolute top-0 -translate-y-1/2 bg-blue-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">
          Most Popular
        </p>
        <p className="mt-4 text-slate-700 text-sm leading-6">
          {" "}
          The essentials to start your gaming journey, plus access to unlimited
          tournaments.
        </p>
        <div className="mt-4 bg-blue-100 p-6 rounded-lg -mx-6">
          <p className=" flex text-sm font-semibold text-slate-500 items-center">
            <span>USD</span>
            <span className="text-4xl text-slate-900 ml-3">$4.99</span>
            <span className="ml-1.5">monthly</span>
          </p>
        </div>
        <ul className="my-6 space-y-6 text-sm text-slate-700">
          <li>
            <FcCheckmark className="float-left mr-3 translate-y-1" />
            <span className="ml-3">Privates Tournaments</span>
          </li>
          <li>
            <FcCheckmark className="text-red-700 float-left mr-3 translate-y-1" />
            <span className="ml-3">Public Tournaments</span>
          </li>
          <li>
            <ImCross className="text-red-700 float-left mr-3 translate-y-1" />
            <span className="ml-3">Up to 128-seed bracket</span>
          </li>
          <li>
            <ImCross className="text-red-700 float-left mr-3 translate-y-1" />
            <span className="ml-3">Exclusive League forum page</span>
          </li>
        </ul>
        <Link href="/"><a className="block mt-8 px-6 py-4 text-sm font-semibold leading-4 rounded-lg text-white bg-blue-500 hover:bg-blue-600 shadow-md">Purchase Plan</a></Link>
      </div>
      <div className="rounded-2xl border p-8 shadow-lg flex-col hover:border-blue-500 hover:-translate-y-5 duration-300">
        <h3 className="text-lg font-semibold leading-5">Gold</h3>
        <p className="mt-4 text-slate-700 text-sm leading-6">
          The essentials plus access to unlimited tournaments, and gaming league
          managing.
        </p>
        <div className="mt-4 bg-blue-100 p-6 rounded-lg -mx-6">
          <p className=" flex text-sm font-semibold text-slate-500 items-center">
            <span>USD</span>
            <span className="text-4xl text-slate-900 ml-3">$99.99</span>
            <span className="ml-1.5">yearly</span>
          </p>
        </div>
        <ul className="my-6 space-y-6 text-sm text-slate-700">
          <li>
            <FcCheckmark className="float-left mr-3 translate-y-1" />
            <span className="ml-3">Private Tournaments</span>
          </li>
          <li>
            <FcCheckmark className="float-left mr-3 translate-y-1" />
            <span className="ml-3">Public Tournaments</span>
          </li>
          <li>
            <FcCheckmark className="float-left mr-3 translate-y-1" />
            <span className="ml-3">Up to 128-seed bracket</span>
          </li>
          <li>
            <FcCheckmark className="float-left mr-3 translate-y-1" />
            <span className="ml-3">Exclusive League forum page</span>
          </li>
        </ul>
        <Link href="/"><a className="block mt-8 px-6 py-4 text-sm font-semibold leading-4 rounded-lg shadow-md text-blue-700 bg-blue-50 hover:bg-blue-100">Purchase Plan</a></Link>
      </div>
    </div>
  );
}

export default Pricing;
