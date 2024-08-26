// MyComponent.tsx
import React, { useEffect, useState } from "react";

const MyComponent: React.FC = () => {
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate network delay and possible failure
        await new Promise((resolve) =>
          setTimeout(resolve, Math.random() * 2000)
        );
        const response = await fetch("https://api.example.com/data");
        if (!response.ok) throw new Error("Network response was not ok");
        const result = await response.json();
        setData(result.message);
      } catch (error) {
        setError("Failed to fetch data in My Component");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {data && <div>{data}</div>}
    </div>
  );
};

export default MyComponent;
