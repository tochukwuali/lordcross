import "./App.css";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import Study from "./pages/Study";
import Scholarship from "./pages/Scholarship";
import Relocation from "./pages/Relocation";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Nav />
      <Route path="/register" component={Register} exact />
      <Route path="/study" component={Study} exact />
      <Route path="/scholarship" component={Scholarship} exact />
      <Route path="/relocation" component={Relocation} exact />
      <Route path="/" component={Home} exact />
      <Footer />
    </div>
  );
}

export default App;
