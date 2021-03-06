import React, { useState, forwardRef } from "react"
import { navigate } from "@reach/router"
import { Link } from "gatsby"
import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { List, ListItem, Button, colors } from "@material-ui/core"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import InputIcon from "@material-ui/icons/Input"
import { Auth } from "aws-amplify"
import { logout } from "../../../../../utility/auth"

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: "flex",
  },
  button: {
    color: colors.blueGrey[800],
    justifyContent: "flex-start",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  icon: {
    color: theme.palette.icon,
    width: 30,
    height: 30,
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1),
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    "& $icon": {
      color: theme.palette.primary.main,
    },
    backgroundColor: "#fafafa",
  },
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <Link {...props} />
  </div>
))

const SidebarNav = props => {
  const { pages, className, ...rest } = props

  const classes = useStyles()

  const [open, setOpen] = useState(false)

  const handleSignout = e => {
    e.preventDefault()
    Auth.signOut()
      .then(logout(() => navigate("/app/login")))
      .catch(err => console.log("error: ", err))
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <List {...rest} className={clsx(classes.root, className)}>
        {pages.map(page => (
          <ListItem className={classes.item} key={page.title}>
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href}
            >
              <div className={classes.icon}>{page.icon}</div>
              {page.title}
            </Button>
          </ListItem>
        ))}
        <ListItem className={classes.item}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            onClick={handleClickOpen}
          >
            <div className={classes.icon}>
              <InputIcon />
            </div>
            Logout
          </Button>
        </ListItem>
      </List>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Logout</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to logout from Greenergy?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSignout} color="primary">
            Yes, logout
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
}

export default SidebarNav
