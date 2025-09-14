import { useContext } from "react";
import { ProductPage } from "../../context/ProductContext";

const Pagination = () => {
  const { page, setPage } = useContext(ProductPage);
  const totalPages = 8; // 40 oyun ÷ 5 = 8 sayfa

  // Sayfa numaralarını hesapla
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5; // Maksimum görünen sayfa sayısı

    if (totalPages <= maxVisible) {
      // Tüm sayfaları göster
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Akıllı sayfa numarası gösterimi
      if (page <= 3) {
        // İlk sayfalar
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      } else if (page >= totalPages - 2) {
        // Son sayfalar
        pages.push(1);
        pages.push("...");
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Orta sayfalar
        pages.push(1);
        pages.push("...");
        for (let i = page - 1; i <= page + 1; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-8 px-4">
      {/* Sayfa bilgisi */}
      <div className="text-sm text-gray-600 dark:text-gray-400 order-2 sm:order-1">
        Sayfa{" "}
        <span className="font-semibold text-gray-800 dark:text-white">
          {page}
        </span>{" "}
        /{" "}
        <span className="font-semibold text-gray-800 dark:text-white">
          {totalPages}
        </span>
      </div>

      {/* Pagination butonları */}
      <div className="flex items-center gap-1 order-1 sm:order-2">
        {/* Önceki sayfa */}
        <button
          onClick={() => setPage(Math.max(1, page - 1))}
          disabled={page === 1}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          type="button"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Sayfa numaraları */}
        <div className="flex items-center gap-1 mx-2">
          {pageNumbers.map((pageNum, index) => (
            <button
              key={index}
              onClick={() => typeof pageNum === "number" && setPage(pageNum)}
              disabled={pageNum === "..."}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 disabled:hover:scale-100 ${
                pageNum === page
                  ? "bg-blue-600 text-white shadow-lg"
                  : pageNum === "..."
                  ? "text-gray-400 cursor-default"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
              type="button"
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Sonraki sayfa */}
        <button
          onClick={() => setPage(Math.min(totalPages, page + 1))}
          disabled={page === totalPages}
          className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
          type="button"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
