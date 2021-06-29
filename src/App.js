import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar/index";
import { Home } from "./components/Home/index";
import { NasaPhoto } from "./components/NasaPhoto/index";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphoto" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
