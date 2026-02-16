

"use client";

import Providers from "@/redux/provider";
// import { store } from "@/redux/store";
import Navbar from "@/component/Navbar";
import { CssBaseline } from "@mui/material";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <CssBaseline />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}