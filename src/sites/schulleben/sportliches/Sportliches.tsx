import Frame from "../../../components/Frame/Frame.tsx";
import styles from "../pages.module.css";
export default function Sportliches() {
    return (
        <Frame>
            <div className={styles.container}>
                <h2>Sportliches am Gym Oberwil</h2>
                <span>
                    Verschiedene Auswahlteams («Selections») vertreten unsere
                    Schule (Gym und FMS) an kantonalen und schweizerischen
                    Wettkämpfen. Die Teams werden jeweils ca. 2 Monate vor den
                    Wettkämpfen zusammengestellt und trainieren nach Möglichkeit
                    ein paar Mal gemeinsam.
                    <h3>Spieler*innen</h3>
                    Für die Teams bevorzugt berücksichtigt werden interessierte
                    Schülerinnen und Schüler, die das Spiel/die Sportart
                    wettkampfmässig betreiben. Es kommen aber auch solche in
                    Betracht, die sich ohne Vereinszugehörigkeit über besondere
                    Leistungen ausweisen können. Bei den Sportspielen ist in der
                    Regel der erste Wettkampf ein kantonales Turnier. Das
                    Siegerteam dieses Turniers gewinnt die Teilnahmeberechtigung
                    an den Schweizer Mittelschulmeisterschaften.
                    <br /> Auf den Steckbriefen in der Vitrine im der Turnhalle
                    erfahren Sie mehr über die Besonderheiten der einzelnen
                    Selections. Setzen Sie sich mit den Verantwortlichen für
                    Training und Coaching in Verbindung und nehmen Sie an den
                    Probetrainings teil?
                </span>
            </div>
        </Frame>
    );
}
