import fs from "fs";
import path from "path";

// Function to read and parse JSON file
const getUsers = () => {
  try {
    const filePath = path.join(process.cwd(), "data", "users-data.json");
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error("Error reading or parsing users.json file:", error);
    return [];
  }
};

export default function handler(req, res) {
  if (req.method === "POST") {
    // Get email and password from the request body
    const { email, password } = req.body;

    // Read user data from the JSON file
    const users = getUsers();

    // Find user with matching email
    const user = users.find((user) => user.email === email);

    // Check if user exists and the password matches
    if (user && user.password === password) {
      // For demonstration purposes, just return a success message
      res.status(200).json({
        message: "Login successful",
        user: { name: user.name, email: user.email },
      });
    } else {
      // If the user does not exist or the password does not match
      res.status(401).json({ message: "Invalid email or password" });
    }
  } else {
    // Return 405 if the method is not POST
    res.status(405).json({ message: "Method not allowed" });
  }
}
