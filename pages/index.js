import Head from 'next/head';
import Link from 'next/link';
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
      <Link href='/posts/first-post'>First blog post</Link>
      </section>
    </Layout>
  );
}