import React from 'react';
import {Box, Card, CardContent, CardHeader, Typography} from '@material-ui/core'
import theme from '../../../../theme'
import {Timelapse} from '@material-ui/icons'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(1),
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

function MonitoringPeriod({times, selectedTime, changeSelectedTime}) {
  const classes = useStyles()
  return (

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
  );
}

export default MonitoringPeriod;
