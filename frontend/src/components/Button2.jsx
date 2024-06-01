export function Button2({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        type="button"
        className="w-full text-blue-800 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full mt-2 text-md px-10 py-2 me-2 mb-2"
      >
        {label}
      </button>
    );
  }
  