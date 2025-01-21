import styles from "./Frame.module.css";
import Header from "../Header/Header.tsx";
import { Link } from "react-router-dom";

const links: {
    [key: string]: {
        main: string;
        [other: string]: [string, string][] | string;
    };
} = {
    Schulleben: {
        main: "/schulleben",
        Leitbild: "/schulleben/leitbild",
        Organisationseinheit: [
            [
                "Mitwirkungsstruktur",
                "/schulleben/organisationseinheit/mitwirkungsstruktur",
            ],
            ["Schulrat", "/schulleben/organisationseinheit/schulrat"],
            ["Schulleitung", "/schulleben/organisationseinheit/schulleitung"],
            [
                "Schuladministration",
                "/schulleben/organisationseinheit/schuladministration",
            ],
            ["SOGO", "/schulleben/organisationseinheit/sogo"],
            ["Dienste", "/schulleben/organisationseinheit/dienste"],
        ],
        Terminkalender: "/schulleben/terminkalender",
        Beratung: [
            ["Intern", "/schulleben/beratung/intern"],
            ["Extern", "/schulleben/beratung/extern"],
        ],
        Kulturelles: [
            ["Blickfeld", "/schulleben/kulturelles/blickfeld"],
            ["Chor", "/schulleben/kulturelles/chor"],
            ["FMS-Theater", "/schulleben/kulturelles/fms-theater"],
            ["Kulturagenda", "/schulleben/kulturelles/kulturagenda"],
            [
                "Neue Pavillon Konzerte",
                "/schulleben/kulturelles/neue-pavillon-konzerte",
            ],
            ["Theatergruppe", "/schulleben/kulturelles/theatergruppe"],
        ],
        Sportliches: [
            ["Allgemeines", "/schulleben/sportliches"],
            ["Fussball", "/schulleben/sportliches/fussball"],
            ["Gymnasiade", "/schulleben/gymnasiade"],
            ["Schneesportlager", "/schulleben/schneesportlager"],
            ["Tenero", "/schulleben/tenero"],
            ["Unihockey", "/schulleben/unihockey"],
            ["Volleyball", "/schulleben/volleyball"],
        ],
        Mediothek: "/schulleben/mediothek",
        "Cucina Collinare": "/schulleben/cucina-collinare",
        Förderverein: "/schulleben/förderverein",
    },
    Maturitätsabteilung: {
        main: "/ma/maturitaesabteilung",
        Aufnahmebedingungen: "/ma/aufnahmebedingungen",
        Profile: "/ma/profile",
        Stundentafel: "/ma/stundentafel",
        "Wahlkurs & Ergänzungsfach": "/ma/wahlkurs-ergaenzungsfach",
        Immersionsunterricht: "/ma/immersionsunterricht",
        Sonderwoche: "/ma/sonderwoche",
        Maturaarbeit: "/ma/maturaarbeit",
        Schülerprojekte: "/ma/schuelerprojekte",
        Maturitätsprüfung: [
            ["Maturitätsprüfung", "/ma/maturitaetspruefung"],
            ["Notenberechnung", "/ma/maturitaetspruefung/notenberechnung"],
            [
                "Maturitätsprüfungskonzepte",
                "/ma/maturitaetspruefung/maturitaetspruefungskonzepte",
            ],

            [
                "Aktuelle Prüfungen",
                "/ma/maturitaetspruefung/aktuelle-pruefungen",
            ],
        ],
        Kosten: "/ma/kosten",
    },
    FMS: {
        main: "/fms",
        Aufnahmebedingungen: "/ma/aufnahmebedingungen",
        Berufsfelder: [
            ["Die Berufsfelder", "/fms/berufsfelder"],
            [
                "Gesundheit / Naturwissenschaften",
                "/fms/berufsfelder/gesundheit-naturwissenschaften",
            ],
            ["Gestaltung und Kunst", "/fms/berufsfelder/gestaltung-und-kunst"],
            ["Pädagogik", "/fms/berufsfelder/paedagogik"],
            ["Soziale Arbeit", "/fms/berufsfelder/soziale-arbeit"],
            ["Berufsfeld Plus-Kurse", "/fms/berufsfelder/plus-kurse"],
        ],
        Stundentafel: "/fms/stundentafel",
        Lehrpläne: "/fms/lehrplaene",
        "Spezielle Unterichtsformen": "/fms/spezielle-unterichtsformen",
        Klassenlager: "/fms/klassenlager",
        "Selbstständige Arbeit": "/fms/selbststaendige-arbeit",
        Fachmittelschulausweis: "/fms/fachmittelschulausweis",
        Fachmaturität: [
            ["Fachmaturitaet", "/fms/fachmaturitaet"],
            [
                "FM - Gesundheit / Naturwissenschaften",
                "/fms/fm-gesundheit-naturwissenschaften",
            ],
            ["FM - Gestaltung und Kunst ", "/fms/fm-gestaltung-und-kunst"],
            ["FM - Pädagogik", "/fms/fm-paedagogik"],
            ["FM - Soziale Arbeit", "/fms/soziale-arbeit"],
            ["Fachmaturitaetsarbeit", "/fms/fachmaturitaetsarbeit"],
        ],
        Kosten: "/fms/kosten",
        "FMS Abschlussprüfungen": "/fms/fms-abschlusspruefungen",
    },
    Unterricht: {
        main: "/unterricht",
        Fächer: "/unterricht/faecher",
        Freifächer: "/unterricht/freifaecher",
        Austausch: "/unterricht/austausch",
        Begabtenförderung: "/unterricht/begabtenförderung",
        "Lernen mit BYOD": [
            ["Lernen mit BYOD", "/unterricht/lernen-mit-byod"],
            [
                "Geräteempfehlungen",
                "/unterricht/lernen-mit-byod/geraeteempfehlungen",
            ],
            ["Gerät kaufen", "/unterricht/lernen-mit-byod/geraet-kaufen"],
        ],
    },
    Dokumente: {
        main: "/dokumente",
    },
    schulNetz: {
        main: "https://portal.sbl.ch/gymow",
    },
    "ICT-Support": {
        main: "/ict-support",
    },
};

export default function Frame({ children }: { children: any }) {
    return (
        <div id={styles.container}>
            <Header />
            <div id={styles.lower}>
                <div id={styles.navbar}>
                    {Object.entries(links).map((item, key) => {
                        return (
                            <div id={styles.navbarItem} key={key}>
                                <Link
                                    to={item[1].main}
                                    className={styles.mainLink}
                                >
                                    {item[0]}
                                </Link>
                                <div className={styles.subContainer}>
                                    {Object.entries(item[1]).map((sub, key) => {
                                        if (sub[0] == "main") {
                                            return undefined;
                                        }
                                        return (
                                            <Link
                                                to={
                                                    typeof sub[1] === "string"
                                                        ? sub[1]
                                                        : sub[1][0][1]
                                                }
                                                className={styles.subNav}
                                                key={key}
                                            >
                                                {sub[0]}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id={styles.content}>
                    {children}
                    <div id={styles.footerContainer}>
                        <p>© {new Date().getFullYear()} Flavian Züllig</p>{" "}
                        <p>sekretariat.gymow@sbl.ch</p>
                        <p>061 552 18 18</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
