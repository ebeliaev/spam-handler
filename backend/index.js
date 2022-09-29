const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

/** ROUTES */ 
const spamsRouter = require('./routes/reports')
app.use(spamsRouter)

/** PORT CONSTANT */ 
const port = 8000; //process.env.PORT || 

/** PORT LISTENER */
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
