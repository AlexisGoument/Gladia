import express from 'express';
import ITextAutoCorrectModel from '../models/ITextAutoCorrectModel';
import CoreService from '../service/coreService';

const router = express.Router();

let coreService = new CoreService();
router.get('/text/autocorrect', async (req, res) => {
    try {
        let models : ITextAutoCorrectModel[] = await coreService.GetTextAutoCorrectModels();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                success: true,
                message: models
            })
        );
    } catch (error) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                success: false,
                error: error,
            })
        );
    }
});

export default router;