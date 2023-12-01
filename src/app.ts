import dotenv from 'dotenv';
//inside your starter code, do this
import express, { Express } from 'express';

dotenv.config();
import { useHtmlToPDF } from './plugins/htmlToPDF';
import { generatePDF } from './plugins/htmlToPDF/controllers/pdf.controller';

const app: Express = express();

useHtmlToPDF(app);

export { generatePDF };

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
});
