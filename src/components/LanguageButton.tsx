import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useLanguage } from '../LanguageContext'
type Language = 'Deutsch' | 'English'

const LanguageButton = () => {
    const {language, setLanguage} = useLanguage()
    const updateLanguage = ( _: React.MouseEvent<HTMLElement>, newLanguage: Language | null) => {
        if (newLanguage !== null) {
            setLanguage(newLanguage)
        }
    }
    console.log(language)
  return (
    <>
        {/* <h1>**********************************************************</h1>
        <h1>{ language === 'Deutsch' ? 'Sprache : Deutsch ' : 'Language : English'}</h1>
        <h1>**********************************************************</h1> */}

        <ToggleButtonGroup
        color="primary"
        value={language}
        exclusive
        onChange={updateLanguage}
        aria-label="Platform">
            <ToggleButton value="English"  sx={{ bgcolor: 'grey.200', borderRadius: 2, px: 2, py: 1 }}>
                EN
            </ToggleButton>
            <ToggleButton value="Deutsch"  sx={{ bgcolor: 'grey.200', borderRadius: 2, px: 2, py: 1 }}>
                DE
            </ToggleButton>
        </ToggleButtonGroup>
    </>
  ) 
}

export default LanguageButton