import express from 'express';
import { generatePDF } from '../controllers/pdf.controller';

const router = express.Router();

router.get('/createPDF', generatePDF);

export default router;
