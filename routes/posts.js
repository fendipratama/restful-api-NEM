const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET ALL POSTS
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.json(err);
    }
});

// GET SPESIFIC POST
router.get('/:postId', async (req, res) => {
    //console.log(req.params.postId);
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message : err});
    }
});

// POST A DATA
router.post('/', async (req, res) => {
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    });

    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message : err});
    }

    // WITHOUT ASYNC
    // post.save()
    // .then(data => {
    //     res.json(data)
    // })
    // .catch(err => {
    //     res.json(err)
    // });
});

// DELETE A SPESIFIC DATA
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id : req.params.postId});
        res.json(removedPost);
    } catch (err) {
        res.json({message : err});
    }
});

// UPDATE A DATA
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id : req.params.postId },
            { $set : { title : req.body.title }}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message : err});
    }
});

module.exports = router;