import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileNav from "../../../components/app/profileNav";
import {
  BsFillPersonPlusFill,
  BsThreeDots,
  BsPencilSquare,
} from "react-icons/bs";
import EditTournamentForm from "../../../components/app/EditTournamentForm";
import { GoTrashcan } from "react-icons/go";

function EditTournamentPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTournament, setLoadedTournament] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://etournaments-8636c-default-rtdb.firebaseio.com/tournaments/${router.query.tournamentid}.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedTournament(data);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  function addTournamentHandler(newTitle) {
    fetch(
      `https://etournaments-8636c-default-rtdb.firebaseio.com/tournaments/${router.query.tournamentid}/title.json`,
      {
        method: "PUT",
        body: JSON.stringify(newTitle),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      document.location.href = "/profile";
    });
  }

  function deleteTournament() {
    fetch(
      `https://etournaments-8636c-default-rtdb.firebaseio.com/tournaments/${router.query.tournamentid}.json`,
      {
        method: "DELETE",
      }
    ).then(() => {
      document.location.href = "/profile";
    });
  }

  return (
    <div>
      <header>
        <ProfileNav />
      </header>
      <main>
        <div className="overflow-hidden bg-white border-[1px] border-black shadow sm:rounded-lg max-w-3xl mx-auto my-20">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {loadedTournament.title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500 w-">
              Tournament and Player information.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tournament Creator
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {loadedTournament.creator}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Game</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {loadedTournament.game}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Date</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {loadedTournament.date}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Max Players
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {loadedTournament.players}
                </dd>
              </div>
              <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Tournament Description
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  {loadedTournament.description}
                </dd>
              </div>
              <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Players</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                  <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm hover:bg-blue-100 hover:cursor-pointer">
                      {loadedTournament.details.playerOne}{" "}
                      <span>
                        <BsFillPersonPlusFill className="text-blue-800" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm hover:bg-blue-100 hover:cursor-pointer">
                      {loadedTournament.details.playerTwo}{" "}
                      <span>
                        <BsFillPersonPlusFill className="text-blue-800" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm hover:bg-blue-100 hover:cursor-pointer">
                      {loadedTournament.details.playerThree}{" "}
                      <BsFillPersonPlusFill className="text-blue-800" />
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm hover:bg-blue-100 hover:cursor-pointer">
                      {loadedTournament.details.playerFour}{" "}
                      <span>
                        <BsFillPersonPlusFill className="text-blue-800" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm hover:bg-blue-100 hover:cursor-pointer">
                      Show More Players
                      <span>
                        <BsThreeDots className="text-blue-800" />
                      </span>
                    </li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <EditTournamentForm onAddTournament={addTournamentHandler} />
          <button onClick={deleteTournament} className="relative group bg-red-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-red-700 mt-4 mb-20">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <GoTrashcan className="h-5 w-5 text-red-500 group-hover:text-white" />
            </span>
            DELETE TOURNAMENT
          </button>
        </div>
      </main>
    </div>
  );
}

export default EditTournamentPage;
