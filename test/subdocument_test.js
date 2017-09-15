// const assert = require('assert');
// const User = require('../src/user');

// describe('Subdocuments',()=>{

//     it('Can create a subdocument',(done)=>{
//         const joe = new User({
//                     name:'sathish',
//                     posts:[{title:'sathishTitle'}]
//                 });
    
//         joe.save()
//             .then(()=>{
//                 User.findOne({name:'sathish'})
//                 .then((user)=>{
//               //  console.log("^^^");
//                // console.log(user);
//                 assert(user.posts[0].title === 'sathishTitle');
//                 done(); 
//                 });
//                 // console.log("&&&&");
//                 // console.log(user);
//                 // console.log("&&&&")
//             })
//             // done();
//     })

//     it('Can add subdocuments to an existing record',(done)=>{
//         const joe = new User({
//             name : 'Joe',
//         });
    
//         joe.save()
//            .then(()=> {
//                 return User.findOne({name:'Joe'})
//             })
//            .then((user)=>{
//               user.posts.push({title : 'New Post'});
//                return user.save();
//            })
//            .then(()=> User.findOne({name:'Joe'}))
//            .then((user)=>{
//                assert(user.posts[0].title === 'New Post');
//                done();
//            })
    
//     })

//     it('can remove an existing subdocument',(done)=>{
//         const joe = new User({
//             name : 'Joe',
//             posts : [{title: 'New Title'}]
//         });

//         joe.save()
//            .then(()=> User.findOne({name:'Joe'}))
//            .then((user)=>{
//                const post = user.posts[0];
//                post.remove();
//                return user.save();
//            })
//            .then(()=> User.findOne({name : 'Joe'}))
//            .then((user)=>{
//                assert(user.posts.length === 0);
//                done();
//            })
//     })
    

// })