const express =require("express")
const app =express()

// middleware 
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use('/assets', express.static('contact-template/assets'))

// routes

app.get('/',(req,res) => {res.render('home')})

app.get('/show-contact',(req,res) => {res.render('show-contact')})

app.get('/add-contact',(req,res) => {res.render('add-contact')})

app.post('/add-contact',(req,res) => {})

app.get('/update-contact',(req,res) => {res.render('update-contact')})

app.post('/update-contact',(req,res) => {})

app.get('/delete-contact',(req,res) => { res.redirect('/') })


app.listen(3000,() => {
    console.log("Server started on port 3000.")
})