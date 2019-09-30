# User-API
Project API for creating new user, geting info about a user with their id, updating information about a user and delete a user
from [MongoDB](https://www.mongodb.com/cloud/atlas) database.
## Four endpoints are available in this api:
<ul>
    <li>/api/v1/create</li>
    <li>/api/v1/get/:id</li>
    <li>/api/v1/update/:id</li>
    <li>/api/v1/delete/:id</li>
</ul>

Api accept this JSON object as a database entry:
```json
{
"id" : ""
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
**Note: errore code will be 404 if there is an error

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

## How to run this program and connect to MongoDB
If anyone want to clone this repository and want to work on this project they have to create MongoDB atlas account first. You can get free storage for testing perpose in MongoDB atlas.
