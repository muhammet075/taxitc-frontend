import { useEffect, useState, useRef } from "react";
import { Translate } from "../components/translate"; 
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/header.module.css";
import Logo from "../assets/Logo.svg";
import MailIco from "../assets/icons/mail.svg";
import PhoneIco from "../assets/icons/phone.svg";
import hamburgerIco from "../assets/icons/hamburger.svg";
import closeIco from "../assets/icons/close.svg";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import UKFlag from "../assets/ukflag.svg";
import NLFlag from "../assets/nlflag.svg";
import sessionstorage from "sessionstorage";

function Header() {

    useEffect(() => {
            let flagBtn = document.querySelector("#flagBtn");
        });

        function toggleLanguage(){

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

        function openHamburgerMenu(){
            document.querySelector(".hamburgermenu").classList.remove("removehamburger");
            document.querySelector(".hamburgermenu").classList.add("openhamburger");
        }

        function closeHamburgerMenu(){
            document.querySelector(".hamburgermenu").classList.remove("openhamburger");
            document.querySelector(".hamburgermenu").classList.add("removehamburger");
        }


    return(      
        <header className={styles.header}>  
            <div>
                <div>
                    <Link href="/"><Image src={Logo} alt="Logo van Taxi T.C."/></Link>
                    <section>
                        <Link href="#"><span><Image src={MailIco} alt="Mail icoontje"/>taxi-tc@hotmail.com</span></Link>
                        <Link href="#"><span><Image src={PhoneIco} alt="Telefoon icoontje"/>0614622099</span></Link>
                        <Link href="#"><span><Image src={WhatsAppIco} alt="WhatsApp icoontje"/>WhatsApp</span></Link>
                    </section>
                </div>
            </div>
            <div>
                <nav>
                    <button onClick={openHamburgerMenu} id="hamburgerbtn"><Image src={hamburgerIco} alt="Hamburger menu icoon"/></button>
                    <section className="hamburgermenu">
                        <ul>
                            <li><Link href="/" id="nav1" onClick={closeHamburgerMenu}>Home</Link></li>
                            <li><Link href="/prijzen" id="nav2" onClick={closeHamburgerMenu}>Prijzen</Link></li>
                            <li><Link href="/overons" id="nav3" onClick={closeHamburgerMenu}>Over ons</Link></li>
                            <li><Link href="/rijgebieden" id="nav4" onClick={closeHamburgerMenu}>Rij gebieden</Link></li>
                            <li><Link href="/afspraak" id="nav5" onClick={closeHamburgerMenu}>Afspraak</Link></li>
                        </ul>
                        <button onClick={closeHamburgerMenu} id="hamburgerclosebtn"><Image src={closeIco} alt="Kruis icoon"/></button>
                    </section>
                    <button onClick={toggleLanguage} id="flagBtn" className="nl"><Image id="ukflag" src={UKFlag} alt="UK Vlag"/><Image id="nlflag" src={NLFlag} alt="UK Vlag"/></button>
                </nav>
            </div>
            <div></div>
        </header>
    )
  }
  
  export default Header;