module.exports = {

    add1 (req,res){
       input = parseInt(JSON.stringify(req.body['input']))
       console.log('input = '+ input)
       output = input 
       res.send(output.toString())
   },

   Modulus(req,res){  
       X = parseInt(JSON.stringify(req.body['X']))
       console.log('X = '+ X)
       output = X % 2
       res.send(output.toString())
   },
   
    GCD (req,res){
       X = parseInt(JSON.stringify(req.body['X']))
       Y = parseInt(JSON.stringify(req.body['Y']))
       console.log('X = '+ X)
       console.log('Y = '+ Y)
      
       while (X != Y) {
           if (X > Y) {
               X -= Y;
           } else {
               Y -= X;
           }
       }
    }
}