// server.js

const express = require('express');
const cors = require('cors');

const publichomeLoanRoutes = require('./routes/publichomeLoan');
const privatehomeLoanRoutes = require('./routes/privatehomeLoan'); 
const healthcareRoutes = require('./routes/healthcareRoutes')
const educationLoanRoutes = require('./routes/educationLoanRoutes');
const diagnosticRoutes = require('./routes/diagnosticRoutes');

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.use('/api/finance-public', publichomeLoanRoutes);
app.use('/api/finance-private', privatehomeLoanRoutes);
app.use('/api/healthcare', healthcareRoutes);
app.use('/api/education-loan', educationLoanRoutes);
app.use('/api/diagnostic', diagnosticRoutes);




app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
