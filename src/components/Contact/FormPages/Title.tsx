import { useLanguage } from "../../../LanguageContext";
export const Title = () => {
  const {language} = useLanguage()
  return (
    <h1 className=" bg-transparent text-white mb-10">
      <span className="md:text-5xl text-3xl pb-5  border-b-1 border-white/40 px-2 ">
        {language==='Deutsch'?'Kontakt aufnehmen':'Get in touch!'}
      </span>
    </h1>
  );
};