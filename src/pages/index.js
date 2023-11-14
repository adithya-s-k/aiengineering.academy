import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Explore Your Academic Horizon</>,
    imageUrl: 'img/tools.svg',
    description: (
    <>
        <ul>• Discover a wide range of carefully curated courses across various disciplines. </ul>
        <ul>• Tailor your learning journey with courses that suit your academic and professional aspirations.</ul>
      
    </>
    ),
  },
  {
    title: <>Interactive and Intelligent Tools</>,
    imageUrl: 'img/chatbot.svg',
    description: (
      <>
        <ul>• Engage with interactive video content, summarized lessons, and relevant documents.  </ul>
        <ul>• Our intelligent chatbot provides instant support, clarifies doubts, and guides you seamlessly through your coursework. </ul>
      </>
    ),
  },
  {
    title: <>Your Academic Ally</>,
    imageUrl: 'img/academic.svg',
    description: (
      <>
       <ul>• Enjoy a mentor-like experience with personalized recommendations and adaptive content. </ul>
       <ul>• Your virtual mentor understands your learning style, guides you through challenges, and ensures a supportive academic journey. </ul>
      </>
    ),
  },
];

function Feature({imageUrl, title, description, secondParagraph}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{secondParagraph}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;