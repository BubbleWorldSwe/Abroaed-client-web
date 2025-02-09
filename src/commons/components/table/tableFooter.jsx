import { ChevronLeft, ChevronRight } from "lucide-react";

export function TableFooter({
  totalPages,
  currentPage,
  handlePrevPage,
  handleNextPage,
  tableData,
}) {
  const getDataLength = () => {
    const pageData = tableData?.find((item) => item.index === currentPage);
    return pageData?.data?.length || 0;
  };

  return (
    <tfoot>
      <tr className="bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
        <td className="px-4 py-3" colSpan="7">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 dark:text-gray-300">
              Showing {getDataLength()} results
            </span>
            <div className="flex items-center justify-center gap-4 mt-4">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`p-2 rounded-full ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>

              <span className="text-gray-600 dark:text-gray-300">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </td>
      </tr>
    </tfoot>
  );
}
