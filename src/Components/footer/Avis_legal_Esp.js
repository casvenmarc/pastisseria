import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

export function Avis_legal_Esp() {
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
          <h2>Aviso legal</h2>
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
        Aviso Legal del dominio www.pastisseriamarcel.com  correspondiente a MARCEL CASANOVAS FELIU (PASTISSERIA MARCEL) (en adelante EL TITULAR) con NIF:7762708B y domicilio en SANT FRANCESC 30, 08859, BEGUES (Barcelona)  y eMail: pastisseriamarcel@gmail.com.EL TITULAR se reserva el derecho de modificar o suprimir en cualquier momento y sin previo aviso los contenidos y servicios que se encuentran en esta web, no adquiriendo responsabilidad alguna por ello, así como por el hecho de no estar actualizada la información.
        </div>
        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Condiciones generales de utilización de la web</h2>
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
            <p style={{textAlign: "justify", marginRight:"20px"}}> EL TITULAR le informa que, el acceso y utilización de esta página web y todas las URLs, subdominios y directorios incluidos bajo la misma, así como los servicios o contenidos que a través de este sitio se puedan obtener, están sujetos a los términos recogidos y detallados en el propio Aviso Legal, en la Política de Privacidad y Política de Cookies, sin perjuicio de que el acceso a alguno de dichos servicios o contenidos pueda precisar de la aceptación de unas condiciones generales, particulares o adicionales.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}> Por consiguiente, si las consideraciones detalladas en estos textos legales, no son de su conformidad, rogamos que no haga uso de esta web, ya que cualquier utilización que haga de ella o de los servicios y contenidos en ella incluidos, implicará la aceptación de los términos legales recogidos.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}> Debido a la propia naturaleza de Internet, dada la posibilidad de que se pueda acceder a esta página desde cualquier parte del mundo, los contenidos, así como los servicios que en general ofrece EL TITULAR están accesibles a clientes que se mueven en cualquier país. No obstante, lo anterior, al solicitar la contratación de cualquier tipo de servicio y contenidos ofrecidos, EL TITULAR se reserva el derecho a rechazar la prestación de servicios o el envío de contenidos, en aquellos casos que estime oportuno.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR se reserva el derecho a realizar cambios en la web sin previo aviso, con el objeto de actualizar, corregir, modificar, añadir, cancelar o eliminar los contenidos o el diseño de la web. Los servicios y contenidos de la web son susceptibles de actualizarse periódicamente, y, debido a que la actualización de la información no es inmediata, le sugerimos que compruebe siempre la vigencia y exactitud de la información, servicios y contenidos recogidos aquí.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Las condiciones y términos de utilización que se recogen en el presente Aviso Legal pueden cambiar, por lo que le proponemos que revise estos términos cuando visite de nuevo la web o solicite un nuevo servicio. Así mismo, el presente Aviso Legal se entenderá sin perjuicio de cualesquiera otras Políticas y/o Condiciones Generales, y particulares, que regulen el acceso a bienes y servicios concretos dentro de la web.</p>
        </div>
{/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Derechos de propiedad intelectual y de propiedad industrial</h2>
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
            <p style={{textAlign: "justify", marginRight:"20px"}}> Tanto el diseño de este sitio web, sus códigos fuente, logotipos, imágenes, melodías, marcas y demás signos distintivos que aparecen, pertenecen a sus respectivos autores y están protegidos por los correspondientes derechos de propiedad intelectual e industrial.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Su utilización, reproducción, distribución, comunicación pública, transformación o cualquier otra acción semejante, está totalmente prohibida salvo autorización expresa por escrito de su creador y/o propietario de los derechos.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>En todo caso, EL TITULAR declara su respeto a los derechos de propiedad intelectual e industrial de terceros; por ello, si considera que este sitio pudiera estar violando sus derechos, rogamos se ponga en contacto con EL TITULAR dirigiéndose a través de los medios proporcionados en el encabezado.</p>
        </div>

        {/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Frames o marcos</h2>
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
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR prohíbe expresamente la realización de "framings" o la utilización por parte de terceros de cualesquiera otros mecanismos que alteren el diseño, configuración original o contenidos web.</p>
            
        </div>

        {/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Publicidad</h2>
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
            <p style={{textAlign: "justify", marginRight:"20px"}}>  En la web se insertará aquella publicidad de EL TITULAR o de terceras empresas anunciantes que consideremos pueda ser de su interés.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}> Sin perjuicio de lo establecido en la Política de Privacidad, EL TITULAR se compromete a no facilitar información suya a los anunciantes, salvo datos estadísticos anónimos sobre la utilización de la web, con la finalidad de que se pueda mejorar el servicio y ofrecer productos conforme a las expectativas de los usuarios.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>No obstante, EL TITULAR le informa de que los anunciantes y proveedores, por medio de cookies, pueden tener la posibilidad de obtener información sobre usted, los usos que hace de los servicios y sus movimientos a través de la red. Por no tener vinculación con los usos que de dicha información pueda realizar la empresa anunciante, EL TITULAR no se hace responsable de la recogida de información por dichas empresas.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}> EL TITULAR puede utilizar cookies cuando un usuario navega por sus sitios y páginas web. Las cookies que se puedan utilizar en los sitios y páginas web de EL TITULAR se asocian únicamente con el navegador de un ordenador determinado (un usuario anónimo), y no proporcionan por sí mismas ningún dato personal del usuario. Las cookies sirven solo para fines exclusivamente internos, como son las estadísticas de acceso a este sitio web. Las cookies utilizadas no pueden leer los archivos cookie creados por otros proveedores o sitios web. El Usuario tiene la posibilidad de configurar su navegador para ser avisado en pantalla de la recepción de cookies y para impedir la instalación de cookies en su disco duro. Por favor, consulte las instrucciones y manuales de su navegador para ampliar esta información.</p>

        </div>

        {/*     /////////////////////////////////////////          */}

                <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Responsabilidades del usuario</h2>
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
            <p style={{textAlign: "justify", marginRight:"20px"}}>El usuario se compromete a utilizar los servicios de la web de acuerdo con los términos expresados en el presente Aviso Legal, siendo responsable de su uso correcto.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>El usuario que actúe contra la imagen, buen nombre o reputación de EL TITULAR, así como quien utilice ilícita o fraudulentamente los diseños, logos o contenidos de la web y/o atente en cualquier forma contra los derechos de propiedad intelectual e industrial de la web o de los contenidos y servicios del mismo, será responsable frente a EL TITULAR de su actuación.</p>

        </div>


        {/*     /////////////////////////////////////////          */}

                        <div
          style={{
            marginTop: "10px",
            marginLeft: "20px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Responsabilidades de EL TITULAR</h2>
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
            <h6><i><b>Utilitzación incorrecta:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR ha creado la web para la promoción de sus productos y/o servicios, pero no puede controlar su utilización de forma distinta a la prevista en el presente Aviso Legal; por lo tanto, el acceso y uso correcto de la información contenida en la web es responsabilidad de quien realiza estas acciones, no siendo responsable EL TITULAR por el uso incorrecto, ilícito o negligente que del mismo pudiere hacer el usuario.</p>

            <h6><i><b>Contenidos:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR facilita todos los contenidos de su web, bajo determinadas condiciones de buena fe, y se esforzará en la medida de lo posible para que los mismos estén actualizados y vigentes; no obstante, EL TITULAR no puede asumir responsabilidad alguna respecto al uso o acceso que realicen los usuarios fuera del ámbito al que se dirige la web, cuya responsabilidad final recaerá sobre el usuario. Así mismo EL TITULAR no puede controlar los contenidos que no hayan sido elaborados por el o por terceros cumpliendo su encargo por lo que, no responderá en ningún caso de los daños, contenidos e indisponibilidades técnicas que pudieran causarse por parte de dichos terceros.</p>
           
            <h6><i><b>Publicidad:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR incluirá en la web publicidad propia o de terceros para ofrecerle productos o servicios que entienda que pueden ser de su interés. Sin embargo, y en lo que respecta a la publicidad de terceros, EL TITULAR no puede controlar la apariencia de dicha publicidad, ni la calidad y adecuación de los productos o servicios a que esta se refiera, por lo que no responderá de ningún daño que se pudiera generar al usuario por dichas causas atribuibles a terceros.</p>

            <h6><i><b>Virus:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR se compromete a aplicar en la medida de lo posible, las medidas oportunas a su alcance para intentar garantizar al usuario la ausencia en su web de: virus, gusanos, troyanos, spam, etc… No obstante, estas medidas no son 100% infalibles y, por ello, EL TITULAR no puede asegurar totalmente la ausencia de dichos elementos indeseables. En consecuencia, EL TITULAR no será responsable de los daños que los mismos pudieran producir al usuario.</p>

            <h6><i><b>Fallos tecnológicos:</b></i></h6>
            <p style={{textAlign: "justify", marginRight:"20px"}}>EL TITULAR pone los medios necesarios a su alcance para la continuidad de esta web y realizará sus mejores esfuerzos para que el mismo no sufra interrupciones, pero no puede garantizar la ausencia de fallos tecnológicos, ni la permanente disponibilidad de la web y de los servicios contenidos en él, en consecuencia no se asume responsabilidad alguna por los daños y perjuicios que puedan generarse por la falta de disponibilidad y por los fallos en el acceso ocasionados por desconexiones, averías, sobrecargas o caídas de la red no imputables a EL TITULAR.</p>

        {/*     /////////////////////////////////////////          */}

        <div
          style={{
            marginTop: "10px",
            fontFamily: "Nunito",
          }}
        >
          <h2>Ley aplicable y jurisdicción</h2>
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
            <p style={{textAlign: "justify", marginRight:"20px"}}>La Ley aplicable en caso de disputa o conflicto de interpretación de los términos que conforman este Aviso Legal, así como cualquier cuestión relacionada con los servicios de la presente web y sus políticas, será la española.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Con carácter general, nos sometemos a lo estipulado en el Reglamento Europeo de Protección de Datos (RGPD) Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, así como también, a la Ley de Servicios de Sociedad de la Información (LSSICE), Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico.</p>
            <p style={{textAlign: "justify", marginRight:"20px"}}>Para la resolución de cualquier conflicto que pueda surgir con ocasión de la visita a la web, EL TITULAR y el usuario se someterán al fuero que establezca la normativa vigente.</p>
        </div>

        </div>

 
      </Grid>
      
    </Grid>
  );
}

export default Avis_legal_Esp;