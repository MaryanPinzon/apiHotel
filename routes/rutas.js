import express from "express";
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js';
import {ControladorReserva} from '../controllers/ControladorReserva.js';

//Para poder llamar al controlador debo crearun objeto de la clase controladorHabitacion
//Objeto e suna avriable para nombrwr las porpiedades del controlador
//La clase va en mayuscula, el objeto en minuscula

let controladorHabitacion = new ControladorHabitacion();
let controladorReserva = new ControladorReserva();

export let rutas = express.Router()

rutas.post('/api/habitaciones', controladorHabitacion.registrarReserva);
rutas.get("/api/habitacion", controladorHabitacion.buscarHabitacionPorId);
rutas.get("/api/habitaciones", controladorHabitacion.buscarHabitaciones);
rutas.put("/api/habitaciones", controladorHabitacion.modificarHabitacion);
rutas.delete("/api/habitaciones", controladorHabitacion.borrarHabitacion);

rutas.post("/api/reservas", controladorReserva.registrarReserva);
rutas.get("/api/reserva", controladorReserva.buscarReservaPorId);
rutas.post("/api/reservas", controladorHabitacionRes.buscarReservas);
rutas.put("/api/reservas", controladorReserva.modificarReserva);
rutas.delete("/api/reservas", controladorReserva.borrarReserva);
