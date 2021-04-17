import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    "oxford-blue": {
      DEFAULT: "#384353",
      "50": "#ABB6C6",
      "100": "#9BA8BC",
      "200": "#7D8EA7",
      "300": "#617490",
      "400": "#4D5C71",
      "500": "#384353",
      "600": "#232A35",
      "700": "#0F1216",
      "800": "#000000",
      "900": "#000000",
    },
    indigo: {
      DEFAULT: "#4E63D2",
      "50": "#FFFFFF",
      "100": "#F1F2FB",
      "200": "#C8CFF1",
      "300": "#9FABE7",
      "400": "#7787DC",
      "500": "#4E63D2",
      "600": "#3046BD",
      "700": "#263794",
      "800": "#1B286C",
      "900": "#111943",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "14px",
        width: "full",
        color: "white",
      },
      defaultProps: {
        colorScheme: "indigo",
      },
    },
  },
});
