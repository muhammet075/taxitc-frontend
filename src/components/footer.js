import { useEffect } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Foter() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <footer className={styles.footer}>  
            <span></span>
            <div>
                <h1>footer</h1>
            </div>
        </footer>
    )
  }