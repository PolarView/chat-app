// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config

// 3. extend the theme
const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  },
  styles: {
    fonts: {
      body: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"
    },
    fontSizes: {
      h1: "3.2em"
    },
    fontWeights: {
      body: 400,
      bold: 500
    },
    lineHeights: {
      body: 1.5,
      h1: 1.1
    },
    colors: {
      text: "rgba(255, 255, 255, 0.87)",
      background: "#242424",
      primary: "#646cff",
      primaryHover: "#535bf2",
      buttonBackground: "#1a1a1a",
      buttonBorder: "transparent"
    },
    buttons: {
      primary: {
        borderRadius: "8px",
        border: "1px solid",
        borderColor: "transparent",
        padding: "0.6em 1.2em",
        fontSize: "1em",
        fontWeight: "500",
        fontFamily: "inherit",
        backgroundColor: "buttonBackground",
        cursor: "pointer",
        transition: "border-color 0.25s",
        _hover: {
          borderColor: "primaryHover"
        },
        _focus: {
          outline: "4px auto -webkit-focus-ring-color"
        }
      }
    }
  }
};

export default extendTheme(theme);
