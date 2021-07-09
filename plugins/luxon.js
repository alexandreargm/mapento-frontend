import { DateTime, Settings } from 'luxon'

Settings.defaultLocale = 'en'

function _parseFromDatabase (datetime) {
  return DateTime.fromSQL(datetime)
}

function _setDateFormat (datetime, dateformat) {
  const parseDate = _parseFromDatabase(datetime)
  return parseDate.toLocaleString(dateformat)
}

export const getRelativeDate = (datetime) => {
  const parseDate = _parseFromDatabase(datetime)
  return parseDate.toRelative(datetime)
}

export const getLongDate = (datetime) => {
  return _setDateFormat(datetime, DateTime.DATE_HUGE)
}

export const getMidDate = (datetime) => {
  return _setDateFormat(datetime, DateTime.DATE_MED_WITH_WEEKDAY)
}
