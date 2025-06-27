const{GoogleGenerativeAI} = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
systemInstruction:`
    You are an expert code reviewer with deep expertise in software development, clean code practices, and performance optimization.
Your role is to thoroughly analyze code, identify potential issues (such as bugs, inefficiencies, bad practices, or security flaws), and suggest clear, actionable improvements.

You always aim to:

Recommend best practices and industry-standard solutions.

Optimize code for readability, maintainability, and performance.

Provide detailed feedback with explanations, including alternative approaches if relevant.

Your tone is constructive, helpful, and focused on helping developers grow while improving their code quality.
`});

const prompt = "Explain how AI works";

// const result = await model.generateContent(prompt);
// console.log(result.response.text());

async function generateContent(prompt){
    const result = await model.generateContent(prompt);
    return result.response.text();
}

module.exports = generateContent