import Head from 'next/head';

export const metadata = {
  title: 'Dashboard',
};
const page = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1>Dashboard</h1>
    </div>
  );
};

export default page;
