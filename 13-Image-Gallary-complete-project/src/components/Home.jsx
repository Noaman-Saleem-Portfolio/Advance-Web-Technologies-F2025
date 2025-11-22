import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [picArray, setPicArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isError, setIsError] = useState(false);

  const [page, setPage] = useState(1);

  const getData = async () => {
    try {
      console.log(page);

      let response = await axios.get(
        `https://picsum.photos/v2/list?page=${page}&limit=5`
      );
      console.log(response.data);
      setIsLoading(false);
      setPicArray(response.data);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
      setError(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  if (isLoading) {
    return <h1>Loading ......................</h1>;
  }

  return (
    <>
      <div className="flex flex-wrap justify-center p-5 items-center gap-5 gap-y-10">
        {picArray.map((item, index) => {
          return (
            <div key={index} className="w-[400px]">
              <img width={"300px"} src={item.download_url} alt="" />
              <h4>{item.author}</h4>
            </div>
          );
        })}
      </div>

      {/* Error */}
      <h3 className="text-red-500">{error}</h3>

      {/* pagination */}
      <div className="flex justify-center gap-[100px]">
        <button
          className={`bg-blue-400 py-[10px] px-[15px] rounded-3xl ${
            page == 1 ? "bg-blue-400/25" : ""
          }`}
          onClick={() => setPage(page == 1 ? page : page - 1)}
        >
          Previous
        </button>
        <p>{page}</p>
        <button
          className="bg-blue-400 py-[10px] px-[15px] rounded-3xl"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
