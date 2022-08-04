const express = require('express');
const router = express.Router();
const Manga = require('../models/manga');

router.get('/', async (req,res) => {
    let mangas
    try{
        mangas = await Manga.find().sort({createAt: 'desc'}).limit(10).exec();
    }catch{
        books= []
    }
    res.render('index', {mangas: mangas })
})


module.exports= router;