import Head from 'next/head';

import { Navbar } from '@/components';

import {
  Hero,
  AboutUs,
  DogeNft,
  Tokenomics,
  Roadmap,
  Teams,
  Partnership,
  Footer,
} from './sections';

export const HomeLayout = () => {
  return (
    <div>
      <Head>
        <title>Super Rich Doge</title>
      </Head>

      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <DogeNft />
        <Tokenomics />
        <Roadmap />
        <Teams />
        <Partnership />
        <Footer />
      </main>
    </div>
  );
};
