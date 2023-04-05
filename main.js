//Program Title
//Program Title
console.log("hi");

//Add an Event Listener to the button to run the  function
document.getElementById("btn").addEventListener("click", btnClicked);
// Store order code in function
function btnClicked() {
  //INPUT
  let species = document.getElementById("one-in").value.toLowerCase();
  let continent = document.getElementById("two-in").value.toLowerCase();
  let herb = document.getElementById("three-in").value.toLowerCase();
  let moist = document.getElementById("four-in").value.toLowerCase();
  let numCorrect = 0;

  //PROCESS
  if (species === "5" || species === "five") {
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById(
      "que1-feedback"
    ).innerHTML = `<p>There is five species of rhinocerous, the Sumatran, Javan, Black, White and Greater one-horned rhino.</p>`;
  }
  if (continent === "asia" || continent === "africa") {
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById(
      "que2-feedback"
    ).innerHTML = `<p>Rhinos are found in the wild in Africa and Asia, rhinos in other continents have been brought from these two continents.</p>`;
  }
  if (herb === "herbivore" || herb === "herbivores") {
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById(
      "que3-feedback"
    ).innerHTML = `<p>Though in dire circumstances a rhino may eat another animal, they are generally always herbivores.</p>`;
  }
  if (moist === "moist") {
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById(
      "que4-feedback"
    ).innerHTML = `<p>Rhinos prefer wetlands, areas with bodies of water, and thriving vegetation.</p>`;
  }

  if (numCorrect === 4) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>4/4 (100%)</p> <p>Wow! Great job!</p> `;
  } else if (numCorrect === 3) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>3/4 (75%)</p><p>Well done!</p>`;
  } else if (numCorrect === 2) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>2/4 (50%)</p> <p>Nice! Try again?</p>`;
  } else if (numCorrect === 1) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>1/4 (25%)</p><p>There's room for improvement.</p>`;
  } else if (numCorrect === 0) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>0/4 (0%)</p><p>Oh...</p>`;
  }
}
