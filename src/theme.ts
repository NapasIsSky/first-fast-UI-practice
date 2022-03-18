import { createTheme } from "@mui/material/styles";
import { lineHeight } from "@mui/system";
import { COLORS, FONTS } from "./constants";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.green,
        },
        secondary: {
            main: COLORS.white,
        },
        text: {
            primary: COLORS.black,
        },
        background: {
            default: COLORS.white,
        },
    },
    typography: {
        h1: {
            fontSize: FONTS.h1,
            fontFamily: `"PlayfairDisplay-Black"`,
            lineHeight: 1.5,
        },
        h2: {
            fontSize: FONTS.h2,
            fontFamily: `"PlayfairDisplay-Black"`,
            lineHeight: 1.5,
        },
        h3: {
            fontSize: FONTS.h3,
            fontFamily: `"Raleway-Black"`,
            lineHeight: 1.5,
        },
        h4: {
            fontSize: FONTS.h4,
            fontFamily: `"Raleway-Black"`,
            lineHeight: 1.5,
        },
        h5: {
            fontSize: FONTS.h5,
            fontFamily: `"Raleway-Black"`,
            lineHeight: 1.5,
        },
        h6: {
            fontSize: FONTS.h5,
            fontFamily: `"Raleway-Bold"`,
            lineHeight: 1.5,
        },
        body1: {
            fontSize: FONTS.body1,
            fontFamily: `"Raleway-ExtraBold"`,
            lineHeight: 1.5,
        },
        body2: {
            fontSize: FONTS.body2,
            fontFamily: `"Raleway-Medium"`,
            lineHeight: 1.5,
        },
        caption: {
            fontSize: FONTS.caption,
            fontFamily: `"Raleway-Bold"`,
            lineHeight: 1.5,
        },
    },
});

export default theme;
