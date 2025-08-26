import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react';

export type Language = 'Deutsch' | 'English'

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
    language:'Deutsch',
    setLanguage:()=>{},
})

export const useLanguage = () => useContext(LanguageContext)

export const LanguageProvider = ({children}: {children:ReactNode}) => {
    const [language, setLanguage] = useState<Language>('Deutsch')

    return (
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )

}