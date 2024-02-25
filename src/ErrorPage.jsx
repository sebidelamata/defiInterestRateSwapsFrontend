import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar className="nav-bar"></Navbar>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};

export default ErrorPage;