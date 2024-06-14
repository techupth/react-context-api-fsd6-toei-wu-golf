import { useNavigate } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import products from "../data/products.js";
import { useContext } from "react";
import { UserDataContext } from "../App.jsx";

function HomePage() {
  const context = useContext(UserDataContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="app-wrapper">
        <AppHeader userName={context.user.username} />
      </div>
      <div className="product-list">
        {products.map((product) => {
          return (
            <div className="product">
              <div className="product-preview">
                <img
                  src="https://via.placeholder.com/250/250"
                  alt="some product"
                  width="250"
                  height="250"
                />
              </div>
              <div className="product-detail">
                <h1>Product name: {product.name} </h1>
                <h2>Product price: {product.price}</h2>
                <p>Product description: {product.description} </p>
                <div className="product-actions">
                  <button
                    className="view-button"
                    onClick={() => navigate(`/product/view/${product.id}`)}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
