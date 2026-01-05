import OpenAI from "openai";

const groq = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function generateWithGroq(prompt: string, systemInstruction?: string) {
  const response = await groq.chat.completions.create({
    model: "llama-3.1-70b-versatile",
    messages: [
      { role: "system", content: systemInstruction || "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
  });

  return response.choices[0].message.content;
}
