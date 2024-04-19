import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Welcome</h1>
			
			<div className="mainContent d-flex">

			<div className="leftSide">

				<div className="leftCard card">
					<img src="https://images.pexels.com/photos/3585095/pexels-photo-3585095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="Picture header"/>
					<div className="card-body">
						<h5 className="card-title text-white">Log In</h5>
						<p className="card-text text-white">If you have an account please press the button to log in</p>
						<Link to="/login">
						<button className="btn btn-light">Log in with your account</button>
					</Link>
					</div>
					</div>
			
			</div>

			<div className="rightSide">
			<div className="rightCard card">
					<img src="https://images.pexels.com/photos/1181499/pexels-photo-1181499.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" className="card-img-top" alt="Picture header"/>
					<div className="card-body">
						<h5 className="card-title">Hello friend!</h5>
						<p className="card-text">If you want to be part of this community please press the button to signup</p>
						<Link to="/signup">
						<button className="btn btn-light">Create a new user</button>
					</Link>
					</div>
					</div>
			</div>
			</div>
			<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
