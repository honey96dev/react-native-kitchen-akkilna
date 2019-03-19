import _ from 'lodash';
import { FontIcons } from '../../assets/icons';
import { Ionicons } from '../../assets/icons';
import * as Screens from '../../screens/index';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const MainRoutes = [

  {
    id: 'Explore',
    title: 'Explore',
    icon: FontIcons.other,
    screen: Screens.Explore,
    children: [],
  },
  {
    id: 'Events',
    title: 'Events',
    icon: FontIcons.other,
    screen: Screens.Events,
    children: [
      {
      id: 'Events',
      title: 'Events',
      screen: Screens.Events,
      children: [],
    },
    {
      id: 'Eventsdetail',
      title: 'Event Details',
      screen: Screens.Eventsdetail,
      children: [],
    },
  ],
  },
  {
    id: 'Directory',
    title: 'Directory',
    icon: FontIcons.profile,
    screen: Screens.Directory,
    children: [
      {
        id: 'Directorydetail',
        title: 'Directory Detail',
        screen: Screens.Directorydetail,
        children: [],
      },
      {
        id: 'ProfileSettings',
        title: 'Profile Settings',
        screen: Screens.ProfileSettings,
        children: [],
      },
    ],
  },
  {
    id: 'Blogs',
    title: 'Blogs',
    icon: FontIcons.article,
    screen: Screens.Blog,
    children: [
      {
        id: 'Blog',
        title: 'Blog',
        screen: Screens.Blog,
        children: [],
      },
      {
        id: 'BlogView',
        title: 'Blog View',
        screen: Screens.BlogView,
        children: [],
      },
    ],
  },
 
  {
    id: 'NavigationMenu',
    icon: FontIcons.navigation,
    title: 'Navigation',
    screen: Screens.NavigationMenu,
    children: [
      {
        id: 'GridV1',
        title: 'Grid Menu V1',
        screen: Screens.GridV1,
        children: [],
      },
      {
        id: 'GridV2',
        title: 'Grid Menu V2',
        screen: Screens.GridV2,
        children: [],
      },
      {
        id: 'List',
        title: 'List Menu',
        screen: Screens.ListMenu,
        children: [],
      },
      {
        id: 'Side',
        title: 'Side Menu',
        action: 'DrawerOpen',
        screen: Screens.SideMenu,
        children: [],
      },
    ],
  },
  {
    id: 'OtherMenu',
    title: 'Other',
    icon: FontIcons.other,
    screen: Screens.OtherMenu,
    children: [
      {
        id: 'Settings',
        title: 'Settings',
        screen: Screens.Settings,
        children: [],
      },
    ],
  },
  {
    id: 'Conference',
    title: 'Conference',
    icon: FontIcons.other,
    screen: Screens.Conference,
    children: [],
  },
  {
    id: 'Office',
    title: 'Offices',
    icon: FontIcons.other,
    screen: Screens.Office,
    children: [],
  },
  {
    id: 'Facilities',
    title: 'Facilities',
    icon: FontIcons.other,
    screen: Screens.Facilities,
    children: [],
  },
  {
    id: 'Wayfinder',
    title: 'Wayfinder',
    icon: FontIcons.other,
    screen: Screens.Wayfinder,
    children: [],
  },
];

const menuRoutes = _.cloneDeep(MainRoutes);
menuRoutes.unshift({
  id: 'LoginV1',
  title: 'Start',
  screen: Screens.LoginV1,
  children: [],
});

export const MenuRoutes = menuRoutes;
