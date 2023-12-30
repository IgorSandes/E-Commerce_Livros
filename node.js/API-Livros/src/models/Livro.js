import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    imagem: { type: String, required: true },
    link: { type: String, required: true },
    titulo: { type: String, required: true },
    preco: { type: Number, required: true },
    genero: { type: String, required: true }
}, { versionKey: false });

const livro = mongoose.model("livros", livroSchema);

export default livro;
