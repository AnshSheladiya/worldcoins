import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import HorizontalCardComponent from '../../components/HorizontalCard';

const Notifications = () => {
  const [activeTab, setActiveTab] = useState('All');

  // Sample notifications data
  const notifications = [
    {
      "title": "New recipe!",
      "msg": "Far far away, behind the word mountains, far from the countries.",
      "time": "today",
      "seen": false
    },
    {
      "title": "Don’t forget to try your saved recipe",
      "msg": "Far far away, behind the word mountains, far from the countries.",
      "time": "today",
      "seen": true
    },
    {
      "title": "Don’t forget to try your saved recipe",
      "msg": "Far far away, behind the word mountains, far from the countries.",
      "time": "yesterday",
      "seen": true
    }
  ];

  // Filter notifications based on the active tab
  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'All') {
      return notification.time==="today";
    } else if (activeTab === 'Read') {
      return notification.seen;
    } else if (activeTab === 'Unread') {
      return !notification.seen;
    }
  });
  const filteredYesterdayNotifications = notifications.filter(notification => {
    if (activeTab === 'All') {
      return notification.time==="yesterday";
    } else if (activeTab === 'Read') {
      return null;
    } else if (activeTab === 'Unread') {
      return null;
    }
  });
  const handleTabPress = tab => {
    setActiveTab(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Notifications</Text>
          <TouchableOpacity style={styles.filterIconContainer}>
            {/* Your filter icon component */}
          </TouchableOpacity>
        </View>

        {/* Tab bar */}
        <View style={styles.tabBar}>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'All' && styles.activeTab]}
            onPress={() => handleTabPress('All')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'All' && styles.activeTabText,
              ]}>
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Read' && styles.activeTab]}
            onPress={() => handleTabPress('Read')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Read' && styles.activeTabText,
              ]}>
              Read
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === 'Unread' && styles.activeTab]}
            onPress={() => handleTabPress('Unread')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'Unread' && styles.activeTabText,
              ]}>
              Unread
            </Text>
          </TouchableOpacity>
        </View>

        {/* Render filtered notifications */}
        <View style={styles.todayNotificationContainer}>
          <Text style={styles.subTextTitle}>Today</Text>
          <FlatList
            data={filteredNotifications}
            renderItem={({ item }) => <HorizontalCardComponent data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
          { activeTab === 'All'?<><Text style={styles.subTextTitle}>Yesterday</Text>
          <FlatList
            data={filteredYesterdayNotifications}
            renderItem={({ item }) => <HorizontalCardComponent data={item} />}
            keyExtractor={(item, index) => index.toString()}
          /></>:''}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'black',
  },
  filterIconContainer: {
    marginLeft: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 120,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 17,
    color: 'black',
  },
  activeTab: {
    backgroundColor: 'red',
  },
  activeTabText: {
    color: 'white',
  },
  todayNotificationContainer: {
    marginVertical: 15,
    paddingHorizontal: 30,
    marginTop: 25,
  },
  subTextTitle: {
    fontSize: 23,
    color: 'black',
    fontWeight: 'bold',
    marginTop:10
  },
});

export default Notifications;
