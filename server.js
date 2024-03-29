const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server
})

server.get("/", function (req, res){
    return res.render("home")
})

server.get("/about", function (req, res){
    return res.render("about.njk")
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(3000, function(req, res) {
    console.log('server is running on port 3000')
})