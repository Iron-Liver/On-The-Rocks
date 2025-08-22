import { createTheme, adaptV4Theme } from "@mui/material/styles";

const theme = createTheme(adaptV4Theme({
    palette: {
        primary: {
            main: '#372c2e',
        },
        secondary: {
            main: '#372c2e',
            light: '#372c2e'
        },
        info: {
            main: '#372c2e',
            light: '#372c2e',
            dark: '#372c2e'
        },
        error: {
            main: '#372c2e'
        },
        disabled: {
            main: '#372c2e'
        },
        success: {
            main: '#372c2e'
        }
    }
}))

export default theme;