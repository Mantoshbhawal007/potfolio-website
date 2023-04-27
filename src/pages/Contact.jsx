import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context, server } from '../main';
import { toast } from 'react-hot-toast';
import axios from 'axios';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const { isAuthenticated, setIsAuthenticated, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${server}/handleData`,
        {
          data: {
            name,
            email,
            message,
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: false,
        }
      );
      toast.success(data.message);
      setName('');
      setEmail('');
      setMessage('');
      navigate('/');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-md w-full">
        <h1 className="text-6xl font-bold text-yellow-500 mb-8 text-center">
          Contact Us
        </h1>
        <form
          onSubmit={submitHandler}
          className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg"
        >
          <label className="block text-gray-800 mb-4">
            Name
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Name"
              className="block w-full bg-gray-100 text-gray-800 rounded-lg border border-gray-400 py-2 px-3 mt-1"
              style={{ fontSize: '1.2rem', height: '3rem' }}
            />
          </label>
          <label className="block text-gray-800 mb-4">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              className="block w-full bg-gray-100 text-gray-800 rounded-lg border border-gray-400 py-2 px-3 mt-1"
              style={{ fontSize: '1.2rem', height: '3rem' }}
            />
          </label>
          <label className="block text-gray-800 mb-4">
            Message
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              className="block w-full bg-gray-100 text-gray-800 rounded-lg border border-gray-400 py-2 px-3 mt-1"
              style={{ fontSize: '1.2rem', height: '10rem' }}
            />
          </label>
          <button
            type="submit"
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
