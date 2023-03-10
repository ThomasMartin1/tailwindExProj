import ProfileNav from "../../../components/app/profileNav";
import { TbTournament } from "react-icons/tb";



function MakeTournament() {
  return (
    <div>
      <header>
        <ProfileNav />
      </header>

      <section id="about" className="bg-gray-50 text-gray-600 pb-32">
        <div className="container px-5 py-20 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl font-medium text-gray-900 mb-4">
              Choose a Tournament Size
            </h1>
            <p className="leading-relaxed mx-auto lg:w-3/4 xl:w-2/4">
              eTournaments currently supports 4-team, 6-team and 8-team
              brackets. We plan to add different tournament sizes and types in
              the future.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-9/12 h-1 rounded-full bg-blue-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 text-blue-500">
                <TbTournament size={80} className="-rotate-90" />
              </div>
              <div>
                <h2 className="text-gray-900 text-2xl font-medium mb-4">
                  4-Team Bracket
                </h2>
                <p className="leading-relaxed">
                  Create a Single-Elimination 4-Team Tournament bracket.
                </p>
              </div>
              <a
                href="/profile/make-tournament/four-seed"
                className=" bg-blue-600 mt-10 flex mx-auto w-9/12 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700"
              >
                Create Bracket
              </a>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 text-blue-500">
                <TbTournament size={80} className="-rotate-90" />
              </div>
              <div>
                <h2 className="text-gray-900 text-2xl font-medium mb-4">
                  6-Team Bracket
                </h2>
                <p className="leading-relaxed">
                  Create a Single-Elimination 4-Team Tournament bracket.
                </p>
              </div>
              <a
                href="/profile/make-tournament/six-seed"
                className=" bg-blue-600 mt-10 flex mx-auto w-9/12 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700"
              >
                Create Bracket
              </a>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-blue-100 mb-5 flex-shrink-0 text-blue-500">
                <TbTournament size={70} className="-rotate-90" />
              </div>
              <div>
                <h2 className="text-gray-900 text-2xl font-medium mb-4">
                  8-Team Bracket
                </h2>
                <p className="leading-relaxed">
                  Create a Single-Elimination 8-Team Tournament bracket.
                </p>
              </div>
              <a
                href="/profile/make-tournament/eight-seed"
                className=" bg-blue-600 mt-10 flex mx-auto w-9/12 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700"
              >
                Create Bracket
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default MakeTournament;
