const express = require('express');
const cors = require('cors');
const Ad = require('./controllers/AdController');
const router = Ad.router;
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});
