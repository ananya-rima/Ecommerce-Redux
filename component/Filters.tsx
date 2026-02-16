
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