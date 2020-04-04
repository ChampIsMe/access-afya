import React from 'react'
import clsx from 'clsx'
import {makeStyles} from '@material-ui/styles'
import {
  Card,
  CardContent,
  CardHeader,
  colors,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core'
import {MoreVert} from "@material-ui/icons"
import theme from "../../../../theme"

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%'
  },
  content: {
    padding: 0
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
    backgroundColor: theme.palette.common.white,
    border: `0.5px solid ${theme.palette.grey[200]}`,
    borderRadius: 6,
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '95%',
    fontWeight: theme.typography.fontWeightMedium,
    margin: theme.spacing(1)
  },
  icon: {
    color: theme.palette.icon,
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
}))

const StationLeftPane = ({hospitals, selectedIndex, handleListItemClick}) => {
  const classes = useStyles()
  return (
    <Card
      className={clsx(classes.root)}>
      <CardHeader
        disableTypography={false}
        titleTypographyProps={{
          color: theme.palette.grey[500],
          variant: 'h6',
          style: {
            position: "relative",
            color: theme.palette.grey[500]
          }
        }}
        title="VISITS"
      />
      <Divider/>
      <CardContent className={classes.content}>
        <List className={classes.content}>
          {hospitals.map((hospital, i) => (
            <ListItem
              button
              className={classes.button}
              key={i}
              style={{backgroundColor:(selectedIndex === i) ? theme.palette.primary.main : ''}}
              selected={selectedIndex === i}
              onClick={event => handleListItemClick(event, i)}>
              <ListItemText
                disableTypography={true}
                primary={<Typography
                  style={{color: (selectedIndex === i) ? theme.palette.common.white : ''}}>{hospital.name}</Typography>}
              />
              <div className={classes.icon} style={{color: (selectedIndex === i) ? theme.palette.common.white : ''}}>
                <MoreVert/></div>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default StationLeftPane
