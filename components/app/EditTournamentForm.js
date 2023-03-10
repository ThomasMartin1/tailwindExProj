import { useRef } from "react";
import { BsPencilSquare } from "react-icons/bs";

function EditTournamentForm(props) {
  const titleInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;

    const newTitle = enteredTitle;

    props.onAddTournament(newTitle);
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
        <button className="relative group bg-blue-600 flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <BsPencilSquare className="h-5 w-5 text-blue-500 group-hover:text-white" />
          </span>
          Edit Tournament Title
        </button>
      </form>
    </div>
  );
}

export default EditTournamentForm;
