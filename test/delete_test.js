const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user', ()=>{
    let joe;

    before(()=>{
        joe = new User({name:'Joe1'});
        joe.save().then((user)=>{
            console.log(user);
            done()
        });
    });

    it('model instance remove',(done)=> {
        joe.remove()
            .then(()=> User.findOne({name:'Joe1'}))
            .then((user)=>{
                console.log("***");
                console.log(user);
                assert(user === null);
                done();
            });

    });

    it('class method remove',(done)=>{
        // Remove a bunch of records with some given criteria
        User.remove({name:'Joe'})
        .then(()=> User.findOne({name:'Joe'}))
        .then((user)=>{
                console.log("***");
                console.log(user);
                assert(user === null);
                done();
            });
    });

    it('class method findOneAndRemove',(done)=>{
        User.findOneAndRemove({name:'Joe'})
            .then(()=> User.findOne({name:'Joe'}))
            .then((user)=>{
                console.log("***");
                console.log(user);
                assert(user === null);
                done();
            });
    }); 

    it('class method findByIdAndRemove',(done)=>{
        User.findByIdAndRemove(joe._id)
         .then(()=> User.findOne({name:'Joe'}))
        .then((user)=>{
                console.log("***");
                console.log(user);
                assert(user === null);
                done();
            });
    });

})