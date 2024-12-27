//core
import { e2p } from "./replaceNumber";

const getMonth = (day) => {
  const date = new Date(day).toLocaleDateString("fa-IR", {
    month: "long",
  });
  return `${date} ماه`;
};

const tripDays = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const diffDays = Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  return e2p(diffDays);
};

const tripDuration = (start, end) => {
  const date1 = new Date(start);
  const date2 = new Date(end);
  const diffDays = Math.floor(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  return`${e2p(diffDays)} روز و ${e2p(diffDays - 1)} شب`;
};

const vehicles = (item) => {
  let vehicle;
  if (item === "Airplane") vehicle = "پرواز";
  if (item === "SUV") vehicle = "خودرو آفرود";
  if (item === "Bus") vehicle = "اتوبوس";
  if (item === "Van") vehicle = "ون";
  return vehicle;
};

export { getMonth, tripDays, vehicles, tripDuration };
