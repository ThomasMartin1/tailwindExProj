import { useRef } from "react";
import { BsPencilSquare } from "react-icons/bs";

function EightPlayerForm(props) {
  const titleInputRef = useRef();
  const creatorInputRef = useRef();
  const gameInputRef = useRef();
  const dateInputRef = useRef();
  const descriptionInputRef = useRef();
  const playerOneInputRef = useRef();
  const playerTwoInputRef = useRef();
  const playerThreeInputRef = useRef();
  const playerFourInputRef = useRef();
  const playerFiveInputRef = useRef();
  const playerSixInputRef = useRef();
  const playerSevenInputRef = useRef();
  const playerEightInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredCreator = creatorInputRef.current.value;
    const enteredGame = gameInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredplayerOne = playerOneInputRef.current.value;
    const enteredplayerTwo = playerTwoInputRef.current.value;
    const enteredplayerThree = playerThreeInputRef.current.value;
    const enteredplayerFour = playerFourInputRef.current.value;
    const enteredplayerFive = playerFiveInputRef.current.value;
    const enteredplayerSix = playerSixInputRef.current.value;
    const enteredplayerSeven = playerSevenInputRef.current.value;
    const enteredplayerEight = playerEightInputRef.current.value;

    const newTournamentData = {
      title: enteredTitle,
      creator: enteredCreator,
      players: 8,
      game: enteredGame,
      date: enteredDate,
      description: enteredDescription,
      details: {
        playerOne: enteredplayerOne,
        playerTwo: enteredplayerTwo,
        playerThree: enteredplayerThree,
        playerFour: enteredplayerFour,
        playerFive: enteredplayerFive,
        playerSix: enteredplayerSix,
        playerSeven: enteredplayerSeven,
        playerEight: enteredplayerEight,
      },
    };

    props.onAddTournament(newTournamentData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="title">Tournament Title</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="title"
            placeholder="Tournament Title"
            ref={titleInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="creator">Creator</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="creator"
            placeholder="Creator"
            ref={creatorInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 1">Player 1</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player1"
            placeholder="Player 1"
            ref={playerOneInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 2">Player 2</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player2"
            placeholder="Player 2"
            ref={playerTwoInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 3">Player 3</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player3"
            placeholder="Player 3"
            ref={playerThreeInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 4">Player 4</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player4"
            placeholder="Player 4"
            ref={playerFourInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 5">Player 5</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player5"
            placeholder="Player 5"
            ref={playerFiveInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 6">Player 6</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player6"
            placeholder="Player 6"
            ref={playerSixInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 7">Player 7</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player7"
            placeholder="Player 7"
            ref={playerSevenInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="Player 8">Player 8</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="player8"
            placeholder="Player 8"
            ref={playerEightInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="game">Game</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="text"
            required
            id="game"
            placeholder="Game"
            ref={gameInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <input
            type="date"
            required
            id="data"
            ref={dateInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></input>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <label class="ml-2 text-sm text-red-600">*</label>
          <textarea
            type="text"
            required
            id="description"
            placeholder="Description"
            ref={descriptionInputRef}
            className="block w-full appearance-none rounded-md mb-2 border border-gray-300 shadow-sm px-3 py-2 text-gray-900 focus:border-blue-500 sm:text-sm"
          ></textarea>
        </div>
        <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <BsPencilSquare className="h-5 w-5 text-blue-500 group-hover:text-white" />
          </span>
          Create Tournament
        </button>
      </form>
    </div>
  );
}

export default EightPlayerForm;
