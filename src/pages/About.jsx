import Card from '../features/Card';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="flex flex-col items-center lg:items-start">
        <h2 className="text-4xl lg:text-8xl font-bold text-yellow-400 uppercase tracking-wider mb-4">
          Overview.
        </h2>
        <p className="text-lg lg:text-2xl font-medium text-gray-300 max-w-2xl text-center lg:text-left">
          At Ocpl Tech, we are dedicated to driving innovation for businesses in
          India and worldwide. Our talented team of experts skillfully leverages
          cutting-edge technology to create custom blockchain solutions and
          high-speed web, Android, and iOS applications.
        </p>
      </div>
      <div className="flex flex-wrap justify-center lg:w-1/2 mt-14">
        <Card title={'Web Development'} />
        <Card title={'Mobile Development'} />
        <Card title={'Blockchain Solutions'} />
        <Card title={'UI/UX Design'} />
        <Card title={'Cloud Computing'} />
        <Card title={'Artificial Intelligence'} />
        <Card title={'Kubernetes, Docker and Microservices'} />
        <Card title={'Internet of Things (IoT)'} />
        <Card title={'DevSecOps'} />
        <Card title={'Outsourcing Development'} />
        <Card title={'No-code Development'} />
        <Card title={'Predictive Analytics'} />
      </div>
    </div>
  );
};

export default About;
