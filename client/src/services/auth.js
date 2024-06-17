import axios from 'axios'
import { toast } from 'react-toastify'

export async function loginUser(email, password) {
  try {
    const response = await axios.post('http://localhost:8080/login', {
      email: email,
      password: password,
    })
    if (response.data.success) {
      toast.success(response.data.message)
      return response.data.token
    } else {
      toast.error(response.data.message)
      return false
    }
  } catch (error) {
    toast.error(error.message)
    return false
  }
}

export async function registerUser(username, email, password) {
  try {
    const response = await axios.post('http://localhost:8080/register', {
      username: username,
      email: email,
      password: password,
    })
    console.log(response.data.success)
    if (response.data.success) {
      toast.success(response.data.message)
      return true
    } else {
      toast.error(response.data.message)
      return false
    }
  } catch (error) {
    toast.error(error.message)
    return false
  }
}
