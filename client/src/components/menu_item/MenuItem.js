import "./MenuItem.css";

function MenuItem(props) {
	const addToCart = () => {
		props.addToCart({
			title: props.item.title,
			price: props.item.price,
		});
	};

	return (
		<div
			className="card p-0 mx-5 text-white bg-dark"
			style={{ width: "30rem" }}
		>
			<img src={props.item.image} className="card-img-top p" alt="..." />
			<div className="card-body">
				<h3 className="card-title">{props.item.title}</h3>
				<p className="card-text">{props.item.text}</p>
				<h3 className="text-end mb-0 fst-italic">{props.item.price}</h3>
				<button
					type="button"
					className="btn btn-secondary w-100"
					onClick={addToCart}
				>
					Add to Order
				</button>
			</div>
		</div>
	);
}

export default MenuItem;
