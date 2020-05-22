"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * CLASSES CONTROLLER
 * All routes to get, put or post Class model data goes here
 */
var express_1 = require("express");
var db = require('../models');
var router = express_1.Router();
/*****************************
 * GET ROUTES
 ****************************/
/**
 * GET
 * @returns All classes in the db
 */
router.get('/', function (req, res) {
    db.Class.find()
        .then(function (c) {
        res.send(c);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
/**
 * GET
 * @returns the specified class
 * @param id, The id of the class to return
 */
router.get('/:id', function (req, res) {
    db.Class.findOne({ _id: req.params.id })
        .then(function (c) {
        res.send(c);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
/**
 * GET
 * @returns All classes a student has signed up for
 * @param id, The student's id
 */
router.get('/student/:id', function (req, res) {
    db.Class.find({ students: { $elemMatch: { student: req.params.id } } })
        .then(function (classes) {
        res.send(classes);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
/**
 * GET
 * @returns All classes taught by a specified teacher
 * @param id, The teacher's id
 */
router.get('/teacher/:id', function (req, res) {
    db.Class.find({ teacher: req.params.id })
        .then(function (classes) {
        res.send(classes);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
/*****************************
 * POST ROUTES
 ****************************/
/**
 * POST
 * Adds a new class to the database.
 */
router.post('/', function (req, res) {
    db.User.find({ _id: req.body.teacher })
        .then(function (teacher) {
        var name = teacher.firstname + " " + teacher.lastname;
        db.Class.create({
            classname: req.body.classname,
            subject: req.body.subject,
            teacher: req.body.teacher,
            teachername: name,
            startdate: req.body.startdate,
            enddate: req.body.enddate,
        })
            .then(function (c) {
            res.send(c);
        })
            .catch(function (err) {
            console.log("Error:", err);
        });
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
/*****************************
 * PUT ROUTES
 ****************************/
/**
 * PUT
 * Updates info about a class
 */
router.put('/:id', function (req, res) {
    db.Class.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(function (c) {
        res.send(c);
    })
        .catch(function (err) {
        console.log("Error:", err);
    });
});
// Export the router
module.exports = router;
