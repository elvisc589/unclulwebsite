import React from "react";
import SelectsCard from "./SelectsCard";
import { hermanos } from "../constants";

const Lambdas = () => {
  return (
    <div className="bg-[var(--brown)]">
      {/* <div className="bg-[var(--gold)]"> */}
        {/* <div id="gallery" className="max-w-[1140px] mx-auto px-4 py-16 pt-24">
          <h1 className="text-center text-[var(--brown)] text-4xl font-semibold p-4 border-b-2 border-[var(--brown)]">
            Meet the Lambdas - Undergrad
          </h1> */}
          {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SelectsCard
              bg={cesar}
              p3="Major: Exercise and Sport Science"
              p5="Hometown: Mount Airy, NC"
              p4="Ethnic Background: Mexican"
              p2="Crossed: Spring 2020"
              p1="Position: President"
              h2="Cesar Hernandez"
            />
            <SelectsCard
              bg={shaggy}
              p3="Major: Computer Science B.S."
              p5="Hometown: Raleigh, NC"
              p4="Ethnic Background: Mexican"
              p2="Crossed: Fall 2021"
              p1="Position: Vice-President"
              h2="Nori West"
            />
            <SelectsCard
              bg={victor}
              p3="Major: Economics"
              p5="Hometown: Roxboro, NC"
              p4="Ethnic Background: Mexican"
              p2="Crossed: Fall 2021"
              p1="Position: Treasurer"
              h2="Victor Medina"
            />
            <SelectsCard
              bg={julian}
              p3="Major: Biology and Excercise & Sports Science"
              p5="Hometown: Matthews, NC"
              p4="Ethnic Background: Ecuadorian"
              p2="Crossed: Fall 2022"
              p1="Position: MGC & Academic Chair"
              h2="Julian Bailon"
            />
            <SelectsCard
              bg={edgar}
              p3="Major: Psychology"
              p5="Hometown: Ashville, NC"
              p4="Ethnic Background: Mexican"
              p2="Crossed: Fall 2022"
              p1="Position: Recruitment & Outreach Chair"
              h2="Edgar Torres"
            />
            <SelectsCard
              bg={elvis}
              p3="Major: Computer Science B.S."
              p5="Hometown: Burlington, NC"
              p4="Ethnic Background: Ecuadorian"
              p2="Crossed: Fall 2022"
              p1="Position: Webmaster"
              h2="Elvis Chiqui"
            />
            <SelectsCard
              bg={jose}
              p3="Major: Pyschology and Politcal Science"
              p5="Hometown: Kinston, NC"
              p4="Ethnic Background: Honduran"
              p2="Crossed: Fall 2022"
              p1="Position: Recruitment & Outreach Chair"
              h2="Jose Cartagena"
            />
            <SelectsCard
              bg={bryan}
              p3="Major: Public Policy"
              p5="Hometown: Silver Spring, MD"
              p4="Ethnic Background: Salvadoran"
              p2="Crossed: Fall 2022"
              p1="Position: Community Service Chair"
              h2="Bryan Sorto"
            />
            <SelectsCard
              bg={obdulio}
              p3="Major: Chemistry"
              p5="Hometown: Woodbridge, VA"
              p4="Ethnic Background: Salvadoran"
              p2="Crossed: Fall 2022"
              p1="Position: Secretary"
              h2="Obdulio Vasquez"
            />
          </div> */}
        {/* </div> */}
      {/* </div> */}
      <div className="w-full max-w-[1140px] mx-auto px-4 py-16 pt-24">
        <h1 className="text-center text-white p-4 text-4xl font-semibold">
          Meet the Lambdas - History
        </h1>
        {hermanos.map((li, index) => {
          return (
            <div>
              <h2 key={li.line_name} className="text-white text-2xl p-4 border-b-2 pt-10">
                {li.line_name}
              </h2>
              <div
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-14"
              >
                {Object.keys(li.line).map((hermano, index) => {

                   return(<SelectsCard
                      bg={li.line[hermano].imageUrl}
                      p1={`Graduated: ${li.line[hermano].graduation}`}
                      p2={`Major: ${li.line[hermano].major}`}
                      p3={`Occupation: ${li.line[hermano].occupation}`}
                      p4={`Hometown: ${li.line[hermano].hometown}`}
                      p5={`Ethnic Background: ${li.line[hermano].ethnicBackground}`}
                      h2={li.line[hermano].name}
                    />)
                  ;
                })}
              </div>
            </div>
          );
        })}
        {/* <h2 className="text-white text-2xl p-4 border-b-2">
          Delta Line - “Annus Mirabilis”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={acero}
            p1="Que descanse en paz Hermano"
            h2="Sergio Acero"
          />
          <SelectsCard
            bg={quintero}
            p1="Graduated: 2010"
            p2="Major: International Studies"
            p3="Occupation: Finance"
            p4="Hometown: San Ramon, CA"
            p5="Ethnic Background: Colombian"
            h2="Steven Quintero"
          />
          <SelectsCard
            bg={retana}
            p1="Graduated: 2011"
            p2="Major: Exercise and Sport Science"
            p3="Occupation: Entrepenuer"
            p4="Hometown: Frederick, MD"
            p5="Ethnic Background: Costa Rica"
            h2="Gabriel Retana"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Epsilon Line - “Taijitu”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={ronald}
            p1="Graduated: 2012"
            p2="Major: Business "
            p3="Occupation: Real Estate Investor & Broker"
            p4="Hometown: New York, NY"
            p5="Ethnic Background: Dominican Republican"
            h2="Ronald Rojas"
          />
          <SelectsCard
            bg={tuset}
            p1="Graduated: 2011"
            p2="Major: Global Studies "
            p3="Occupation: Program Coordinator"
            p4="Hometown: Fayetteville, NC"
            p5="Ethnic Background: Black American and Afro-Puerto Rican"
            h2="Juan Tuset"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Zeta Line - “Perseverantia Proeliator”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={cano}
            p1="Graduated: 2013"
            p2="Major: Political Science "
            p3="Occupation: Physician Assistant (PA)"
            p4="Hometown: Salamanca, Gto Mx"
            p5="Ethnic Background: Hispanic"
            h2="Carlos Cano"
          />
          <SelectsCard
            bg={carlosb}
            p1="Graduated: 2013"
            p2="Major: Chemistry"
            p3="Occupation: Dentist"
            p4="Hometown: Charlotte, NC"
            p5="Ethnic Background: Colombian"
            h2="Carlos Baquero Nunez"
          />
          <SelectsCard
            bg={nico}
            p1="Graduated: 2013"
            p2="Major: Business"
            p3="Occupation: Lenovo"
            p4="Hometown: Raleigh, NC"
            p5="Ethnic Background: Dominican / Cuban"
            h2="Nico Garces"
          />
          <SelectsCard
            bg={lopez}
            p1="Graduated: 2011"
            p2="Major: Psychology"
            p3="Occupation: US Army - Practical Nurse"
            p4="Hometown: Fayetteville, NC"
            p5="Ethnic Background: Puerto Rican"
            h2="Hector Lopez"
          />
          <SelectsCard
            bg={saul}
            p1="Graduated: 2012"
            p2="Major: Biology"
            p3="Occupation: Dentist"
            p4="Hometown: Raleigh, NC"
            p5="Ethnic Background: Mexican"
            h2="Saúl Gonzalez"
          />
          <SelectsCard
            bg={rivera}
            p1="Graduated: 2013"
            p2="Major: Exercise and Sports Science"
            p3="Occupation: Assistant Soccer Coach"
            p4="Hometown: Dallas, TX"
            p5="Ethnic Background: Mexican"
            h2="Jonathan Rivera"
          />
          <SelectsCard
            bg={montes}
            p1="Graduated: 2013"
            p2="Major: Business Administration"
            p3="Occupation: Financial Analyst"
            p4="Hometown: Medellin, Colombia"
            p5="Ethnic Background: White/Colombian"
            h2="Manuel Montes"
          />
          <SelectsCard
            bg={chicas}
            p1="Graduated: 2013"
            p2="Major: Psychology/Sociology"
            p3="Occupation: PhD Student: Organizational Behavior"
            p4="Hometown: Uniondale, NY"
            p5="Ethnic Background: Salvadoran"
            h2="Herrison Chicas"
          />
        </div>{" "}
        <h2 className="text-white text-2xl p-4 border-b-2">
          Eta Line - “El Guerrerense Que Nunca Se Vence”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={gil}
            p1="Graduated: 2015"
            p2="Major: Mathematics"
            p3="Occupation: Client Manager"
            p4="Hometown: Ash, NC"
            p5="Ethnic Background: Mexican-American"
            h2="Gil Gonzalez"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Theta Line - “Atlante e l’Asse”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={jim}
            p1="Graduated: 2016"
            p2="Major: Biology"
            p3="Occupation: Medical Student at UNC "
            p4="Hometown: Manati, PR"
            p5="Ethnic Background: Hispanic"
            h2="Carlos Jimenez Rosado"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Iota Line - “Omne Trium Perfectum”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={gomez}
            p1="Graduated: 2016"
            p2="Major: Biology"
            p3="Occupation: Chatham County Commissioner - District 5"
            p4="Hometown: Siler City, NC"
            p5="Ethnic Background: Guatemayan"
            h2="Franklin Gomez "
          />
          <SelectsCard
            bg={gromero}
            p1="Graduated: 2016"
            p2="Major: Exercise and Sport Science"
            p3="Occupation: Project Engineer"
            p4="Hometown: Washington, NC"
            p5="Ethnic Background: Hispanic"
            h2="Geovanne Romero"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Kappa Line - “Anguilas Tunjos”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={giocruz}
            p1="Graduated: 2018"
            p2="Major: Hispanic Literature and Culture"
            p3="Occupation: Translator/Prospective Medical School Student"
            p4="Hometown: Durham, NC"
            p5="Ethnic Background: Mexican"
            h2="Giovanni Cruz"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Lambda Line - “Atlachinolli”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={bryant}
            p1="Graduated: 2019"
            p2="Major: Sociology and Graphic Design"
            p3="Occupation: Freelance Graphic Designer"
            p4="Hometown: Siler City, NC"
            p5="Ethnic Background: Mexican"
            h2="Bryant Parroquin"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Mu Line - "Bautizados en Carmesi, Renacemos"
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={roberto}
            p1="Graduated: 2022"
            p2="Major: Anthropology"
            p3="Occupation: "
            p4="Hometown: Newton, NC"
            p5="Ethnic Background: Mexican"
            h2="Roberto Negrete"
          />
          <SelectsCard
            bg={camilo}
            p1="Graduated: 2022"
            p2="Major: Business Administration"
            p3="Occupation: "
            p4="Hometown: Medellín, Colombia"
            p5="Ethnic Background: Colombian"
            h2="Camilo Corrales"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Nu Line - “Sabios Unidos Para la Eudaimonía”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={david}
            p1="Graduated: 2021"
            p2="Major: Health Policy and Management"
            p3="Occupation: Medical Scribe/Clinical Information Specialist"
            p4="Hometown: Fayetteville, NC"
            p5="Ethnic Background: Mexican-American"
            h2="David Perez"
          />
          <SelectsCard
            bg={christian}
            p1="Graduated: 2022"
            p2="Major: Computer Science"
            p3="Occupation:"
            p4="Hometown: New York City, NY"
            p5="Ethnic Background: Ecuadorian"
            h2="Christian Cambizaca"
          />
          <SelectsCard
            bg={dariel}
            p1="Graduated: 2022"
            p2="Major: Biology & Anthropology"
            p3="Occupation:"
            p4="Hometown: San Juan, PR"
            p5="Ethnic Background: Puerto Rican"
            h2="Dariel Cortes"
          />
          <SelectsCard
            bg={cesar}
            p1="Graduated: 2023"
            p2="Major: Exercise and Sport Science"
            p3="Occupation: Real Estate Agent"
            p5="Hometown: Mount Airy, NC"
            p4="Ethnic Background: Mexican"
            h2="Cesar Hernandez"
          />

          <SelectsCard
            bg={christ}
            p1="Graduated: 2022"
            p2="Major: Economics"
            p3="Occupation:"
            p4="Hometown: Bronx, NY"
            p5="Background: Mexican/ Dominican"
            h2="Christ Taveras"
          />

          <SelectsCard bg={yovany} p1='Graduated:' p2='Hometown: Raleigh, NC' p3='Ethnic Background: Mexican' p4='Pledged Fall 2021' p5='Position: Webmaster' h2='Yovany Heredia'/>
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Xi Line - "Ome en Totum, Soñamos"
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={shaggy}
            p1="Graduated: 2023"
            p2="Major: Computer Science"
            p3="Occupation: "
            p4="Hometown: Newton, NC"
            p5="Ethnic Background: Mexican"
            h2="Nori West"
          />
          <SelectsCard
            bg={victor}
            p1="Graduated: 2023"
            p2="Major: Economics"
            p3="Occupation: "
            p4="Hometown: "
            p5="Ethnic Background: Mexicam"
            h2="Victor Medina"
          />
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Omicron Line - “Seis Pilares: Unum Legatum Unitum”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={julian}
            p1="Undergrad"
            p2="Major: Exercise and Sport Science"
            p3="Occupation: Medical Scribe/Clinical Information Specialist"
            p4="Hometown: Fayetteville, NC"
            p5="Ethnic Background: Mexican-American"
            h2="Julian Bailón"
          />
          <SelectsCard
            bg={edgar}
            p1="Undergard"
            p2="Major: Computer Science"
            p3="Occupation:"
            p4="Hometown: New York City, NY"
            p5="Ethnic Background: Ecuadorian"
            h2="Edgar Torres Hernandez"
          />
          <SelectsCard
            bg={elvis}
            p1="Graduated: 2024"
            p2="Major: Computer Science"
            p3="Occupation:"
            p4="Hometown: "
            p5="Ethnic Background: Puerto Rican"
            h2="Elvis Chiqui"
          />
          <SelectsCard
            bg={jose}
            p1="Graduated: 2024"
            p2="Major: Exercise and Sport Science"
            p3="Occupation: Real Estate Agent"
            p5="Hometown: Mount Airy, NC"
            p4="Ethnic Background: Mexican"
            h2="Jose Cartagena-Lanza"
          />

          <SelectsCard
            bg={bryan}
            p1="Undergrad"
            p2="Major: Human Occupation and Leadership Development"
            p3="Occupation:"
            p4="Hometown: Bronx, NY"
            p5="Background: Mexican/ Dominican"
            h2="Bryan Sorto"
          />
          <SelectsCard
            bg={obdulio}
            p1="Undergrad"
            p2="Major: Economics"
            p3="Occupation:"
            p4="Hometown: Bronx, NY"
            p5="Background: Mexican/ Dominican"
            h2="Obdulio Vasquez-Bonilla"
          />

          <SelectsCard bg={yovany} p1='Graduated:' p2='Hometown: Raleigh, NC' p3='Ethnic Background: Mexican' p4='Pledged Fall 2021' p5='Position: Webmaster' h2='Yovany Heredia'/>
        </div>
        <h2 className="text-white text-2xl p-4 border-b-2">
          Pi Line - “Ex Favilla Nos Resurgemu”
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SelectsCard
            bg={shaggy}
            p1="Graduated: 2023"
            p2="Major: Computer Science"
            p3="Occupation: "
            p4="Hometown: Newton, NC"
            p5="Ethnic Background: Mexican"
            h2="Juan Garcia Garcia"
          />
          <SelectsCard
            bg={victor}
            p1="Graduated: 2023"
            p2="Major: Economics"
            p3="Occupation: "
            p4="Hometown: "
            p5="Ethnic Background: Mexicam"
            h2="Edgar Torres-Hernandez"
          />
          <SelectsCard
            bg={shaggy}
            p1="Graduated: 2023"
            p2="Major: Computer Science"
            p3="Occupation: "
            p4="Hometown: Newton, NC"
            p5="Ethnic Background: Mexican"
            h2="Leo Alvarez Jasso"
          />
          <SelectsCard
            bg={victor}
            p1="Graduated: 2023"
            p2="Major: Economics"
            p3="Occupation: "
            p4="Hometown: "
            p5="Ethnic Background: Mexicam"
            h2="David Villavicencio"
          />
        </div> */}
      </div>
    </div>
  );
};
export default Lambdas;
