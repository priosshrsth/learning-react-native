import { useColorScheme } from 'react-native';
import HomeScreen from 'src/screens/home.screen';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ContactsScreen from 'src/screens/contacts.screen';
import SettingsScreen from 'src/screens/settings.screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TabbedView() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Tab.Navigator
      initialRouteName={'Contacts'}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
      backBehavior={'history'}
    >
      <Tab.Screen
        name="Dial"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dial',
          headerTitleStyle: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
            textAlign: 'center',
          },
          tabBarIcon: ({ color, size }) => <Icon name="phone-dial" color={color} size={size} />,
          headerStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }) => <Icon name="star" color={color} size={size} />,
          headerTitleStyle: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
            textAlign: 'center',
          },
          headerStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          },
        }}
      />
      <Tab.Screen
        name="Recents"
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Recents',
          headerTitleStyle: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
            textAlign: 'center',
          },
          tabBarIcon: ({ color, size }) => <Icon name="history" color={color} size={size} />,
          headerStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          },
        }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsScreen}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color, size }) => <Icon name="tooltip-account" color={color} size={size} />,
          headerTitleStyle: {
            color: isDarkMode ? Colors.lighter : Colors.darker,
            textAlign: 'center',
          },
          headerStyle: {
            backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
          },
        }}
      />
    </Tab.Navigator>
  );
}
