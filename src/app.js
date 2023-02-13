const express = require('express');
const routes = require('./routes/router');

// ...

const app = express();

app.use(express.json());
// app.use(routes);
app.use('/login', routes.loginRoutes);
app.use('/user', routes.userRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
