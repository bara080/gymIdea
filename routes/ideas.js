// ideas.js
const express = require("express");
const router = express.Router();
const Idea = require("../models/Idea");

//  TODO: GET ALL IDEAS
router.get("/", async (req, res) => {
    try {
        const allIdeas = await Idea.find();
        res.json({ success: true, data: allIdeas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Something went wrong" });
    }
});

// TODO: GET SINGLE IDEA
router.get("/:id", async (req, res) => {
    try {
        const singleIdea = await Idea.findById(req.params.id);
        res.json({ success: true, data: singleIdea });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Something went wrong" });
    }
});

// TODO: CREATE AN IDEA
router.post("/", async (req, res) => {
    const idea = new Idea({
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username
    });

    try {
        const savedIdea = await idea.save();
        res.json({ success: true, data: savedIdea });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Something went wrong" });
    }
});

// TODO: UPDATE AN IDEA
router.put("/:id", async (req, res) => {
    try {
        const idea  = await Idea.findById(req.params.id);
        if (idea.username  === req.body.username) 
        {
            const updatedIdea = await Idea.findByIdAndUpdate(
                req.params.id,
                {
                    $set: {
                        text: req.body.text,
                        tag: req.body.tag,
                    }
                },
                {
                    new: true
                }
            );
            return res.json({ success: true, data: updatedIdea });

        }

        //  username does not match

        res.status(403).json({ success: false, error: "You are not authorized to update post" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Something went wrong" });
    }
});

// TODO: DELETE AN IDEA
router.delete("/:id", async (req, res) => {
    try {
        const idea  = await Idea.findById(req.params.id);
        //  Match the usernames
        if (idea.username  === req.body.username) 
        {
            await Idea.findByIdAndDelete(req.params.id);
            return res.json({success : true, data: {} });
        }
        //  username do not match
        res.status(403).json({ success: false, error: "You are not authorized to delete post" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, error: "Something went wrong" });
    }
});

module.exports = router;
