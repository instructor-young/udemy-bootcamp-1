import React from "react";
import Header from "./_components/Header";
import Providers from "./_providers";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <Header />
      {children}
    </Providers>
  );
}

export default RootLayout;
