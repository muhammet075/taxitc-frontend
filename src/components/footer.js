import { useEffect } from "react";
import { Translate } from "../components/translate";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";
import WhatsAppIco from "../assets/icons/whatsapp.svg";
import mailIco from "../assets/icons/mail.svg";
import phoneIco from "../assets/icons/phone.svg";
import vito1 from "../assets/vitoecht.png";
import Logo from "../assets/Logo.svg";

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Foter() {

    useEffect(() => {
        Translate();
    }, []);

    return (
        <>
            <Swiper
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={25}
                centeredSlides={true}
                navigation
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView="auto"
                autoplayDisableOnInteractio={false}
                loop={true}
                breakpoints={{
                    200: {
                      slidesPerView: 2,
                    },
                    890: {
                      slidesPerView: 3,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                  }}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="footerswiper"
            >
                <SwiperSlide><Image src={vito1} alt="Mercedes-Benz Vito Taxi"/></SwiperSlide>
                <SwiperSlide><Image src={vito1} alt="Mercedes-Benz Vito Taxi"/></SwiperSlide>
                <SwiperSlide><Image src={vito1} alt="Mercedes-Benz Vito Taxi"/></SwiperSlide>
                <SwiperSlide><Image src={vito1} alt="Mercedes-Benz Vito Taxi"/></SwiperSlide>
                <SwiperSlide><Image src={vito1} alt="Mercedes-Benz Vito Taxi"/></SwiperSlide>
                <SwiperSlide><Image src={vito1} alt="Mercedes-Benz Vito Taxi"/></SwiperSlide>
            </Swiper>
    
            <span id="whatsappbtn"><Link href="/"><Image src={WhatsAppIco} alt="Whatsapp Logo"/></Link></span>
            <footer className={styles.footer}>  
                <span></span>
                <div>
                    <section>
                        <ul>
                            <li><Link href="/"><Image src={Logo} alt="Logo van Taxi T.C."/></Link></li>
                            <li>KVK: 000001</li>
                            <li><Link href="/"><Image src={phoneIco} alt="Telefoon Icon"/> 061234567</Link></li>
                            <li><Link href="/"><Image src={mailIco} alt="Mail Icon"/> taxi-tc@hotmail.com</Link></li>
                            <li><Link href="/"><Image src={WhatsAppIco} alt="WhatsApp Icon"/> WhatsApp</Link></li>
                        </ul>

                        <ul>
                            <li><h2 id="footertitel1">Paginas</h2></li>
                            <li><Link href="/" id="footerlink1">Home</Link></li>
                            <li><Link href="/prijzen" id="footerlink2">Prijzen</Link></li>
                            <li><Link href="/overons" id="footerlink3">Over ons</Link></li>
                            <li><Link href="/rijgebieden" id="footerlink4">Rij gebieden</Link></li>
                            <li><Link href="/afspraak" id="footerlink5">Afspraak</Link></li>
                            <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                        </ul>
                        
                        <ul>
                            <li><h2 id="footertitel2">Rij gebieden</h2></li>
                            <li><Link href="plaats/amsterdam">Taxi Amsterdam</Link></li>
                            <li><Link href="plaats/amstelveen">Taxi Amstelveen</Link></li>
                            <li><Link href="plaats/zaandam">Taxi Zaandam</Link></li>
                            <li><Link href="plaats/diemen">Taxi Diemen</Link></li>
                            <li><Link href="plaats/hoofddorp">Taxi Hoofddorp</Link></li>
                            <li><Link href="plaats/haarlem">Taxi Haarlem</Link></li>
                        </ul>

                        <ul>
                            <li><Link href="plaats/haarlem">Taxi Zaandijk</Link></li>
                            <li><Link href="plaats/krommenie">Taxi Krommenie</Link></li>
                            <li><Link href="plaats/assendelft">Taxi Assendelft</Link></li>
                            <li><Link href="plaats/wormerveer">Taxi Wormerveer</Link></li>
                            <li><Link href="plaats/oostzaan">Taxi Oostzaan</Link></li>
                            <li><Link href="plaats/beverwijk">Taxi Beverwijk</Link></li>
                            <li><Link href="plaats/heemskerk">Taxi Heemskerk</Link></li>
                        </ul>
                    </section>

                    <section>
                        <p>&copy; Copyright <span id="currentyear">2022</span> - <span id="footercopyright">Alle rechten voorbehouden.</span></p>
                    </section>
                </div>
            </footer>
        </>
    )
  }