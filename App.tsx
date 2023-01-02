import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export const App = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-black'>Open up App.tsx to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  )
}

export default App
