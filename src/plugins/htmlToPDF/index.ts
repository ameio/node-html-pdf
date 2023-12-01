import express, { Express } from 'express';
import pluginPDFRoutes from './routes/pdf.routes';
import path from 'path';

export function useHtmlToPDF(app: Express) {
  app.use(express.static(path.join(__dirname, '../../../public')));
  app.use('/api', pluginPDFRoutes);
}
