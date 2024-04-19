import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
	const navigate = useNavigate()

	const token = sessionStorage.getItem('token');

	const handlerLogout = async () => {
		sessionStorage.removeItem('token')
		navigate('/')
	}

	return (
		<nav className="navbar navbar-light ">

			<div className="container">
				{token ? '' : <Link to="/">
					<span className="navbar link-light mb-0 h3">Back to home</span>
				</Link>
				}
				<div className="navContainer">
					{token ?
						<div className="logOutButton">

							<button onClick={handlerLogout} className="btn btn-danger">Log out</button>

						</div>



						: <div className="ml-auto">
							<Link to="/login">
								<button className="btn btn-outline-light me-2">Log In</button>
							</Link>
							<Link to="/signup">
								<button className="btn btn-light">Sign up</button>
							</Link>
						</div>
					}
				</div>





			</div>
		</nav>
	);
};
