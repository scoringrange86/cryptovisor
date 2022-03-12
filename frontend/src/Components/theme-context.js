import React from 'react'


export const themes = {

    dark: {
        background: 'black',
    },

    light: {
        background: 'F5F5F5',
    }
}

const ThemeContext  = React.createContext(themes.dark)

export default ThemeContext