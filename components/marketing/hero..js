import { GiRetroController } from "react-icons/gi";
import { TbTournament } from "react-icons/tb";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";

function Hero() {
  return (
    <section id="about" className="bg-gray-50 text-gray-600">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-3xl font-medium text-gray-900 mb-4">
            Welcome to eTournaments
          </h1>
          <p className="leading-relaxed mx-auto lg:w-3/4 xl:w-2/4">
            eTournaments is pioneering the future of online gaming tournaments.
            From tournaments between friends, or professional gaming leagues
            eTournaments has the power to connect you.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-9/12 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 text-blue-500">
              <GiRetroController size={80} />
            </div>
            <div>
              <h2 className="text-gray-900 text-2xl font-medium mb-4">
                Gaming
              </h2>
              <p className="leading-relaxed">
                Enhance your gaming tournaments with an application that helps you keep track of statistics, players and more.
              </p>
              <a href="/" className="mt-3 text-blue-500 font-medium">
                Learn more &rarr;{" "}
              </a>
              <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 text-blue-500">
              <TbTournament size={80} />
            </div>
            <div>
              <h2 className="text-gray-900 text-2xl font-medium mb-4">
                Tournaments
              </h2>
              <p className="leading-relaxed">
                Whether you're a group of friends enjoying a weekend of gaming or a large competitive eSports league, eTournaments is the perfect
                tool to keep track of your tournaments.
              </p>
              <a href="/" className="mt-3 text-blue-500 font-medium">
                Learn more &rarr;{" "}
              </a>
              <div className="flex mt-6 justify-center">
            <div className="w-32 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 text-blue-500">
              <FaUserFriends size={70} />
            </div>
            <div>
              <h2 className="text-gray-900 text-2xl font-medium mb-4">
                Friends
              </h2>
              <p className="leading-relaxed">
                Interact with friends, communicate and enhance your gaming experience.
              </p>
              <a href="/" className="mt-3 text-blue-500 font-medium">
                Learn more &rarr;{" "}
              </a>
              <div className="flex mt-6 justify-center">
            <div className="inline-flex w-32 h-1 rounded-full bg-blue-500"></div>
          </div>
            </div>
          </div>
        </div>
        <Link href="/signup">
          <button className=" bg-blue-600 mt-10 flex mx-auto w-1/4 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700">
            Sign up now
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
