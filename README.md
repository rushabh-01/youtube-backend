# Get Youtube Subscriber- Backend Capstone project

Stacks used in the project : 

Mongodb
Express js
Node js

# Steps to install project and run

1. Download zip file in your pc and open with your IDE.

2. Hit "npm install" in the command prompt or terminal to install the npm dependencies.

3. To start the server, a script file is already created. Hit "npm start" to start the server.

4. For database , we are using **mongodb cloud**.



# Steps to use the project

1. Replace the DATABSE_URL with the your own mongodb cluster.

2. Run "node createDatabase" to store data in your cloud database.

3. To test the endpoints , use **postman** and insert the url to retrieve data.



# Http methods used in the project

1. Get http://localhost:3000/  :-  this is the home page which will return a message "Get Youtube Subscriber".

2. Get http://localhost:3000/subscribers  :-  on inserting the mentioned url with endpoint "/subscribers" , it will return all the details of the subscribers stored in the database.

3. GET http://localhost:3000/subscribers/names  :-   this endpoint will only return the names and subscribed channel of all the subscribers.
It will not return id of the subscribers.

4. GET http://localhost:3000/subscribers/:_id   :-   the user has to replace ":_id" with the actual id of the subscriber to retrieve details of that particular subscriber only.
On hitting incorrect user id , user will recieve an error message saying  "id does not match".

5. On hitting incorrect endpoint to the url , user will recieve message saying "error 404 , invalid route".


# note

Incorrect id will lead to status code 400 and error message.