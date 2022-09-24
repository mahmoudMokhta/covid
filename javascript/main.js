const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "faf2c173femsh7d7f2cc2298044ap1f19d3jsn0056e0afa38b",
    "X-RapidAPI-Host":
      "vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com",
  },
};
fetch(
  "https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/",
  options
)
  .then((response) => response.json())
  .then(response);

let span = document.querySelector(".descreption");
let select = document.querySelector(".select");

function response(data) {
  let name = data.map((e) => e.Country);
  nameOfCountry = name.sort();

  nameOfCountry.forEach((name) => {
    select.innerHTML += `<option value="${name}">${name}</option>`;
  });

  //  select  event

  select.addEventListener("change", () => {
    let myValue = select.value;

    data.forEach((info) => {
      let ActiveCases = info.ActiveCases; // الحالات المصابه حاليا

      let Continent = info.Continent; // القارة
      let Country = info.Country; // country
      let Deaths_1M_pop = info.Deaths_1M_pop; // الوفيات

      let NewCases = info.NewCases; // حالات جديده
      let NewDeaths = info.NewDeaths; // حالات وفاه حاليا
      let NewRecovered = info.NewRecovered; //  تعافى جديد
      let Population = info.Population; // عدد السكان

      let Serious_Critical = info.Serious_Critical; // حالات حرجه
      let TotalCases = info.TotalCases;
      let TotalDeaths = info.TotalDeaths;
      let TotalRecovered = info.TotalRecovered;
      let rank = info.rank;

      if (myValue == info.Country) {
        descrebtion.innerHTML = `
        <p>Rank :${rank} </p>
        <p>Country : ${Country} </p>
        <p>Continent : ${Continent} </p>
        <p>Population :${Population} </p>
        <p>Deaths : ${Deaths_1M_pop}</p>
        <p>Active Cases : ${ActiveCases} Case</p>
        <p>Serious_Critical :${Serious_Critical} </p>
        <p>New Cases : ${NewCases}</p>
        <p>New Deaths : ${NewDeaths}</p>
        <p>New Recovered : ${NewRecovered} </p>
        <p class='btn-warning'>Total Cases : ${TotalCases} </p>
        <p class='btn-danger'>Total Deaths : ${TotalDeaths} <i class="fa-solid fa-skull"></i></p>
        <p class='btn-success'>Total Recovered : ${TotalRecovered} <i class="fa-solid fa-face-smile"></i></p>
        `;
      }
    });
  });
}

// Disable right-click
document.addEventListener("contextmenu", (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    e.keyCode === 123 ||
    ctrlShiftKey(e, "I") ||
    ctrlShiftKey(e, "J") ||
    ctrlShiftKey(e, "C") ||
    (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
  )
    return false;
};
