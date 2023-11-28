import TokenData from '../models/Model.Token'
import axios from 'axios'

const SetMedtoken = async (dados: TokenData) => {
  try {
    const response = await axios.post('http://172.17.0.1:3333/', dados)
    const responseData = await response.data // change response.json() to response.data
    return responseData
  } catch (err) {
    console.log('ERROR SetToken:' + err)
  }
}

export default SetMedtoken
