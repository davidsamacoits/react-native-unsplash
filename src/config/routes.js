import { StackNavigator } from 'react-navigation';

import Feed from '../views/Feed';
import Detail from '../views/Detail';

import { COLORS } from '../styles/common';

// Header style configuration
const defaultHeaderConfig = {
  headerStyle: {
    borderBottomWidth: 0,
  },
  headerTransparent: true,
  headerTintColor: COLORS.WHITE,
};

export default StackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: () => ({
        ...defaultHeaderConfig,
      }),
    },
    Detail: {
      screen: Detail,
      navigationOptions: () => ({
        ...defaultHeaderConfig,
      }),
    }
  },
  {
    initialRouteName: 'Feed',
  }
);