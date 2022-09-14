const controlHome = {}

controlHome.getHome = (req,res) => {
    res.send({
        msg:'Funciona el GET'
    })
}

controlHome.postHome = (req,res) => {
    res.send({
        msg:'Funciona el POST'
    })
}

controlHome.putHome = (req,res) => {
    res.send({
        msg:'Funciona el PUT'
    })
}

controlHome.deleteHome = (req,res) => {
    res.send({
        msg:'Funciona el Delete'
    })
}

module.exports = controlHome;