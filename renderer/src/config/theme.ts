import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'SatoshiBold', sans-serif`,
    body: `'SatoshiRegular', sans-serif`,
  },
  components: {
    Card: {
      defaultProps: {
        variant: "solid",
      },
    },
    Button: {
      variants: {
        cta: {
          bg: "red.500",
          color: "white",
          fontWeight: "bold",
          _hover: {
            bg: "red.100",
          },
          _active: {
            bg: "red.100",
          },
        },
      },
    },
  },
  styles: {
    global: () => ({
      body: {
        bg: "black",
        // bg: "gray.800",
      },
    }),
  },
  colors: {
    blue: {
      50: "#3e68ff",
      100: "#3e68ff",
      200: "#3e68ff",
      300: "#3e68ff",
      400: "#3e68ff",
      500: "#3e68ff",
      600: "#274ed9",
      700: "#274ed9",
      800: "#274ed9",
    },
  },
});

export default theme;
