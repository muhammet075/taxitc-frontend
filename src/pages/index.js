import { useEffect } from "react";
import { Translate } from "../components/translate";
import Hero from '../components/hero';
import PriceCalculator from '../components/pricecalculator';

export default function Home() {

  useEffect(() => {
    Translate();
  });

  return (
    <div>
      <Hero/>
      <PriceCalculator/>
    </div>
  )
}

