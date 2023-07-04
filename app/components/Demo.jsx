"use client";

import { useEffect, useState } from "react";
import { linkIcon, tick, copy, loader } from "../assets";
import Image from "next/image";
import axios from "axios";

const Demo = () => {
  const [input, setInput] = useState("");
  const [completedSentence, setCompletedSentence] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "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";

  const fetchData = async (input) => {
    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        prompt: `You are a customer support specialist at Stream, getstream.io, help the customer with their query: 
        "${input}"`,
        model: "text-davinci-002",
        max_tokens: 300,
        n: 10,
        stop: ".",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text;
  };

  // function with which API requests will be made
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const completedSentence = await fetchData(input);
      setCompletedSentence(completedSentence);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* search */}

      <div className="flex flex-col w-full gap-2">
        <form
          // action="submit"
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <Image
            src={tick}
            alt="link-icon"
            className="absolute left-0 my-2 w-5 ml-3 "
          />

          <input
            type="text"
            placeholder="Enter your query"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            // required
            className="url_input peer w-4/5"
          />

          <button
            onClick={handleSubmit}
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            ↲
          </button>
        </form>

        {completedSentence && (
          <div className="result-container mt-10 ">
            <h3 className="">Solution:</h3>
            <p>{completedSentence}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demo;
