const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public"))

server.set("view engine", "html")

nunjucks.configure("views", {
    express:server
})

server.get("/", function (req, res){
    return res.render("home")
})

server.get("/about", function (req, res){
    return res.render("about.html")
})

server.listen(3000, function(req, res) {
    console.log('server is running on port 3000')
})