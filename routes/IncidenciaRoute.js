import express from 'express';
import { getIncidencias, 
    getIncidenciasById,
     createIncidencias,
     updateIncidencias,
    deleteIncidencias
 } from "../controllers/Incidencias.js"
 const router = express.Router();

router.get('/incidencias', getIncidencias);
router.get('/incidencias/:id', getIncidenciasById);
router.post('/incidencias', createIncidencias);
router.patch('/incidencias', updateIncidencias);
router.delete('/incidencias', deleteIncidencias);

export default router;