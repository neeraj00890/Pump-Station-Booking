const User = require('../models/user');
const Bookings = require('../models/Bookings');

exports.bookSlot=(req,res,next)=>{

    let bookModel={
        type:req.body.type,
        station:req.body.station,
        start:req.body.startTime,
        end:req.body.endTime,
}

console.log(bookModel);
console.log(req.body.userId);
    User.findById(req.body.userId)
    .then(
        (user)=>{

            let bookings= new Bookings({
                ...bookModel,userId:user
            })

            console.log(bookings)

            return bookings.save()
        }
    )
    .then(
        (result)=>{res.json({success:true})}
    )

   
}

exports.gridData=(req,res,next)=>{

    Bookings.find().then
    (

        async (booking)=>{

            let returnbooking = []
           
            for(let x in booking ){
                let populatedBook= await booking[x].populate('userId').execPopulate();
                returnbooking.push(populatedBook)
                   
                
            }
            console.log(booking);
            res.json({...returnbooking,success:true})
        }
    )
}