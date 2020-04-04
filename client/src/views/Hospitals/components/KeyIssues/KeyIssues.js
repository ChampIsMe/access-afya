import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Box, Card, CardContent, CardHeader, colors, Grid, IconButton, Typography} from '@material-ui/core'

import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Timelapse} from '@material-ui/icons';
import theme from '../../../../theme'
import {ChartItem} from '../index'
import StaffPerformanceTable from '../StaffPerformance'

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: theme.spacing(1),
  },
  image: {
    height: 48,
    width: 48
  },
  actions: {
    justifyContent: 'flex-end'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightMedium,
    '&.active, &:hover, &.active:hover': {
      color: theme.palette.primary.main,
      '& $icon': {
        color: theme.palette.primary.main
      }
    },
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    }
  },

  avatar: {
    width: '30px',
    height: '30px',
    marginRight: theme.spacing(1)
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  issueItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    '&:hover': {
      backgroundColor: 'rgba(154,154,154,0.1)',
      color: theme.palette.grey[600],
      '& $icon': {
        color: theme.palette.grey[500]
      }
    },
  },
  timeItems: {
    margin: '2px',
    minWidth: '80px',
    '&:hover': {
      color: theme.palette.grey[900],
    },
  },
}))

const KeyIssues = ({hospital, selectedIndex, handleListItemClick, times}) => {
  const classes = useStyles()

  const [selectedIssue, setSelectedIssue] = React.useState(2)
  const [selectedTime, setSelectedTime] = React.useState(2)
  const changeSelectedIssue = (index) => {
    setSelectedIssue(index)
  }
  const changeSelectedTime = (index) => {
    setSelectedTime(index)
  }
  return (
    <div>

      <Card>
        <CardHeader
          disableTypography={false}
          titleTypographyProps={{
            variant: 'h6',
            style: {
              position: "relative",
              color: theme.palette.grey[500]
            }
          }}
          title="KEY ISSUES"
        />
        <CardContent className={classes.content}>
          <Grid
            alignContent="space-around"
            alignItems="flex-start"
            container
            justify="flex-start"
            spacing={1}
          >
            {hospital.keyIssues.map((issue, i) => (
              <Grid
                item
                key={i}
              >
                <div className={classes.issueItems} style={{
                  padding: '2px',
                  border: (i === selectedIssue) ? `1.5px solid ${theme.palette.primary.main}` : `0.5px solid ${theme.palette.grey[400]}`,
                  borderRadius: 4,
                  cursor: "pointer",
                }}
                     onClick={() => changeSelectedIssue(i)}>
                  <div>
                    <Box style={{margin: '2px'}} fontWeight="fontWeightMedium" fontSize={14} m={1}>
                      {issue.title}
                    </Box>
                    <Box style={{margin: '2px'}} fontWeight="fontWeightRegular" fontSize={12} m={1}
                         color={theme.palette.grey[500]}>
                      {issue.location}
                    </Box>
                  </div>
                  <IconButton style={{margin: '3px'}}
                              edge="end"
                              size="small"
                  >
                    <MoreVertIcon/>
                  </IconButton>
                </div>

              </Grid>

            ))}

          </Grid>


        </CardContent>
      </Card>
      <Card style={{marginTop: theme.spacing(2)}}>
        <CardHeader
          disableTypography={false}
          titleTypographyProps={{
            variant: 'h6',
            style: {
              position: "relative",
              color: theme.palette.grey[500]
            }
          }}
          title="MONITORING PERIOD"
        />
        <CardContent className={classes.content}>

          <div style={{display: 'flex'}}>
            <div style={{
              padding: '0.5px',
              border: `0.5px solid ${theme.palette.grey[200]}`,
              borderRadius: 4,
              backgroundColor: 'white',
              cursor: "pointer", display: 'flex'
            }}>
              {times.map((item, i) => (
                <div className={classes.issueItems} style={{
                  minWidth: '100px',
                  padding: '2px',
                  border: (i === selectedTime) ? `1.5px solid ${theme.palette.primary.main}` : `none`,
                  borderRadius: 4,
                  backgroundColor: 'white',
                  cursor: "pointer"
                }}
                     onClick={() => changeSelectedTime(i)}>
                  <Box className={classes.timeItems} textAlign="center" fontWeight="fontWeightMedium" fontSize={16}
                       m={1}
                       color={(selectedTime === i) ? theme.palette.primary.main : theme.palette.grey[500]}>
                    {item}
                  </Box>

                </div>


              ))}
            </div>

            <div className={classes.nameContainer} style={{
              padding: theme.spacing(1),
              border: `1px solid ${theme.palette.grey[400]}`,
              borderRadius: 4,
              backgroundColor: 'white',
              marginLeft: theme.spacing(2)
            }}>
              <Timelapse color={'primary'} className={classes.avatar}/>

              <Typography variant="body1" color={'primary'}>{'10 Dec - 10 Jan'}</Typography>
            </div>
          </div>


        </CardContent>
      </Card>
      <div style={{marginTop: theme.spacing(2), display: 'flex'}}>
        <Grid
          alignContent="flex-start"
          alignItems="flex-start"
          justify="space-evenly"
          container
          spacing={2}>
          {hospital.analytics.map((data, i) => (
            <Grid
              item
              lg={4}
              md={4}
              sm={6}
              xl={4}
              xs={12}>
              <ChartItem chartData={data}/>
            </Grid>
          ))}

        </Grid>

      </div>
      <div style={{marginTop: theme.spacing(3)}}>
        <StaffPerformanceTable staffPerformance={hospital.staffPerformance}/>
      </div>
    </div>
  )
}

export default KeyIssues
