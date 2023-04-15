const BASE_URL = "https://api.covid19api.com/summary";

function formatNumberWithCommas(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

async function getCovid(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

function setGlobalData(data) {
  document.getElementById(
    "global-newConfirmed"
  ).innerText = `Novos casos confirmados ${formatNumberWithCommas(
    data.NewConfirmed
  )}`;
  document.getElementById(
    "global-totalConfirmed"
  ).innerText = `Total de casos ${formatNumberWithCommas(data.TotalConfirmed)}`;
  document.getElementById(
    "global-newDeaths"
  ).innerText = `Novas mortes ${formatNumberWithCommas(data.NewDeaths)}`;
  document.getElementById(
    "global-totalDeaths"
  ).innerText = `Total de mortes ${formatNumberWithCommas(data.TotalDeaths)}`;
}

getCovid(BASE_URL).then((response) => {
  setGlobalData(response.Global);
  //   setCountriesData(response.Countries);
});
