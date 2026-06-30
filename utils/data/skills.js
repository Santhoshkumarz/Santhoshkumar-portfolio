// Flat list (used by the marquee / legacy components)
export const skillsData = [
  'Javascript',
  'Typescript',
  'React',
  'Next JS',
  'ReactQuery',
  'Node JS',
  'Python',
  'Django',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'AWS',
  'Git',
  'MaterialUI',
  'Strapi',
];

// Categorized skills (used by the redesigned, animated skills section)
export const skillCategories = [
  {
    id: 'ai',
    title: 'AI / LLM',
    icon: 'ai',
    skills: [
      'AI Chatbots',
      'RAG',
      'LLM APIs',
      'Vector Search (pgvector)',
      'AI Data Extraction',
      'Embeddings',
      'Prompt Engineering',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'frontend',
    skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'React Query', 'Material UI'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'backend',
    skills: ['Node.js (Express)', 'Nest.js', 'Python (Django)', 'Strapi'],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Elasticsearch'],
  },
  {
    id: 'cloud',
    title: 'Cloud (AWS)',
    icon: 'cloud',
    skills: ['EC2', 'RDS', 'S3', 'VPC', 'SNS', 'Route 53', 'Amplify', 'Elastic Beanstalk', 'CodePipeline'],
  },
  {
    id: 'integrations',
    title: 'Integrations & Tools',
    icon: 'tools',
    skills: ['REST APIs', 'Razorpay', 'Git', 'GitHub'],
  },
];
