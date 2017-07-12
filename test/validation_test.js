const assert = require('assert');
const User = require('../src/user');

describe('Validating records', ()=>{
    // it('requires a user name',()=>{
    //     const user = new User({name:undefined});
    //     const validationResult = user.validateSync();
    //     // console.log(validationResult);
    //     const {message} = validationResult.errors.name;
    //     assert(messsage === 'Name is required');
    // })

    it('requires a user\'s name longar than 2 characters',(done)=>{
        const user = new User({name:'Al'});
        const validationResult = user.validateSync();
        const {message} = validationResult.errors.name;
        assert(message === 'Name must be longer than 2 characters.');
        done();
    });

})