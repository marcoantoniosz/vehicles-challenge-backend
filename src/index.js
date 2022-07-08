require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Ad = require('./controllers/AdController');
const router = Ad.router;
const app = express();

app.use(express.json());
app.use(router);
app.use(cors());

app.listen(process.env.PORT || 3000);
