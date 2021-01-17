const Api3 = "https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q3?token=pom";

fetch(Api3)
  .then(response => response.json())
  .then(data => appendData(data))
  .catch(err => { console.log('error: ' + err); });

function appendData(data) {
  let mainContainer = document.getElementById("myData3");
  let div = document.createElement("div");
  const totalPeople = {};

  for (let d of data) {
    console.log(d);

    if (d.member) {
      if (!totalPeople[d.member.name]) {
        totalPeople[d.member.name] = d.grandTotal;
      } else {
        totalPeople[d.member.name] = totalPeople[d.member.name] + d.grandTotal;
      }
    }
  }
  let result = JSON.stringify(totalPeople);
  div.innerHTML = result;
  mainContainer.appendChild(div);


}