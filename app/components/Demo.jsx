"use client";

import { useEffect, useState } from "react";
import { linkIcon, tick, copy, loader } from "../assets";
import Image from "next/image";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  // function with which API requests will be made
  const handleSubmit = async (e) => {
    alert("submitted");
    e.preventDefault();
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}

      <div className="flex flex-col w-full gap-2">
        <form
          action="submit"
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <Image
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 w-5 ml-3 "
          />

          <input
            type="url"
            placeholder="Enter URL"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />

          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↲
          </button>
        </form>

        {/* URL history */}

        {/* Results */}
      </div>
    </section>
  );
};

export default Demo;
