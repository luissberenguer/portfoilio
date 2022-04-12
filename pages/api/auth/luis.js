const credentials = async (req, res) => {
  // POST - ok
  if (req.body.password === 'tres') {
    const luisUser = {
      name: 'Luis Student',
      email: 'student@luis.com',
      image: '',
    }
    return res.status(200).json(luisUser)
  }
  res.status(401).end('No era el tres amigo mio')
}

export default credentials
