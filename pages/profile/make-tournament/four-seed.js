import FourPlayerForm from "../../../components/app/FourPlayerForm";
import ProfileNav from "../../../components/app/profileNav";
import { BsPencilSquare } from "react-icons/bs";

function FourSeedForm() {
  function addTournamentHandler(newTournamentData) {
    fetch(
      "https://etournaments-8636c-default-rtdb.firebaseio.com/tournaments.json",
      {
        method: "POST",
        body: JSON.stringify(newTournamentData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      document.location.href = "/profile";
    });
  }

  return (
    <div className="bg-gray-50">
      <header>
        <ProfileNav />
      </header>

      <div className="flex bg-gray-50 h-full py-12 px-4 sm:px-6 lg:px-8 items-center justify-center">
        <div class="w-full max-w-lg h-full">
          <BsPencilSquare className="mx-auto h-14 w-auto text-blue-600" />
          <h1 className="text-2xl text-center font-semibold tracking-tight py-4">
            Four Seed Bracket
          </h1>
          <FourPlayerForm onAddTournament={addTournamentHandler} />
        </div>
      </div>
    </div>
  );
}

export default FourSeedForm;
