import styles from "./Header.module.css";

export default function Header() {
  return (
    <div id={styles.container}>
      <a id={styles.icon} href={"/"}>
        <span style={{ fontWeight: "700" }}>Gym</span> Oberwil
      </a>
      <div id={styles.linksContainer}>
        <a href={"/#/events"} className={styles.link}>
          Events
        </a>
        <a href={"/#/aktuelles"} className={styles.link}>
          Aktuelles
        </a>
        <a href={"/#/kontakt"} className={styles.link}>
          Kontakt
        </a>
      </div>
    </div>
  );
}
