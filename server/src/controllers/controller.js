
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

export const sendMessage = (req, res) => {
    return res.status(200).json(
        {
            sucess: true,
            data: 'Your GPT3 response'
        }
   )
}

