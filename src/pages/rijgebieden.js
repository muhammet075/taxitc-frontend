import { useEffect } from "react";
import { Translate } from "../components/translate";

export default function Rijgebieden() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <div className="container">
            <h1 id="rijgebiedentext">Rij gebieden</h1>
            <p id="rijgebiedencontent">hm.</p>
        </div>
    )
  }