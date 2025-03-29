import { useContext } from "react";
import { ProductPage } from "../../context/ProductContext";

const Pagination = () => {
  const { page, setPage } = useContext(ProductPage);

  return (
    <div className="flex justify-center items-center gap-3 my-4 ">
      <button
        onClick={() => setPage(page - 1 > 0 ? page - 1 : 1)}
        disabled={page === 1}
        className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-color-dark hover:text-color-darkred2 bg-color-cream hover:bg-color-lightgrey dark:bg-color-darkred2 hover:border-slate-800 active:text-white active:bg-slate-800 active:border-slate-800 disabled:pointer-events-none disabled:opacity-70 disabled:shadow-none dark:hover:bg-color-lightgrey"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <p className="text-slate-600">
        Page <strong className="text-slate-800">{page}</strong> of&nbsp;
        <strong className="text-slate-800">14</strong>
      </p>

      <button
        onClick={() => setPage(page + 1)}
        disabled={page === 14}
        className="rounded-md border border-slate-300 p-2.5 text-center text-sm transition-all shadow-sm hover:shadow-lg text-color-dark hover:text-color-darkred2 bg-color-cream hover:bg-color-lightgrey dark:bg-color-darkred2 hover:border-slate-800 active:text-white active:bg-color-yellow active:border-color-yellow disabled:pointer-events-none disabled:opacity-70 disabled:shadow-none dark:hover:bg-color-lightgrey"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
