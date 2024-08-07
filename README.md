# **FulltimeForce Test**

Backend blog API developed with express mongoose and passport js.

## Installation Steps:
**1. Download:**

Download repository from dev branch. Please don't fork the repository.

**2. Installation:**

Open your console and execute $npm install command and wait until all modules have been installated .

 **3. DB Connection:**

Create a .env file at root project folder, then insert those Environment variables:

**PORT**= 3002

**DATABASE_URI**= "mongodb+srv://ivanjtrejoc:NlIacur7paWwSXRt@fulltimeforcedb.qzljtnd.mongodb.net/?retryWrites=true&w=majority&appName=fulltimeforceDB"

**SESSION_SECRET_KEY** = "secret_key"

Database is hosted at Mongodb Atlas cluster.

**4. Execution:**

Run the server executing $npm start command.

### *You don't need install any other dependency, all needed dependecies are included into the package.json*
### **We don't recommend use the API as separate to frontend application, however you can send many different CRUD request using the following routes:**

**Base URL**:

http://localhost:3002

**createUser (POST):**

/api/users/signup

Body Request:

JSON structure:

{
  "email": "pepe25@mail.com",
  "userName": "pepe12",
  "password": "Abcd54321$"
}


 **signIn (POST):**

/api/auth/signin

Body Request:

JSON structure:

{
  "email": "paco@mail.com",
  "password": "Admin54321$"
}




**createPost (POST):** 

/api/posts/create

Body Request:

JSON structure:

{
    "title": "Building RESTful APIs with Node.js and Express",
    "content": "Your post.....",
    "author": "pepe12"
  }





**getAllPosts (GET):**

api/posts/list

No parameters needed.




**getPostById (GET):**

api/posts/post/id

Post id required from params

Example: http://localhost:3002/api/posts/post/66aecaeae9cc62f69e613ccd

updatePost (PUT):

api/posts/post/id

Post id required from params

Body request:

JSON structure:

{
  "title": "Exploring the World of Web Development",
  "content": "updated post content...",
  "author": "pepe12"
}




**deletePost (DELETE):**

api/posts/post/id

Post id required from params




**signOut (POST):** 

/api/auth/signout

NO parameters needed.




***ATTENTION: TO USE ANY POSTS ROUTES YOU MUST CREATE A NEW USER AND SIGN IN INTO API, OTHERWISE YOU CAN'T USE ANY FUNCTION.
ONCE YOU FINISHED TO USE THE API PLEASE SIGN OUT USING THE CORRESPONDING ROUTE.***

