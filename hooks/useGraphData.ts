import { useState, useEffect } from "react";

const useGraphData = () => {
  const [graphData, setGraphData] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = [5, 10, 15, 7, 20, 8, 5, 12, 10, 6, 4, 3];
      setGraphData(data);
    };
    fetchData();
  }, []);

  return graphData;
};

export default useGraphData;
