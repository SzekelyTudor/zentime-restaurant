import MenuItem from "../../components/menu_item/MenuItem";
import "./Menu.css";
import { breakfast, pasta, drinks } from "./menuItems";

export default function Menu(props) {
	return (
		<div className="menu">
			<div className="breakfast d-flex flex-row px-5 justify-content-between align-items-center">
				{breakfast.map((item, index) => (
					<MenuItem
						key={index}
						item={item}
						addToCart={props.addToCart}
					/>
				))}
			</div>

			<div className="pasta d-flex flex-row px-5 justify-content-between align-items-center">
				{pasta.map((item, index) => (
					<MenuItem
						key={index + 3}
						item={item}
						addToCart={props.addToCart}
					/>
				))}
			</div>
			<div className="drinks d-flex flex-row px-5 justify-content-between align-items-center">
				{drinks.map((item, index) => (
					<MenuItem
						key={index + 6}
						item={item}
						addToCart={props.addToCart}
					/>
				))}
			</div>
		</div>
	);
}
