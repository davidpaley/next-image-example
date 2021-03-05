import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "../component/image/Image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image
          className="custom-img"
          src="https://embed.widencdn.net/img/cityfurniture/vj8l1dkczg/650x440px/Z1909719211R00_DT_HILTON_2TN_96_T4_SK_C_.jpeg?keep=c&crop=0&u=m2xgp2"
          // fallbackImage={NoImagesPlaceholder}
          alt="my Alt"
          height="440"
          width="650"
          // customPreload={isVisible}
          layout="responsive"
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
