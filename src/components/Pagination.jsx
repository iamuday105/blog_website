import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);
  const { theme } = useTheme();
 
  return (
      <div className={`w-full shadow-r-[3px] flex justify-center items-center inset-shadow-2xs fixed bottom-0 
      ${theme == "dark" ? "bg-[#121212]" : "bg-white"}`}>
        <div className="flex justify-between w-11/12 max-w-[670px] py-2">
          <div
            className="gap-9 flex
      "
          >
            {page > 1 && (
              <button
                className="rounded-md px-4 border-2 py-1"
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                className="rounded-md px-4 border-2 py-1"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            )}
          </div>

          <p className="font-bold text-sm ">
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
  );
}

export default Pagination;
