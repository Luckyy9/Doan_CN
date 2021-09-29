const mongoose = require('mongoose');

 async function connect(){

    try{
        await mongoose.connect('mongodb://localhost:27017/Doan_cn');
    
     console.log('Connet Ok!')
    }
    catch(error){
        console.log('Not connect!')
    }
}

module.exports={connect}
