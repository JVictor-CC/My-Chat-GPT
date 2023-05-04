import { openai } from "../services/api.js"

export const loginUser = (req, res) => {
    return res.status(200).json(
        {
            sucess: true,
            data: 'Successfully signed in'
        }
   )
}

export const registerUser = (req, res) => {
    return res.status(200).json(
        {
            sucess: true,
            data: 'User successfully registered'
        }
   )
}

export const sendMessage = async (req, res) => {
    try {
        console.log(req.body.prompt)
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${req.body.prompt}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        return res.status(200).json(
            {
                success: true,
                data: response.data.choices[0].text
            }
        )
    } catch (error) {
        return res.status(400).json(
            {
                success: false,
                error: error.response ? error.response.data : 'Ocorreu um erro no servidor'
            }
        )
    }
}

