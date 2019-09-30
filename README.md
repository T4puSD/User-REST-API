# User-API
Project API for creating new user, geting info about a user with their id, updating information about a user and delete a user
from [MongoDB](https://www.mongodb.com/cloud/atlas) database.
## Four endpoints are available for this api:
* /api/v1/create
* /api/v1/get/:id
* /api/v1/update/:id
* /api/v1/delete/:id


Api accept this JSON object as a database entry:
```json
{
"id" : "",
"user" : {
    "firstName" : "",
    "lastName" : "",
    "age" : "",
    "gender" : "",
    "tandcs" : "", 
    "email" : ""
  }
}
```
For every operation except creating new user the api return with a api callback status as a JSON object:

```json
{
"status":{
"code" : 200,
"msg": "{message about the operation}"
  }
}
```
**Note: errore code will be 404 if there is an error**

The api return this following JSON object if a new user is created successfully:
```json
{
"status":{
    "code" : 200,
    "msg" : "{Message about operation}",
    "uid" : "{uniq id of the new user that is created}"
  }
}
```

## Requirements
Required npm packages to make this project work:
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [UUID](https://www.npmjs.com/package/uuid)
* [Nodemon](https://www.npmjs.com/package/nodemon). This is a development dependency

Manually install this packages in this directory or else run `npm install` in cmd/terminal within the direcotry and let npm install all the required package for this project into the unziped folder


## How to run this program and connect to MongoDB
If anyone want to clone this repository and want to work on this project they have to create MongoDB atlas account first. You can get free storage for testing perpose in MongoDB atlas.(Use online resources to gets you up and running in MongoDB Atlas).
**Make a .env file in root directory and past your MongoDB access link in it.**
```env
DB_URL = mongodb+srv://<username>:<password>@cluster0-kv4vd.mongodb.net/test?retryWrites=true&w=majority
```
**Don't use any quotes to wrap the DB_URL as this is the format for Dotenv.**
**Make sure to input your own username and password in this above link.**
Atlast run `npm start` which will call `nodemon app.js` and start the server in [localhost:3000](https://localhost:3000)

