import React from 'react';
import {makeStyles} from '@material-ui/styles'
import {Box, Card, CardContent, Typography} from '@material-ui/core'
import CardActionArea from "@material-ui/core/CardActionArea"
import CardLineChart from './CardLineChart'
import theme from '../../../../theme'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpward from '@material-ui/icons/ArrowDropUp';

const useStyles = makeStyles(theme => ({
  root: {
    // height: '100%'
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  differenceDownIcon: {
    width: 18,
    height: 18,
    color: theme.palette.error.light,
  },
  difference: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  differenceUpIcon: {
    width: 18,
    height: 18,
    color: theme.palette.success.light,
  },
}))

function ChartItem({chartData}) {
  const classes = useStyles()

  const [raised, setRaised] = React.useState(false)
  return (
    <Card raised={raised}>
      <CardActionArea>
        <CardContent onMouseEnter={event => setRaised(true)} onMouseLeave={event => setRaised(false)}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
            variant="body1">
            {chartData.title}
          </Typography>
          <div style={{display: 'flex'}}>
            <div style={{marginRight: theme.spacing(2), marginTop: theme.spacing(2)}}>

              <Typography variant="h3"
                          color={'primary'}>{chartData.value}</Typography>
              <Box style={{margin: '2px'}} fontWeight="fontWeightMedium" fontSize={10} m={1}
                   color={theme.palette.grey[500]}>
                {chartData.description}
              </Box>
              <div className={classes.statusContainer}>
                {(chartData.positiveChange) ? <ArrowUpward className={classes.differenceUpIcon}/> :
                  <ArrowDownwardIcon className={classes.differenceDownIcon}/>}
                <Typography
                  component="p"
                  style={{color: (chartData.positiveChange) ? theme.palette.success.light : theme.palette.error.light}}
                  variant="caption"
                >
                  {(chartData.positiveChange) ? '+' : '-'}{chartData.changeValue}
                </Typography>
              </div>
            </div>
            <CardLineChart chartData={chartData}/>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>)
}

export default ChartItem;
