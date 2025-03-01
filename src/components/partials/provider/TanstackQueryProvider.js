"use client";

//tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

//core
import defaultOptions from "@/config/reactQuery";

function TanstackQueryProvider({ children }) {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default TanstackQueryProvider;
