const express = require("express");
const app = express();
const db = require("./Models/index");
const PORT = 5001;
const userRoutes = require("./Routes/userRoute");
const cookieParser = require("cookie-parser");
const cors = require('cors');


app.use(cookieParser());
app.use(cors( {
  origin: 'http://localhost:8090',
  credentials : true
}
));


(async () =>
    {
    try {
      await db.sequelize.sync();
      console.log('Database synchronized successfully.');
    } catch (error) {
      console.error('Error synchronizing database:', error);
      // Handle error, e.g., exit process or retry logic
      process.exit(1); // Exit with non-zero code to indicate failure
    }
  })();

app.use(express.json());

  
app.use('/api',userRoutes) 
 
 
app.listen(PORT, ()=>{
    console.log("listening on port:", PORT)
}
) 