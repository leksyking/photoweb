import React from "react";
import { Link } from "react-router-dom";

function ProgressLevel() {
  // const [loading, setLoading] = useState(false);

  return (
    <div>
      <div className="py-5">
        <div className="mx-4 p-4">
          <div className="flex items-center">
            {/* PRERSONAL */}
            <Link to="/progress">
              <div className="flex items-center text-white relative">
                {/* icon */}
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-blue-500 border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLlinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark stroke-white "
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                {/* text */}
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-500">
                  Personal
                </div>
              </div>
            </Link>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-500"></div>

            {/* des */}
            <Link to="/desc">
              <div className="flex items-center text-white relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-blue-500  border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLlinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-user-plus"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="8.5" cy="7" r="4"></circle>
                    <line x1="20" y1="8" x2="20" y2="14"></line>
                    <line x1="23" y1="11" x2="17" y2="11"></line>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-blue-500">
                  SHOT DETAILS
                </div>
              </div>
            </Link>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

            {/* socials */}
            <Link to="socials">
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLlinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  SOCIALS
                </div>
              </div>
            </Link>

            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
            {/* cCONFIRM */}
            <Link to="/confirm">
              <div className="flex items-center text-gray-500 relative">
                <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLlinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-database"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">
                  Confirm
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* LOADER */}
      {/* <div className="w-60 h-24 border-2 rounded-md mx-auto mt-20">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="w-12 bg-gray-300 h-12 rounded-full ">
          </div>
              <div className="flex flex-col space-y-3">
              <div className="w-36 bg-gray-300 h-6 rounded-md ">
              </div>
              <div className="w-24 bg-gray-300 h-6 rounded-md ">
              </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default ProgressLevel;
