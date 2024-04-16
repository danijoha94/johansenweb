import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>Daniel Johansen</div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Johansen Web Logo"
          width={257}
          height={133}
          priority
        />
      </div>

      <div className={styles.grid}>
        <span className={styles.card}>
          <h2>Nettsider</h2>
          <p>Vi hjelper deg å være synlig på nett</p>
        </span>

        <span className={styles.card}>
          <h2>E-post</h2>
          <p>Trenger du hjelp til oppsett av e-post?</p>
        </span>

        <span className={styles.card}>
          <h2>Domene</h2>
          <p>Bestilling og forvalting av ditt domene</p>
        </span>

        <span className={styles.card}>
          <h2>Kontakt</h2>
          <p>Daniel Johansen</p>
          <p>
            E-post:
            <a href="mailto:danijoha@live.no"> danijoha@live.no</a>
          </p>
          <p>
            Telefon:
            <a href="tel:004792057220"> +47 920 57 220</a>
          </p>
        </span>
      </div>
    </main>
  );
}
