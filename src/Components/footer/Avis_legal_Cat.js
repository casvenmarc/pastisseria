import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export function Avis_legal_Cat() {
  //const classes = useStyles();
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Grid container maxWidth>
      

      <Grid item xs={12} sm={12} md={12}>
        <div
          style={{
            marginTop: "150px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Avís legal</h2>
        </div>
        <div
          style={{
            //padding: "20px",
            marginLeft: "20px",
            marginRight: "20px",
            textAlign: "justify",
            fontSize: "16px",
            fontFamily: "Nunito",
          }}
        >
        Avís Legal del domini www.pastisseriamarcel.com corresponent a MARCEL CASANOVAS FELIU (PASTISSERIA MARCEL) (en endavant EL TITULAR) amb NIF:7762708B i domicili a SANT FRANCESC 30, 08859, BEGUES (Barcelona)  i eMail: pastisseriamarcel@gmail.com.
        EL TITULAR es reserva el dret de modificar o suprimir en qualsevol moment i sense previ avís els continguts i serveis que es troben en aquesta web, no adquirint cap responsabilitat per això, així com pel fet de que la informació, mostrada al web, no estigui actualitzada.
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Condicions generals d’utilització de la web</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <p style={{textAlign: "justify", marginRight:"20px"}}> El TITULAR l’informa que, l’accés i utilització d’aquesta pàgina web i totes les URLs, subdominis i directoris inclosos sota aquesta, així com els serveis o continguts que a través d’aquest lloc es pugui obtenir, estan subjectes als terminis recollits i detallats en el mateix Avís Legal. Per tant, si les consideracions detallades en aquests textos legals, no són de la seva conformitat, preguem que no faci ús d’aquesta web, ja que qualsevol utilització que faci d’ella o dels serveis i continguts en ella inclosos, implicarà l’acceptació dels termes legals recollits.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>A causa de la mateixa naturalesa d’internet, donada la possibilitat que es pugui accedir a aquesta pàgina des de qualsevol part del món, els continguts, així com els serveis que en general ofereix EL TITULAR estan accessibles a clients que es mouen en qualsevol país. No obstant això, l’anterior, en sol·licitar la contractació de qualsevol tipus de servei i continguts oferits, EL TITULAR es reserva el dret a rebutjar la prestació de serveis o l’enviament de continguts, en aquells casos que estimi oportú.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>El TITULAR es reserva el dret a realitzar canvis en la web sense previ avís, amb l’objectiu d’actualitzar, corregir, modificar, afegir, cancel·lar o eliminar els continguts o el disseny de la web. Els serveis i continguts de la web són susceptibles d’actualitzar-se periòdicament, i, pel fet que l’actualització de la informació no és immediata, li suggerim que comprovi sempre la vigència i exactitud de la informació, serveis i continguts recollits aquí.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Les condicions i termes d’utilització que es recullen en el present Avís Legal poden canviar, de manera que proposem que revisi aquests termes quan visiti de nou la web o sol·liciti un nou servei. Així mateix el present Avís Legal s’entendrà sense perjudici de qualsevol altres Polítiques i/o Condicions Generals, i particulars, que regulen l’accés a béns i serveis concrets dins de la web.</p>
        </div>
{/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Dret de la propietat intel·lectual i de propietat industrial</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <p style={{textAlign: "justify", marginRight:"20px"}}>  Tant el disseny d’aquest lloc web, els seus codis Font, logotips, imatges, melodies, marques i altres signes distintius que apareixen, pertanyen als seus respectius autors i estan protegits pels corresponents drets de propietat intel·lectual i industrial.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>La seva utilització, reproducció, distribució, comunicació pública, transformació o qualsevol altra acció semblant, està totalment prohibida excepte autorització expressa per escrit del seu creador i/o propietari dels drets.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>En tot cas, EL TITULAR declara el seu respecte als drets de propietat intel·lectual i industrial de tercers; per això, si considera que aquest lloc pugui estar violant els seus drets, preguem que es posi en contacte amb EL TITULAR dirigint-se a través dels mitjans proporcionats en l’encapçalat.</p>
        </div>

        {/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Frames o marcs</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR prohibeix expressament la realització de “framings” o la utilització per part de tercers de qualsevol altre mecanisme que alteri el disseny, configuració original o continguts web.</p>
            
        </div>

        {/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Publicitat</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <p style={{textAlign: "justify", marginRight:"20px"}}>  A la web s’inserirà aquella publicitat d’EL TITULAR o de terceres empreses anunciants que considerem que puguin ser del seu interès.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Sense perjudici de l’establert en la Política de privacitat, EL TITULAR es compromet a no facilitar informació seva als anunciants, excepte dades estadístiques anònimes sobre la utilització de la web, amb la finalitat que es pugui millorar el servei i oferir productes conforme a les expectatives dels usuaris.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>No obstant això, EL TITULAR l’informa que els anunciants i proveïdors, per mitjà de cookies, poden tenir la possibilitat d’obtenir informació sobre vostè, els usos que faci dels serveis i els seus moviments a través de la xarxa. Per no tenir vinculació amb els usos que d’aquesta informació pugui realitzar l’empresa anunciant, EL TITULAR no es fa responsable de la recollida d’informació per aquestes empreses.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}> EL TITULAR pot utilitzar cookies quan un usuari navegui pels seus llocs i pàgines webs. Les cookies que es puguin utilitzar en els llocs i pàgines web d’EL TITULAR s’associen únicament amb el navegador d’un ordinador determinat (un usuari anònim), i no proporcionen per si mateixos cap dada personal de l’usuari. Les cookies serveixen només per a finalitats exclusivament internes, com són les estadístiques d’accés a aquest lloc web. Les cookies utilitzades no poden llegir els arxius cookie creats per altres proveïdors o llocs web. L’usuari té la possibilitat de configurar el seu navegador per ser avisat en pantalla de la recepció de cookies i per impedir la instal·lació de cookies en el seu disc dur. Si us plau, consulti les instruccions i manuals del seu navegador per ampliar aquesta informació.</p>

        </div>

        {/*     /////////////////////////////////////////          */}

                <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Responsabilitats de l’usuari</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <p style={{textAlign: "justify", marginRight:"20px"}}>L’usuari es compromet a utilitzar els serveis de la web d’acord amb els termes expressats en el present Avís Legal, sent el responsable del seu ús correcte.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>L’usuari que actuï contra la imatge, bon nom o reputació d’EL TITULAR, així com qui utilitzi il·lícitament o fraudulentament els dissenys, logos o continguts de la web i/o atempti en qualsevol forma contra els drets de propietat intel·lectual i industrial de la web o dels continguts i serveis d’aquest, serà responsable davant d’EL TITULAR d’aquesta actuació.</p>

        </div>


        {/*     /////////////////////////////////////////          */}

                        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Responsabilitats d'EL TITULAR</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <h6><i><b>Utilització incorrecte:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR ha creat la web per la promoció dels seus productes i/o serveis, però no poden controlar la seva utilització de forma diferent a la prevista en el present Avís Legal; de manera, que l’accés i l’ús correcte de la informació continguda en la web és responsabilitat de qui realitza aquestes accions, no sent responsable EL TITULAR per l’ús incorrecte, il·lícit o negligent que del mateix pugui fer l’usuari.</p>

            <h6><i><b>Continguts:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR facilita tots els continguts de la seva web, sota determinades condicions de bona fe, i s’esforçarà en la mesura del possible perquè els mateixos estiguin actualitzats i vigents; no obstant això, EL TITULAR no pot assumir responsabilitat alguna respecte l’ús o accés que realitzin els usuaris fora de l’àmbit al qual es dirigeix la web, la responsabilitat final caurà sobre l’usuari. Així mateix, EL TITULAR no pot controlar els continguts que no hagin sigut elaborats per ell o per tercers complint el seu encàrrec de manera, que no respondrà en cap cas dels danys, continguts i indisponibilitats tècniques que poguessin causar-se per part d’aquests tercers.</p>
           
            <h6><i><b>Publicitat:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR inclourà en la web publicitat pròpia o de tercers per oferir-li productes o serveis que entenguin que puguin ser del seu interès. No obstant això, i en el que respecte a la publicitat de tercers, EL TITULAR no pot controlar l’aparença d’aquesta publicitat, ni la qualitat i adequació dels productes o serveis a què aquesta es refereix, de manera que no respondrà de cap dany que es pugui generar a l’usuari per aquestes causes atribuïbles a tercers.</p>

            <h6><i><b>Virus:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR es compromet a aplicar en la mesura del possible, les mesures oportunes al seu abast per intentar garantir a l’usuari l’absència en la seva web de: virus, cucs, troians, spam, etc… No obstant això, aquestes mesures no són 100% infal·libles i, per això, EL TITULAR no pot assegurar totalment l’absència d’aquests elements indesitjables. En conseqüència EL TITULAR no serà responsable dels danys que els mateixos poguessin produir a l’usuari.</p>

            <h6><i><b>Fallades tecnològiques:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR posa els mitjans necessaris al seu abast per la continuïtat d’aquesta web i realitzarà els seus millors esforços perquè el mateix no sofreixi interrupcions, però no pot garantir l’absència de fallades tecnològiques, ni la permanent disponibilitat de la web i dels serveis continguts en ell, en conseqüència no assumeix cap responsabilitat pels danys i perjudicis que pot generar-se per la falta de disponibilitat i per les fallades en l’accés ocasionades per desconnexions, avaries, sobrecarregues o caigudes de la xarxa no imputables a EL TITULAR</p>

        {/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Llei aplicable i jurisdicció</h2>
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "0px",
            fontSize: "16px",
            fontFamily: "Nunito",
            textAlign: "justify"
          }}
        >
            <p style={{textAlign: "justify", marginRight:"20px"}}>La llei aplicable en cas de disputa o conflicte d’interpretació dels termes que conformem aquest Avís Legal, així com qualsevol qüestió relacionada amb els serveis de la present web i les seves polítiques, serà l’espanyola.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Amb caràcter general, ens sotmetem a l’estipulat en el Reglament Europeu de Protecció de Dades (RGPD) Reglament (UE) 2016/679 del Parlament Europeu i del Consell de 27 d’abril de 2016, i també, a la Llei de Serveis de Societat de la Informació (LSSICE), Llei 34/2002 d’11 de juliol, de serveis de la societat de la informació i de comerç electrònic.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Perquè la resolució de qualsevol conflicte que pugui sorgir amb ocasió de visita de la web, EL TITULAR i l’usuari se sotmetran al fur que estableixi la normativa vigent.</p>
        </div>

        </div>

        
        


















 
      </Grid>
      
    </Grid>
  );
}

export default Avis_legal_Cat;