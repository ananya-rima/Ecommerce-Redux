
"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, updateQuantity, clearCart } from "@/redux/cartSlice";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
  TextField,
  Typography,
  Button,
  Box,
  Paper,
} from "@mui/material";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    alert("Order Placed Successfully 🎉");
    dispatch(clearCart());
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>

      {/* {items.length === 0 ? (
        <Typography variant="h6">
          Your cart is empty 🛒
        </Typography>
      ) : ( */}
      {items.length === 0 ? (
        <Box
          sx={{
            mt: 6,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Paper
            elevation={4}
            sx={{
              p: 5,
              textAlign: "center",
              maxWidth: 400,
              width: "100%",
              borderRadius: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 2,
              }}
            >
              🛒 Your Cart is Empty
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
              }}
            >
              Looks like you haven’t added anything yet.
            </Typography>
          </Paper>
        </Box>
      ) : (
        <>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Qty</TableCell>
                  <TableCell>Total</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.title}</TableCell>
                    <TableCell>${item.price}</TableCell>
                    <TableCell>
                      {/* <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: Number(e.target.value),
                            }),
                          )
                        }
                        size="small"
                        sx={{ width: 70 }}
                      /> */}
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() =>
                            item.quantity > 1 &&
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              }),
                            )
                          }
                        >
                          -
                        </Button>

                        <Typography sx={{ minWidth: 25, textAlign: "center" }}>
                          {item.quantity}
                        </Typography>

                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              }),
                            )
                          }
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      ${(item.price * item.quantity).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Button
                        color="error"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>

          {/* TOTAL + BUTTONS */}
          <Box
            sx={{
              mt: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography variant="h5">Total: ${total.toFixed(2)}</Typography>

            <Box>
              <Button
                variant="outlined"
                color="error"
                sx={{ mr: 2 }}
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </Button>

              <Button
                variant="contained"
                color="primary"
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Box>
          </Box>
        </>
      )}
    </Container>
  );
}
