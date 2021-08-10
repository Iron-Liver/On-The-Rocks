import { createTheme } from "@material-ui/core"

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a2b28',
        },
        secondary: {
            main: '#1c2624',
            light: '#D5D977'
        },
        info: {
            main: '#D97925',
            light: '#fd6604',
            dark: '#BF4124'
        },
        error: {
            main: '#fa3b08'
        },
        disabled: {
            main: '#f4fbfe'
        },
        success: {
            main: '#26d333'
        }
    }
})

export default theme;