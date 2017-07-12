const assert = require('assert');
const User = require('../src/user');

describe('Creating records',(done)=>{
    it('saves a user',()=>{
        const joe = new User({name:' kumar'});
        joe.save().then(()=>{
            //has joe been saved successfully?
            assert(!joe.isNew);
            done()
        });
    })
})