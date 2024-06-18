import OpenAi from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const openai = new OpenAi({
  apiKey: process.env.OPENAI_API_KEY,
})

export const makeInference = async (prompt) => {
  try {
    const userMessage = [{ role: 'user', content: prompt }]
    const completion = await openai.chat.completions.create({
      messages: userMessage,
      model: 'gpt-3.5-turbo',
    })
    return completion.choices[0].message.content
  } catch (error) {
    console.error('Erro ao fazer a inferência:', error)
    return { error: 'Ocorreu um erro ao tentar fazer a inferência. Tente novamente mais tarde.' }
  }
}
