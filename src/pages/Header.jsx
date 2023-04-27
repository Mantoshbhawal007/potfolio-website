import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context, server } from '../main';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Header = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      await axios.get(`${server}/logout`, {
        withCredentials: false,
      });
      toast.success('Logged Out Successfully');
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  return (
    <nav className="header fixed top-0 left-0 w-full z-50 bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-between h-20 px-8">
        <Link
          to="/"
          className="flex items-center justify-center text-yellow-500 text-3xl font-bold"
        >
          <h2 className="text-2lg font-bold">OCPL</h2>
        </Link>
        <article className="flex items-center space-x-6">
          <Link
            to="/about"
            className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out text-xl"
          >
            About
          </Link>
          <Link
            to="/work"
            className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out text-xl"
          >
            Work
          </Link>
          <Link
            to="/portfolio"
            className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out text-xl"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out text-xl"
          >
            Contact
          </Link>
          {isAuthenticated ? (
            <button
              disabled={loading}
              onClick={logoutHandler}
              className="btn btn-primary bg-white text-gray-800 transition duration-300 ease-in-out text-xl"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-300 hover:text-yellow-500 transition duration-300 ease-in-out text-xl"
            >
              Login
            </Link>
          )}
        </article>
      </div>
    </nav>
  );
};

export default Header;
