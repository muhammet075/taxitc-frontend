import { useEffect } from "react";
import { Translate } from "../components/translate";
import Image from "next/image";
import Link from "next/link";
import arrowIco from "../assets/icons/arrow.svg";
import Head from "next/head";

export default function Rijgebieden() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
        <Head>
            <title>Taxi T.C. - Rij gebieden</title>
        </Head>

            <div className="container rijgebieden">
                <section>
                    <h1 id="rijgebiedentext">Rij gebieden</h1>
                    <p id="rijgebiedencontent1">Bekijk hieronder de meest beroemde plaatsen waar Taxi T.C. naar toe rijdt. Wilt u meer informatie lezen van één van de plaatsnamen hieronder? Klik op de plaatsnaam die u wilt en lees meer.</p>
                    <h2 id="rijgebiedencontent2">Beroemde gebieden</h2>
                </section>

                <div>
                    <Link href="/amsterdam">
                        <section>
                            <h3>Amsterdam <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/amstelveen">
                        <section>
                            <h3>Amstelveen<Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/zaandam">
                        <section>
                            <h3>Zaandam <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/diemen">
                        <section>
                            <h3>Diemen <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/hoofddorp">
                        <section>
                            <h3>Hoofddorp <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/haarlem">
                        <section>
                            <h3>Haarlem <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/zaandijk">
                        <section>
                            <h3>Zaandijk <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/krommenie">
                        <section>
                            <h3>Krommenie <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/assendelft">
                        <section>
                            <h3>Assendelft <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/wormerveer">
                        <section>
                            <h3>Wormerveer <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/oostzaan">
                        <section>
                            <h3>Oostzaan <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/beverwijk">
                        <section>
                            <h3>Beverwijk <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>

                    <Link href="/heemskerk">
                        <section>
                            <h3>Heemskerk <Image src={arrowIco} alt="Pijl Icoon"/></h3> 
                        </section>
                    </Link>
                </div>
            </div>
        </>
    )
  }