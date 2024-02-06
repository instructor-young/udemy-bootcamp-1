import { AuthProvider } from "@/app/(providers)/_contexts/auth.context";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default ProvidersLayout;
