import React, { useEffect, useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Servises = () => {
  const data = useLoaderData();
  console.log(data);

  const [cardData, setCardData] = useState();
  console.log(cardData);

  const [selectCategory, setSelectCategory] = useState("");
  console.log(selectCategory);

  const handleCategory = (name) => {
    console.log(name);
    setSelectCategory(name);
  };
  const handleAll = () => {
    setCardData(data);
    setSelectCategory('')
  };

  useEffect(() => {
    const findCategory = data?.filter(
      (data) => data?.category === selectCategory
    );
    console.log(findCategory);
    setCardData(findCategory);
  }, [selectCategory, data]);

  return (
    <div>
      <div className="flex justify-center flex-wrap items-center gap-4">
        <button className="hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300 rounded-lg  transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4" onClick={handleAll}> All</button>
        <button className=" hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300 rounded-lg  transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4" onClick={() => handleCategory("Wedding")}> Wedding</button>
        <button className="hover:font-bold active:text-orange-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg  transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4" onClick={() => handleCategory("Engagement")}>
          {" "}
          Engegement
        </button>
        <button className="hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300 rounded-lg  transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4" onClick={() => handleCategory("Anniversary")}>
          {" "}
          Aniversary
        </button>
        <button className="hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300 rounded-lg  transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4" onClick={() => handleCategory("Birthday Party")}>
          {" "}
          Birthday
        </button>
        <button className="hover:font-bold active:text-orange-700 focus:outline-none focus:bg-orange-700 focus:font-bold focus:ring-violet-300 rounded-lg  transform  transition duration-500 hover:scale-125 hover:bg-amber-500 py-2 px-4" onClick={() => handleCategory("Retirement")}> Retiremnt</button>
      </div>

      {selectCategory ? (
        <div>
          <h2 className="text-3xl font-bold text-center my-4">
            Result for &apos;
            <span className=" hover:font-bold text-deep-orange-500">{selectCategory}</span>&apos;
          </h2>
        </div>
      ) : (
        ""
      )}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap">
        {!selectCategory
          ? data.map((data) => (
              <ServiceCard key={data.id} cardData={data}></ServiceCard>
            ))
          : cardData.map((data) => (
              <ServiceCard key={data.id} cardData={data}></ServiceCard>
            ))}
      </div>
    </div>
  );
};

export default Servises;
