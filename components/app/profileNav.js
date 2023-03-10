import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import Link from "next/link";
import mypic from "../../public/placeholder.png";
import Image from "next/image";

function ProfileNav() {
  return (
    <Disclosure as="nav" className="bg-blue-800 text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile Menu Button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <HiXMark className="block h-5 w-5" />
                  ) : (
                    <FaBars className="block h-5 w-5" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/profile">
                    <h1 className="bg-white text-blue-800 px-8 py-2 rounded-md text-md font-bold hover:cursor-pointer hover:bg-gray-200">
                      eTournaments
                    </h1>
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:block">
                  <div className="flex space-x-4">
                    <Link href="/profile/view-tournaments">
                      <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-800">
                        View Tournaments
                      </a>
                    </Link>
                    <Link href="/profile/make-tournament">
                      <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-800">
                        Make Tournament
                      </a>
                    </Link>
                    <Link href="/profile">
                      <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-800">
                        Edit Tournament
                      </a>
                    </Link>
                    <Link href="/profile">
                      <a className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white hover:text-blue-800">
                        Delete Tournament
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 lg:static lg:inset-auto lg:ml-6 lg:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm hover:outline-none hover:ring-offset-blue-800 hover:ring-2 hover:ring-white hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800">
                      <Image
                        className="h-8 w-8 rounded-full"
                        width={32}
                        height={32}
                        src={mypic}
                        alt="placeholder"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 text-black mt-2 w-48 origin-top rounded-md bg-white py-1 shadow-lg ring-1 ring-gray-800 ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a className="block px-4 py-2 text-sm text-black-700 hover:bg-gray-100 border-t">
                            Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="lg:hidden bg-white">
            <div>
              <Disclosure.Button className="text-blue-800 hover:bg-blue-800 hover:text-white block px-3 py-2 text-base font-medium w-full text-left">
                <Link href="/profile/view-tournaments">View Tournaments</Link>
              </Disclosure.Button>
              <Disclosure.Button className="text-blue-800 hover:bg-blue-800 hover:text-white block px-3 py-2 text-base font-medium w-full text-left">
                <Link href="/profile/make-tournament">Make A Tournament</Link>
              </Disclosure.Button>
              <Disclosure.Button className="text-blue-800 hover:bg-blue-800 hover:text-white block px-3 py-2 text-base font-medium w-full text-left">
                <Link href="/profile">Edit Tournaments</Link>
              </Disclosure.Button>
              <Disclosure.Button className="text-blue-800 hover:bg-blue-800 hover:text-white block px-3 py-2 text-base font-medium w-full text-left ">
                <Link href="/profile">Delete Tournaments</Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default ProfileNav;
