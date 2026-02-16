// "use client";

// import { Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// import {
//   sortByPrice,
//   sortByName,
//   filterByPrice,
//   filterByRating,
//   resetFilters,
// } from "@/redux/productSlice";

// export default function Filters() {
//   const dispatch = useDispatch();

//   return (
//     <div style={{ marginBottom: 20 }}>
//       <Button onClick={() => dispatch(sortByPrice())}>Sort Price</Button>
//       <Button onClick={() => dispatch(sortByName())}>Sort Name</Button>
//       <Button onClick={() => dispatch(filterByPrice(100))}>
//         Price ≤ 100
//       </Button>
//       <Button onClick={() => dispatch(filterByRating(4))}>
//         Rating ≥ 4
//       </Button>
//       <Button onClick={() => dispatch(resetFilters())}>Reset</Button>
//     </div>
//   );
// }

"use client";

import { useDispatch } from "react-redux";
import {
  sortByPrice,
  sortByName,
  filterByPrice,
  filterByRating,
  resetFilters,
} from "@/redux/productSlice";

import styles from "@/styles/filter.module.css";
import { useState } from "react";

export default function Filters() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("");

  const handleClick = (type: string, action: any) => {
    setActive(type);
    dispatch(action);
  };

  return (
    <div className={styles.filterContainer}>
      <div
        className={`${styles.filterButton} ${
          active === "price" ? styles.active : ""
        }`}
        onClick={() => handleClick("price", sortByPrice())}
      >
        Sort by Price
      </div>

      <div
        className={`${styles.filterButton} ${
          active === "name" ? styles.active : ""
        }`}
        onClick={() => handleClick("name", sortByName())}
      >
        Sort by Name
      </div>

      <div
        className={`${styles.filterButton} ${
          active === "rating" ? styles.active : ""
        }`}
        onClick={() => handleClick("rating", filterByRating(4))}
      >
        Rating ≥ 4
      </div>

      <div
        className={`${styles.filterButton} ${
          active === "reset" ? styles.active : ""
        }`}
        onClick={() => handleClick("reset", resetFilters())}
      >
        Reset
      </div>
    </div>
  );
}