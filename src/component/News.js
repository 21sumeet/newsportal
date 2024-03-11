import React from "react";
import { Suspense, useEffect, useState } from "react";
//import Container from "./Container";
import { TailSpin } from "react-loader-spinner";
const Container = React.lazy(() => import("./Container"));

function News({ darktheme, category }) {
  const [articles, setarticles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const baseURL = `https://gnews.io/api/v4/search?q=${category}&lang=en&country=india&max=20&apikey=5559d60eebb01c3c0a71905a20a19131`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(baseURL);
        const data = await response.json();
        setarticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [baseURL, category]);

  return (
    <div
      className={`px-14 py-8  flex flex-wrap ${
        darktheme ? "bg-slate-700	" : "bg-white"
      }`}
    >
      {isLoading ? (
        <div className="flex justify-center items-center w-screen h-screen">
          <TailSpin />
        </div>
      ) : (
        articles.map((newss, index) => {
          return (
            <Suspense>
              <Container
                darktheme={darktheme}
                key={index}
                title={newss.title}
                description={newss.description}
                src={newss.image}
                Newsurl={newss.url}
              />
            </Suspense>
          );
        })
      )}
    </div>
  );
}

export default News;
