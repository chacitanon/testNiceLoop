const Api1 = "https://oclmyk0vd0.execute-api.us-east-1.amazonaws.com/codecamp7/q1?token=pom";

fetch(Api1)
  .then(response => response.json())
  .then(data => appendData(data))
  .catch(err => { console.log('error: ' + err); });

function appendData(data) {
  let mainContainer = document.getElementById("myData1");
  let div = document.createElement("span");
  f = function (a, b) {
    return a - b;
  };
  let ar = data;
  ar.sort(f);
  const step2 = ar.filter(function (ar) {
    return ar <= 500 && ar >= 100;
  });
  const step3 = step2.filter(function (ar) {
    return ar % 3 == 0 || ar % 5 == 0;
  });
  const step4 = [...new Set(step3)];
  div.innerHTML = `[${step4}]`;
  mainContainer.appendChild(div);
}