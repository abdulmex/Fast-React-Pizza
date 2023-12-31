import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizzas = pizzas.length;
  return (
    <main className="container menu">
      <h2>Our menu</h2>

      {numpizzas > 0 ? (
        <>
          <p>
            Authentic Italian Cuisine. 6 creative dishes to choose from. All
            from our stone oven, all delicious.
          </p>
          <ul className="row pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please check back later :) </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(pizzaObj);
  // if (pizzaObj.pizzaObj.soldOut) return null;
  return (
    <li
      className={`col-lg-4 col-md-5 pizza ${
        pizzaObj.soldOut ? "sold-out" : ""
      }`}
    >
      <img src={pizzaObj.photoName} alt={pizzaObj.name} className="img-fluid" />
      <div className="">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closingHour = 10;
  const isOpen = hour >= openHour && hour >= closingHour;
  console.log(isOpen);

  if (!isOpen)
    return (
      <p className="text-center my-4 fs-3">
        We're happy to welcome you between {openHour}:00 and {closingHour}:00.
      </p>
    );
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closingHour={closingHour} openHour={openHour} />
      ) : (
        <p className="text-center my-4 fs-3">
          We're happy to welcome you between {openHour}:00 and {closingHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closingHour, openHour }) {
  return (
    <div className="text-center my-4 fs-3 order">
      <p>
        We're open from {openHour}:00 until {closingHour}:00. Come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
