import { useEffect } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import WhatsAppIco from "../assets/icons/whatsapp.svg";

export default function Foter() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <span id="whatsappbtn"><Link href="/"><Image src={WhatsAppIco} alt="Whatsapp Logo"/></Link></span>
            <footer className={styles.footer}>  
                <span></span>
                <div>
                    <h1>footer</h1>
                </div>
            </footer>
        </>
    )
  }