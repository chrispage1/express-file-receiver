const bearerToken = '7l5OfIO9EzFhTStV7BVGwOlWtZKdwPXPtEqe9zHG5R3uZJZNS2';
const httpPort = 80;

const express = require('express'),
    fileUpload = require('express-fileupload'),
    app = express();

app.use(fileUpload());

app.post('/store', (req, res) => {

    const authToken = req.header('Authorization');
    if (authToken?.split(' ')[1] !== bearerToken) {
        return res.status(403).json({
            success: false,
            message: 'Unauthorized'
        });
    }

    if (req.files?.file) {
        const file = req.files.file;
        file.mv(__dirname + '/ftp/files/' + file.name);


        return res.send({
            success: true,
            message: 'File has been received',
        })
    }

    return res.status(422).json({
        success: false,
        message: 'No file payload received'
    });
});

app.listen(httpPort, () => {
    console.log('App is listening in port ' + httpPort);
})