import { APP_NAME } from '@constants/app'

export function writePageTitle(pageTitle: string): string {
  return `${pageTitle} | ${APP_NAME}`
}
