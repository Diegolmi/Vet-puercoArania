import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: lightBlue[900],
      light: "#3f50b5",
    },
  },
});

export default theme;
