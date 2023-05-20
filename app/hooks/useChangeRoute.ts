import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

// todo добавить задержку изменения состояния
export const useChangeRoute = () => {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStartLoading = (url: string) =>
      url !== router.asPath && setIsLoading(true)

    const handleCompleteLoading = (url: string) =>
      url === router.asPath && setIsLoading(false)

    router.events.on('routeChangeStart', handleStartLoading)
    router.events.on('routeChangeComplete', handleCompleteLoading)
    router.events.on('routeChangeError', handleCompleteLoading)

    return () => {
      router.events.off('routeChangeStart', handleStartLoading)
      router.events.off('routeChangeComplete', handleCompleteLoading)
      router.events.off('routeChangeError', handleCompleteLoading)
    }
  })

  return isLoading
}
