import "./Delivery.css";

export default function Delivery(props) {
	return (
		<div className="delivery">
			<div className="delivery-header">
				<h1>Delivery</h1>
				{props.cart.length > 0 ? (
					<div className="delivery-cart">
						<h2>Cart</h2>
						<ul>
							{props.cart.map((item) => (
								<li key={item.title}>
									{item.title} - {item.frequency} -{" $"}
									{parseFloat(item.price.slice(1)) *
										item.frequency}
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className="delivery-cart">
						<h2>Cart</h2>
						<p>Your cart is empty.</p>
					</div>
				)}
				<h1>
					Total: $
					{props.cart.reduce(
						(acc, item) =>
							acc +
							parseFloat(item.price.slice(1)) * item.frequency,
						0
					)}
				</h1>
			</div>
		</div>
	);
}

 