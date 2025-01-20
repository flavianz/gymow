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
        Leitbild: "/leitbild",
        Organisationseinheit: "/organisationseinheit",
        Terminkalender: "/leitbild",
        Beratung: "/leitbild",
        Kulturelles: "/leitbild",
        Sportliches: "/leitbild",
        Mediothek: "/leitbild",
        Förderverein: "/leitbild",
    },
    Maturitätsabteilung: {
        main: "/schulleben",
        Leitbild: "/leitbild",
    },
    FMS: {
        main: "/schulleben",
        Leitbild: "/leitbild",
    },
    Unterricht: {
        main: "/schulleben",
        Leitbild: "/leitbild",
    },
    Downloads: {
        main: "/schulleben",
        Leitbild: "/leitbild",
    },
    SchulNetz: {
        main: "/schulleben",
        Leitbild: "/leitbild",
    },
    "ICT-Support": {
        main: "/schulleben",
        Leitbild: "/leitbild",
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
                                            <>
                                                <Link
                                                    to={sub[1]}
                                                    className={styles.subNav}
                                                    key={key}
                                                >
                                                    {sub[0]}
                                                </Link>
                                                <br />{" "}
                                            </>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div id={styles.content}>{children}</div>
            </div>
        </div>
    );
}
