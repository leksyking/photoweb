import React from "react";

function PrevNext() {
  return (
    <div>
      <div className="mt-8 py-4">
        <div className="flex py-2 mt-4">
          <button
            className="bg-gray-200 text-gray-800 active:bg-purple-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            Previous
          </button>
          <div className="flex-auto flex flex-row-reverse">
            <button
              className=" mx-3 bg-blue-500 text-white active:bg-purple-600 font-bold uppercase text-sm px-8 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrevNext;
