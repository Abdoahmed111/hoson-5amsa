import { type NextPage } from "next";
import Head from "next/head";
import Navbar from "~/components/layouts/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hoson 5amsa</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen w-full flex-col items-end justify-start font-elmessiri"
        dir="rtl"
      >
        <Navbar />
      </main>
    </>
  );
};

export default Home;
