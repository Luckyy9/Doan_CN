
class LessionController{
    lession(req, res){
        
        console.log("Received: " + req.body)
	    getResponse(req.body.message, function(response){
		console.log(response)
         // get /lession
        res.render('lession')
	})  
   } 
    } 

    function getResponse(message, callback){
        if (message == "hello world"){
            callback("hello there. world here!")
        }
        else if (message == "goodbye")
            callback("bye-bye")
        else
            callback(message)
    }

module.exports= new LessionController;

