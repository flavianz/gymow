import styles from "./Frame.module.css";
import Header from "../Header/Header.tsx";
import { Link } from "react-router-dom";

const links: {
    [key: string]: {
        main: string;
        [other: string]: string;
    };
} = {
    Schulleben: {
        main: "/schulleben",
        Leitbild: "/schulleben/leitbild",
        Organisationseinheit: "/schulleben/organisationseinheit",
        Terminkalender: "/schulleben/terminkalender",
        Beratung: "/schulleben/beratung",
        Kulturelles: "/schulleben/kulturelles",
        Sportliches: "/schulleben/sportliches",
        Mediothek: "/schulleben/mediothek",
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
        Maturitätsprüfung: "/ma/maturitaetspruefung",
        Kosten: "/ma/kosten",
    },
    FMS: {
        main: "/fms",
        Aufnahmebedingungen: "/ma/aufnahmebedingungen",
        Berufsfelder: "/ma/berufsfelder",
        Stundentafel: "/ma/stundentafel",
        Lehrpläne: "/ma/lehrplaene",
        "Spezielle Unterichtsformen": "/ma/spezielle-unterichtsformen",
        Klassenlager: "/ma/klassenlager",
        "Selbstständige Arbeit": "/ma/selbststaendige-arbeit",
        Fachmittelschulausweis: "/ma/fachmittelschulausweis",
        Fachmaturität: "/ma/fachmaturitaet",
        Kosten: "/ma/kosten",
        "FMS Abschlussprüfungen": "/ma/fms-abschlussprüfungen",
    },
    Unterricht: {
        main: "/unterricht",
        Fächer: "/unterricht/faecher",
        Freifächer: "/unterricht/freifaecher",
        Austausch: "/unterricht/austausch",
        Begabtenförderung: "/unterricht/begabtenförderung",
        "Lernen mit BYOD": "/unterricht/byod",
    },
    Dokumente: {
        main: "/dokumente",
    },
    SchulNetz: {
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
                                                to={sub[1]}
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
