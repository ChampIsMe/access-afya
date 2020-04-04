import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import {Drawer} from '@material-ui/core'
import {FolderOpen as FolderIcon, Sms as SmsIcon} from '@material-ui/icons'
import Assignment from '@material-ui/icons/ShowChart'

import {SidebarNav} from './components'

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      height: '100%'
    },
    backgroundPosition: 'center'
  },
  root: {
    height: '100%',
    alignContent: 'center', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', display: 'flex'
  },
  nav: {
    marginBottom: theme.spacing(2)
  }
}))

const Sidebar = props => {
  const {open, variant, onClose, ...rest} = props

  const classes = useStyles()

  const pages = []
  pages.push({title: 'Reports', href: '/reports', icon: <FolderIcon/>})
  pages.push({title: 'Analytics', href: '/analytics', icon: <Assignment/>})
  pages.push({title: 'Communications', href: '/comm', icon: <SmsIcon/>})


  return (
    <Drawer
      anchor="left"
      classes={{paper: classes.drawer}}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root)}
      >
        <div>
          <SidebarNav
            className={classes.nav}
            pages={pages}
          />
        </div>
      </div>
    </Drawer>
  )
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
}

export default Sidebar
