import "./MenuItem.css";

function MenuItem(props) {
    return (
        <div className="card p-0 mx-5 text-white bg-dark" style={{ width: "30rem" }}>
            <img
              src={props.image}
              className="card-img-top p"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">{props.title}</h3>
              <p className="card-text">
                {props.text}
              </p>
              <h3 className="text-end mb-0 fst-italic">{props.price}</h3>
              <button type="button" className="btn btn-secondary w-100" data-bs-toggle="modal" data-bs-target="">Add to Order</button>
            </div>
          </div>
    );
}

export default MenuItem;