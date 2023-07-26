import { getKCapsPriceInUSD } from "../api";

export async function convertKCapsToUSD(kCapsAmount, exchangeRate) {
  const usdAmount = parseFloat(kCapsAmount) * exchangeRate;
  return usdAmount;
}

export const truncateTextFromMiddle = ({
  text,
  beforeChars,
  afterChars,
  truncater = "...",
}: {
  text: string;
  beforeChars: number;
  afterChars: number;
  truncater?: string;
}) => {
  if (text.length <= beforeChars + afterChars) {
    return text;
  }
  return `${text.slice(0, beforeChars)}${truncater}${text.slice(
    text.length - afterChars
  )}`;
};

export const formatDate = (dateString: string) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateString);

  const month = monthNames[date.getMonth()];
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  const formattedHours = hours % 12 || 12; // convert to 12-hour format
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes; // add leading zero if necessary

  return `${month} ${day} at ${formattedHours}:${formattedMinutes}${ampm}`;
};
