import "./Delivery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Delivery(props) {
	return (
		<>
			<div className="delivery-bg"></div>
			<div className="delivery">
				{props.cart.length > 0 ? (
					<div className="delivery-cart d-flex flex-column align-items-center justify-content-center">
						<h2 className="mt-5 fs-1 text-white">Your orders</h2>
						<table className="table table-dark table-hover table-striped w-50 mt-5 fs-5">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Item</th>
									<th scope="col" className="text-center">
										Price
									</th>
									<th scope="col" className="text-center">
										Total
									</th>
									<th scope="col" className="text-center">
										Remove
									</th>
								</tr>
							</thead>
							<tbody>
								{props.cart.map((item, index) => (
									<tr key={item.title}>
										<td>{index + 1}</td>
										<td>
											{item.title} - {item.frequency}
										</td>
										<td className="text-center">
											{item.price}
										</td>
										<td className="text-center">
											$
											{(
												parseFloat(
													item.price.slice(1)
												) * item.frequency
											).toFixed(2)}
										</td>
										<td className="text-center">
											<button
												type="button"
												className="btn btn-danger"
												onClick={() =>
													props.removeFromCart(item)
												}
											>
												<FontAwesomeIcon
													icon={faTrash}
												/>
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						<div className="d-flex w-50 justify-content-between mx-auto mt-5">
							<button
								type="button"
								className="btn btn-success btn-lg"
							>
								Place order
							</button>
							<h1 className="text-white">
								Total: $
								{props.cart.reduce(
									(acc, item) =>
										(
											parseFloat(acc) +
											parseFloat(item.price.slice(1)) *
												item.frequency
										).toFixed(2),
									0
								)}
							</h1>
						</div>
					</div>
				) : (
					<div className="delivery-cart d-flex flex-column justify-content-center align-items-center">
						<h2 className="fs-1 mt-5 text-white">Your orders</h2>
						<p className="fs-3 mt-5 text-white">
							Your cart is empty
						</p>
					</div>
				)}
			</div>
		</>
	);
}
