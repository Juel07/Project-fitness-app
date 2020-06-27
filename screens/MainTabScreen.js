import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Analytics from './Analytics';
import ExerciseScreen from './ExerciseScreen';
import WorkoutScreen from './WorkoutScreen';
import Settings from './Settings';
import LandingScreen from './LandingScreen';

import Icon from 'react-native-vector-icons/Ionicons';
import PieIcon from 'react-native-vector-icons/AntDesign';
import SettingsIcon from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const LandingStack = createStackNavigator();
const AnalyticsStack = createStackNavigator();
const SettingsStack = createStackNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Workouts"
        tabBarOptions={{
            activeTintColor: '#2C1966',
            inactiveTintColor: '#dadada',
            showLabel: true
        }}
    >
          <Tab.Screen
            name="Workouts"
            component={LandingStackScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-fitness" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="Analytics"
            component={AnalyticsStackScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <PieIcon name="piechart" color={color} size={25} />
                ),
            }}
        />

        <Tab.Screen
            name="Settings"
            component={SettingsStackScreen}
            options={{
                tabBarColor: '#fff',
                tabBarIcon: ({ color }) => (
                    <SettingsIcon name="setting" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 50,
        mass: 2,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

const LandingStackScreen = () => (
    <LandingStack.Navigator
        screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#2C1966',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                },
            headerTitleAlign: 'center',
            gestureEnabled: true, gestureDirection: 'horizontal',
            transitionSpec: { open: config, close: config },
            cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS,
        }}
        options={({ route }) => ({
            title: route.params.name
        })}
    >
        <LandingStack.Screen name="Workouts" component={LandingScreen} />
        <LandingStack.Screen name="Full Body Workout 1" component={WorkoutScreen} />
        <LandingStack.Screen name="Bench Press" component={ExerciseScreen} />
    </LandingStack.Navigator>
)


const SettingsStackScreen = () => (
    <SettingsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#2C1966',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                },
            headerTitleAlign: 'center',
            headerBackTitleVisible: 'false',
            gestureEnabled: true, gestureDirection: 'horizontal',
            transitionSpec: { open: config, close: config },
            cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS,
        }}
        options={({ route }) => ({
            title: route.params.name
        })}
    >
        <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
)

const AnalyticsStackScreen = () => (
    <AnalyticsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#2C1966',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                },
            headerTitleAlign: 'center',
            headerBackTitleVisible: 'false',
            gestureEnabled: true, gestureDirection: 'horizontal',
            transitionSpec: { open: config, close: config },
            cardStyleInterpolator:
                CardStyleInterpolators.forHorizontalIOS,
        }}
        options={({ route }) => ({
            title: route.params.name
        })}
    >
        <AnalyticsStack.Screen name="Analytics" component={Analytics} />
    </AnalyticsStack.Navigator>
)
