import { getRequestConfig } from 'next-intl/server'
 
export default getRequestConfig(async () => {
  const locale = 'en'
 
  const signInMessages = (await import(`../i18n/${locale}/sign-in.json`)).default
  const joinMessages = (await import(`../i18n/${locale}/join.json`)).default

  return {
    locale,
    messages: {
      ...signInMessages,
      ...joinMessages,
    },
  }
})