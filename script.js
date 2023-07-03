document.addEventListener("DOMContentLoaded", function () {
  const soCloseData = [
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373788173.htm",
      locationUrl:
        "https://www.google.com/maps/place/faculte+des+sciences/@43.7157712,7.2626626,16.79z/data=!4m6!3m5!1s0x12cdc55594557611:0x1e393fd8b42921e8!8m2!3d43.7156616!4d7.2658942!16s%2Fg%2F11gbnq_5vt?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373431373.htm",
      locationUrl:
        "https://www.google.com/maps/place/Av.+des+Orangers,+06000+Nice,+France/@43.6952797,7.2415215,14.71z/data=!4m6!3m5!1s0x12cdd0128a80e1c7:0x309ffba98bef796e!8m2!3d43.6970713!4d7.2531258!16s%2Fg%2F1tg_08hv?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2371047465.htm",
      locationUrl:
        "https://www.google.com/maps/place/Centre+Nice/@43.7000879,7.2177869,14.04z/data=!3m1!5s0x12cddaa5c37658a7:0x1b86aacde1ed9093!4m10!1m2!2m1!1sNICE+CENTRE+DUBOUCHAGE!3m6!1s0x12cddaa5c48fffff:0x6c60fa1a564336ba!8m2!3d43.7014806!4d7.2714816!15sChZOSUNFIENFTlRSRSBEVUJPVUNIQUdFkgETdmFjYXRpb25fYXBwYXJ0bWVudOABAA!16s%2Fg%2F11fsmvyhmv?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2372976870.htm",
      locationUrl:
        "https://www.google.com/maps/place/Liberation,+Nice,+France/@43.6999862,7.2336806,14.33z/data=!4m6!3m5!1s0x12cdd00057b526f7:0xbb3730dfd8f5d175!8m2!3d43.7120032!4d7.2612399!16s%2Fg%2F1tm9dcnl?hl=fr&entry=ttu",
    },
    // Add more objects as needed
  ];

  const prettyCloseData = [
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373867960.htm",
      locationUrl:
        "https://www.google.com/maps/place/Villa+Arson+Nice/@43.7107545,7.2338534,14.29z/data=!4m6!3m5!1s0x12cdcfe4bf6050d7:0x629dafe16af133f!8m2!3d43.7217801!4d7.2529158!16s%2Fm%2F05p35n5?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2354902286.htm",
      locationUrl:
        "https://www.google.com/maps/search/ligne+de+tramway+L1+(H%C3%B4pital+Pasteur)/@43.7161113,7.2604948,14.29z?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373610942.htm",
      locationUrl:
        "https://www.google.com/maps/place/Prom.+des+Anglais,+Nice,+France/@43.6950379,7.2365419,14.71z/data=!4m6!3m5!1s0x12cdd059cc1c5ad1:0xca7e75a94dd67eef!8m2!3d43.6951073!4d7.2678253!16zL20vMGM4dGx3?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373688656.htm",
      locationUrl:
        "https://www.google.com/maps/search/Nice,+quartier+Nice+Nord+rue+Ren%C3%A9+Boylesve/@43.7033075,7.2308713,14.42z?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373591393.htm",
      locationUrl:
        "https://www.google.com/maps/place/Cimiez,+Nice,+France/@43.7109942,7.241695,14z/data=!4m6!3m5!1s0x12cdc54315d682a1:0xbb42f41e81097293!8m2!3d43.7243377!4d7.2733783!16s%2Fg%2F1hdzdfc_n?hl=fr&entry=ttu",
    },
    // Add more objects as needed
  ];

  const prettyFarData = [
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373876251.htm",
      locationUrl:
        "https://www.google.com/maps/place/St+Roch,+Nice,+France/@43.7090738,7.2513443,14z/data=!4m6!3m5!1s0x12cdc52df470702d:0xf980791cd38fcf7c!8m2!3d43.713772!4d7.2895663!16s%2Fg%2F1td6_5_7?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373841728.htm",
      locationUrl:
        "https://www.google.com/maps/place/Rue+Arson,+06300+Nice,+France/@43.7020697,7.2850056,17z/data=!3m1!4b1!4m6!3m5!1s0x12cddac80aff6dc1:0x394a7eadff3d9c0d!8m2!3d43.7020697!4d7.2875805!16s%2Fg%2F1ts6q7qy?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373897786.htm",
      locationUrl:
        "https://www.google.com/maps/place/Riviera+Palace/@43.7152481,7.2577995,13.67z/data=!4m6!3m5!1s0x12cdc5539fcb83f3:0x4c271018fced56be!8m2!3d43.7146145!4d7.2715767!16s%2Fg%2F1tf5gvs8?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2371518991.htm",
      locationUrl:
        "https://www.google.com/maps/search/FACULTE+ST+JEAN+D+ANGELY/@43.704185,7.2444131,14.29z?hl=fr&entry=ttu",
    },
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373562738.htm",
      locationUrl:
        "https://www.google.com/maps/search/quartier+Pasteur+,rue+du+colonel+Gassin/@43.7065837,7.2482323,14.42z?hl=fr&entry=ttu",
    },
    // Add more objects as needed
  ];

  const soFarData = [
    {
      apartmentUrl: "https://www.leboncoin.fr/locations/2373620340.htm",
      locationUrl:
        "https://www.google.com/maps/place/R%C3%A9sidence+%C3%A9tudiante+Gsa+R%C3%A9sid+Nice+-+Port/@43.6992994,7.2795397,14.5z/data=!4m6!3m5!1s0x12cddac893138fd5:0x726d1a4d97725fc0!8m2!3d43.702892!4d7.29048!16s%2Fg%2F11h4ts11bk?hl=fr&entry=ttu",
    },
    // Add more objects as needed
  ];

  renderTable("soCloseTable", "So Close", soCloseData);
  renderTable("prettyCloseTable", "Pretty Close", prettyCloseData);
  renderTable("prettyFarTable", "Pretty Far", prettyFarData);
  renderTable("soFarTable", "So Far", soFarData);
});

function renderTable(tableId, heading, data) {
  const table = document.getElementById(tableId);

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }

  if (data.length === 0) {
    const messageRow = document.createElement("tr");
    const messageCell = document.createElement("td");
    messageCell.colSpan = 2;
    messageCell.textContent = "No data available";
    messageRow.appendChild(messageCell);
    table.appendChild(messageRow);
  } else {
    const headingRow = document.createElement("tr");
    const headingCell = document.createElement("th");
    headingCell.colSpan = 2;
    headingCell.textContent = heading;
    headingRow.appendChild(headingCell);
    table.appendChild(headingRow);

    data.forEach(function (item) {
      const row = document.createElement("tr");
      const apartmentCell = document.createElement("td");
      const apartmentLink = document.createElement("a");
      apartmentLink.href = item.apartmentUrl;
      apartmentLink.target = "_blank"; // Open link in new tab
      apartmentLink.textContent = item.apartmentUrl;
      apartmentCell.appendChild(apartmentLink);

      const locationCell = document.createElement("td");
      const locationLink = document.createElement("a");
      locationLink.href = item.locationUrl;
      locationLink.target = "_blank"; // Open link in new tab
      locationLink.textContent = item.locationUrl;
      locationCell.appendChild(locationLink);

      row.appendChild(apartmentCell);
      row.appendChild(locationCell);
      table.appendChild(row);
    });
  }
}
