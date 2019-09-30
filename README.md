# User-API
API for creating new user, geting info about a user with their id, updating information about a user and delete a user
from [MongoDB](https://www.mongodb.com/cloud/atlas) database.
Api accept this JSON object as a database entry:
```json
{
id:""
user:{
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    tandcs: "",
    email: ""
  }
}
```
For every operation except creating new user the api return with a api callback status as a JSON object:

```json
{
status:{
code: 200, //if error occurs, the code will be 400
msg: "{message about the operation}"
  }
}
```
The api return this following JSON object if a new user is created successfully:
```json
{
status:{
    code: 200,
    msg: "{Message about operation}",
    uid: "{uniq id of the new user that is created}"
  }
}
```
