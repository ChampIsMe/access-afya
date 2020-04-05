import React from 'react'
import {makeStyles} from '@material-ui/styles'
import {Card, CardContent, CardHeader, colors, Grid} from '@material-ui/core'
import theme from '../../../../theme'
import {ChartItem} from '../index'
import StaffPerformanceTable from '../StaffPerformance'
import IssueItem from './IssueItem'
import MonitoringPeriod from './MonitoringPeriod'

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(1),
  },
}))

const AnalyticsRightPane = ({hospital, selectedIndex, handleListItemClick, times}) => {
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
              <IssueItem issue={issue} changeSelectedIssue={changeSelectedIssue} selectedIssue={selectedIssue} i={i}/>

            ))}

          </Grid>


        </CardContent>
      </Card>
      <MonitoringPeriod changeSelectedTime={changeSelectedTime} selectedTime={selectedTime} times={times}/>
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

export default AnalyticsRightPane
