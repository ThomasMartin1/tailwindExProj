import {FaTrophy} from "react-icons/fa";

function SixBracket(props) {
  return (
    <div>
      <div className="container max-w-3xl mx-auto border-2 border-blue-800 py-2 my-2 rounded-md shadow-md">
        <h1 className="text-center font-semibold text-3xl">{props.title}</h1>
        <p className="text-center font-medium text-gray-800">
          {props.description}
        </p>
        <div className="flex flex-row">
          <ul className="flex flex-col justify-center w-44 list-none p-0">
            <li className="">&nbsp;</li>

            <li className="pl-5 border-b-2 border-blue-800 font-semibold">{props.playerOne}</li>
            <li className="border-r-2 border-blue-800">&nbsp;</li>
            <li className="border-r-2 border-b-2 border-blue-800">&nbsp;</li>
            <li className="pl-5 font-semibold">BYE</li>

            <li className="pl-5 border-b-2 border-blue-800 font-semibold">{props.playerFour}</li>
            <li className="border-r-2 border-blue-800">&nbsp;</li>
            <li className="border-r-2 border-b-2 border-blue-800">&nbsp;</li>
            <li className="pl-5 font-semibold">{props.playerFive}</li>

            <li className="">&nbsp;</li>

            <li className="pl-5 border-b-2 border-blue-800 font-semibold">
              {props.playerThree}
            </li>
            <li className="border-r-2 border-blue-800 font-semibold">&nbsp;</li>
            <li className="border-r-2 border-blue-800 font-semibold">&nbsp;</li>

            <li className="pl-5 border-t-2 border-blue-800 font-semibold">{props.playerSix}</li>

            <li className="pl-5 border-b-2 border-blue-800 font-semibold">
              BYE
            </li>
            <li className="border-r-2 border-blue-800">&nbsp;</li>
            <li className="border-r-2 border-blue-800">&nbsp;</li>

            <li className="pl-5 border-t-2 border-blue-800 font-semibold">{props.playerTwo}</li>

            <li>&nbsp;</li>
          </ul>
          <ul className="flex flex-col justify-center w-44 list-none p-0">
            <li>&nbsp;</li>
            <li className="pl-5 border-b-2 border-blue-800 font-semibold">{props.playerOne}</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className="pl-5 border-b-2 border-blue-800 font-semibold">Winner</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className="pl-5 font-semibold">Winner</li>
            <li className="border-t-2 border-blue-800">&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className="pl-5 border-b-2 border-blue-800 font-semibold">{props.playerTwo}</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <ul className="flex flex-col justify-center w-44 p-0 list-none">
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2  border-blue-800 pl-5 font-semibold">Semi-Finalist</li>
            <li className="border-l-2 border-t-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800 pl-5 font-semibold">Semi-Finalist</li>
            <li className="border-l-2 border-t-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
          <ul className="flex flex-col justify-center w-44 p-0 list-none">
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li>&nbsp;</li>
          <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800 flex pl-5 font-bold">Champion <FaTrophy className="text-yellow-500 my-auto" />
            </li>
            <li className="border-l-2 border-t-2 border-blue-800">&nbsp;
            </li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li className="border-l-2 border-blue-800">&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SixBracket;
