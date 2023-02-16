import { NativeBaseProvider, StatusBar } from 'native-base'
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto'

import { THEME } from './src/presentation/styles/theme'
import { Loading } from './src/presentation/components/Loading'
import { Routes } from './src/presentation/routes'
import { AuthContextProvider } from './src/presentation/context/AuthContext'

export default function App () {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>
      <AuthContextProvider>
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent
        />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
