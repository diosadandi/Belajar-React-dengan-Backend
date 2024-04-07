export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const STORAGE = localStorage;
export const TOKEN_KEY = "token";
export const TOKEN_PREFIX = "Bearer";

export const CURRENCY = 'IDR';

export const LOCALE = 'id-ID';

export const TIME_ZONE = 'Asia/Jakarta'

export const DATETIME_FORMAT = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
  timeZone: TIME_ZONE
}

export const DATE_FORMAT = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: TIME_ZONE
}

export const MODULE_BASE_PATH = '/m-modules'