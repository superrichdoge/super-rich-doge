import Head from 'next/head';
import { HomeLayout } from '@/layout/home';

export default function Home() {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <HomeLayout />
    </>
  );
}
