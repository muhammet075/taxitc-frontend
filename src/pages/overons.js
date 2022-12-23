import { useEffect } from "react";
import { Translate } from "../components/translate";

export default function Overons() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <div className="container">
            <h1 id="overonstext">Over ons</h1>
            <p id="overonscontent">hm.</p>
        </div>
    )
  }