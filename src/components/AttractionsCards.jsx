"use client";
import { useEffect, useState } from "react";
import AttractionCard from "./AttractionCard";
import { set } from "mongoose";

const AttractionsCards = () => {
  const [attractions, setAttractions] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState();
  const [loading, setLoading] = useState(false);

  const pageSize = 6;

  const getAttractions = async (page) => {
    try {
      setLoading(true);
      const response = await fetch(
        "/api/attractions" + "?page=" + page + "&pageSize=" + pageSize
      );
      const { attractionsPage, total } = await response.json();

      setLoading(false);

      setTotal(total);
      setAttractions(attractions.concat(attractionsPage));
    } catch (error) {
      setLoading(false);
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
      <div className="grid grid-cols-1 min-[405px]:grid-cols-2 min-[627px]:grid-cols-3 w-fit justify-center items-center mt-4 mb-2 gap-4">
        {attractions.map((attraction) => (
          <AttractionCard key={attraction._id} attraction={attraction} />
        ))}
      </div>
      {loading && <div className="spinner"></div>}
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
