const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const publicPath = path.join(__dirname,'./public');

app.use(express.static(publicPath));
app.get('/', (req, res) => {
    // console.log(path.join(publicPath, './html/index.html'));
    res.sendFile(path.join(publicPath, './html/index.html'));
})
app.listen(PORT, console.log(`app started at port: ${PORT}`));