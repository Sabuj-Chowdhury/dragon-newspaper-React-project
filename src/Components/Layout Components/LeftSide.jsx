import { useEffect, useState } from "react";

const LeftSide = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("../categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold">
        All Category: ({category.length})
      </h2>
      <div className="flex flex-col gap-2 mt-5">
        {category.map((item, idx) => (
          <button key={idx} className="btn">
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSide;
