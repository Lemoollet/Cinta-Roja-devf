import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const peliSchema = new Schema({
  name: String,
  año: String,
  duracion: {
    type: Number,
    default: 90,
  },
});

const Pelicula = model("Pelicula", peliSchema);
export default { Pelicula };
