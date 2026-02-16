// "use client";

// import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
// import { useDispatch } from "react-redux";
// import { addToCart } from "@/redux/cartSlice";
// import styles from "@/styles/product.module.css";

// export default function ProductCard({ product }: any) {
//   const dispatch = useDispatch();

//   return (
//     <Card className={styles.card}>
//       <CardMedia
//         component="img"
//         height="200"
//         image={product.image}
//         className={styles.image}
//       />
//       <CardContent>
//         <Typography variant="subtitle1">
//           {product.title.slice(0, 40)}
//         </Typography>
//         <Typography variant="h6" color="primary">
//           ${product.price}
//         </Typography>
//         <Button
//           variant="contained"
//           fullWidth
//           onClick={() => dispatch(addToCart(product))}
//         >
//           Add to Cart
//         </Button>
//       </CardContent>
//     </Card>
//   );
// }

"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import styles from "@/styles/product.module.css";

export default function ProductCard({ product }: any) {
  const dispatch = useDispatch();

  return (
    <Card className={styles.card}>
      
      <div className={styles.imageWrapper}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
      </div>

      <CardContent>
        <Typography className={styles.title}>
          {product.title}
        </Typography>

        <Typography className={styles.price}>
          ${product.price}
        </Typography>

        <Button
          variant="contained"
          fullWidth
          className={styles.button}
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
}