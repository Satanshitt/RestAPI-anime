const { Router } = require('express');
const router = Router();

const _ = require('underscore');

const characters = require('../anime-characters.json');
console.log(characters);

router.get('/', (req, res) =>{
    res.json(characters);
})



router.post('/', (req, res) =>{
    const { name, anime } = req.body;
    if(!name || !anime){
        res.status(500).send("There was an error!");
    }else{
        const id = characters.length + 1;
        const newCharacter = {...req.body, id};
        characters.push(newCharacter);
        res.json(characters);
    }
})

router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { name, anime } = req.body;
    if(name && anime){
        _.each(characters, (character, i) =>{
            if(character.id == id){
                character.name = name;
                character.anime = anime;
            }
        });
        res.send(characters);
    } else {
        res.status(500).send("There was an error!");
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(characters, (character, i) =>{
        if(character.id == id){
            characters.splice(i, 1);
        }
    });
    res.send(characters);
})

module.exports = router;
