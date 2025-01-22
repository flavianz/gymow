import styles from "./Components.module.css";
import { ReactNode } from "react";
import PDF from "../../assets/pdf.svg";

export function Container({ children }: { children: ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}
export function Title({ children }: { children: ReactNode }) {
    return <h2>{children}</h2>;
}
export function SubTitle({ children }: { children: ReactNode }) {
    return <h3>{children}</h3>;
}
export function SubSubTitle({ children }: { children: ReactNode }) {
    return <h4>{children}</h4>;
}
export function Article({ children }: { children: ReactNode }) {
    return <span className={styles.span}>{children}</span>;
}
export function Email({ children }: { children: ReactNode }) {
    return <a href={"mailto:" + children}>{children}</a>;
}
export function Bold({ children }: { children: ReactNode }) {
    return <span style={{ fontWeight: "500" }}>{children}</span>;
}
export function ImageArticle({
    children,
    images,
}: {
    children: ReactNode;
    images: string[];
}) {
    return (
        <span className={styles.imageArticle}>
            <span className={styles.imageArticleText + " " + styles.span}>
                {children}
            </span>
            <div style={{ width: "min-content", marginLeft: "5vw" }}>
                {images.map((image, key) => (
                    <img
                        src={image}
                        alt="Image"
                        key={key}
                        className={styles.imageArticlePic}
                    />
                ))}
            </div>
        </span>
    );
}
export function Link({
    children,
    alternate,
    isPdf = false,
}: {
    children: string;
    alternate?: string;
    isPdf?: boolean;
}) {
    return (
        <a target={"_blank"} href={children}>
            {isPdf && <img src={PDF} alt="PDF" className={styles.pdfIcon} />}
            {alternate ? alternate : children}
        </a>
    );
}

export function Liste({ points }: { points: (string | ReactNode)[] }) {
    return (
        <ul>
            {points.map((point, key) => {
                return <li key={key}>{point}</li>;
            })}
        </ul>
    );
}
