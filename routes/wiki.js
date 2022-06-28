const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    console.log('our wiki get route');
    res.send('our wiki route')
});

router.post('/', (req, res)=>{
    console.log('wiki post route')
});

router.get('/add', (req, res)=>{
    console.log('wiki add route')
});

module.exports = router;