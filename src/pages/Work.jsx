import WorkComponent from '../features/WorkComponent';
import { useState } from 'react';

const Work = () => {
  const [activeTab, setActiveTab] = useState('customBased');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const customBased = [
    {
      title: 'Requirement Gathering And Analysis',
      description:
        'It involves identifying, analyzing, and documenting the needs and objectives of the stakeholders and users, and transforming them into a set of detailed requirements that the software must meet.',
    },
    {
      title: 'Design',
      description:
        'software requirements are analyzed and transformed into a detailed system design document that outlines how the software will be built.',
    },
    {
      title: 'Implementation',
      description:
        'During this phase, the software is developed according to the requirements and specifications defined by the client.',
    },
    {
      title: 'Testing',
      description:
        'In this step, the test team identifies the scope of the testing, the objectives, the types of tests that will be performed, and the resources required for testing.',
    },
    {
      title: 'Deployment',
      description:
        'The deployment phase is the final stage of the Software Development Life Cycle (SDLC), where the software is released for use by the end-users.',
    },
    {
      title: 'Maintenance',
      description:
        'The Maintenance phase is where the software is monitored, updated, and improved after deployment',
    },
  ];

  const blockChainIntegration = [
    {
      title: 'Planning Phase',
      description:
        'In this phase, the goals and objectives of the project are established. The planning phase involves identifying the requirements of the blockchain technology and defining the scope of the project.',
    },
    {
      title: 'Analysis Phase',
      description:
        'In this phase, the requirements for the blockchain technology are analyzed and documented. The analysis phase involves understanding the different types of blockchains and selecting the one that fits the project requirements.',
    },
    {
      title: 'Design Phase',
      description:
        'In this phase, the design of the blockchain integration is created. This includes designing the architecture of the blockchain and how it will integrate with the application.',
    },
    {
      title: 'Implementation Phase',
      description:
        'This is the phase where the actual coding of the blockchain system takes place.',
    },
    {
      title: 'Deployment',
      description:
        'The blockchain system is deployed to the production environment.',
    },
    {
      title: 'Maintenance',
      description:
        'Once the blockchain system is live, ongoing maintenance is necessary to ensure it remains secure, scalable, and functional.',
    },
  ];

  const sevenDays = [
    {
      title: 'Planning Phase (Day 1)',
      description:
        'Conduct a focused and efficient requirements gathering session to understand the client needs and project scope.',
    },
    {
      title: 'Design Phase (Day 2)',
      description:
        'Create a functional prototype of the application based on the gathered requirements, using a rapid application development framework.',
    },
    {
      title: 'Development Phase (Days 3-5)',
      description:
        'Develop the application in short, iterative cycles, incorporating client feedback and making adjustments as needed.',
    },
    {
      title: 'Testing Phase (Day 6)',
      description:
        'Perform continuous testing throughout the development process to ensure the application meets quality standards.',
    },
    {
      title: 'Deployment Phase (Day 7)',
      description:
        'Developers will deploy the app to the intended platform, such as the app store or a web server.',
    },
    {
      title: 'Maintenance Phase (Ongoing)',
      description:
        'The Maintenance phase is where the software is monitored, updated, and improved after deployment.',
    },
  ];
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            className={`${
              activeTab === 'customBased'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-yellow-500'
            } py-2 px-4 rounded focus:outline-none hover:bg-yellow-500 hover:text-white`}
            onClick={() => handleTabClick('customBased')}
          >
            Custom Based
          </button>
          <button
            className={`${
              activeTab === 'blockChainIntegration'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-yellow-500'
            } py-2 px-4 rounded focus:outline-none hover:bg-yellow-500 hover:text-white`}
            onClick={() => handleTabClick('blockChainIntegration')}
          >
            BlockChain Integration
          </button>
          <button
            className={`${
              activeTab === 'sevenDays'
                ? 'bg-yellow-500 text-white'
                : 'bg-white text-yellow-500'
            } py-2 px-4 rounded focus:outline-none hover:bg-yellow-500 hover:text-white`}
            onClick={() => handleTabClick('sevenDays')}
          >
            7 Days
          </button>
        </div>
        {activeTab === 'customBased' && (
          <WorkComponent title={'Custom Based'} steps={customBased} />
        )}
        {activeTab === 'blockChainIntegration' && (
          <WorkComponent
            title={'BlockChain Integration'}
            steps={blockChainIntegration}
          />
        )}
        {activeTab === 'sevenDays' && (
          <WorkComponent title={'7 Days'} steps={sevenDays} />
        )}
      </div>
    </div>
  );
};

export default Work;
