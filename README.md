This project is an application for creating and taking tests. Here's a brief description of the technologies and packages used:

Frontend:

React: A framework for developing user interfaces that provides dynamic data rendering and user interaction.

axios: A library for making HTTP requests from the frontend to the backend. It is used for data exchange between the client and the server.

zustand: A state management library for the frontend. It allows efficient data and state management within components without the need for solutions like Redux or similar.

react-router-dom: A library for routing within your React application. It enables the creation of different pages and navigation between them without page reloads, making the application more interactive and user-friendly.

Backend:

Express.js: A framework for creating server applications in Node.js. It handles HTTP requests, defines routes, and manages server-side business logic.

Node.js: A JavaScript runtime environment used to build the server-side part of the application.

MongoDB: A NoSQL database used to store data for your project, such as test information, questions, and answers.

jsonwebtoken (JWT): A package used for creating and verifying JSON Web Tokens (JWT) on the backend. JWTs are used for user authentication and securing routes. When a user logs in, they receive a JWT, which is then sent with each request to the server to verify their identity.

This project combines these technologies and libraries to create a full-fledged testing application, providing convenient navigation, interaction with the MongoDB database, data exchange between the client and server using axios, and ensuring security through JWT on the server.

To use the project, follow these steps:

Download the project and navigate to the "server" folder in your terminal.

Run the following command to download and install all the necessary packages for the server:

npm install

After the packages are installed, start the server by running:

node server.js

Now, navigate to the "client" folder in your terminal.

Run the following command to download and install all the necessary packages for the client:

npm install

Once the client-side packages are installed, start the client by running:

npm run start

Following these steps will allow you to download, set up, and run the project successfully.
