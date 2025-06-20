import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import ErrorBoundary from "./ErrorBoundary"; // import the boundary

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos?_limit=6"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold my-4">Photo Gallery</h1>

      <ErrorBoundary>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 p-4">
            {data.map((item) => (
              <Card
                key={item.id}
                image={item.thumbnailUrl}
                title={item.title}
              />
            ))}
          </div>
        )}
      </ErrorBoundary>
    </div>
  );
};

export default App;
