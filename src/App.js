import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home/Home';
import HomePlusIcon from './svgs/HomePlusIcon';
import HouseIcon from './svgs/HouseIcon';
import RankIcon from './svgs/RankIcon';
import BellIcon from './svgs/BellIcon';
import UserIcon from './svgs/UserIcon';
import Saved from './screens/Saved/Saved';
import Notifications from './screens/Notifications/Notifications';



const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function App() {
  const _renderIcon = (routeName, selectedTab) => {
    let icon = null;
    let color = 'gray';
    let size = 24;

    if (routeName === selectedTab) {
      color = 'red';
      size = 27;
    }

    switch (routeName) {
      case 'title1':
        icon = <HouseIcon color={color} size={size} />;
        break;
      case 'title2':
        icon = <RankIcon color={color} size={size} />;
        break;
      case 'title3':
        icon = <BellIcon color={color} size={size} />;
        break;
      case 'title4':
        icon = <UserIcon color={color} size={size} />;
        break;
      default:
        break;
    }

    return icon;
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <NavigationContainer>
<StatusBar backgroundColor="#FFFFFF"  />
      <CurvedBottomBar.Navigator
        type="DOWN"
        style={styles.bottomBar}
        shadowStyle={styles.shadow}
        height={60}
        marginBottom={20}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        screenOptions={{ headerShown: false }}
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Alert.alert('Click Action')}
            >
              <HomePlusIcon />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          component={Home}
          options={{ headerShown: false }} // Hide header for this screen
        />
        <CurvedBottomBar.Screen
          name="title2"
          position="LEFT"
          component={Saved}
          options={{ headerShown: false }} // Hide header for this screen
        />
        <CurvedBottomBar.Screen
          name="title3"
          component={Notifications}
          position="RIGHT"
          options={{ headerShown: false }} // Hide header for this screen
        />
        <CurvedBottomBar.Screen
          name="title4"
          component={Screen2}
          position="RIGHT"
          options={{ headerShown: false }} // Hide header for this screen
        />
      </CurvedBottomBar.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  shadow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE0000',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 10,
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
