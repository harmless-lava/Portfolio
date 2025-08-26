import Button from "../components/Contact/Button";
import Form from "./Form";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const Contact = () => {
  const {language} = useLanguage()
  const [isClicked, setIsClicked] = useState(false)
  return (
    <div className="w-full bg-black grid gird-cols-7 pb-20">
      <Button setIsClicked={setIsClicked} text={language==='Deutsch' ?'Kontakt aufnehmen':'Get in Touch'}/>
      <Form isClicked={isClicked} setIsClicked={setIsClicked} />
    </div>
  );
};

export default Contact;