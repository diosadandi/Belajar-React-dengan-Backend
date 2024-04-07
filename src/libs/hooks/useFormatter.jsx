import {CURRENCY, DATE_FORMAT, DATETIME_FORMAT, LOCALE} from "../config/settings.js";

const useFormatter = () => {

  const formatCurrency = (data) => {
    if (!data) {
      data = 0;
    }
    return new Intl.NumberFormat(LOCALE, {style: 'currency', currency: CURRENCY}).format(data)
  }

  const formatDate = (data) => {
    if (!data) {
      return "No defined"
    }
    const date = Date.parse(data);
    return Intl.DateTimeFormat(LOCALE, DATE_FORMAT).format(date);
  }

  const formatDatetime = (data) => {
    if (!data) {
      return "No defined"
    }
    const date = Date.parse(data);
    return Intl.DateTimeFormat(LOCALE, DATETIME_FORMAT).format(date);
  }

  return {
    formatCurrency,
    formatDate,
    formatDatetime,
  }
}

export default useFormatter;