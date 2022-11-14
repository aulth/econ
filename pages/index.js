import Head from "next/head";
import Landing from "../components/Landing";
export default function Home() {
  return (
    <>
      <Head>
        <title>ECON</title>
        <meta name="description" content="Protect Your Privacy" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Landing />
    </>
  );
}
