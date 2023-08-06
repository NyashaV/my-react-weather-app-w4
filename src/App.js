import "./app.css";
import CurrentCity from "./CurrentCity";
import Forecast from "./Forecast";
import Footer from "./Footer";
import FormSearch from "./FormSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassLocation } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <body className="App">
      <div id="pageoutline">
        <FontAwesomeIcon
          className="searchIcon"
          icon={faMagnifyingGlassLocation}
        />{" "}
        <FormSearch />
        <div className="moving">
          <CurrentCity />
        </div>{" "}
        <hr className="pagedivideone" />
        <hr className="pagedividetwo" />
        <Forecast />
        <Footer />
      </div>
    </body>
  );
}
