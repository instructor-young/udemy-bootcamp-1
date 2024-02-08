import React from "react";

function Page({ children }: { children: React.ReactNode }) {
  return <main className="px-5 py-8">{children}</main>;
}

export default Page;
