import Head from "next/head";
import ProfileNav from "../../components/app/profileNav";
import lolpic from "../../public/lolpic.png";
import Image from "next/image";
import { FaGamepad, FaRegCalendarAlt } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProfilePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTournaments, setLoadedTournaments] = useState([]);

  function loadTournamentHandler() {
    router.push({
      pathname: "/profile/view-tournaments/[tournamentid]",
    });
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://etournaments-8636c-default-rtdb.firebaseio.com/tournaments.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const tournaments = [];

        for (const key in data) {
          const tournament = {
            id: key,
            viewhref: `/profile/view-tournaments/${key}`,
            edithref: `/profile/edit-tournament/${key}`,
            ...data[key],
          };
          tournaments.push(tournament);
        }
        setIsLoading(false);
        setLoadedTournaments(tournaments);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="user profile page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <ProfileNav />
      </header>

      <main className="bg-gray-50">
        <div className="max-w-6xl mx-auto py-16 px-4">
          <h2 className="text-2xl font-bold text-blue-700 tracking-tight mb-4 text-center">
            My Tournaments
          </h2>
          <div className="flex mt-6 justify-center">
            <div className="w-9/12 h-1 rounded-full bg-blue-700 inline-flex mb-4"></div>
          </div>
          <div className="mt-6 grid grid-flow-row gap-y-10 place-items-center">
            {loadedTournaments.map((tournament) => (
              <div
                key={tournament.id}
                className="max-w-xs border-2 border-blue-800 shadow-lg rounded-md p-4 hover:border-blue-800 hover:-translate-y-1 ease-in-out duration-300"
              >
                <h3 className="text-center pb-2 text-2xl font-bold text-blue-800 tracking-tight">
                  {tournament.title}
                </h3>
                <div className="">
                  <Image
                    src={lolpic}
                    width={800}
                    height={300}
                    className="h-1/2 w-1/2 object-cover object-center"
                  ></Image>
                </div>
                <div className="">
                  <h4 className="text-center font-semibold">
                    {tournament.description}
                  </h4>
                  <div className="flex mt-6 justify-center">
                    <div className="w-full h-[.5px] rounded-full bg-blue-700 inline-flex"></div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="">
                      <span className="flex">
                        <HiUserGroup
                          size={20}
                          className="text-blue-800 my-auto"
                        />{" "}
                        <p className="pl-2">
                          {tournament.players} participants
                        </p>
                      </span>
                    </div>
                    <div className="">
                      <span className="flex">
                        <FaGamepad
                          size={20}
                          className="text-blue-800 my-auto"
                        />
                        <p className="pl-2">{tournament.game}</p>
                      </span>
                    </div>
                    <div className="">
                      <span className="flex">
                        <FaRegCalendarAlt
                          size={20}
                          className="text-blue-800 my-auto"
                        />
                        <p className="pl-2">{tournament.date}</p>
                      </span>
                    </div>
                    <div className="text-center bg-blue-800 text-white text-semibold rounded-lg py-2 hover:bg-blue-600">
                      <Link href={tournament.viewhref}>
                        <button>View Tournament</button>
                      </Link>
                    </div>
                    <div className="text-center bg-blue-800 text-white text-semibold rounded-lg py-2 hover:bg-blue-600">
                      <Link href={tournament.edithref}>
                        <button>Edit</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
