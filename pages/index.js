import Head from "next/head";
import Tabs from "../components/Tabs";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Time Calculator</title>
        <meta
          name="description"
          content="A time calculator made with Next JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Time Calculator</h1>
        <Tabs />
      </main>
    </div>
  );
}
