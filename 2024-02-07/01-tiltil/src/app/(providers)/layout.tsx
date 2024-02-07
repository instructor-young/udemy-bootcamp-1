import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";
import { ReactQueryProvider } from "./_contexts/react-query.context";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </ReactQueryProvider>
  );
}

export default ProvidersLayout;
