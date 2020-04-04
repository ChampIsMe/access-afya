import React, {useState} from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {makeStyles, useTheme} from '@material-ui/styles'
import {useMediaQuery} from '@material-ui/core'

import {Footer, Sidebar} from './components'

const useStyles = makeStyles(theme => ({
  root: {},
  shiftContent: {
    paddingLeft: 240
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }), minHeight: document.body.clientHeight - 50 + 'px',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    height: theme.spacing(6),
    justifyContent: 'flex-end',
  },
}))

const Main = props => {
  const {children} = props
  const classes = useStyles()
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  })

  const [openSidebar, setOpenSidebar] = useState(false)

  const handleSidebarOpen = (isOpen) => {
    setOpenSidebar(!isOpen)

  }

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  const shouldOpenSidebar = isDesktop ? true : openSidebar

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main
        className={clsx(classes.content)}>
        {/*<div className={classes.drawerHeader}/>*/}
        {children}
      </main>

      <Footer/>
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node
}

export default Main
