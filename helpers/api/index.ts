export async function getKCapsPriceInUSD() {
  try {
    const response = await (
      await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=coin-capsule&vs_currencies=usd"
      )
    ).json();
    // console.log({ response });
    const priceInUSD = response["coin-capsule"].usd;
    // console.log({ priceInUSD });
    return priceInUSD;
  } catch (error) {
    console.error(error);
  }
}
