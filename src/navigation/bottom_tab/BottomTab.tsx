import {View, Text, Dimensions, Animated} from 'react-native';
import React, {useRef} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screens/home_screen/HomeScreen';
import ProfileScreen from '../../screens/profile_screen/ProfileScreen';
import CalenderScreen from '../../screens/calender_screen/CalenderScreen';
import AlertScreen from '../../screens/alert_screen/AlertScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PlusModel from '../../screens/plus_model/PlusModel';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            height: 80,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
          },
          headerShown: false,
          tabBarActiveTintColor: '#3F4247',
          tabBarInactiveTintColor: '#C1C5C4',
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          listeners={({navigation, route}) => ({
            tabPress: e =>
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start(),
          })}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                color={color}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                color={color}
                size={25}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e =>
              Animated.spring(tabOffsetValue, {
                toValue: getwidth() * 1.2,
                useNativeDriver: true,
              }).start(),
          })}
        />
        <Tab.Screen
          name="add"
          component={PlusModel}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  backgroundColor: '#4088FD',
                  height: 55,
                  width: 55,
                  borderRadius: 55,
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="add" color={'#fff'} size={25} />
              </View>
            ),
            tabBarIconStyle: {
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
              height: 90,
              width: 90,
              borderRadius: 100,
              top: -20,
            },
          }}
          listeners={({navigation, route}) => ({
            tabPress: e =>
              Animated.spring(tabOffsetValue, {
                toValue: 5000,
                useNativeDriver: true,
              }).start(),
          })}
        />
        <Tab.Screen
          name="CalenderScreen"
          component={CalenderScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'calendar' : 'calendar-outline'}
                color={color}
                size={25}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e =>
              Animated.spring(tabOffsetValue, {
                toValue: getwidth() * 3.4,
                useNativeDriver: true,
              }).start(),
          })}
        />
        <Tab.Screen
          name="AlertScreen"
          component={AlertScreen}
          options={{
            tabBarIcon: ({focused, color}) => (
              <Ionicons
                name={focused ? 'notifications' : 'notifications-outline'}
                color={color}
                size={25}
              />
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e =>
              Animated.spring(tabOffsetValue, {
                toValue: getwidth() * 4.5,
                useNativeDriver: true,
              }).start(),
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getwidth(),
          height: 5,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          position: 'absolute',
          alignItems: 'center',
          bottom: 75,
          transform: [
            {
              translateX: tabOffsetValue,
            },
          ],
        }}>
        <View
          style={{
            width: 30,
            height: 5,
            alignSelf: 'center',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            backgroundColor: '#3F4247',
          }}
        />
      </Animated.View>
    </>
  );

  function getwidth() {
    let width = Dimensions.get('window').width;
    width = width - 40;
    return width / 5;
  }
};

export default BottomTab;
