import express from 'express';
import { getGrados, 
    getGradosById,
     createGrados,
     updateGrados,
    deleteGrados
 } from "../controllers/Grados.js"
 const router = express.Router();

router.get('/grados', getGrados);
router.get('/grados/:id', getGradosById);
router.post('/grados', createGrados);
router.patch('/grados', updateGrados);
router.delete('/grados', deleteGrados);

export default router;