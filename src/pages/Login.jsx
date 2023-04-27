import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Context, server } from '../main';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };
  if (isAuthenticated) return <Navigate to={'/'} />;
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black">
      <div className="max-w-md w-full">
        <h1 className="text-6xl font-bold text-yellow-500 mb-8 text-center">
          Log In
        </h1>
        <section className="bg-black bg-opacity-70 p-8 rounded-lg shadow-lg max-w-md w-full">
          <form onSubmit={submitHandler} className="flex flex-col space-y-6">
            <div className="mb-6 w-full">
              <label htmlFor="email" className="text-white mb-2 block text-lg">
                Email
              </label>
              <input
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
                className="bg-gray-800 text-white rounded-lg py-3 px-4 w-full text-lg"
              />
            </div>

            <div className="mb-6 w-full">
              <label
                htmlFor="password"
                className="text-white mb-2 block text-lg"
              >
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
                className="bg-gray-800 text-white rounded-lg py-3 px-4 w-full text-lg"
              />
            </div>
            <button
              disabled={loading}
              type="submit"
              className="p-4 rounded-md bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 text-lg text-white flex items-center justify-center"
            >
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16 8 8 0 000 16z"
                  ></path>
                </svg>
              )}
              Login
            </button>
            <h4 className="text-center text-white">Or</h4>
            <Link
              to="/register"
              className="text-center text-yellow-500 hover:text-yellow-600 transition-colors duration-300"
            >
              Sign Up
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
