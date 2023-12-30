import express from "express";
import livros from "./livrosRourtes.js"

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Curso de Node.js");
    });

    app.use(express.json(), livros);

};

//
// const express = require('express');
// const path = require('path');
// const livros = require('./livros'); // Certifique-se de importar seu roteador de livros corretamente

// const routes = (app) => {
//     // Rota para index.html
//     app.route("/").get((req, res) => {
//         const indexPath = path.join(__dirname, 'index.html');
//         res.sendFile(indexPath);
//     });

//     // Middleware para tratar solicitações JSON
//     app.use(express.json());

//     // Roteador de livros
//     app.use('/index', livros);
// };
// module.exports = routes;
// //

export default routes;