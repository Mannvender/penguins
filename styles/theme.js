const primaryColor = "#3d73ba";
export default {
  fonts: {
    heading: "Hahmlet, serif",
    body: "Roboto, sans-serif",
  },
  colors: {
    primary: primaryColor,
    accent1: "#6836cd",
    accent2: "#11315b",
    dark: "#0C101A",
    dark1: "#59595A",
    dark2: "#69696a",
    light: "#FFFFFF",
    light1: "#EAE8E5",
    light2: "#D4CCC8",
  },
  breakpoints: ["576px", "768px", "992px", "1200px"],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fontSizes: [6, 8, 10, 12, 14, 16, 20, 24, 32, 48, 72],
  fontWeights: {
    normal: 400,
    bold: 700,
    bolder: 900,
  },
  shadows: {
    tiny: "0 1.5px 5px 0 rgba(0, 0, 0, 0.1)",
    small: "0px 0px 5px 0px rgba(0,0,0,0.2)",
    tabs: "0 0 4px 0 rgba(0, 0, 0, 0.1)",
  },
  buttons: {
    primary: {
      backgroundColor: primaryColor,
      fontSize: "2rem",
    },
    transparent: {
      backgroundColor: "transparent",
      color: primaryColor,
      borderColor: primaryColor,
      border: "1px solid",
    },
  },
  cards: {
    primary: {
      backgroundColor: primaryColor,
      boxShadow: "0 1.5px 5px 0 rgba(0, 0, 0, 0.1)",
    },
  },
};
