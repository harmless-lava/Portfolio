import { useScrollStore } from "../store/refs/useRefToScroll";
import CodeEditorAboutMe from "../components/About/CodeEditorAboutMe";
import CodeEditorLineNumbers from "../components/About/CodeEditorLineNumbers";
import {useState} from "react";
import { useLanguage } from "../LanguageContext";

const About = () => {
    const {language} = useLanguage()
    const aboutRef = useScrollStore().sectionRefs.about

    const [highlightedLine, setHighlightedLine] = useState(-1)

    const handleMouseEnter = (lineNumber: number) => {
        setHighlightedLine(lineNumber);
    }

    const handleMouseLeave = () => {
        setHighlightedLine(-1);
    }
  //   const codeLines = [
  //   { line: ` class Apar Shrestha {`, number: 1 },
  //   { line: `   constructor() {`, number: 2 },
  //   {
  //     line: `     // because i believe i can.`,
  //     number: 3,
  //   },
  //   { line: `     this.name = "Apar Shrestha";`, number: 4 },
  //   { line: `     this.dayOfBirthUnixTimestamp = 1112227200;`, number: 5 },
  //   { line: `     this.email = 'shrestha.apar.05@gmail.com';`, number: 6 },
  //   { line: `   }`, number: 7 },
  //   { line: `   workExperience() {`, number: 8 },
  //   { line: `     return [];`, number: 9 },
  //   { line: `   }`, number: 10 },
  //   { line: `   education() {`, number: 11 },
  //   { line: `     return [`, number: 12 },
  //   {
  //     line: `       { '09.2024-09.2025': 'Marktbreit, Bayern -  Ausbildung zum KFZ-Mechatroniker
  //                                       //Dropped Out to take part in Studienkolleg and to study Physics'},`,
  //     number: 13,
  //   },
  //   {
  //     line: `       { '2023- 09.2024': 'Thapathali Campus of Institue of Engineering, Nepal - Bsc Automobile Engineering 
  //                                       //Recieved Scholarship but dropped out to pursue Adventures in Germany'},`,
  //     number: 14,
  //   },
  //   {
  //     line: `       { '2020-2022': 'Everest English Boarding Higher Secondary School, Nepal - HighSchool' }`,
  //     number: 15,
  //   },
  //   { line: `     ];`, number: 16 },
  //   { line: `   }`, number: 17 },
  //   { line: `   skills() {`, number: 18 },
  //   { line: `     return [`, number: 19 },
  //   {
  //     line: `       'HTML/CSS/JS', 'TypeScript', 'React', 'Tailwind', 'Django', 'Python', 'German/Deutsch', 'Axios', 'Git/Github', `,
  //     number: 20,
  //   },
  //   {
  //     line: `       'SQLITE', 'REST APIs', 'JWT', 'Web Sockets',`,
  //     number: 21,
  //   },

  //   { line: `     ]`, number: 22 },
  //   { line: `   }`, number: 23 },
  //   {
  //     line: `   nextUp() {`,
  //     number: 24,
  //   },
  //   {
  //     line: `     return [ 'Docker', 'Redis', 'Proxies', 'Puppeteer', 'Vitest', 'Cypress' ]`,
  //     number: 25,
  //   },
  //   { line: `   }`, number: 26 },
  //   { line: ` }`, number: 27 },
  // ];

  const codeLines = language==='Deutsch'
  ?[
    { line: ` class Apar Shrestha {`, number: 1 },
    { line: `   constructor() {`, number: 2 },
    {
      line: `     // weil ich glaube, dass ich es kann.`,
      number: 3,
    },
    { line: `     this.name = "Apar Shrestha";`, number: 4 },
    { line: `     this.GeburtstagUnixTimestamp = 1112227200;`, number: 5 },
    { line: `     this.email = 'shrestha.apar.05@gmail.com';`, number: 6 },
    { line: `   }`, number: 7 },
    { line: `   Berufserfahrung() {`, number: 8 },
    { line: `     return [];`, number: 9 },
    { line: `   }`, number: 10 },
    { line: `   Bildung() {`, number: 11 },
    { line: `     return [`, number: 12 },
    {
      line: `       { '09.2024-09.2025': 'Marktbreit, Bayern -  Ausbildung zum KFZ-Mechatroniker
                                        //Abgebrochen um Physik zu studieren'},`,
      number: 13,
    },
    {
      line: `       { '09.2023- 09.2024': 'Thapathali Campus of Institue of Engineering, Nepal - Bsc Automobile Engineering 
                                        //hat ein Stipendium bekommen, aber das Studium abgebrochen um Abenturen in Deutschland zu folgen'},`,
      number: 14,
    },
    {
      line: `       { '06.2020-06.2022': 'Everest English Boarding School, Nepal - Gymnasium' }`,
      number: 15,
    },
    { line: `     ];`, number: 16 },
    { line: `   }`, number: 17 },
    { line: `   Fähigkeiten() {`, number: 18 },
    { line: `     return [`, number: 19 },
    {
      line: `       'HTML/CSS/JS', 'TypeScript', 'React', 'Tailwind', 'Django', 'Python', 'German/Deutsch', 'Axios', 'Git/Github', `,
      number: 20,
    },
    {
      line: `       'SQLITE', 'REST APIs', 'JWT', 'Web Sockets',`,
      number: 21,
    },

    { line: `     ]`, number: 22 },
    { line: `   }`, number: 23 },
    {
      line: `   nächste() {`,
      number: 24,
    },
    {
      line: `     return [ 'Docker', 'Redis', 'Proxies', 'Puppeteer', 'Vitest', 'Cypress' ]`,
      number: 25,
    },
    { line: `   }`, number: 26 },
    { line: ` }`, number: 27 },
  ]
  :[
    { line: ` class Apar Shrestha {`, number: 1 },
    { line: `   constructor() {`, number: 2 },
    {
      line: `     // because i believe, i can .`,
      number: 3,
    },
    { line: `     this.name = "Apar Shrestha";`, number: 4 },
    { line: `     this.dayOfBirthUnixTimestamp = 1112227200;`, number: 5 },
    { line: `     this.email = 'shrestha.apar.05@gmail.com';`, number: 6 },
    { line: `   }`, number: 7 },
    { line: `   workExperience() {`, number: 8 },
    { line: `     return [];`, number: 9 },
    { line: `   }`, number: 10 },
    { line: `   education() {`, number: 11 },
    { line: `     return [`, number: 12 },
    {
      line: `       { '09.2024-09.2025': 'Marktbreit, Bayern -  Ausbildung zum KFZ-Mechatroniker
                                        //Dropped Out to take part in Studienkolleg and to study Physics'},`,
      number: 13,
    },
    {
      line: `       { '09.2023- 09.2024': 'Thapathali Campus of Institue of Engineering, Nepal - Bsc Automobile Engineering 
                                        //Recieved Scholarship but dropped out to pursue Adventures in Germany'},`,
      number: 14,
    },
    {
      line: `       { '06.2020-06.2022': 'Everest English Boarding Higher Secondary School, Nepal - HighSchool' }`,
      number: 15,
    },
    { line: `     ];`, number: 16 },
    { line: `   }`, number: 17 },
    { line: `   skills() {`, number: 18 },
    { line: `     return [`, number: 19 },
    {
      line: `       'HTML/CSS/JS', 'TypeScript', 'React', 'Tailwind', 'Django', 'Python', 'German/Deutsch', 'Axios', 'Git/Github', `,
      number: 20,
    },
    {
      line: `       'SQLITE', 'REST APIs', 'JWT', 'Web Sockets',`,
      number: 21,
    },

    { line: `     ]`, number: 22 },
    { line: `   }`, number: 23 },
    {
      line: `   nextUp() {`,
      number: 24,
    },
    {
      line: `     return [ 'Docker', 'Redis', 'Proxies', 'Puppeteer', 'Vitest', 'Cypress' ]`,
      number: 25,
    },
    { line: `   }`, number: 26 },
    { line: ` }`, number: 27 },
  ]
  return (
    <div ref={aboutRef} className="bg-[#131513] md:pl-40 overflow-scroll">
        <div className="flex space-x-0 lg:w-full">
            <CodeEditorLineNumbers 
                codeLines={codeLines}
                highlightedLine={highlightedLine}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}/>
            <CodeEditorAboutMe
                codeLines={codeLines}
                highlightedLine={highlightedLine}
                handleMouseEnter={handleMouseEnter}
                handleMouseLeave={handleMouseLeave}/>    
        </div>

    </div>
  )

}

export default About;