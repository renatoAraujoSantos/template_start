import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {    
    primary: "#1d2a49",
    secondary: "#ff8c00",    

    red1: '#fec1c1',
    red2: '#ff8080',
    red3: '#FF0000',
    red4: '#a30000',
    red5: '#8a0000',

    gray1: "#e8e8e8",
    gray2: "#b7b7b7",
    gray3: "#808080",
    gray4: "#616161",
    gray5: "#494949",

    orange1: "#FDF5E6",
    orange2: "#ffc966",
    orange3: "#FFA500",
    orange4: "#e67e00",
    orange5: "#b35900",

    white: "#FFFFFF",
    white2: "#f2f2f2",
    white3: "#e6e6e6",
    white4: "#cccccc",
    white5: "#b3b3b3",

    blue1: '#c1c1fe',
    blue2: '#5f5fff',
    blue3: '#0000FF',
    blue4: '#0000a3',
    blue5: '#000061',

    green1: "#d2fed2",
    green2: "#90ff90",
    green3: "#008000",
    green4: "#004900",
    green5: "#003900",

    linghtBlack: "#373737",    
    black: "#1E1F20",

    gold1: "#f5e4bb",
    gold2: "#edd189",
    gold3: "#DAA520",
    gold4: "#c88c20",
    gold5: "#8e6b14",

    yellow1: '#fefec1',
    yellow: '#FFFF00',
    yellow3: '#caa601',
    aqua: '#00FFFF',
    purple: '#800080',
    lime: "#00FF00", // verde florecente
    transparent: 'transparent',
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    radius: 12,
    padding: 24,
    padding2: 36,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

export const FONTS = {
    h1: { fontFamily: "RobotoCondensed_700Bold", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "RobotoCondensed_700Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "RobotoCondensed_700Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "RobotoCondensed_700Bold", fontSize: SIZES.h4, lineHeight: 22 },
    body1: { fontFamily: "RobotoCondensed_400Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "RobotoCondensed_400Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "RobotoCondensed_400Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "RobotoCondensed_400Regular", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;