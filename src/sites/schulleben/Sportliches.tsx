import Frame from "../../components/Frame/Frame.tsx";
import {
    Article,
    Container,
    Email,
    ImageArticle,
    Link,
    SubTitle,
    Title,
} from "../../components/ArticleComponents/ArticleComponents.tsx";

export function Sportliches() {
    return (
        <Frame>
            <Container>
                <Title>Sportliches am Gym Oberwil</Title>
                <Article>
                    Verschiedene Auswahlteams («Selections») vertreten unsere
                    Schule (Gym und FMS) an kantonalen und schweizerischen
                    Wettkämpfen. Die Teams werden jeweils ca. 2 Monate vor den
                    Wettkämpfen zusammengestellt und trainieren nach Möglichkeit
                    ein paar Mal gemeinsam.
                    <SubTitle>Spieler*innen</SubTitle>
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
                    Probetrainings teil!
                </Article>
            </Container>
        </Frame>
    );
}
export function Fussball() {
    return (
        <Frame>
            <Container>
                <Title>Fussball (Damen und Herren)</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/e/7/csm_Fussball_Herren_2023_a9ac70c25d.jpg",
                    ]}
                >
                    <SubTitle>Training und Coaching</SubTitle>
                    Damen: Lea Maestrini <Email>lea.maestrini@sbl.ch</Email> /
                    Daniela Bui <Email>daniela.bui@sbl.ch</Email>
                    <br />
                    Herren: Res Brunner <Email>andreas.brunner@sbl.ch</Email>
                    <SubTitle>
                        Zeitpunkt der Basellandschaftlichen
                        Mittelschulmeisterschaften
                    </SubTitle>
                    Damen: Jeweils im Januar (Halle), jeweils im Mai (Rasen){" "}
                    <br />
                    Herren: Jeweils im Januar (Halle), jeweils im April (Rasen)
                    <SubTitle>
                        Zeitpunkt der Schweizerischen Mittelschulmeisterschaften
                    </SubTitle>
                    Falls die Qualifikation erfolgreich absolviert wurde: Die
                    Durchführung einer SMSM ist noch nicht gesichert. ewus
                    rjdghfeugrhfveqgh vrrgjhuqverghuvredk iubherjbh
                    <SubTitle>
                        Anzahl der Trainings vor den Wettkämpfen
                    </SubTitle>
                    ca. 2<SubTitle>Teamgrösse</SubTitle>
                    ca. 10 SpielerInnen
                    <SubTitle>
                        Voraussetzungen für Interessierte Schüler/innen
                    </SubTitle>
                    Damen: Juniorinnen B oder höhere Liga, Schülerinnen mit
                    gutem Spielverständnis und sicherer Balltechnik, Freude am
                    Fussball <br /> Herren: Team wird jedes Jahr für das
                    Rasenturnier im Mai neu zusammengestellt.
                </ImageArticle>
            </Container>
        </Frame>
    );
}

