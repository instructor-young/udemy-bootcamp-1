import { AuthProvider } from "@/contexts/auth.context";
import { ReduxProvider } from "@/redux/store";
import ReactQueryProvider from "./reactQuery.provider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
