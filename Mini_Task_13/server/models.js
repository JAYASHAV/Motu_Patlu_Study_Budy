import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    title: {type: String, require: true},
    description: {type: String, require: true}
})

const NoteModel = mongoose.model("Note", notesSchema)

export default NoteModel