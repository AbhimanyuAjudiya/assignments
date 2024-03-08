const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username : username,
        password : password
    }).then(function(val){
        res.status(200).send("User created successfully");
    }).catch(function(err){
        res.status(400).send("User already exists");
    })
});

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
    Course.find({}).then(function(val){
        res.json(val);
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username : username
    },{
        "$push" : {
            purchasedCourses : courseId
        }
    }).catch(function(err){
        res.status(400).send("Course already purchased");
    })
    res.json({
        msg:"Course purchased successfully"
    })

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username : req.headers.username
    });
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    })
    res.json(courses);
});

module.exports = router