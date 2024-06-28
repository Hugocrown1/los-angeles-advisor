"use client";
import { useEffect, useState } from "react";
import AttractionCard from "./AttractionCard";

const AttractionsCards = () => {
  const [attractions, setAttractions] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();

  const pageSize = 6;

  const getAttractions = async (page) => {
    try {
      const response = await fetch(
        "/api/attractions" + "?page=" + page + "&pageSize=" + pageSize
      );
      const { attractionsPage, total } = await response.json();

      setTotal(total);
      setAttractions(attractions.concat(attractionsPage));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAttractions(page);
  }, [page]);

  const setNewPage = () => {
    setPage(page + 1);
  };

  const hasMore = attractions.length < total;

  return (
    <>
      <div className="grid grid-cols-3 w-fit justify-center items-center mt-4 gap-4">
        {attractions.map((attraction) => (
          <AttractionCard key={attraction._id} attraction={attraction} />
        ))}
      </div>
      {hasMore && (
        <button
          className="primary-button-xl bg-[#EB9D34] text-white min-w-[250px] mt-4"
          onClick={setNewPage}
        >
          Ver más
        </button>
      )}
    </>
  );
};

export default AttractionsCards;
