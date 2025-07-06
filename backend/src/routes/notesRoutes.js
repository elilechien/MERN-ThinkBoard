import express from "express"
import {createNote, deleteNote, getAllNotes, updateNote, getNote} from "../controllers/notesController.js"

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);
router.get("/:id", getNote);

export default router;