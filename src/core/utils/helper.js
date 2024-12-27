//core
import { p2e } from "./replaceNumber";

const flattenObject = (obj, delimiter = ".", prefix = "") => {
  const flattObject = Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}${delimiter}` : "";
    if (
      typeof obj[k] === "object" &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], delimiter, k));
    else acc[k] = obj[k];
    return acc;
  }, {});

  return flattObject;
};

const dateToIso = (date) => new Date(date).toISOString();

const getJalaliDate = (timeInput) => {
  const monthList = [
    "فروردين",
    "ارديبهشت",
    "خرداد",
    "تير",
    "مرداد",
    "شهريور",
    "مهر",
    "آبان",
    "آذر",
    "دي",
    "بهمن",
    "اسفند",
  ];
  const localeDate = new Date(timeInput).toLocaleDateString("fa-IR");
  const splittedDate = localeDate.split("/");
  const month = splittedDate[1];
  const monthName = monthList[p2e(month) - 1];
  const day = splittedDate[2];
  const year = splittedDate[0];
  return `${day} ${monthName} ${year}`;
};

const calculateSpentTime = (start, end) => {
  const currentTime = Date.now();
  const startTourTime = new Date(start);
  const endTourTime = new Date(end);
  if (currentTime < startTourTime) return "شروع نشده";
  if (currentTime > endTourTime) return "به اتمام رسیده";
  if (startTourTime < currentTime < endTourTime) return "در حال برگزاری";
};

const origins = (data) => {
  const originCities = [];
  data?.data.map((item) => originCities.push(item.origin));
  return Array.from(new Set(originCities.map((o) => JSON.stringify(o)))).map(
    (str) => JSON.parse(str)
  );
};

const destinations = (data) => {
  const destinationCities = [];
  data?.data.map((item) => destinationCities.push(item.destination));
  return Array.from(
    new Set(destinationCities.map((o) => JSON.stringify(o)))
  ).map((str) => JSON.parse(str));
};

export { dateToIso, flattenObject, origins, destinations, getJalaliDate, calculateSpentTime };
