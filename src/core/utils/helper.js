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

export { dateToIso, flattenObject, origins, destinations };
