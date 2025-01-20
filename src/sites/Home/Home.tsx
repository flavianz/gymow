import styles from "./Home.module.css";
import Frame from "../../components/Frame/Frame.tsx";
import Banner from "../../assets/home-banner.jpg";
import Plaza from "../../assets/plaza.webp";

export default function Home() {
    return (
        <Frame>
            <div id={styles.bannerContainer}>
                <img
                    src={Banner}
                    alt="Panorama des Gym Oberwil"
                    id={styles.banner}
                />
                <h1 id={styles.title}>Gymnasium Oberwil</h1>
            </div>
            <div id={styles.contentContainer}>
                <div className={styles.section}>
                    <img
                        src={Plaza}
                        alt="Gym Innenhof"
                        className={styles.blob}
                    />
                    <div className={styles.textContainer}>
                        <h2 className={styles.heading}>Unsere Schule</h2>
                        <p>
                            Das Gym Oberwil liegt mitten in der Natur und ist
                            ein Platz des Lernens. Wir bieten eine
                            Maturitätsabteilung und eine FMS mit dem Ziel,
                            Schülerinnen und Schüler auf ein Studium
                            vorzubereiten. Wir wollen eine breite
                            Allgemeinbildung vermitteln und zukunftsorientiert
                            arbeiten. Wir sind der Platz, um Eigenständigkeit
                            und Selbstvertrauen, Neugierde und Kreativität,
                            Verantwortungsbewusstsein und Toleranz zu
                            entwickeln.
                        </p>
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.heading}>Maturitätsabteilung</h2>
                        <p>
                            Das Gym Oberwil ist eine Schule der Sekundarstufe
                            II, die von rund 950 Schülerinnen und Schülern
                            besucht wird. Sie führt nach der obligatorischen
                            Schulzeit in 4 Jahren zur Maturität. Das Gymnasium
                            Oberwil ist in der Region bekannt für sein reges
                            kulturelles Engagement, in letzter Zeit vor allem
                            für die Aufführungen seiner Theatergruppe, sowie der
                            Engagierten- bzw. Begabtenförderung.
                        </p>
                    </div>
                    <img
                        src={Plaza}
                        alt="Gym Innenhof"
                        className={styles.blob}
                    />
                </div>
                <div className={styles.section}>
                    <img
                        src={Plaza}
                        alt="Gym Innenhof"
                        className={styles.blob}
                    />
                    <div className={styles.textContainer}>
                        <h2 className={styles.heading}>FMS</h2>
                        <p>
                            Die FMS ist eine 3 Jahre dauernde Mittelschule. Sie
                            bietet zwei in der ganzen Schweiz anerkannte
                            Abschlüsse: den Fachmittelschulausweis und das
                            Fachmaturitätszeugnis. Sie vermittelt eine breite
                            Allgemeinbildung und bereitet Schülerinnen und
                            Schüler auf Berufsausbildungen vor, die eine
                            anspruchsvolle schulische Ausbildung voraussetzen.
                            Schülerinnen oder Schüler, die sich vorstellen
                            können, einen Beruf im erzieherischen, sozialen oder
                            kulturellen Bereich, im Gesundheitswesen oder im
                            Tourismus zu erlernen, treffen mit der FMS eine gute
                            Wahl.
                        </p>
                    </div>
                </div>
            </div>
        </Frame>
    );
}
