const express = require("express")

const app = express()

app.get("/", (req, res) => {
return res.status(200).json({
    message: "Hello world"
})

})

app.get("/brawl", (req, res) => {
    return res.status(200).json({
        message: "brawl stars"
    })
    
    })

    app.get("/login", (req, res) => {
        return res.status(200).json({
            message: "Hello world"
        })
        
        })

app.listen(3000, () => {
    console.log("Server running on port 3000")
})