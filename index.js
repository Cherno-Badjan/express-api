//import app
const { app } = require('./app.js');

//declare/define port
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`It is working. app listening at http://localhost:${port}`)
});