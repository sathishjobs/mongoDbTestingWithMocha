const assert = require('assert');
const User = require('../src/user');

describe('Creating records',(done)=>{
   xit('saves a user',()=>{
        const joe = new User({name:'kumar',postCount:4});
        joe.save().then((data)=>{
            //console.log("test");
            //console.log(data);
            //has joe been saved successfully?
            assert(!joe.isNew);
            done()
        });
    })
})