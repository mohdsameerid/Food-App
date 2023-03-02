import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import Title from "../assets/Logo";
import UserContext from "../context/UserContext";
import { useSelector } from "react-redux"; // bridge between react & redux.

const Header = () => {
  const [login, setLogin] = useState(false);
  const isOnlineTick = useOnline(); // custom hook
  const { user } = useContext(UserContext);
  const cardItems = useSelector((store) => store.card.items); //
  console.log(cardItems);

  const background_IMg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMidJ2qUzHxdG5MZS80KckG2KrXTBNXlnE8g&usqp=CAU";

  return (
    <div className="flex justify-between bg-pink-100 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMidJ2qUzHxdG5MZS80KckG2KrXTBNXlnE8g&usqp=CAU')]">
      <Title />
      <div className="">
        <ul className="flex py-8">
          <li className="">
            {" "}
            <Link to="/" className="hover:bg-pink-400 rounded-lg p-2">
              {" "}
              Home{" "}
            </Link>
          </li>
          <li className="">
            {" "}
            <Link to="/about" className="hover:bg-pink-400 rounded-lg p-2 ">
              {" "}
              About{" "}
            </Link>
          </li>
          <li className="">
            {" "}
            <Link to="/contact" className="hover:bg-pink-400 rounded-lg p-2 ">
              {" "}
              Contact{" "}
            </Link>
          </li>

          <li className="">
            {" "}
            <Link to="/instamart" className="hover:bg-pink-400 rounded-lg p-2 ">
              {" "}
              Instamart{" "}
            </Link>
          </li>
          <li className="">
            <Link to="/cart" className="hover:bg-pink-400 rounded-lg  p-2">
              Cart- {cardItems.length ? cardItems.length : ""} items
            </Link>
          </li>
        </ul>
      </div>
      <div className="">
        <h3 className="m-4 p-4">{isOnlineTick ? "✅" : "⛔"}</h3>
      </div>
      {/* // using context central data in Functional Component */}
      <div className="p-6 ">
        <span className="">{user.name}</span>
        <h1 className="">{user.email}</h1>
      </div>
      <div className="m-1 p-5">
        {login ? (
          <button
            className="p-2 bg-green-600 rounded-lg"
            onClick={() => setLogin(false)}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-2 bg-green-400 rounded-lg"
            onClick={() => setLogin(true)}
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
