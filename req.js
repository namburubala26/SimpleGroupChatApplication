const express = require('express');

const router = express.Router();
router.get('/product', (req , res , next) => {
    res.send(
        '<form action="/ad/product" method="POST"><input id="username" type="text" name="title"><button type="submit">add</button></form>'
        );
});
router.post('/product', (req,res,next) => {
   console.log(req.body.title);
   res.redirect('/')
})
module.exports = router;