import { getRequestConfig } from 'next-intl/server'
 
export default getRequestConfig(async () => {
  const locale = 'en'
 
  const sidebarMessages = (await import(`../i18n/${locale}/sidebar.json`))
  const userHeaderMessages = (await import(`../i18n/${locale}/user-header.json`))
  const signInMessages = (await import(`../i18n/${locale}/sign-in.json`)).default
  const joinMessages = (await import(`../i18n/${locale}/join.json`)).default

  return {
    locale,
    messages: {
      ...sidebarMessages,
      ...userHeaderMessages,
      ...signInMessages,
      ...joinMessages,
    },
  }
})
