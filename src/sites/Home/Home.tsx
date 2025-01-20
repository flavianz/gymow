import styles from "./Home.module.css";
import Frame from "../../components/Frame/Frame.tsx";
import Banner from "../../assets/home-banner.jpg";

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
        </Frame>
    );
}
