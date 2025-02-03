import styles from "./Frame.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import BurgerMenu from "../../assets/menu-burger-horizontal-svgrepo-com.svg";

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
        Beratung: [
            ["Intern", "/schulleben/beratung/intern"],
            ["Extern", "/schulleben/beratung/extern"],
        ],
        Kulturelles: [
            ["Blickfeld", "/schulleben/kulturelles/blickfeld"],
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
            ["Gymnasiade", "/schulleben/sportliches/gymnasiade"],
            ["Schneesportlager", "/schulleben/sportliches/schneesportlager"],
            ["Tenero", "/schulleben/sportliches/tenero"],
            ["Unihockey", "/schulleben/sportliches/unihockey"],
            ["Volleyball", "/schulleben/sportliches/volleyball"],
        ],
        Mediothek: "/schulleben/mediothek",
        "Cucina Collinare": "/schulleben/cucina-collinare",
        Förderverein: "/schulleben/foerderverein",
    },
    Maturitätsabteilung: {
        main: "/ma",
        Aufnahmebedingungen: "/ma/ma-aufnahmebedingungen",
        Profile: "/ma/profile",
        Stundentafel: "/ma/ma-stundentafel",
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
        Kosten: "/ma/ma-kosten",
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
    const isTouch = "ontouchstart" in document.documentElement;
    const location = useLocation();
    const [ratio, setRatio] = useState<number>(
        window.innerWidth / window.innerHeight,
    );
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [openedTabMobile, setOpenedTabMobile] = useState<number[]>([]);
    useEffect(() => {
        function update() {
            setRatio(window.innerWidth / window.innerHeight);
        }
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    return (
        <div id={styles.container}>
            <div id={styles.headerContainer}>
                <a id={styles.icon} href={"/"}>
                    <span style={{ fontWeight: "700" }}>Gym</span> Oberwil
                </a>
                {ratio > 0.8 ? (
                    <div id={styles.linkContainer}>
                        <a href={"/#/events"} className={styles.link}>
                            Events
                        </a>
                        <a href={"/#/aktuelles"} className={styles.link}>
                            Aktuelles
                        </a>
                        <a href={"/#/kontakt"} className={styles.link}>
                            Kontakt
                        </a>
                        {ratio < 1 && (
                            <img
                                src={BurgerMenu}
                                alt="Menu"
                                id={styles.burgerMenu}
                                onClick={() => setMobileNavOpen(!mobileNavOpen)}
                            />
                        )}
                    </div>
                ) : (
                    <img
                        src={BurgerMenu}
                        alt="Menu"
                        id={styles.burgerMenu}
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    />
                )}
            </div>
            <div hidden={!mobileNavOpen} id={styles.mobileNavContainer}>
                <div id={styles.mobileLinksContainer}>
                    <p>Events</p>
                    <p>Aktuelles</p>
                    <p>Kontakt</p>
                </div>
                <div id={styles.mobileNav}>
                    {Object.entries(links).map((item, key) => {
                        return (
                            <div
                                id={styles.navbarItem}
                                key={key}
                                className={
                                    (openedTabMobile.includes(key)
                                        ? styles.navbarItemOpen
                                        : "") +
                                    " " +
                                    (!isTouch ? styles.navbarItemHover : "")
                                }
                            >
                                <div id={styles.mainLinkContainer}>
                                    <Link
                                        to={item[1].main}
                                        className={styles.mainLink}
                                        onClick={() => setMobileNavOpen(false)}
                                    >
                                        {item[0]}
                                    </Link>
                                    {Object.values(item[1]).length > 1 && (
                                        <DownArrow
                                            onClick={() => {
                                                if (
                                                    openedTabMobile.includes(
                                                        key,
                                                    )
                                                ) {
                                                    setOpenedTabMobile([
                                                        ...openedTabMobile.filter(
                                                            (i) => i != key,
                                                        ),
                                                    ]);
                                                } else {
                                                    setOpenedTabMobile([
                                                        ...openedTabMobile,
                                                        key,
                                                    ]);
                                                }
                                            }}
                                        />
                                    )}
                                </div>
                                <div className={styles.subContainer}>
                                    {Object.entries(item[1]).map((sub, key) => {
                                        if (sub[0] == "main") {
                                            return undefined;
                                        }
                                        const selected =
                                            typeof sub[1] === "string"
                                                ? location.pathname.startsWith(
                                                      sub[1],
                                                  )
                                                : Object.values(sub[1])
                                                      .map((i) => i[1])
                                                      .includes(
                                                          location.pathname,
                                                      );

                                        return (
                                            <Link
                                                to={
                                                    typeof sub[1] === "string"
                                                        ? sub[1]
                                                        : sub[1][0][1]
                                                }
                                                className={
                                                    styles.subNav +
                                                    " " +
                                                    (selected
                                                        ? styles.linkOpen
                                                        : "")
                                                }
                                                onClick={() =>
                                                    setMobileNavOpen(false)
                                                }
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
            </div>
            {!mobileNavOpen && (
                <div id={styles.lower}>
                    {ratio > 1 && (
                        <div id={styles.navbar}>
                            {Object.entries(links).map((item, key) => {
                                return (
                                    <div
                                        id={styles.navbarItem}
                                        key={key}
                                        className={styles.navbarItemHover}
                                    >
                                        <Link
                                            to={item[1].main}
                                            className={styles.mainLink}
                                        >
                                            {item[0]}
                                        </Link>
                                        <div className={styles.subContainer}>
                                            {Object.entries(item[1]).map(
                                                (sub, key) => {
                                                    if (sub[0] == "main") {
                                                        return undefined;
                                                    }
                                                    const selected =
                                                        typeof sub[1] ===
                                                        "string"
                                                            ? location.pathname.startsWith(
                                                                  sub[1],
                                                              )
                                                            : Object.values(
                                                                  sub[1],
                                                              )
                                                                  .map(
                                                                      (i) =>
                                                                          i[1],
                                                                  )
                                                                  .includes(
                                                                      location.pathname,
                                                                  );

                                                    return (
                                                        <Link
                                                            to={
                                                                typeof sub[1] ===
                                                                "string"
                                                                    ? sub[1]
                                                                    : sub[1][0][1]
                                                            }
                                                            className={
                                                                styles.subNav +
                                                                " " +
                                                                (selected
                                                                    ? styles.linkOpen
                                                                    : "")
                                                            }
                                                            key={key}
                                                        >
                                                            {sub[0]}
                                                        </Link>
                                                    );
                                                },
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    <div id={styles.contentTab}>
                        <div>{getTabBar(location.pathname)}</div>
                        <div id={styles.content}>
                            {children}
                            <div id={styles.footerContainer}>
                                <p>
                                    © {new Date().getFullYear()} Flavian Züllig
                                </p>
                                <p>sekretariat.gymow@sbl.ch</p>
                                <p>061 552 18 18</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function getTabBar(pathname: string) {
    let tabs: string[][] = [];
    for (let section of Object.values(links)) {
        if (Object.values(section).includes(pathname)) {
            return undefined;
        }
        let currTabs = Object.values(section)
            .filter((i) => typeof i === "object")
            .filter((i) => i.map((a) => a[1]).includes(pathname));
        if (currTabs.length > 0) {
            tabs = currTabs[0];
            break;
        }
    }
    if (tabs.length === 0) {
        return undefined;
    }
    return (
        <div id={styles.tabContainer}>
            {tabs.map((tab, key) => {
                return (
                    <Link
                        to={tab[1]}
                        className={styles.tabItemContainer}
                        key={key}
                    >
                        {tab[0]}
                        {tab[1] === pathname && (
                            <div className={styles.selector}></div>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}

function DownArrow({ onClick }: { onClick: () => void }) {
    return (
        <svg
            className={styles.downArrow}
            viewBox="0 0 100 100"
            onClick={onClick}
        >
            <g>
                <path
                    d="M78.466,35.559L50.15,63.633L22.078,35.317c-0.777-0.785-2.044-0.789-2.828-0.012s-0.789,2.044-0.012,2.827L48.432,67.58
		c0.365,0.368,0.835,0.563,1.312,0.589c0.139,0.008,0.278-0.001,0.415-0.021c0.054,0.008,0.106,0.021,0.16,0.022
		c0.544,0.029,1.099-0.162,1.515-0.576l29.447-29.196c0.785-0.777,0.79-2.043,0.012-2.828S79.249,34.781,78.466,35.559z"
                />
            </g>
        </svg>
    );
}
