import { Request, Response } from 'express';
import fs from 'fs';
import * as path from 'path';
import * as puppeteer from 'puppeteer';
import { format } from 'date-fns-tz';

const formatDate = async (date: Date): Promise<string> => {
	// Constants for time zone
	const TIME_ZONE = 'Asia/Kolkata';
	return format(date, 'dd-MM-yyyy', { timeZone: TIME_ZONE });
};

export const generateHtmlToPDF = async (req: Request, res: Response) => {
	const url = req.query.URL as string || req.query.url as string || req.query.Url as string || '';
	try {
		await generatePDF(url, res);
	} catch (error) {
		console.error(error);
		res.status(500).send('Internal Server Error');
	}
};

export const generatePDF = async (url: string, res: Response): Promise<void> => {
	if (!url) {
		res.status(400).send('URL required parameters');
		throw new Error('URL required parameters'); // Throw an error to exit the function
	}

	const fileName = `${Date.now()}.pdf`;
	const fullFilePath = path.join(process.cwd(), 'src/PDFFile', fileName);

	try {
		if (!fs.existsSync(path.dirname(fullFilePath))) {
			await fs.promises.mkdir(path.dirname(fullFilePath), { recursive: true });
		}

		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		
		await page.goto(url, { waitUntil: 'networkidle2' });

		await page.pdf({ path: fullFilePath, format: 'A4' });

		await browser.close();

		const pdfBuffer = await fs.promises.readFile(fullFilePath);

		res.setHeader('Content-Type', 'application/pdf');
		res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
		res.setHeader('Content-Length', pdfBuffer.length.toString());

		res.end(pdfBuffer);
		console.log('PDF download successful! Please check your download folder');
		await fs.promises.unlink(fullFilePath);
	} catch (error) {
		throw error; // Propagate the error for centralized error handling
	}
};

