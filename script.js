const scenarios = [
  {
    text: "You're a school administrator facing pressure from lack of funds and an AI company is offering to help in exchange for use of their tool, but privacy details and long term impacts are not known. What questions do you have and what actions can you take?",
    url: "https://www.eff.org/issues/student-privacy",
  },
  {
    text: "You're a parent of a 6 year old who comes home talking about the new AI friend helping them learn to read. What questions do you have and what actions can you take to understand how it is being used?",
    url: "https://apnews.com/article/artificial-intelligence-teacher-union-microsoft-f7554b6550fb90519dd8129acac8e291",
  },
  {
    text: "You're a teacher struggling to manage increasing class sizes. An AI tool could help you meet learning outcomes on target, but privacy details and long term impacts are not known. What questions do you have and what actions can you take?",
    url: "https://www.edweek.org/technology/ai-tutors-are-now-common-in-early-reading-instruction-do-they-actually-work/2025/11",
  },
  {
    text: "You're a high school student whose school is implementing AI tools and your parents have provided consent for you to use it. You personally don’t agree with your data being collected, but feel you are too young to be listened to. What do you do, and who can you turn to?",
    url: "https://news.gallup.com/poll/691967/three-teachers-weekly-saving-six-weeks-yea.aspx",
  },
  {
    text: "You're a middle school student using an AI tutoring tool to help with math homework. At first, you are using it to help you understand concepts but after a while you find yourself using it to solve the problems for you instead of working through them on your own. How do you know whether it is helping or limiting you learning? How can you set boundaries with an AI tool?",
    url: "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions",
  },
  {
    text: "You're a school board member considering approving a new AI powered monitoring software that flags students who may be struggling academically or emotionally. The company claims it will help schools identify students who need support earlier. Do you have concerns about privacy, accuracy, and how this information might be used? Would you support implementing this software in your district?",
    url: "https://apnews.com/article/ai-school-chromebook-surveillance-gaggle-investigation-takeaways-381fa82978f27eb85f20d03236820711",
  },
  {
    text: "You're a parent and your child's school has started using an AI chatbot for homework help and emotional support. You notice that your child is beginning to rely on this chatbot for advice about friendships and spending more time with it than other kids. What concerns do you have and what would you want the school to disclose or change?",
    url: "https://www.nber.org/papers/w35621?utm_",
  },
  {
    text: "You're a high school teacher whose district has introduced an AI tool that helps teachers grade students' writing and give feedback. Though it saves you time, you begin to notice that students are learning to write only to satisfy the AI rather than expressing their own ideas in their own voices. What concerns do you have and how would you balance the benefit of time saving with the need for student creativity, personal expression, and fair assessment?",
    url: "https://abcnews.com/GMA/Family/teens-turn-ai-companions-support-experts-share-parents/story?id=125473993&utm%5C",
  },
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
