var express = require('express');
var cors = require('cors');
var app = express();
var oracledb = require('oracledb');
const PORT = 3000;

// Configure Oracle database connection
const dbConfig = {
  user: 'system',
  password: 'hr',
  connectString: 'localhost:1521/xe',
};
app.use(cors());

// Set PATH environment variable
process.env.PATH = 'C:\\oraclexe\\instantclient_21_12;' + process.env.PATH;

// API endpoint to fetch data from Oracle database
app.get('/api/Materials', async (req, res) => {
  try {
    oracledb.initOracleClient({ libDir: 'C:\\oraclexe\\instantclient_21_12' });
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute(`SELECT
    M.MaterialID,
    M.MaterialName,
    M.UnitOfMeasurement,
    M.StockQuantity,
    MT.MaterialTypeName,
    MT.Description
FROM
    Materialss M
JOIN
    MaterialTypees MT ON M.MaterialTypeID = MT.MaterialTypeID;
 `);

    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

app.get('/api/Employees', async (req, res) => {
  try {
    oracledb.initOracleClient({ libDir: 'C:\\oraclexe\\instantclient_21_12' });
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT* from Employees');

    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});
app.get('/api/Suppliers', async (req, res) => {
  try {
    oracledb.initOracleClient({ libDir: 'C:\\oraclexe\\instantclient_21_12' });
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT* from Suppliers');

    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});
app.get('/api/Customer', async (req, res) => {
  try {
    oracledb.initOracleClient({ libDir: 'C:\\oraclexe\\instantclient_21_12' });
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT* from Customers');

    res.json(result.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(error.message);
  }
});

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port 3000');
});
