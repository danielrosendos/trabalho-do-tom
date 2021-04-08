import { Router } from "react-router-dom";
import Routes from "./routes";
import history from "./service/history";
import { GlobalStyle } from "./styles/global";
import NavBar from "~/components/NavBar";
function App() {
  return (
    <>
      <Router history={history}>
        <NavBar />
        <Routes />
        <GlobalStyle />
      </Router>
    </>
  );
}

export default App;
