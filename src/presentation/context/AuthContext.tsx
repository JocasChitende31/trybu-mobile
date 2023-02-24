import { createContext, ReactNode, useState, useEffect } from "react";
import { useToast } from "native-base";
import { makeAxiosHttpClient } from "../../main/factory/axios-http-client-factory";
import { AuthUtil } from "../../services/auth-util";
import { IUser } from "../../@types/user";
import { UserListData } from "../../utils/data/user";
import { StringUtils } from "../../utils/string-utils";
import React from "react";


interface FormDataSigninProps {
  email: string
  password: string
}

interface FormDataSignupProps {
  name: string
  phone: string
  whatsapp: string
  email: string
  password: string
  password_confirmation: string
}


export interface AuthContextDataProps {
  user: IUser
  userIsLoading: boolean
  signIn: () => Promise<void>,
  signUp: () => Promise<boolean>,
  signinTest: () => void
  signOut: (message?: string) => Promise<void>,
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
  const [user, setUser] = useState<IUser>({} as IUser)
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

    setUserIsLoading(false)
    if ([201, 200].includes(statusCode)) {
      setFormDataSignup({} as FormDataSignupProps)
      toast.show({
        title: 'Cadastro efectuado com sucesso. Já pode fazer o login!',
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

  function signinTest () {
    if (
      !formDataSignin.email || formDataSignin.email.trim() == ''
      || !formDataSignin.password || formDataSignin.password.trim() == ''
    ) {
      return toast.show({
        title: 'Informe o email e a senha.',
        placement: 'top',
        bgColor: 'red.500'
      })
    }

    const userData = UserListData.find(user => (
      (
        user.email.toLowerCase() === formDataSignin.email.toLowerCase() ||
        user.username.toLowerCase() === formDataSignin.email.toLowerCase()
      ) &&
      user.password.toLowerCase() === formDataSignin.password.toLowerCase()
    ))

    if (userData) {
      toast.show({
        title: `Bem-vinda ${StringUtils.getFirstWord(userData.name)}!`,
        placement: 'top',
        bgColor: 'green.500'
      })
      setUser(userData)
    } else {
      toast.show({
        title: 'As credenciais não conferem',
        placement: 'top',
        bgColor: 'red.500'
      })
    }

  }

  async function signIn () {
    if (
      !formDataSignin.email || formDataSignin.email.trim() == ''
      || !formDataSignin.password || formDataSignin.password.trim() == ''
    ) {
      toast.show({
        title: 'Informe o email e a senha.',
        placement: 'top',
        bgColor: 'red.500'
      })
    } else {
      setUserIsLoading(true)

      const { body } = await makeAxiosHttpClient().post({
        url: '/auth/login', body: formDataSignin
      })
      const access_token = body.access_token
      if (access_token) {
        await AuthUtil.setToken(access_token)

        const { body: userData } = await makeAxiosHttpClient().get({
          url: '/users/me'
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
      setUserIsLoading(false)
    }
  }

  async function signOut (message?: string) {
    if (message) {
      toast.show({
        title: message,
        placement: 'top',
        bgColor: 'green.500'
      })
    }

    setUser({} as IUser)
    AuthUtil.signOut()
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      signinTest,
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