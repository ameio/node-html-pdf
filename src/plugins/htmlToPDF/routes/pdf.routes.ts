import express from 'express';
import { generateHtmlToPDF } from '../controllers/pdf.controller';

const router = express.Router();

router.get('/createPDF', generateHtmlToPDF);

export default router;
