import ReactDOM from "react-dom";
import Contact from "./Contact";
import "./style.css";

function App() {
  return (
    <div className="contacts">
      <Contact
        img={require("./images/mr-whiskerson.png")}
        name="Mr. Whiskerson"
        email="mr.whiskaz@catnap.meow"
        phone="(212) 555-1234"
      />
      <Contact
        img={require("./images/fluffykins.png")}
        name="Fluffykins"
        email="fluff@me.com"
        phone="(212) 555-2345"
      />
      <Contact
        img={require("./images/felix.png")}
        name="Felix"
        email="thecat@hotmail.com"
        phone="(212) 555-4567"
      />
      <Contact
        img={require("./images/pumpkin.png")}
        name="Pumpkin"
        email="pumpkin@scrimba.com"
        phone="(0800) CAT KING"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
