const Api2 = "https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q2?token=pom";

fetch(Api2)
  .then(response => response.json())
  .then(data => appendData(data))
  .catch(err => { console.log('error: ' + err); });

function appendData(data) {
  let mainContainer = document.getElementById("myData2");
  let div = document.createElement("div");
  const totalSector = {};
  for (let d of data) {
    if (totalSector[d.location] === undefined) {
      totalSector[d.location] = d.grandTotal;
    } else {
      totalSector[d.location] = totalSector[d.location] + d.grandTotal;
    }
  }
  let result = JSON.stringify(totalSector);
  div.innerHTML = result;
  mainContainer.appendChild(div);
}