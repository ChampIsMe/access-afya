import React, {useEffect} from 'react'
import {makeStyles} from '@material-ui/styles'
import {Grid} from '@material-ui/core'

import {KeyIssues, StationLeftPane} from './components'
import StationsToBar from './components/StationsToBar'
import Divider from "@material-ui/core/Divider"
import {useSelector} from "react-redux"
import hospitals from './hospData';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    backgroundColor: '#ebebeb41'
  }
}))

const Hospitals = () => {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [hospital, setHospital] = React.useState(hospitals[selectedIndex])
  const [times, setTimes] = React.useState(['Day', 'Month', 'Year'])
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }
  useEffect(() => {
    setHospital(hospitals[selectedIndex])
  }, [selectedIndex])
  return (
    <div className={classes.root}>
      <StationsToBar/>
      <Divider/>
      {hospitals.length > 0 ?
        <Grid
          container
          justify={"space-between"}
          spacing={1}
        >
          <Grid
            item
            lg={2}
            md={2}
            xl={2}
            xs={12}
          >
            <StationLeftPane handleListItemClick={handleListItemClick} hospitals={hospitals}
                             selectedIndex={selectedIndex}/>
          </Grid>
          {(selectedIndex > -1) && (<Grid
            item
            lg={10}
            md={10}
            xl={10}
            xs={12}>
            <KeyIssues hospital={hospital} times={times} selectedIndex={selectedIndex}/>
          </Grid>)}


        </Grid> : <div>Loading hospitals...</div>}
    </div>
  )
}

export default Hospitals
