import Header from "../components/Header";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className={styles["title-homepage"]}>Gibran</h1>
    </>
  );
}
