/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, {forwardRef} from 'react'
import {NavLink as RouterLink, useHistory} from 'react-router-dom'
import PropTypes from 'prop-types'
import {makeStyles} from '@material-ui/styles'
import {useDispatch, useSelector} from "react-redux"
import {appActions} from "../../../../../../reduxActions"
import actionTypes from "../../../../../../reduxActions/actions"
import Icon from '@material-ui/core/Icon'
import theme from '../../../../../../theme'

const useStyles = makeStyles(theme => ({
  root: {},
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.grey[500],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    letterSpacing: 0,
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '& $icon': {
      color: theme.palette.grey[500]
    },
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.15)',
      color: theme.palette.grey[500],
      '& $icon': {
        color: theme.palette.grey[500]
      }
    },
  },
  icon: {
    color: theme.palette.grey[500],
    display: 'flex',
    alignItems: 'center',
    marginRight: theme.spacing(1)
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '& $icon': {
      color: theme.palette.primary.main
    },
    // backgroundColor: theme.palette.common.white
  },
  nested: {
    paddingLeft: theme.spacing(1),
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  issueItems: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', justifyContent: 'flex-end', alignContent: 'center',
    width: '240px',
    height: '56px',
    marginTop: theme.spacing(1),
    padding: 0,
    cursor: "pointer",
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.15)',
      color: theme.palette.grey[500],
      '& $icon': {
        color: theme.palette.grey[500]
      }
    },
  },
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div
    ref={ref}
    style={{flexGrow: 1}}
  >
    <RouterLink {...props} />
  </div>
))

const SidebarNav = props => {
  const {pages, className, ...rest} = props
  const history = useHistory()
  const [selectedMenu, setSelectedMenu] = React.useState(1)
  const classes = useStyles()
  const sidebarManOpen = useSelector(state => state.uiStates.sidebarManOpen)
  const dispatch = useDispatch()

  const handleClick = () => {
    // setOpen(!open)
    dispatch(appActions(actionTypes.UI_STATE, {sidebarManOpen: !sidebarManOpen}))
  }
  const changeSelectedMenu = (index, path) => {
    setSelectedMenu(index)
    history.push(path)
  }
  return (
    <div
    >
      {pages.map((page, index) =>
        (
          <div className={classes.issueItems} onClick={() => changeSelectedMenu(index, page.href)}>
            <Icon style={{marginRight: theme.spacing(1), colorAction: theme.palette.grey[200]}}
                  edge="end"
                  fontSize="large"
                  color={(selectedMenu === index) ? 'primary' : 'action'}
            >
              {page.icon}
            </Icon>
          </div>
          /*<ListItem
            className={classes.item}
            disableGutters
            key={index}
          >
            <IconButton
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.href} size={'medium'}
            >
              {page.icon}
            </IconButton>
          </ListItem>*/

        ))}
    </div>
  )
}

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired
}

export default SidebarNav
