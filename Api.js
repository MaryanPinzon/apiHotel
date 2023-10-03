import express from "express";
import { rutas } from "./routes/rutas.js";

export class Api {
  constructor() {
    this.app = express();
    this.procesarPeticiones();
  }

  levantarServidor() {
    //el servidor recibe las perticiones
    this.app.listen(3000, function () {
      console.log("Servidor operando con éxito");
    });
  }

  procesarPeticiones() {
    this.app.use("/", rutas);
  }

  conectarBD() {}
}
