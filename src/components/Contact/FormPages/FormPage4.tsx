interface FormPage4Props {
  sending: boolean;
  sent: boolean;
}
import { useLanguage } from "../../../LanguageContext";

export const FormPage4 = ({ sending, sent }: FormPage4Props) => {
  const {language} = useLanguage()
  return (
    <div className="text-2xl">
      {sending && <div>Sending...</div>}
      {sent && <div>{language==='Deutsch'?'Ihre Nachricht wurde erfolgreich gesendet, ich werde mich bald bei Ihnen melden':'Message sent, will get in touch soon!'}</div>}
    </div>
  );
};