import express from 'express';
import { getAlumnos, 
    getAlumnoById,
     createAlumnos,
     updateAlumnos,
    deleteAlumnos
 } from "../controllers/Alumnos.js"
 const router = express.Router();

router.get('/alumnos', getAlumnos);
router.get('/alumnos/:id', getAlumnoById);
router.post('/alumnos', createAlumnos);
router.patch('/alumnos', updateAlumnos);
router.delete('/alumnos', deleteAlumnos);

export default router;