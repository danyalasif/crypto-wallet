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
