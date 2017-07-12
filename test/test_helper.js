const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before((done)=>{
 mongoose.connect('mongodb://localhost:27017/users_test');
 mongoose.connection 
        .once('open',()=>{done()})
        .on('error',()=>{
           
            console.warn('Warning',error);
        });
})

beforeEach((done)=>{
    // console.log("ddd");
    // console.log(mongoose.connections.collections.usercols.drop);
    mongoose.connection.collections.usercols.drop(()=>{
        // Ready to run the next text!
        done();
    });
})