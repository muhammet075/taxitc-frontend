import { useEffect } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import goldMailIco from "../assets/icons/goldmail.svg";
import goldPhoneIco from "../assets/icons/goldphone.svg";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import Head from "next/head";

export default function Afspraak() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <Head>
                <title>Taxi T.C. - Afspraak</title>
            </Head>
            
            <div className="container afspraak">
                <h1 id="afspraaktext">Afspraak</h1>
                <p id="afspraakcontent">Wilt u een afspraak inplannen? Dat kan, neem contact met ons op door ons te bellen via 06 12 34 56 78. U kunt ons ook een berichtje sturen via WhatsApp of u kunt ons ook mailen. Hieronder ziet u een overzicht van de mogelijkheden om een afspraak te maken.</p>
                <ul>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={goldPhoneIco} alt="Telefoon icoon"/> 06 12 34 56 78</Link></li>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={WhatsAppIco} alt="WhatsApp icoon"/> WhatsApp</Link></li>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={goldMailIco} alt="Mail icoon"/> Mail</Link></li>
                </ul>
            </div>
        </>
    )
  }