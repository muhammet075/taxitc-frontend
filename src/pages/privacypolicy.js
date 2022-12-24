import { useEffect } from "react";
import { Translate } from "../components/translate";
import PriceCalculator from '../components/pricecalculator';
import Head from "next/head";

export default function Privacypolicy() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <Head>
                <title>Taxi T.C. - Privacy Policy</title>
            </Head>

            <div className="container">
                <h1>Privacy Policy</h1>
                <p>Comming Soon</p>
            </div>
        </>
    )
  }