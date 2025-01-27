import Frame from "../components/Frame/Frame.tsx";
import {
    Article,
    Bold,
    Container,
    Link,
    SubTitle,
    Title,
} from "../components/ArticleComponents/ArticleComponents.tsx";

export function Maturitätsabteilung() {
    return (
        <Frame>
            <Container>
                <Title>Maturitätsabteilung</Title>
                <Article>
                    Das Gymnasium Oberwil ist eine Schule der Sekundarstufe II,
                    die von rund 950 Schülerinnen und Schülern besucht wird. Sie
                    führt nach der obligatorischen Schulzeit in 4 Jahren zur
                    Maturität.
                    <br />
                    An der Maturitätsabteilung werden alle (ausser Russisch und
                    Griechisch) im Kanton BL geführten Schwerpunktfächer
                    angeboten, ebenso eine zweisprachige Matura auf Englisch;
                    für Französisch und Spanisch gibt es eine spezielle Förderug
                    durch Austauschsemester.
                    <br />
                    Das Gymnasium Oberwil ist in der Region bekannt für sein
                    reges kulturelles Engagement, in letzter Zeit vor allem für
                    die Aufführungen seiner Theatergruppe, sowie der
                    Engagierten- bzw. Begabtenförderung.
                    <SubTitle>Dokumente</SubTitle>
                    <Link isPdf alternate={"Broschüre GYM"}>
                        https://www.gymoberwil.ch/fileadmin/_migrated/Brosch%C3%BCre_Gym.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Laufbahnverordnung"}>
                        https://www.gymoberwil.ch/fileadmin/_migrated/content_uploads/laufbahnverordnung.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Auszug Grundlegende Bestimmungen"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Auszug_Grundlegende_Bestimmungen_2023.pdf
                    </Link>
                </Article>
            </Container>
        </Frame>
    );
}
export function Aufnahmebedingungen() {
    return (
        <Frame>
            <Container>
                <Title>Aufnahmebedingungen</Title>
                <Article>
                    <Bold>
                        Der Übertritt aus dem Leistungszug P der Sekundarschule
                        in das Gymnasium setzt voraus:{" "}
                    </Bold>
                    Einen Notendurchschnitt von mindestens 4.0 aus allen
                    promotionsrelevanten Fächern und eine Punktesumme von
                    mindestens 34 aus den einfach zählenden Zeugnisnoten der
                    Fächer Biologie, Englisch, Französisch und Physik sowie den
                    doppelt zählenden Zeugnisnoten der Fächer Deutsch und
                    Mathematik. Werden diese Bedingungen in beiden Zeugnissen
                    der 3. Klasse erreicht, erfolgt die Aufnahme definitiv. Die
                    Aufnahme erfolgt provisorisch, wenn im Zeugnis im ersten
                    Semester beide Bedingungen und im 2. Semester eine Bedingung
                    erreicht wird. In allen anderen Fällen kann keine Aufnahme
                    erfolgen. <br />
                    <br />
                    <Bold>
                        Der Übertritt aus dem Leistungszug E der Sekundarschule
                        in das Gymnasium setzt voraus:{" "}
                    </Bold>
                    Einen Notendurchschnitt von mindestens 5.0 aus allen
                    promotionsrelevanten Fächern und eine Punktesumme von
                    mindestens 40 aus den einfach zählenden Zeugnisnoten der
                    Fächer Biologie, Englisch, Französisch und Physik sowie den
                    doppelt zählenden Zeugnisnoten der Fächer Deutsch und
                    Mathematik. Werden diese Bedingungen in beiden Zeugnissen
                    der 3. Klasse erreicht, erfolgt die Aufnahme definitiv. Die
                    Aufnahme erfolgt provisorisch, wenn im Zeugnis im ersten
                    Semester beide Bedingungen und im 2. Semester eine Bedingung
                    erreicht wird. In allen anderen Fällen kann keine Aufnahme
                    erfolgen.
                    <SubTitle>Unterlagen Aufnahmebedingungen</SubTitle>
                    <Link isPdf alternate={"Übertrittsbedingungen Niveau P"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/maturabteilung/aufnahmebedingungen/%C3%9Cbertrittsbedinungen_Leistungszug_P.pdf
                    </Link>{" "}
                    <br />
                    <Link isPdf alternate={"Übertrittsbedingungen Niveau E"}>
                        https://www.gymoberwil.ch/fileadmin/sources/downloads/maturabteilung/aufnahmebedingungen/%C3%9Cbertrittsbedinungen_Leistungszug_E.pdf
                    </Link>{" "}
                    <br />
                    <Link
                        isPdf
                        alternate={"Übertrittsbedingungen OZL Niveau P"}
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/OZL_WeiterfuhrSchulen_bertrittsbeding_Sek_P_ohne_WMS.pdf
                    </Link>
                    <br />
                    <Link
                        isPdf
                        alternate={"Übertrittsbedingungen OZL Niveau E"}
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/OZL_WeiterfuhrSchulen_neue_bertrittsbeding_Sek_E_ohne_WMS_Stand_Nov._17.pdf
                    </Link>
                    <br />
                    <Link
                        isPdf
                        alternate={"Reglement Übertrittsbedingungen Kanton SO"}
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Reglement_%C3%9Cbertrittsbedingungen_Kanton_SO_in_BL.pdf
                    </Link>
                    <SubTitle>
                        Übersicht Schwerpunkte Maturitätsabteilung
                    </SubTitle>
                    <Link
                        isPdf
                        alternate={
                            "Schwerpunkt Anwendungen der Mathematik und Physik"
                        }
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200915_A-2020_fga_DEF.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Schwerpunkt Biologie und Chemie"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200915_B-2020_fga_DEF.pdf
                    </Link>
                    <br />
                    <Link
                        isPdf
                        alternate={"Schwerpunkt Bildnerisches Gestalten"}
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200915_Z-2020_fga_DEF.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Schwerpunkt Italienisch"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200915_I-2020_fga_DEF..pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Schwerpunkt Latein"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200923_L-2020_fga-DEF.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Schwerpunkt Musik"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200915_M-2020_fga_DEF.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Schwerpunkt Spanisch"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_Spanisch_S-2023_dsa.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Schwerpunkt Wirtschaft und Recht"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/Flyer_20200915_W-2020_DEF.pdf
                    </Link>
                    <SubTitle>
                        Beratungsgespräche Bildnerisches Gestalten & Musik
                    </SubTitle>
                    <Link
                        isPdf
                        alternate={"Voraussetzungen Bildnerisches Gestalten"}
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/BG_Beratungsgespr%C3%A4ch_Voraussetzungen_2023.pdf
                    </Link>
                    <br />
                    <Link
                        isPdf
                        alternate={"Anmeldeformular Bildnerisches Gestalten"}
                    >
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/2023_Anmeldeformular_BG_Beratungsgespr%C3%A4ch_Eintritt_2024.pdf
                    </Link>
                    <br />
                    <Link isPdf alternate={"Anmeldeformular Musik"}>
                        https://www.gymoberwil.ch/fileadmin/sources/uploads/2023_Anmeldeformular_Musik_Eignungsabkl%C3%A4rung_Eintritt_2024.pdf
                    </Link>
                </Article>
            </Container>
        </Frame>
    );
}
