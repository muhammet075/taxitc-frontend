import { useEffect, useState, useRef } from "react";
import { Translate } from "../components/translate"; 
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "../assets/Logo.svg";
import MailIco from "../assets/icons/mail.svg";
import PhoneIco from "../assets/icons/phone.svg";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import UKFlag from "../assets/ukflag.svg";
import NLFlag from "../assets/nlflag.svg";
import sessionstorage from "sessionstorage";

function Header() {

    useEffect(() => {
            let flagBtn = document.querySelector("#flagBtn");
        });

        function sayhello(){

            if (flagBtn.classList.contains("en")){
                flagBtn.classList.remove("en")
                flagBtn.classList.add("nl")

                
                sessionstorage.setItem("language", "nl");
                console.log("session language:", sessionstorage.getItem("language"));
            } else if (flagBtn.classList.contains("nl")){
                flagBtn.classList.remove("nl")
                flagBtn.classList.add("en")

                sessionstorage.setItem("language", "en");
                console.log("session language:", sessionstorage.getItem("language"));               
            }
      
            Translate();
        }


    return(      
        <header className={styles.header}>  
            <div>
                <div>
                    <Image src={Logo} alt="Logo van Taxi T.C."/>
                    <section>
                        <Link href="#"><span><Image src={MailIco} alt="Mail icoontje"/>taxitc@gmail.com</span></Link>
                        <Link href="#"><span><Image src={PhoneIco} alt="Telefoon icoontje"/>061234567</span></Link>
                        <Link href="#"><span><Image src={WhatsAppIco} alt="WhatsApp icoontje"/>WhatsApp</span></Link>
                    </section>
                </div>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><Link href="/" id="nav1">Home</Link></li>
                        <li><Link href="/prijzen" id="nav2">Prijzen</Link></li>
                        <li><Link href="/overons" id="nav3">Over ons</Link></li>
                        <li><Link href="/rijgebieden" id="nav4">Rij gebieden</Link></li>
                        <li><Link href="/afspraak" id="nav5">Afspraak</Link></li>
                        <li><button onClick={sayhello} id="flagBtn" className="nl"><Image id="ukflag" src={UKFlag} alt="UK Vlag"/><Image id="nlflag" src={NLFlag} alt="UK Vlag"/></button></li>
                    </ul>
                </nav>
            </div>
            <div></div>
        </header>
    )
  }
  
  export default Header;