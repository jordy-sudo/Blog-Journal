import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { themeApp } from "./themeApp";


export const ThemeJournal = ({children}) => {
  return (
    <ThemeProvider theme={themeApp}>
      <CssBaseline />
        {children}
    </ThemeProvider>
  )
}
