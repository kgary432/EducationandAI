const scenarios = [
  "Scenario 1",
  "Scenario 2",
  "Scenario 3",
  "Scenario 4",
  "Scenario 5",
];

const emptyScenarios = [];

const scenarioButton = document.getElementById("scenario-button");
const scenarioDialog = document.getElementById("scenario-dialog");
const scenarioText = document.getElementById("scenario-text");
const scenarioClose = document.getElementById("scenario-close");

scenarioButton.addEventListener("click", () => {
  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  scenarioText.textContent = scenario;
  scenarioDialog.showModal();
});

scenarioClose.addEventListener("click", () => {
  scenarioDialog.close();
});
