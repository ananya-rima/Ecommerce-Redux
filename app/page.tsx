"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/redux/productSlice";
import { RootState } from "@/redux/store";
import ProductCard from "@/component/ProductCard";
import Filters from "@/component/Filters";
import { Container, Button, Box } from "@mui/material";
import styles from "@/styles/product.module.css";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.filtered);

  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    dispatch(fetchProducts() as any);
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <Container sx={{ mt: 4 }}>
      <Filters />

      <div className={styles.grid}>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {visibleCount < products.length && (
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            size="large"
            onClick={handleLoadMore}
            sx={{
              borderRadius: "30px",
              padding: "10px 30px",
              textTransform: "none",
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </Container>
  );
}
