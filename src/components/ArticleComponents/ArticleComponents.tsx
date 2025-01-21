import styles from "./Components.module.css";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
    return <div className={styles.container}>{children}</div>;
}
export function Title({ children }: { children: ReactNode }) {
    return <h2>{children}</h2>;
}
export function SubTitle({ children }: { children: ReactNode }) {
    return <h3>{children}</h3>;
}
export function Article({ children }: { children: ReactNode }) {
    return <span className={styles.span}>{children}</span>;
}
export function Email({ children }: { children: ReactNode }) {
    return <a href={"mailto:" + children}>{children}</a>;
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
export function Link({ children }: { children: string }) {
    return (
        <a target={"_blank"} href={children}>
            {children}
        </a>
    );
}
