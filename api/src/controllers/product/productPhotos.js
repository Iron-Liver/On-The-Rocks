module.exports = (req, res) => {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    try {
        console.log('file', req.files)
        res.send(req.files)
    } catch (error) {
        res.send(error)
    }
}