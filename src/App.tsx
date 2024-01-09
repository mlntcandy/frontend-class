import { NavBar } from "./components/NavBar";
import { AuthProvider } from "./lib/auth/context";
import { MainRouter } from "./lib/router";

function App() {
  return (
    <>
      <AuthProvider>
        <NavBar />
        <MainRouter />
      </AuthProvider>
    </>
  );
}

export default App;
