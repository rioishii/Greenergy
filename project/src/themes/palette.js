import { colors } from "@material-ui/core"

const white = "#FFFFFF"
const black = "#000000"
const atlantis = "#6CAE75"
const coral = "#FF5B14"
const darkGrey = "#49535B"

export default {
  black,
  white,
  primary: {
    contrastText: white,
    main: atlantis,
  },
  secondary: {
    contrastText: white,
    main: coral,
    light: "#FF9567",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: colors.grey[800],
    secondary: colors.grey[400],
    link: atlantis,
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  icon: atlantis,
  divider: colors.grey[200]
}
