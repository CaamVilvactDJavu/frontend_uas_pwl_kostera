import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const renderPageNumbers = () => {
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1,
    );

    return pageNumbers.map((number) => (
      <button
        key={number}
        onClick={() => onPageChange(number)}
        className={
          currentPage === number ? "join-item btn bg-black text-white" : ""
        }
      >
        {number}
      </button>
    ));
  };

  return <div className="join grid grid-cols-3">{renderPageNumbers()}</div>;
};

export default Pagination;
