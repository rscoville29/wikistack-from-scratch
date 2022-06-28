const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const layout = require('./views/layout');
const {db, Page, User} = require('./models')
const userRouter = require('./routes/users');
const wikiRouter = require('./routes/wiki');
app.use('/wiki', wikiRouter);
app.use('/users', userRouter )

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

app.get('/', (req, res)=>{
    console.log('working');
    let ourHtml = layout('');
    res.send(ourHtml);
})


const init = async ()=>{
    await db.sync({force:true});
    console.log('db synced')
}
init();
app.listen(3000);