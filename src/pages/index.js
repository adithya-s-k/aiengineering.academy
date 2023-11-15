import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const courses = [
  {
    title: 'Introduction to Generative AI',
    imageUrl: 'img/course1.png',
    description:
      'Get started with generative AI and explore its applications in creating new content, from images to text.',
    link: 'https://courses.aiengineering.academy/courses/0623338c-2ffe-4a84-965e-50a5e20a9e77/chapters/f7dae533-02d8-4406-96e4-edaa0dcdd19a',
  },
  {
    title: 'Introduction to LLMs',
    imageUrl: 'img/course2.png',
    description:
      'Dive deep into large language models  and learn how to harness their power for various natural language processing tasks.',
    link: 'https://courses.aiengineering.academy/courses/801ca512-0928-4309-8c64-551f88ef3b03/chapters/947d7440-71b7-4144-98e1-0fd51a300706',
  },
  {
    title: 'Responsible AI Practices',
    imageUrl: 'img/course3.png',
    description:
      'Gain insights into responsible AI practices, including fairness, bias mitigation, and ethics in AI development.',
    link: '/course3',
  },
  // Add more course cards as needed
];

const features = [
  {
    title: 'Comprehensive Course Catalog',
    imageUrl: 'img/tools.svg',
    description:
      'Access an exclusive documentation of everything related to generative AI. Explore our extensive course catalog, covering various aspects of generative AI, deep learning, large language models, and more. Tailor your learning journey to your specific interests and goals.',
  },
  {
    title: 'Inbuilt Smart Chatbot',
    imageUrl: 'img/chatbot.svg',
    description:
      'Enjoy an interactive learning experience with our inbuilt chatbot, equipped with domain knowledge about generative AI. Its there to assist you, answer questions, and provide insights into the world of generative AI.',
  },
  {
    title: 'Interactive Learning Experience',
    imageUrl: 'img/academic.svg',
    description:
      'Immerse yourself in an interactive learning experience with video content, hands-on exercises, and relevant resources. Our platform ensures an engaging and effective learning journey.',
  },
  // Add more feature points as needed
];

// const features = [
//   {
//     title: <>Explore Your Academic Horizon</>,
//     imageUrl: 'img/tools.svg',
//     description: (
//       <>
//         <ul>
//           • Discover a wide range of carefully curated courses across various
//           disciplines.{' '}
//         </ul>
//         <ul>
//           • Tailor your learning journey with courses that suit your academic
//           and professional aspirations.
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: <>Interactive and Intelligent Tools</>,
//     imageUrl: 'img/chatbot.svg',
//     description: (
//       <>
//         <ul>
//           • Engage with interactive video content, summarized lessons, and
//           relevant documents.{' '}
//         </ul>
//         <ul>
//           • Our intelligent chatbot provides instant support, clarifies doubts,
//           and guides you seamlessly through your coursework.{' '}
//         </ul>
//       </>
//     ),
//   },
//   {
//     title: <>Your Academic Ally</>,
//     imageUrl: 'img/academic.svg',
//     description: (
//       <>
//         <ul>
//           • Enjoy a mentor-like experience with personalized recommendations and
//           adaptive content.{' '}
//         </ul>
//         <ul>
//           • Your virtual mentor understands your learning style, guides you
//           through challenges, and ensures a supportive academic journey.{' '}
//         </ul>
//       </>
//     ),
//   },
// ];

function CourseCard({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4">
      <div className={styles.courseCard}>
        <img className={styles.courseImage} src={imgUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>
          <button className={styles.button_101}>Visit Course</button>
        </a>
      </div>
    </div>
  );
}

function Feature({ imageUrl, title, description, secondParagraph }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className={styles.imageContainer}>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.secondParagraph}>{secondParagraph}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title={``}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        {/* Courses section */}
        <section className={styles.coursesSection}>
          <div className="container">
            <h1>Courses</h1>
            <div className="row">
              {courses.map((course, idx) => (
                <CourseCard key={idx} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className={styles.features}>
          <div className="container">
            <h1>Features</h1>
            <div className="row">
              {features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
