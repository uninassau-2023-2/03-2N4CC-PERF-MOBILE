import axios from 'axios'

const GetMedtoken = async () => {
  try {
    const response = await axios.get('http://172.17.0.1:3333/')
    console.log(response.data)
    if (response.status === 200) {
      const data = await response.data
      const tokens = data.tokens || []
      return [tokens]
    } else {
      console.error('Error GET:', response.status)
      return []
    }
  } catch (err) {
    console.log('ERROR TOKENFORMS:' + err)
  }
}

export default GetMedtoken
