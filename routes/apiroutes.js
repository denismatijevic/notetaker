const router = require("express").Router()
const Notes = require("../db/db.json")
router.get("/notes", (req, res)=>{
    Notes.getNotes()
        .then(notes=>res.json(notes))
        .catch(err=>res.json(err))
})
router.post("/notes", (req, res)=>{
    Notes.addNote(req.body)
        .then(note=>res.json(note))
        .catch(err=>res.json(err))
})
router.delete("/notes/:id", (req, res)=>{
    Notes.deleteNote(req.params.id)
        .then(notes=>res.json(notes))
        .catch(err=>res.json(err))
})