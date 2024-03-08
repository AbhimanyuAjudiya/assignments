const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
        username : username,
        password : password
    }).then(function(val){
        res.status(200).send("Admin created successfully");
    }).catch(function(err){
        res.status(400).send("Admin already exists");
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    Course.create({
        title,
        description,
        imageLink,
        price
    }).then(function(val){
        res.json({
            msg:"Course created successfully",
            courseId: val._id
        });
    }).catch(function(err){
        res.status(400).send("Course already exists");
    })
});

// router.post('/courses', adminMiddleware, async (req, res) => {
//     // Implement course creation logic
//     const title = req.body.title;
//     const description = req.body.description;
//     const imageLink = req.body.imageLink;
//     const price = req.body.price;

//     const Newcourse = await Course.create({
//         title,
//         description,
//         imageLink,
//         price
//     }) 
//     res.json({
//         msg:"Course created successfully",
//         courseId: Newcourse._id
//     });
// });

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then(function(val){
        res.json(val);
    })
});

module.exports = router;