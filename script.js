const scenarios = [
  {
    text: "You’re a school administrator facing pressure from lack of funds and an AI company is offering to help in exchange for use of their tool, but privacy details and long term impacts are not known. What questions do you have and what actions can you take?",
    url: "https://example.com/scenario-1",
  },
  {
    text: "You’re a parent of a 6 year old who comes home talking about the new AI friend helping them learn to read. What questions do you have and what actions can you take to understand how it is being used?",
    url: "https://example.com/scenario-2",
  },
  {
    text: "You’re a teacher struggling to manage increasing class sizes. An AI tool could help you meet learning outcomes on target, but privacy details and long term impacts are not known. What questions do you have and what actions can you take?",
    url: "https://example.com/scenario-3",
  },
  {
    text: "You’re a high school student whose school is implementing AI tools and your parents have provided consent for you to use it. You personally don’t agree with your data being collected, but feel you are too young to be listened to. What do you do, and who can you turn to?",
    url: "https://example.com/scenario-4",
  },
  {
    text: "You’re a middle school student using an AI tutoring tool to help with math homework. At first, you are using it to help you understand concepts but after a while you find yourself using it to solve the problems for you instead of working through them on your own. How do you know whether it is helping or limiting you learning? How can you set boundaries with an AI tool?",
    url: "https://example.com/scenario-5",
  },
  {
    text: "You’re a school board member considering approving a new AI powered monitoring software that flags students who may be struggling academically or emotionally. The company claims it will help schools identify students who need support earlier. Do you have concerns about privacy, accuracy, and how this information might be used? Would you support implementing this software in your district?",
    url: "https://example.com/scenario-5",
  },
  {
    text: "You’re a parent and your child’s school has started using an AI chatbot for homework help and emotional support. You notice that your child is beginning to rely on this chatbot for advice about friendships and spending more time with it than other kids. What concerns do you have and what would you want the school to disclose or change?",
    url: "https://example.com/scenario-5",
  },
  { text: "Scenario8", url: "https://example.com/scenario-5" },
  { text: "Scenario9", url: "https://example.com/scenario-5" },
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
