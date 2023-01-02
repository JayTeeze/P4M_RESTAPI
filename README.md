# Pick-4-Me

Pick-4-Me is a simple Express/Node.js REST API that persists data on a SQLite database. This API will choose a food option from a list of options the user inputs. The user can also update and delete their food choices.

## Getting Started

Before using Pick-4-Me you need two things:
1. Environment Variable(s)
1. Database

### Environment Variable(s)

Create a no-name .env file in the root directory and set the port number of your choosing on variable **PORT**. For example:
```
PORT=9000
```

### Database

Create a file in the root directory and name it **p4m.db**. Use your favorite SQLite client to initialize the database using the SQL statements found in **p4m.sql**.

## Starting Application

With terminal in root directory run:
```
npm start
```
To stop the application, simply press **ctrl+c** or kill the terminal.