import express from 'express';
import { getAsistencia, 
    getAsistenciaById,
     createAsistencia,
     updateAsistencia,
    deleteAsistencia
 } from "../controllers/Asistencia.js"
 const router = express.Router();

router.get('/asistencia', getAsistencia);
router.get('/asistencia/:id', getAsistenciaById);
router.post('/asistencia', createAsistencia);
router.patch('/asistencia', updateAsistencia);
router.delete('/asistencia', deleteAsistencia);

export default router;