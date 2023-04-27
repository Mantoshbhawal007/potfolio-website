import Pic from '../assets/pic.jpg';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Portfolio from './Portfolio';
import Work from './Work';
const Home = () => {
  return (
    <>
      <div
        className="relative h-screen bg-cover flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${Pic})` }}
      >
        <h1 className="text-9xl font-bold text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text">
          Cresco Together
        </h1>
        <p className="text-4xl text-white mt-4">
          Web 3.0 Unlocked: Embrace the Power of Digital Opulence
        </p>
      </div>
      <About />
      <Work />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
