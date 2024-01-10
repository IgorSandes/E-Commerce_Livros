async function getLivros () {
    const response = await fetch('http://localhost:3000/livros')
    const profileData = await response.json()
    console.log(profileData)
    return profileData;
  }
