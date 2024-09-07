import fs from 'fs';
import path from 'path'

export function buildUserDataPAth() {
  return path.join(process.cwd(), "data", "users-data.json")
}

export function extractUserData(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData)

  return data;
}

export default function handler(req, res) {
  if (req.method === 'POST') {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    const newUser = {
      id: new Date().toISOString(),
      name: name,
      email: email,
      password: password,
    }

    //Storing in file-database
    const filePath = buildUserDataPAth()
    const data = extractUserData(filePath)
    data.push(newUser)
    fs.writeFileSync(filePath, JSON.stringify(data))

    res.status(201).json({ message: "Sucess", feedback: newUser})
  } else {
    const filePath = buildUserDataPAth()
    const data = extractUserData(filePath)
    res.status(200).json({ feedback: data})
  }
}