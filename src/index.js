require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Ad = require('./controllers/AdController');
const router = Ad.router;
const app = express();
app.use(cors());

app.use(express.json());
app.use(router);


app.listen(process.env.PORT || 3000);
