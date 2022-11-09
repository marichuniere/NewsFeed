import React from 'react'
import NewsFeed from './src/pages/NewsFeed'
import NewsDetail from './src/pages/NewsDetail'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { navigationRef } from './src/utils/RootNavigation'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar
        animated={false}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <Stack.Navigator>
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeed}
          options={{
            headerShown: false,
            animation: 'none'
          }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{
            headerShown: false,
            animation: 'none'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
