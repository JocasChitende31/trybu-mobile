import { createContext, ReactNode, useState, useEffect } from "react"
import { RecoverPassword } from "../Screens/auth/RecoverPassword"
import { Signin } from "../Screens/auth/Signin"
import { Signup } from "../Screens/auth/Signup"
type PageProps = 'signin' | 'signup' | 'recover'

export interface AuthPageProps {
  page: PageProps,
  setPage: (page: PageProps) => void
}

interface AuthProviderProps {
  page: PageProps
}


export const AuthPageContext = createContext({} as AuthPageProps)

export function AuthPageProvider ({ page: pageName }: AuthProviderProps) {
  const [page, setPage] = useState<PageProps>(pageName)
  return (
    <AuthPageContext.Provider value={{
      page,
      setPage,
    }}>
      <>
        {page === 'signin' && <Signin />}
        {page === 'signup' && <Signup />}
        {page === 'recover' && <RecoverPassword />}
      </>
    </AuthPageContext.Provider>
  )
}