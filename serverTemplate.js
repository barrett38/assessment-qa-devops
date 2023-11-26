const express = require("express");
const app = express();
app.use(express.static(`${__dirname}/public`));
const PORT = 8000;
// if using the .env file, use this line instead:
// const { PORT } = process.env.PORT;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
