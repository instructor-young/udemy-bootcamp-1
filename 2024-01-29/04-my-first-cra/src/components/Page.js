import React, { useState } from "react";

function Page() {
  return <div>Page</div>;
}

const AuthWrappedPage = () => (
  <AuthWrapper>
    <Page />
  </AuthWrapper>
);

export default AuthWrappedPage;

function AuthWrapper() {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);

  return Page;
}
