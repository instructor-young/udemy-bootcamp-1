import { AuthProvider } from "@/contexts/auth.context";

function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Providers;
