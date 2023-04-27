import ProjectCard from '../features/ProjectCard';
import pro1 from '../assets/project1.png';
import pro2 from '../assets/project2.png';
import pro3 from '../assets/project3.png';
import pro4 from '../assets/project4.png';
import pro5 from '../assets/project5.png';
import pro6 from '../assets/project6.png';
import pro7 from '../assets/project7.png';
import per1 from '../assets/person1.jpg';
import per2 from '../assets/person2.jpeg';
import per3 from '../assets/person3.jpeg';
import TestimonialCard from '../features/TestimonialCard';

const Portfolio = () => {
  const projects = [
    {
      image: pro1,
      name: 'OCPL Foundation',
      description:
        'Introducing a web-based platform that offers transparency, security, and efficiency in the charity donation process, ensuring that beneficiaries receive funds as intended. The OCPL Foundation leverages blockchain technology to tackle common issues in charitable giving. Experience a new era of trust and accountability in philanthropy with the OCPL Foundation - fostering positive change through transparent and secure charitable contributions.',
      link: 'https://demo1.ocpl.tech/',
      techStack: 'React, Scss, BootStrap',
    },
    {
      image: pro2,
      name: 'OCPL HealthCare',
      description:
        'Introducing OCPL Healthcare, an innovative blockchain-based solution transforming the healthcare industry. This cutting-edge platform enhances data security, streamlines patient records management, and ensures seamless data sharing among healthcare providers. It empowers patients, providers, and stakeholders with real-time access to critical health information, fostering improved decision-making. Experience the future of healthcare with OCPL Healthcare.',
      link: 'https://demo2.ocpl.tech/',
      techStack: 'React, JavaScript, Scss',
    },
    {
      image: pro3,
      name: 'OCPL Real Estate',
      description:
        'Discover OCPL RealEstate, a pioneering solution that integrates blockchain technology into the real estate industry. OCPL RealEstate revolutionizes traditional processes, reduces transaction costs, and streamlines due diligence, fostering a seamless and trustworthy real estate ecosystem. Embrace the future of property transactions with OCPL RealEstate - your gateway to a smarter, more secure real estate experience.',
      link: 'https://demo5.ocpl.tech/',
      techStack: 'BlockChain , BootStrap , Css',
    },
    {
      image: pro4,
      name: 'OCPL Finance',
      description:
        'OCPL Finance, a blockchain-based solution, revolutionizes financial institutions operations. Offering a secure, decentralized platform for seamless transactions, asset management, and cost reduction, OCPL Finance ensures data integrity and compliance. Ideal for banks, NBFCs, and other financial entities, it paves the way for enhanced efficiency, competitiveness, and growth in the ever-evolving financial landscape.',
      link: 'https://demo3.ocpl.tech/',
      techStack: 'Express, BlockChain , Redux',
    },
    {
      image: pro5,
      name: 'OCPL CRM Omega',
      description:
        'Experience the power of CRM Omega, a versatile platform for seamless contact management, sales automation, and robust reporting. Enhance team collaboration, automate workflows, and drive customer loyalty with tailored communication strategies. Unlock your business potential with CRM Omega - your partner for growth and success.',
      link: 'https://demo4.ocpl.tech/dashboard',
      techStack: 'Mui, BlockChain, JavaScript',
    },
    {
      image: pro6,
      name: 'OCPL CRM Alpha',
      description:
        'Boost your customer relations with CRM Alpha, an intuitive, feature-rich solution that streamlines lead management, sales tracking, and customer support. Leverage AI-driven analytics for data-driven insights, personalized marketing campaigns, and improved customer satisfaction. Embrace CRM Alpha - the ultimate tool to elevate your business.',
      link: 'https://demo7.ocpl.tech/',
      techStack: 'React, BootStrap, BlockChain',
    },
    {
      image: pro7,
      name: 'OCPL Gaming',
      description:
        'We use blockchain technology to provide a secure and transparent platform for buying, selling, and trading virtual assets. Each asset has a unique digital identity that is verified on the blockchain, making it impossible to duplicate or counterfeit.',
      link: 'https://demo6.ocpl.tech/',
      techStack: 'React, BlockChain, Css',
    },
    // Add more projects here
  ];

  const testimonials = [
    {
      name: 'Komal Bhatt',
      image: per1,
      text: 'I thought it was impossible to make a website as beautiful as our product, but OCPL team proved me wrong.',
    },
    {
      name: ' Naveen Kapoor',
      image: per2,
      text: 'I have never met a team like OCPL has who truly cares about their clients success.',
    },
    {
      name: 'Anand Prabhu',
      image: per3,
      text: 'After they optimized our website, our traffic increased by 50%. We cant thank them enough!',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-fixed from-gray-800 to-black">
      <div className="container mx-auto px-4 py-8 mt-14">
        <h1 className="text-6xl font-bold mb-4 text-yellow-500">
          OUR Portfolio.
        </h1>
        <p className="text-lg mb-10 text-white">
          Blockchain technology isn't just a more efficient way to settle
          securities. It will fundamentally change market structures, and maybe
          even the architecture of the Internet itself. Whereas most
          technologies tend to automate workers on the periphery doing menial
          tasks, blockchains automate away the center. Instead of putting the
          taxi driver out of a job, blockchain puts Uber out of a job and lets
          the taxi drivers work with the customer directly.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <div className="container mx-auto my-80">
          <h1 className="text-8xl font-bold mb-8 text-center text-yellow-500">
            Testimonials
          </h1>
          <div className="flex flex-wrap justify-center bg-gradient-to-br from-gray-800 to-black rounded-lg shadow-lg p-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
              >
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
