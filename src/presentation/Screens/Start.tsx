import { Center } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { Button } from '../components/Button'
import { LogoLG } from '../components/Logo'
import { ImageBackground } from 'react-native'
import { useEffect, useState } from 'react'
import { AuthUtil } from '../../services/auth-util'
import { Loading } from '../components/Loading'

const image = require('../../../assets/fundo.jpg')

export function Start () {
  const { navigate } = useNavigation()

  const [firstTime, setFirstTime] = useState<'loading' | 'yes' | 'no'>('loading')

  useEffect(() => {
    (async () => {
      const isFirstTime = await AuthUtil.firstTime()
      console.log('isFirstTime', isFirstTime)

      setFirstTime(isFirstTime ? 'yes' : 'no')

      if (!isFirstTime) {
        navigate('signin')
      }
    })()
  }, [])

  if (['loading', 'no'].includes(firstTime)) return <Loading />

  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <Center flex={1} p={5} alignItems="center" backgroundColor={'transparent'}>
        <LogoLG />
        <Button
          title='CLIQUE PARA COMEÇAR'
          type='PRIMARY'
          mt={5}
          onPress={() => navigate('signin')}
        />
      </Center>
    </ImageBackground>


  )
}