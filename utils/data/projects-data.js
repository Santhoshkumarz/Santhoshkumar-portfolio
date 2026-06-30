import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Data Engineers Plugin — Live Project',
        description:
            "An LLM-based data extraction platform built at Constient Global Solutions. It automates extraction from documents, normalizes sheets and columns, manages column mapping, and processes data in real time — surfaced through a dashboard and reporting interface. I built the Python FastAPI backend, the LLM-driven extraction workflows, the React.js dashboard and management screens, and the REST APIs connecting frontend and backend.",
        tools: ['Python', 'FastAPI', 'LLM', 'React.js', 'REST API', 'Data Extraction'],
        role: 'Full Stack + AI',
        year: '2026',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'SAP Chatbot System',
        description:
            "An AI-powered chatbot system at Constient Global Solutions that answers questions over enterprise documents. I developed PDF extraction modules in Python, integrated chatbot functionality using LLM models, built an interactive React.js frontend, and maintained the backend services and API performance for reliable, low-latency responses.",
        tools: ['Python', 'LLM', 'PDF Extraction', 'React.js', 'REST API'],
        role: 'Full Stack + AI',
        year: '2026',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Vrindavan Farm — E-commerce',
        description:
            "A full-stack e-commerce platform built at Genpixels Tech. I developed and maintained RESTful APIs in Node.js, designed the Next.js frontend, integrated a payment gateway for secure online transactions, and managed cloud deployment, server configuration and application monitoring on AWS — optimizing backend services for performance and scalability.",
        tools: ['Next.js', 'Node.js', 'AWS', 'REST API', 'Payment Gateway', 'DevOps'],
        role: 'Full Stack + DevOps',
        year: '2025',
        code: '',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Polaris Dashboard App',
        description:
            "A sophisticated data management and visualization tool. I developed the API using Express and TypeScript deployed on AWS EC2, with MongoDB and PostgreSQL for storage, a ReactJS + SCSS frontend, Chart.js for visualization, AWS S3 for file storage, and Node Mailer for email functionality.",
        tools: ['ReactJs', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS S3', 'Chart Js', 'Node Mailer'],
        role: 'Full Stack Developer',
        year: '2024',
        code: '',
        demo: '',
        image: ayla,
    },
];
