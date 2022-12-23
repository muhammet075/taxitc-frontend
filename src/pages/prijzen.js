import { useEffect } from "react";
import { Translate } from "../components/translate";
import PriceCalculator from '../components/pricecalculator';

export default function Prijzen() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <div className="container">
                <h1 id="prijstext">Prijzen</h1>
                <p id="prijscontent">U kunt ons bellen op: 06123456 voor meer informatie voor de prijzen. U kunt ook de onderstaande prijs calculator gebruiken om een schatting van het totale bedrag te krijgen van uw rit.</p>
            </div>
            <PriceCalculator/>
        </>
    )
  }