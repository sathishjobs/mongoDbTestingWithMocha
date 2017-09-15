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
    const { usercols, comments, blogposts } = mongoose.connection.collections;
    usercols.drop(()=>{
        comments.drop(()=>{
            blogposts.drop(()=>{
                    // Ready to run the next text!
                     done();
            })
        })

    });
})