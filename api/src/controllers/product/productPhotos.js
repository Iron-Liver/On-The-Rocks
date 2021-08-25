module.exports = (req, res) => {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    try {
        console.log('file', req.file)
        console.log('body', req.body)
        res.send(req.file)
    } catch (error) {
        res.send(error)
    }
}