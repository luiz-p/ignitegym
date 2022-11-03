import { NativeBaseProvider } from 'native-base'
import { StatusBar, View } from 'react-native'

import { Loading } from '@components/Loading'
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto'

export default function App () {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold })

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {!fontsLoaded ? <View /> : <Loading />}
    </NativeBaseProvider>
  )
}
