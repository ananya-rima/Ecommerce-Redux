import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  title: string;
  price: number;
  rating: {
    rate: number;
  };
  image: string;
}

interface ProductState {
  items: Product[];
  filtered: Product[];
  status: string;
}

const initialState: ProductState = {
  items: [],
  filtered: [],
  status: "idle",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );
    return res.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortByPrice: (state) => {
      state.filtered.sort((a, b) => a.price - b.price);
    },
    sortByName: (state) => {
      state.filtered.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },
    filterByPrice: (state, action) => {
      state.filtered = state.items.filter(
        p => p.price <= action.payload
      );
    },
    filterByRating: (state, action) => {
      state.filtered = state.items.filter(
        p => p.rating.rate >= action.payload
      );
    },
    resetFilters: (state) => {
      state.filtered = state.items;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.filtered = action.payload;
      state.status = "success";
    });
  },
});

export const {
  sortByPrice,
  sortByName,
  filterByPrice,
  filterByRating,
  resetFilters,
} = productSlice.actions;

export default productSlice.reducer;