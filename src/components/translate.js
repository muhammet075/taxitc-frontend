
import sessionstorage from "sessionstorage";
import translations from "../../public/translations";


export function Translate(){

    const language = sessionstorage.getItem("language");
    console.log(language);

    const UKFlag = document.querySelector("#ukflag");
    const NLFlag = document.querySelector("#nlflag");
        
    
    if (language === "nl"){
        console.log(translations[0].nl);

        UKFlag.style.display = "block";
        NLFlag.style.display = "none";

        document.querySelector("#nav1").innerHTML = translations[0].nl[0].nav1;
        document.querySelector("#nav2").innerHTML = translations[0].nl[0].nav2;
        document.querySelector("#nav3").innerHTML = translations[0].nl[0].nav3;
        document.querySelector("#nav4").innerHTML = translations[0].nl[0].nav4;
        document.querySelector("#nav5").innerHTML = translations[0].nl[0].nav5;

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].nl[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].nl[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].nl[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].nl[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].nl[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].nl[0].herobtn;
        } catch(e){} 

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].nl[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].nl[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].nl[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].nl[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].nl[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].nl[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].nl[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].nl[0].kmamountlabel;
        } catch(e){} 






        try{
            document.querySelector("#prijstext").innerHTML = translations[0].nl[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].nl[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].nl[0].overonstext;
            document.querySelector("#overonscontent").innerHTML = translations[0].nl[0].overonscontent;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].nl[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent").innerHTML = translations[0].nl[0].rijgebiedencontent;    
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].nl[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].nl[0].afspraakcontent;    
        } catch(e){}


    } else if (language === "en") {
        console.log(translations[0].en[0].nav1);

        UKFlag.style.display = "none";
        NLFlag.style.display = "block";

        try{
            document.querySelector("#nav1").innerHTML = translations[0].en[0].nav1;
            document.querySelector("#nav2").innerHTML = translations[0].en[0].nav2;
            document.querySelector("#nav3").innerHTML = translations[0].en[0].nav3;
            document.querySelector("#nav4").innerHTML = translations[0].en[0].nav4;
            document.querySelector("#nav5").innerHTML = translations[0].en[0].nav5;
        } catch(e){} 

        try{
            document.querySelector("#herotitel").innerHTML = translations[0].en[0].herotitel;
            document.querySelector("#heropoint1").innerHTML = translations[0].en[0].heropoint1;
            document.querySelector("#heropoint2").innerHTML = translations[0].en[0].heropoint2;
            document.querySelector("#heropoint3").innerHTML = translations[0].en[0].heropoint3;
            document.querySelector("#heropoint4").innerHTML = translations[0].en[0].heropoint4;
            document.querySelector("#herobtn").innerHTML = translations[0].en[0].herobtn;
        } catch(e){}

        try{
            document.querySelector("#calculatortitel1").innerHTML = translations[0].en[0].calculatortitel1;
            document.querySelector("#calculatortitel2").innerHTML = translations[0].en[0].calculatortitel2;
            document.querySelector("#calculatortext1").innerHTML = translations[0].en[0].calculatortext1;
            document.querySelector("#calculatortext2").innerHTML = translations[0].en[0].calculatortext2;
            document.querySelector("#calculatortext3").innerHTML = translations[0].en[0].calculatortext3;
            document.querySelector("#calculatortext4").innerHTML = translations[0].en[0].calculatortext4;
            document.querySelector("#calculatorbtn").innerHTML = translations[0].en[0].calculatorbtn;
            document.querySelector("#kmamountlabel").innerHTML = translations[0].en[0].kmamountlabel;
        } catch(e){} 
        

        try{
            document.querySelector("#prijstext").innerHTML = translations[0].en[0].prijstext;
            document.querySelector("#prijscontent").innerHTML = translations[0].en[0].prijscontent;
        } catch(e){}

        try{
            document.querySelector("#overonstext").innerHTML = translations[0].en[0].overonstext;
            document.querySelector("#overonscontent").innerHTML = translations[0].en[0].overonscontent;    
        } catch(e){}

        try{
            document.querySelector("#rijgebiedentext").innerHTML = translations[0].en[0].rijgebiedentext;
            document.querySelector("#rijgebiedencontent").innerHTML = translations[0].en[0].rijgebiedencontent;    
        } catch(e){}

        try{
            document.querySelector("#afspraaktext").innerHTML = translations[0].en[0].afspraaktext;
            document.querySelector("#afspraakcontent").innerHTML = translations[0].en[0].afspraakcontent;    
        } catch(e){}


    }



}