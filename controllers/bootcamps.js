//@desc     get all bootcamps
//@route    Get /api/v1/bootcamps
//@access   Public      


exports.getBootcamps = (req,res,next) => {
    res.status(200).send({ success: true, msg: 'Show all bootcamps'})
}




//@desc     get single bootcamps
//@route    Get /api/v1/bootcamps/:id
//@access   Public      


exports.getBootcamp = (req,res,next) => {
    res.status(200).send({ success: true, msg: `Show bootcamp ${req.params.id}`})
}

//@desc     Create new bootcamp
//@route    POST /api/v1/bootcamps
//@access   Private      


exports.createBootcamps = (req,res,next) => {
    res.status(200).send({ success: true, msg: 'Create new bootcamp'})
}

//@desc     Update bootcamp
//@route    PUT /api/v1/bootcamps/:id
//@access   Public      


exports.updateBootcamp = (req,res,next) => {
    res.status(200).send({ success: true, msg: `Update bootcamp ${req.params.id}`})  
}

//@desc     Delete bootcamp
//@route    DELETE /api/v1/bootcamps/:id
//@access   Public      


exports.deleteBootcamp = (req,res,next) => {
    res.status(200).send({ success: true, msg: `Delete bootcamp ${req.params.id}`}) 
}

