import express from 'express';
import { getTareas, 
    getTareasById,
     createTareas,
     updateTareas,
    deleteTareas
 } from "../controllers/Tareas.js"
 const router = express.Router();

router.get('/tareas', getTareas);
router.get('/tareas/:id', getTareasById);
router.post('/tareas', createTareas);
router.patch('/tareas', updateTareas);
router.delete('/tareas', deleteTareas);

export default router;