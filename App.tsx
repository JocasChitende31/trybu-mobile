import { NativeBaseProvider, StatusBar } from 'native-base'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import { THEME } from './src/presentation/styles/theme'
import { Loading } from './src/presentation/components/Loading'
import { Routes } from './src/presentation/routes'
import { AuthContextProvider } from './src/presentation/context/AuthContext'
import { EventProvider } from './src/presentation/context/EventContext'

export default function App () {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <EventProvider>
          <StatusBar
            barStyle='dark-content'
            backgroundColor='transparent'
            translucent
          />
          {fontsLoaded ? <Routes /> : <Loading />}
        </EventProvider >
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
