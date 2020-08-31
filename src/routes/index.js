const { Router } = require('express');
const router = Router();

router.get('/', (req, res) =>{
    //res.json({"Title": "RestAPI-anime by Satanshitt#4493. UWU"});
      res.send("RestAPI-anime by Satanshitt#4493. UWU");
});

module.exports = router;