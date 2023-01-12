import { useEffect, useState } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import DistanceCalculator from "distance-calculator-js";
import styles from "../styles/afspraak.module.css";
import plaatsen from "../../public/plaatsen";
import betaalmethodes from "../assets/betaalmethodes.png";
import autopng from "../assets/autopng.png";
import sklassepng from "../assets/sklassepng.png";
import vitopng from "../assets/vitopng.png";

export default function Afspraak() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    Translate();

    const ophaalplaats = document.querySelector(".ophaalplaats");
    let resultPlaces = document.querySelectorAll(".resultlist");
    let searchPlaceBar = document.querySelector(".searchinput");
    let timedata = document.querySelector("#appt");
    const resultul = document.querySelector(".resultul");
    const calculatebtn = document.querySelector(".calculatebtn");
    const finalPrice = document.querySelector(".totalprice");

    searchPlaceBar.addEventListener("click", () => {
      resultul.classList.remove("displaynone");
    });

    for (let i = 0; i < resultPlaces.length; i++) {
      resultPlaces[i].addEventListener("click", () => {
        searchPlaceBar.value = resultPlaces[i].innerHTML;
        resultul.classList.add("displaynone");
      });
    }

    let radiovoertuig = document.querySelectorAll(".radiovoertuig");

    for (let i = 0; i < radiovoertuig.length; i++) {
      radiovoertuig[i].addEventListener("click", () => {
        if (
          radiovoertuig[i].checked &&
          ophaalplaats.length > 1 &&
          searchPlaceBar.value.length > 1 &&
          document.querySelector(".datepicker").value.length > 1 &&
          document.querySelector("#appt").value.length > 1
        ) {
          calculatebtn.classList.remove("disabledbtn");
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      });
    }

    let totalPrice;
    let plaats1;
    let plaats2;
    let zoekPlaats1;
    let zoekPlaats2;
    let plaats1optie = document.querySelector(".ophaalplaats").value;

    calculatebtn.addEventListener("click", () => {
      let plaatsNamenArray = [];
      let plaatsenData = [plaatsen];

      for (let i = 0; i < plaatsen.length; i++) {
        plaatsNamenArray.push(plaatsen[i].city);
      }

      let plaats2optie = plaatsNamenArray.find(
        (item) => item === document.querySelector(".searchinput").value
      );

      for (let i = 0; i < plaatsenData.length; i++) {
        plaats1 = plaatsenData[i].find((item) => item.city === plaats1optie);
        plaats2 = plaatsenData[i].find((item) => item.city === plaats2optie);

        console.log(plaats1);
        console.log(plaats2);
      }

      try {
        zoekPlaats1 = { lat: plaats1.lat, long: plaats2.lng };
        zoekPlaats2 = { lat: plaats2.lat, long: plaats2.lng };

        let totaalKm = DistanceCalculator.calculate(
          zoekPlaats1,
          zoekPlaats2,
          "km"
        );

        if (document.querySelector("#normaalauto").checked) {
          let kmPrice = totaalKm * 3.11 + 6.83;
          totalPrice = kmPrice.toFixed(2);

          console.log(totalPrice);

          finalPrice.innerHTML = totalPrice;
        } else if (document.querySelector("#bus").checked) {
          let kmPrice = totaalKm * 3.46 + 8.83;
          totalPrice = kmPrice.toFixed(2);

          console.log(totalPrice);

          finalPrice.innerHTML = totalPrice;
        } else if (document.querySelector("#limo").checked) {
          let kmPrice = totaalKm * 3.46 + 8.83;
          totalPrice = kmPrice.toFixed(2);

          console.log(totalPrice);

          finalPrice.innerHTML = totalPrice;
        }
      } catch (e) {}
    });

    const bevestigBtn = document.querySelector(".afspraakbtn");
    let pickDate = document.querySelector(".datepicker");

    bevestigBtn.addEventListener("click", () => {
      console.log(totalPrice);

      let message =
        "Prijs:%20€" +
        totalPrice +
        "%0a" +
        "Ophaalplaats:%20" +
        plaats1optie +
        "%0a" +
        "Afleverplaats:%20" +
        searchPlaceBar.value +
        "%0a" +
        "Datum:%20" +
        pickDate.value;
      +"%20" + timedata.value;

      console.log(message);
      window.location = "https://wa.me/?phone=31614622099&text=" + message;
    });
  });

  function priceCalculate() {
    document.querySelector(".offerte").classList.remove("displaynone");
    document.querySelector(".offertedetails").classList.add("displaynone");
  }

  return (
    <div className={styles.afspraak}>
      <div>
        <Head>
          <title>Taxi T.C. - Afspraak</title>
        </Head>

        <div className="offertedetails">
          <section>
            <h2 id="offertetitle">Waar wil je heen?</h2>
          </section>

          <section>
            <h3 id="ophaaltitle">Ophaal locatie</h3>
            <select className="ophaalplaats">
              <option>Amsterdam</option>
              <option>Zaandam</option>
              <option>Amstelveen</option>
              <option>Weesp</option>
              <option>Zwanenburg</option>
              <option>Oostzaan</option>
              <option>Haarlem</option>
              <option>Hoofddorp</option>
              <option>Badhoevedorp</option>
              <option>Oostzaan</option>
              <option>Landsmeer</option>
            </select>
          </section>

          <section>
            <h3 id="bestemmingtitle">Bestemming</h3>
            <div>
              <section>
                <input
                  className="searchinput"
                  type="text"
                  placeholder="Typ een plaats of een stad in."
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
              </section>
              <ul className="resultul">
                {plaatsen
                  .filter((val) => {
                    if (searchTerm == "") {
                      return null;
                    } else if (
                      val.city.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })
                  .map((val, key) => {
                    return (
                      <li key={key}>
                        <button className="resultlist">{val.city}</button>
                      </li>
                    );
                  })}
              </ul>
              <section className="searchresults"></section>
            </div>
          </section>

          <section>
            <h3 id="datumtitle">Datum en tijdstip</h3>
            <div>
              <input
                type="date"
                className="datepicker"
                min={new Date().toISOString().split("T")[0]}
              />
              <input
                type="time"
                id="appt"
                name="appt"
                min="09:00"
                max="18:00"
                required
              />
            </div>
          </section>

          <section>
            <h3 id="voertuigtitle">Kies voertuig</h3>
            <ul>
              <li>
                <input
                  type="radio"
                  id="normaalauto"
                  name="voertuig"
                  value="normaalauto"
                  className="radiovoertuig"
                />
                <label for="normaalauto">
                  <Image src={autopng} alt="Normaal Auto" />
                  <span id="normaalautotitle">Normaal Auto</span>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="bus"
                  name="voertuig"
                  value="bus"
                  className="radiovoertuig"
                />
                <label for="bus">
                  <Image src={vitopng} alt="Vito Auto" />
                  Bus/Van
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="limo"
                  name="voertuig"
                  value="limo"
                  className="radiovoertuig"
                />
                <label for="limo">
                  <Image src={sklassepng} alt="Limo Auto" />
                  S-Klasse / 7-Serie
                </label>
              </li>
            </ul>
          </section>

          <section>
            <button
              id="berekenprijsbtn"
              className="calculatebtn disabledbtn"
              onClick={priceCalculate}
            >
              Bereken Prijs
            </button>
          </section>
        </div>

        <div className="offerte displaynone">
          <p id="geschatteprijs">Geschatte prijs:</p>
          <span>
            &euro; <p className="totalprice">...</p>
          </span>
          <p>
            <span id="geschatttetxt1">
            De geschatte prijs kan met enkele euro's minder zijn of de geschatte
            prijs kan ook oplopen met enkele euro's. Dat hangt af van de
            ophaalstraat en afleverstraat.
            </span>
            <span id="geschatttetxt2">
            Om uw afspraak te bevestigen klikt u hieronder op de bevestig
            knop en u zal doorverwezen worden naar WhatsApp. Na dat uw bericht
            succesvol verstuurd is, krijgt u een Tikkie als aanbetaling van de
            helft van de prijs wat hierboven is opgenoemd. Dan is uw afspraak
            met succes geregistreerd.
            </span>
          </p>
          <button id="afspraakbevestigenbtn" className="afspraakbtn">Bevestig Afspraak</button>
        </div>
      </div>
      <Image src={betaalmethodes} />
    </div>
  );
}
