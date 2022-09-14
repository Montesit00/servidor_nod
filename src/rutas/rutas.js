const router = require('express').Router();

const {
    getHome,
    putHome,
    postHome,
    deleteHome
} = require('../controllers/controladores')

router.get('/',getHome)
router.put('/',putHome)
router.post('/',postHome)
router.delete('/',deleteHome)

module.exports = router;