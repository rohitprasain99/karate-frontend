import { createTheme } from "@mantine/core";

export const mantineTheme = createTheme({
  // Override any other properties from default theme
  // fontFamily: "Open Sans",
  // spacing: { xs: 8, sm: 16, md: 24, lg: 32, xl: 40 },
  colors: {
    brand: [
      "#e5f8ff",
      "#d5ebfa",
      "#aed3ec",
      "#84badf",
      "#61a5d3",
      "#4a98cd",
      "#3b91cb",
      "#2a7eb4",
      "#1c71a3",
      "#006191",
    ],
  },
  primaryColor: "brand",
  breakpoints: {
    // xs: 375,
    // sm: 767,
    // md: 1023,
    // lg: 1365,
    // xl: 1919,
    // xs: 0,
    // sm: 600,
    // md: 768,
    // lg: 1279,
    // xl: 1919,
  },
});
