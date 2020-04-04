import React from 'react'
import clsx from 'clsx';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDropDown';
import ArrowUpward from '@material-ui/icons/ArrowDropUp';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/styles';
import {
  Card,
  CardContent,
  Divider,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@material-ui/core';
import theme from "../../../../theme"

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
    marginRight: theme.spacing(1)
  },
  actions: {
    justifyContent: 'flex-end'
  },
  avatar: {
    marginRight: theme.spacing(1)
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  difference: {
    marginTop: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  differenceDownIcon: {
    width: 18,
    height: 18,
    color: theme.palette.error.light,
  },
  differenceUpIcon: {
    width: 18,
    height: 18,
    color: theme.palette.success.dark,
  },
  differenceValue: {
    color: theme.palette.error.light,
  }
}));

function StaffPerformanceTable(props) {
  const {staffPerformance, ...rest} = props;

  const classes = useStyles();

  let rowClick = (index) => {
    //todo: implement changing of row background when row is clicked for horizontal scroll tracing
    console.log('clicked_________' + index)
  }
  return (
    <Card
      {...rest}
      className={clsx(classes.root)}
    >
      <Divider/>
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell sortDirection="desc">
                    Staff Name
                  </TableCell>
                  <TableCell>Efficiency Delta</TableCell>
                  <TableCell>NPS Delta</TableCell>
                  <TableCell>Efficiency</TableCell>
                  <TableCell>Reported</TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {staffPerformance.map((data, index) => (
                  <TableRow
                    hover
                    onClick={() => rowClick(index)}
                    key={data.id}
                  >
                    <TableCell>{(index + 1)}</TableCell>
                    <TableCell>
                      {data.name}
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <Typography
                          component="p"
                          style={{marginLeft: '5px'}}
                          variant="h6"
                        >
                          {data.effValue}
                        </Typography>
                        <Typography
                          component="p"
                          style={{
                            color: (data.effPositiveChange) ? theme.palette.success.light : theme.palette.error.light,
                            marginLeft: '5px'
                          }}
                          variant="caption"
                        >
                          {(data.effPositiveChange) ? '+' : '-'}{data.effChangeValue}
                        </Typography>

                        {(data.effPositiveChange) ? <ArrowUpward className={classes.differenceUpIcon}/> :
                          <ArrowDownwardIcon className={classes.differenceDownIcon}/>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <Typography
                          component="p"
                          style={{marginLeft: '5px'}}
                          variant="h6"
                        >
                          {data.npValue}
                        </Typography>
                        <Typography
                          component="p"
                          style={{
                            color: (data.npPositiveChange) ? theme.palette.success.light : theme.palette.error.light,
                            marginLeft: '5px'
                          }}
                          variant="caption"
                        >
                          {(data.npPositiveChange) ? '+' : '-'}{data.npChangeValue}
                        </Typography>

                        {(data.npPositiveChange) ? <ArrowUpward className={classes.differenceUpIcon}/> :
                          <ArrowDownwardIcon className={classes.differenceDownIcon}/>}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography
                          component="p"
                          variant="h6"
                        >
                          {data.efficiency}%
                        </Typography>
                        <LinearProgress style={{width: '100px', marginLeft: theme.spacing(1)}}
                                        value={data.efficiency}
                                        variant="determinate"
                        />
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className={classes.nameContainer}>
                        <Typography
                          component="p"
                          style={{marginLeft: '5px'}}
                          variant="h6"
                        >
                          {data.reported}
                        </Typography>
                        <LinearProgress style={{width: '100px', marginLeft: theme.spacing(1)}}
                                        value={data.reported}
                                        variant="determinate"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider/>
    </Card>
  );
}

export default StaffPerformanceTable
