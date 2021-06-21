import { DateTime, Settings } from 'luxon'

Settings.defaultLocale = 'en'

export default ({ app }, inject) => {
  inject('DateTime', DateTime)
}
