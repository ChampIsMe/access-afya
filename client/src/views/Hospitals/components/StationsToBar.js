import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/styles'
import {Box, Grid} from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import theme from '../../../theme'
import LinearProgress from '@material-ui/core/LinearProgress'

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(1),
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  },
  avatar: {
    height: 64,
    width: 64,
  },
  progress: {
    marginTop: theme.spacing(2)
  },
}))

const StationsToBar = props => {
  const classes = useStyles()
  return (
    <div className={clsx(classes.root)}>

      <div className={classes.row}>
        <Grid
          alignItems="center"
          container
          justify="flex-end"
          spacing={2}
        >
           <React.Fragment>
            <Grid
              item
            >
              <div className={classes.progress}>
                <LinearProgress
                  value={70}
                  variant="determinate"
                />
                <Box style={{margin: '2px'}} fontWeight="fontWeightMedium" fontSize={12} m={1}
                     color={theme.palette.grey[600]}>
                  24K/24k patients seen
                </Box>

              </div>
            </Grid>
            <Grid
              item>
              <div>
                <Box style={{margin: '2px'}} fontWeight="fontWeightMedium" fontSize={14} m={1}>
                  Okinyi Philip
                </Box>
                <Box style={{margin: '2px'}} fontWeight="fontWeightMedium" fontSize={12} m={1}
                     color={theme.palette.grey[600]}>
                  okinyiphilip@gmail.com
                </Box>
              </div>
            </Grid>
          </React.Fragment>
          <Grid
            item>
            <div className={classes.imageContainer}>
              <Avatar
                onClick={() => null}
                className={classes.avatar}
                src={'/images/avatars/avatar_3.png'}
              />
            </div>
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

StationsToBar.propTypes = {
  className: PropTypes.string
}

export default StationsToBar
