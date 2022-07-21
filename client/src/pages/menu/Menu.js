import MenuItem from "../../components/menu_item/MenuItem";
import "./Menu.css";

export default function Menu(props) {
  return (
    <div className="menu">
      <div className="breakfast d-flex flex-row px-5 justify-content-between align-items-center">
          <MenuItem
            image={require("./assets/iaurt.jpg")}
            title="Breakfast item 1"
            text="ingredients: apa, paie, bataie"
            price="25$"
          />
          <MenuItem
            image={require("./assets/croque.jpg")}
            title="Breakfast item 2"
            text="lorem bagamias gura ta"
            price="44$"
          />
          <MenuItem
            image={require("./assets/pancakes.jpg")}
            title="Breakfast item 3"
            text="lorem bagamias gura mea"
            price="100$"
          />
        </div>
      <div className="pasta d-flex flex-row px-5 justify-content-between align-items-center">
      <MenuItem
            image={require("./assets/iaurt.jpg")}
            title="Breakfast item 1"
            text="ingredients: apa, paie, bataie"
          />
          <MenuItem
            image={require("./assets/croque.jpg")}
            title="Breakfast item 2"
            text="lorem bagamias gura ta"
          />
          <MenuItem
            image={require("./assets/pancakes.jpg")}
            title="Breakfast item 3"
            text="lorem bagamias gura mea"
          />
      </div>
      <div className="drinks d-flex flex-row px-5 justify-content-between align-items-center">
      <MenuItem
            image={require("./assets/iaurt.jpg")}
            title="Breakfast item 1"
            text="ingredients: apa, paie, bataie"
          />
          <MenuItem
            image={require("./assets/croque.jpg")}
            title="Breakfast item 2"
            text="lorem bagamias gura ta"
          />
          <MenuItem
            image={require("./assets/pancakes.jpg")}
            title="Breakfast item 3"
            text="lorem bagamias gura mea"
          />
      </div>
    </div>
  );
}
