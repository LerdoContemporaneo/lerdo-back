import express from 'express';
import { getAsistenciaMaestro, 
    getAsistenciaMaestroById,
     createAsistenciaMaestro,
     updateAsistenciaMaestro,
    deleteAsistenciaMaestro
 } from "../controllers/AsistenciaMaestro.js"
 const router = express.Router();

router.get('/asistencia-maestro', getAsistenciaMaestro);
router.get('/asistencia-maestro/:id', getAsistenciaMaestroById);
router.post('/asistencia-maestro', createAsistenciaMaestro);
router.patch('/asistencia-maestro', updateAsistenciaMaestro);
router.delete('/asistencia-maestro', deleteAsistenciaMaestro);

export default router;