import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProfileNav from "../../../components/app/profileNav";
import { BsFillPersonPlusFill, BsThreeDots } from "react-icons/bs";
import EightBracket from "../../../components/app/EightBracket";
import SixBracket from "../../../components/app/SixBracket";
import FourBracket from "../../../components/app/FourBracket";

function TournamentPage() {
  const router = useRouter();
  // console.log(router.query.tournamentid);

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

  function DisplayBracket() {
    const numberOfPlayers = loadedTournament.players;
    if (numberOfPlayers == 4) {
      return (
        <FourBracket
          playerOne={loadedTournament.details.playerOne}
          playerTwo={loadedTournament.details.playerTwo}
          playerThree={loadedTournament.details.playerThree}
          playerFour={loadedTournament.details.playerFour}
          title={loadedTournament.title}
          description={loadedTournament.description}
        />
      );
    } else if (numberOfPlayers == 6) {
      return (
        <SixBracket
          playerOne={loadedTournament.details.playerOne}
          playerTwo={loadedTournament.details.playerTwo}
          playerThree={loadedTournament.details.playerThree}
          playerFour={loadedTournament.details.playerFour}
          playerFive={loadedTournament.details.playerFive}
          playerSix={loadedTournament.details.playerSix}
          title={loadedTournament.title}
          description={loadedTournament.description}
        />
      );
    } else {
      return (
        <EightBracket
          playerOne={loadedTournament.details.playerOne}
          playerTwo={loadedTournament.details.playerTwo}
          playerThree={loadedTournament.details.playerThree}
          playerFour={loadedTournament.details.playerFour}
          playerFive={loadedTournament.details.playerFive}
          playerSix={loadedTournament.details.playerSix}
          playerSeven={loadedTournament.details.playerSeven}
          playerEight={loadedTournament.details.playerEight}
          title={loadedTournament.title}
          description={loadedTournament.description}
        />
      );
    }
  }

  return (
    <div>
      <header>
        <ProfileNav />
      </header>
      <div>{DisplayBracket(loadedTournament)}</div>
      <div className="overflow-hidden bg-white border-[1px] border-black shadow sm:rounded-lg max-w-3xl mx-auto my-20">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {loadedTournament.title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
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
              <dt className="text-sm font-medium text-gray-500">Max Players</dt>
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
    </div>
  );
}

export default TournamentPage;
