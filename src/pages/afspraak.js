import { useEffect } from "react";
import { Translate } from "../components/translate";

export default function Afspraak() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <div className="container">
            <h1 id="afspraaktext">Afspraak</h1>
            <p id="afspraakcontent">hm.</p>
        </div>
    )
  }