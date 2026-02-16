"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button, Badge } from "@mui/material";
import ShoppingCartIcon from"@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <AppBar position="sticky" color="primary" elevation={3}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        
        <Typography
          variant="h6"
          component={Link}
          href="/"
          sx={{
            textDecoration: "none",
            color: "white",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          MyShop
        </Typography>

        
        <div>
          <Button
            component={Link}
            href="/" className={styles.navlink}
            sx={{ color: "white", marginRight: 2 }}
          >
            Home
          </Button>

          <Button component={Link} href="/cart" sx={{ color: "white" }}>
            <Badge badgeContent={totalQuantity} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}