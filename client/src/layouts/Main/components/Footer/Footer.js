import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/styles'
import {Divider, Link, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    padding: theme.spacing(0, 0),
    margin: 'auto',
    textAlign: 'center',
    // backgroundColor: '#ebebeb',
  },
  actions: {
    padding: theme.spacing(1, 2),
    display: 'flex',
    justifyContent: 'center'
  },
  divider: {
    margin: theme.spacing(2, 1), height: '100%', backgroundColor: '#000000'
  },

}))

const Footer = props => {
  const {className, ...rest} = props

  const classes = useStyles()

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

      <div className={classes.actions}>
        <div>
          <Typography
            align="left"
            variant="h5">
            &copy;{' '}
            <Link
              component="a"
              href="https://www.accessafya.com"
              target="_blank"
            >
              <b>Access Afya</b>
            </Link>
            . 2020
          </Typography>
        </div>
        <Divider
          className={classes.divider}
          orientation="vertical"
        />
        <div>
          {/*<Typography
            align="left"
            component="h4"
            variant="subtitle2"
          >
            +254734339840 <br/> 3rd Floor, Orbit Place Westlands
          </Typography>*/}
          {/*<Typography
            align="left"
            variant="body1"
          >
            <Link
              component="a"
              href="https://google.com/"
              target="_blank"
            ><br />
              View on Map
            </Link>
          </Typography>*/}
        </div>
      </div>

    </div>
  )
}

Footer.propTypes = {
  className: PropTypes.string
}

export default Footer
