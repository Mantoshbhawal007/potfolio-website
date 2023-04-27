import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { Context, server } from '../main';
import toast from 'react-hot-toast';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/register`,
        {
          name,
          email,
          phone,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
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
          Sign Up
        </h1>
        <section className="bg-black bg-opacity-70 rounded-lg shadow-lg p-8 max-w-md w-full">
          <form onSubmit={submitHandler} className="flex flex-col items-center">
            <div className="mb-6 w-full">
              <label htmlFor="name" className="text-white mb-2 block text-lg">
                Name
              </label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                required
                className="bg-gray-800 text-white rounded-lg py-3 px-4 w-full text-lg"
              />
            </div>
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
              <label htmlFor="phone" className="text-white mb-2 block text-lg">
                Phone
              </label>
              <input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Phone"
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
              className="bg-yellow-500 text-black rounded-lg py-3 px-4 mb-6 w-full text-lg hover:bg-yellow-600 transition-colors duration-300 text-white"
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
              Sign Up
            </button>
            <h4 className="mb-4 text-lg">Or</h4>
            <Link to="/login" className="text-yellow-500 text-lg">
              Log In
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};
// className="bg-yellow-500 text-black rounded-lg py-3 px-4 mb-6 w-full text-lg hover:bg-yellow-600 transition-colors duration-300"
export default Register;
