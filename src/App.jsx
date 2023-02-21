import React from "react";
import { QueryClient, QueryClientProvider,  } from "react-query";
import { Globalstyle } from "./Globalstyle";
import Router from "./shared/Router";
const quertClient = new QueryClient();
const App = () =>{
  return (
    <QueryClientProvider client={quertClient}>
      <Globalstyle/>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
