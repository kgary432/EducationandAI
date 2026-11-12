const scenarios = [
  { text: "Scenario 1", url: "https://example.com/scenario-1" },
  { text: "Scenario 2", url: "https://example.com/scenario-2" },
  { text: "Scenario 3", url: "https://example.com/scenario-3" },
  { text: "Scenario 4", url: "https://example.com/scenario-4" },
  { text: "Scenario 5", url: "https://example.com/scenario-5" },
];

const emptyScenarios = [];

const scenarioButton = document.getElementById("scenario-button");
const scenarioDialog = document.getElementById("scenario-dialog");
const scenarioText = document.getElementById("scenario-text");
const scenarioLink = document.getElementById("scenario-link");
const scenarioClose = document.getElementById("scenario-close");

scenarioButton.addEventListener("click", () => {
  const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
  scenarioText.textContent = scenario.text;
  scenarioLink.href = scenario.url;
  scenarioDialog.showModal();
});

scenarioClose.addEventListener("click", () => {
  scenarioDialog.close();
});
