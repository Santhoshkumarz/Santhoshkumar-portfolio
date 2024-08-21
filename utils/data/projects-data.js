import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Polaris Dashbord App',
        description: "My team and I developed the Polaris Dashboard Application, a sophisticated tool for data management and visualization. I was responsible for developing the API using Express and TypeScript, with deployment on AWS EC2 and data storage in MongoDB. The application features a comprehensive frontend built with ReactJS and SCSS, integrates PostgreSQL for database management, and uses Chart.js for data visualization. Additionally, it includes AWS S3 for file storage and Node Mailer for email functionalities.",
        tools: ['ReactJs','SCSS', 'PostgreSQL', 'DevExtereme', 'AWS S3', 'Python', 'Chart Js', 'Node Mailer','TypeScript','MongoDB'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'E-Commerce App',
        description: 'I designed and developed a comprehensive full-stack web application for 2Expedition. This app leverages a range of technologies to deliver a robust e-commerce platform, including NextJS for the frontend, Strapi as a headless CMS, GraphQL for efficient data querying, and PostgreSQL for database management. The deployment is managed through Vercel and OnRender, with a focus on a seamless user experience and dynamic, responsive design using React Slick and Material UI.',
        tools: ['NextJS', 'Strapi', "Graphql", "Vercel", "TypeScript", "PostgreSQL","OnRender","React Slick",'Material UI'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Sapzcodes Web App',
        description: `A web application developed by my team utilizing a modern tech stack to deliver a high-performance, visually appealing user experience. The project features dynamic components and smooth interactions, showcasing the team's expertise in building scalable and interactive frontend solutions.`,
        tools: ['NextJs', 'react slick', 'Styled Component', 'TypeScript',"react icons",'Material UI'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Dynamic E-Commerce Template Builder',
        description: " A drag-and-drop web builder that allows users to create and customize e-commerce templates effortlessly. Once a template is designed, it is automatically deployed and made live. This app integrates various technologies to provide a seamless and user-friendly experience for building and managing e-commerce sites.",
        tools: ['NextJS', 'Material UI', 'Strapi', 'React slick', "Styled Component",'Graphql','Aws Ec2'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];