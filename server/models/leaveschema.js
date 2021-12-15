const mongoose=require('mongoose');


//leaveschema
const leaveSchema=new mongoose.Schema(
    {
        Employee:{
            type:String,
            required:true
        },
        leavetype:{
            type:String,
            required:true
            
        },
        from_date:{
            type:Date,
            required:true
            
        },
        to_date:{
            type:Date,
            required:true
            
        },
        message:
        {
            type:String,
            required:true
           
        }
        
    }
)
//model
const Leave=new mongoose.model("Leave",leaveSchema);

//Exporting the Leavecollection
module.exports=Leave;