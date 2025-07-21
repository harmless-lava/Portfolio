interface TaglinePropI {
    likeTo: string;
}
import { useLanguage } from "../../../LanguageContext";

const Tagline = ({ likeTo}: TaglinePropI) => {
    const {language} = useLanguage()
    return (
        <div className="text-[6vw] sm:text-[4vw] md:text-[3.2vw] lg:text-[1.8vw] w-full text-start col-start-2 lg:col-start-2 lg:col-span-2 col-end-7 row-start-6 row-span-1 relative ">
      {/* <span className="w-full">
        I enjoy trying/doing <code>difficult Things</code> and love <span>{likeTo}</span>.
      </span> */}
      <span className="w-full">
        {language === 'Deutsch' ? `Ich genieße das Lernen/Probieren von schwierigen Sachen und liebe ${likeTo}`:`I enjoy trying/doing difficult Things and love ${likeTo}` }
      </span>
      
    </div>
    )
}
export default Tagline