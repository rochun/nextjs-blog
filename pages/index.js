import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hi, my name is Royce and I am a software engineer👋 </p>
        <p>
          Currently, I am looking for full-stack engineering opportunities.
        </p>
      </section>
    </Layout>
  );
}