import { APP_NAME } from '@constants/app'

export function writePageTitle(pageTitle: string): string {
  return `${APP_NAME} | ${pageTitle}`
}
