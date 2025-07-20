import React from 'react'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { useContext } from 'react'

const LanguageButton = () => {
    const [alignment, setAlignment] = React.useState<string | null>('de')
    
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment)
    }
  return (
    <>
        <h1>*********</h1>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform">
            <ToggleButton value="en" sx={{ bgcolor: 'grey.200', borderRadius: 2, px: 2, py: 1 }}>
                EN
            </ToggleButton>
            <ToggleButton value="de" sx={{ bgcolor: 'grey.200', borderRadius: 2, px: 2, py: 1 }}>
                DE
            </ToggleButton>

        </ToggleButtonGroup>
    </>
  ) 
}

export default LanguageButton