export function Gymnasiade() {
    return (
        <Frame>
            <Container>
                <Title>Gymnasiade</Title>
                <ImageArticle
                    images={[
                        "https://www.gymoberwil.ch/fileadmin/_processed_/2/1/csm_2023-09-19_12-58-38-Pano_b6520dcb1a.jpg",
                        "https://www.gymoberwil.ch/fileadmin/_processed_/4/5/csm_2023-09-19_12-31-52-2_d52e59311e.jpg",
                        "https://www.gymoberwil.ch/fileadmin/_processed_/3/4/csm_2022-09-20_12-24-17-2_d7d1000bc1.jpg",
                    ]}
                >
                    Jedes Jahr findet an einem (normalerweise sonnigen) Dienstag
                    im September im Stadion Schützenmatte die Gymnasiade statt.
                    Es handelt sich um einen Gruppenwettkampf in Leichtathletik,
                    bei welchem das stärkste Gymnasium gesucht wird.
                    <SubTitle>In folgenden Disziplinen wird gestartet</SubTitle>
                    Frauen: 100 m, 4x100 m, Schwedenstaffel, Weisprung,
                    Hochsprung, Kugelstossen, Speerwurf, 2000 m <br />
                    Herren: 100 m, 4x100 m, Schwedenstaffel, Weisprung,
                    Hochsprung, Kugelstossen, Speerwurf, 3000 m <br />
                    <br />
                    Oberwil stellt jedes Jahr ein Frauen- und ein Männerteam.
                    <SubTitle>Weitere Infos</SubTitle>
                    Zur Gymnasiade: <Link>www.gymnasiade.ch</Link> <br />
                    Fotos:{" "}
                    <Link>
                        https://www.picdrop.com/marcokunz/MPdWkM3EwX
                    </Link>{" "}
                    <br /> <br />
                    Möchten Sie im nächsten Jahr auch dabei sein und das Gym
                    vertreten? Melden Sie sich bitte unverbindlich bei Frau A.
                    Kohler <Email>andrea.kohler@sbl.ch</Email> oder Herr M. Kunz
                    <Email>marco.kunz@sbl.ch</Email>
                </ImageArticle>
            </Container>
        </Frame>
    );
}
export function Schneesportlager() {
    return (
        <Frame>
            <Container>
                <Title>Schneesportlager</Title>
                <Article>
                    Die Fachschaft Sport organisiert jedes Jahr in der 1. Woche
                    der Fasnachtsferien ein SnowCamp. <br /> In diesem
                    freiwilligen Schullager steht der Schneesport im Zentrum.
                    Den Tag geniessen Sie in Kleingruppen auf den Pisten des
                    jeweiligen Skigebietes und profitieren von den wertvollen
                    Tipps der ausgebildeten Jugend & Sportleiterinnen und
                    -leiter, welche zu einem Grossteil der Fachschaft Sport
                    entstammen. <br />
                    <br /> Jeweils um die Herbstferien herum wird via Aushang
                    über den Lagerort, die Lagerkosten und das Anmeldeprozedere
                    informiert. Aber warten Sie mit Ihrer Anmeldung nicht zu
                    lange. Das SnowCamp ist in der Regel ziemlich rasch
                    ausgebucht.
                </Article>
            </Container>
        </Frame>
    );
}
export function Tenero() {
    return (
        <Frame>
            <Container>
                <Title>Sportwoche in Tenero</Title>
                <Article>
                    Kurz vor den Sommerferien findet jedes Jahr in Tenero das
                    Sportlager des Gymasiums Oberwil statt. Seit 2017 verbringen
                    die ersten Klassen der Maturabteilung und die zweiten
                    Klassen der FMS-Abteilung jeweils gemeinsam eine sportlich
                    herausfordernde und spannende Woche am Lago Maggiore im
                    «Centro Sportivo Tenero». <br />
                    <br />
                    Aus ca. 30 Sportarten wird eine Schwerpunktsportart gewählt
                    und mehrere Schnuppersportarten. Im Schwerpunktsport bietet
                    sich die Möglichkeit, eine Sportart vertieft kennenzulernen
                    und auch persönliche Fortschritte zu erzielen. Mit den
                    Schnuppersportarten können verschiedene Interessen abgedeckt
                    und viele neue Sportarten ausprobiert und entdeckt werden.{" "}
                    <br />
                    <br />
                    Anreise ist jeweils am Montag am Morgen, die Rückreise wird
                    am Freitag am Nachmittag angetreten. Geschlafen wird in
                    grossen, festinstallierten Zelten, welche jeweils ca. 20
                    Personen fassen. Die Verpflegung wird durch das Centro
                    organisiert.
                </Article>
            </Container>
        </Frame>
    );
}
export function Unihockey() {
    return (
        <Frame>
            <Container>
                <Title>Unihockey (Damen und Herren)</Title>
                <Article>
                    Damen: Lia Cadisch <Email>lia.cadisch@sbl.ch</Email> <br />
                    Herren: Patrick Bänteli{" "}
                    <Email>patrick.baenteli@sbl.ch</Email>
                    <SubTitle>
                        Zeitpunkt der Basellandschaftlichen
                        Mittelschulmeisterschaften
                    </SubTitle>
                    Jeweils im Januar
                    <SubTitle>
                        Zeitpunkt der Schweizerischen Mittelschulmeisterschaften
                    </SubTitle>
                    Falls die Qualifikation erfolgreich absolviert wurde:
                    Jeweils im März/April
                    <SubTitle>
                        Anzahl der Trainings vor den Wettkämpfen
                    </SubTitle>
                    ca. 2<SubTitle>Teamgrösse</SubTitle>
                    ca. 10
                    <SubTitle>
                        Voraussetzungen für interessierte Schüler*innen
                    </SubTitle>
                    Junioren/innen U14/U17 oder höhere Ligen, ehemalige
                    Spieler*innen etc...
                </Article>
            </Container>
        </Frame>
    );
}
