import { useLanguage } from "../../../LanguageContext";

interface NamePropI {
    name: string;
}

const Name = ({ name }: NamePropI) => {
    const { language } = useLanguage()
    return (
        <>
            <div className="text-[7vw] md:text-[5.5vw] lg:text-[3.5vw]  font-bold text-start col-start-2 md:col-start-2 md:col-span-3 col-span-7 row-start-5 row-span-1 place-items-center relative flex">
                <span className="sm:w-[75%] md:w-full">{language === 'Deutsch' ? `Servus, ich bin Apar` : `Hi, I am ${name}` }</span>
            </div>
        </>
        
    )
}

export default Name;