import { Center, Spinner } from 'native-base'
import { ImageBackground } from 'react-native'

export const Loading = () => {
  return (
    <Center flex={1}>
      <ImageBackground
        style={{
          width: '100%',
          flex: 1,
          justifyContent: 'center'
        }}
        source={require('../../../assets/splash.jpg')}>
        <Spinner size={48} color="yellow.500" />
      </ImageBackground>
    </Center>
  )
}