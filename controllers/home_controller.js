module.exports.home = function(req, res){

    console.log(req.cookies);
    res.cookie('Coding',100)
    return res.render('home', {
        title: "Home"
    });
}

// module.exports.actionName = function(req, res){}