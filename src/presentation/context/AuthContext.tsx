import { createContext, ReactNode, useState, useEffect } from "react"
import { useToast } from "native-base"
import { makeApiUrl } from "../../main/factory/api-url-factory"
import { makeAxiosHttpClient } from "../../main/factory/axios-http-client-factory"
import { AuthUtil } from "../../services/auth-util"

interface UserProps {
  name: string
  email: string
}

interface FormDataSigninProps {
  email: string
  password: string
}

interface FormDataSignupProps {
  name: string
  phone: string
  email: string
  password: string
}


export interface AuthContextDataProps {
  user: UserProps
  userIsLoading: boolean
  signIn: () => Promise<void>,
  signUp: () => Promise<boolean>,
  signOut: () => Promise<void>,
  formDataSignin: FormDataSigninProps,
  setFormDataSignin: (formData: FormDataSigninProps) => void
  formDataSignup: FormDataSignupProps,
  setFormDataSignup: (formData: FormDataSignupProps) => void
}

interface AuthProviderProps {
  children: ReactNode
}


export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider ({ children }: AuthProviderProps) {
  const [userIsLoading, setUserIsLoading] = useState(false)
  const [user, setUser] = useState<UserProps>({} as UserProps)
  const [formDataSignin, setFormDataSignin] = useState<FormDataSigninProps>({} as FormDataSigninProps)
  const [formDataSignup, setFormDataSignup] = useState<FormDataSignupProps>({} as FormDataSignupProps)
  const toast = useToast()

  const loadUser = async () => {
    const loggedUser = await AuthUtil.getUser()
    if (loggedUser) {
      setUser(loggedUser)
    }
  }

  useEffect(() => {
    loadUser()
  }, [])


  async function signUp (): Promise<boolean> {
    setUserIsLoading(true)
    const { body, statusCode } = await makeAxiosHttpClient().post({
      url: '/auth/signup', body: formDataSignup
    })
    console.log('body', body)

    setUserIsLoading(false)
    if ([201, 200].includes(statusCode)) {
      setFormDataSignup({} as FormDataSignupProps)
      toast.show({
        title: 'Cadastro efectuado com sucesso. Já pode fazer o login.',
        placement: 'top',
        bgColor: 'green.500'
      })
      return true
    } else {
      toast.show({
        title: body.message,
        placement: 'top',
        bgColor: 'red.500',
        duration: 8000
      })
      return false
    }
  }

  async function signIn () {
    setUserIsLoading(true)

    if (!formDataSignin.email || formDataSignin.email.trim() == '' || !formDataSignin.password || formDataSignin.password.trim() == '') {
      toast.show({
        title: 'Informe o email e a senha.',
        placement: 'top',
        bgColor: 'red.500'
      })
    } else {
      const { body } = await makeAxiosHttpClient().post({
        url: makeApiUrl('/auth/login'), body: formDataSignin
      })
      const access_token = body.access_token
      if (access_token) {
        await AuthUtil.setToken(access_token)

        const { body: userData } = await makeAxiosHttpClient().get({
          url: makeApiUrl('/users/me')
        })

        setFormDataSignin({} as FormDataSigninProps)
        setUser(userData)

        await AuthUtil.setUser(userData)

        toast.show({
          title: 'Sessão iniciada com sucesso.',
          placement: 'top',
          bgColor: 'green.500'
        })
      } else {
        toast.show({
          title: body.message,
          placement: 'top',
          bgColor: 'red.500'
        })
      }
    }
    setUserIsLoading(false)
  }

  async function signOut () {
    toast.show({
      title: 'Terminou a sessão.',
      placement: 'top',
      bgColor: 'green.500'
    })
    setUser({} as UserProps)
    AuthUtil.signOut()
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      signUp,
      user,
      userIsLoading,
      formDataSignin,
      setFormDataSignin,
      formDataSignup,
      setFormDataSignup,
    }}>
      {children}
    </AuthContext.Provider>
  )
}