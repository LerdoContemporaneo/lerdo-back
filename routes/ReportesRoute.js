import express from 'express';
import { getReportes, 
    getReportesById,
     createReportes,
     updateReportes,
    deleteReportes
 } from "../controllers/Reportes.js"
 const router = express.Router();

router.get('/reportes', getReportes);
router.get('/reportes/:id', getReportesById);
router.post('/reportes', createReportes);
router.patch('/reportes', updateReportes);
router.delete('/reportes', deleteReportes);

export default router;