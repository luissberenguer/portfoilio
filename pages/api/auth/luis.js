//@ts-check
import { NextApiRequest, NextApiResponse } from 'next'
const credentials = async (req, res) => {
  //   if (req.method !== 'POST') {
  //     res.status(405).end()
  //     return
  //   }

  // POST - ok
  if (req.body.password === 'tres') {
    const luisUser = {
      name: 'Luis Student',
      email: 'student@luis.com',
      image: '',
    }
    return res.status(200).json(luisUser)
  }
  res.status(401).end('It wasnt three my boy!')
}

export default credentials
