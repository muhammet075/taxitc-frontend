import { useEffect } from "react";
import { Translate } from "../../components/translate";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import arrowIco from "../../assets/icons/arrow.svg";
import goldPhoneIco from "../../assets/icons/goldphone.svg";
import goldMailIco from "../../assets/icons/goldmail.svg";
import WhatsAppIco from "../../assets/icons/whatsapp.svg";

export default function Krommenie() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <Head>
                <title>Taxi T.C. - Taxi Bestellen Krommenie</title>
            </Head>

            <div className="container plaatspagina">
                <span><Link href="/rijgebieden"><Image src={arrowIco} alt="Pijl Icoontje"/></Link><h1>Taxi Krommenie</h1></span>

                <p id="krommenie1">Heeft u een taxi of een lift nodig naar Krommenie? Bel ons dan op: 06 12 34 56 78. Met onze ervaren chauffeurs brengen wij u naar Krommenie of halen wij u hier op. Wij halen u op in een luxe Mercedes-Benz Vito met vele luxe opties. U wordt in de meest comfortabele manier vervoerd.</p>
                <h2 id="krommenie2">Taxi bestellen Krommenie</h2>
                <p id="krommenie3">Neem contact met ons op met de volgende mogelijkheden hieronder om een Taxi te roepen naar Krommenie. De diensten die Taxi T.C. uitvoert wordt onder verplichte vergunning van het ministerie van Verkeer en Waterstaat verricht.</p>
            </div>

            <div className="container afspraak plaatsafspraak">
                <ul>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={goldPhoneIco} alt="Telefoon icoon"/> 06 12 34 56 78</Link></li>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={WhatsAppIco} alt="WhatsApp icoon"/> WhatsApp</Link></li>
                    <li><Link href="mailto:taxi-tc@hotmail.com"><Image src={goldMailIco} alt="Mail icoon"/> Mail</Link></li>
                </ul>
            </div>
        </>
    )
  }