import Head from "next/head";
import Footer from "../components/Footer";
import Tabs from "../components/Tabs";
import styles from "../styles/Home.module.css";

export default function Home() {
  const prefix = "/demo-time-calculator";

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="description"
          content="A time calculator made with Next JS"
        />
        <link rel="icon" href={prefix + "/favicon.ico"} />
        <title>Time Calculator</title>
      </Head>

      <main>
        <h1>Time Calculator</h1>
        <Tabs />
        <Footer />
      </main>
    </div>
  );
}
