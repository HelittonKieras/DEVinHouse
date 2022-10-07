import React from "react";
import RoutesApp from "./components/routes/index"
import { AuthProvider } from "./components/contexts/auth";
import GlobalStyle from "./components/styles/global";

const App = () => (
  <AuthProvider>
    <RoutesApp />
    <GlobalStyle />
  </AuthProvider>
);

export default App;