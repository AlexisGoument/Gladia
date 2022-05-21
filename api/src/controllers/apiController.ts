import express from 'express';
import BusinessError from '../exceptions/businessError';
import RequestHelper from '../helpers/RequestHelper';
import ITextAutoCorrectModel from '../models/ITextAutoCorrectModel';
import CoreService from '../service/coreService';

const router = express.Router();

let coreService = new CoreService();
let helper = new RequestHelper();

router.get('/text/autocorrect', async (req, res) => {
    try {
        let apiKey = helper.GetParameter(req, "apiKey");

        let models : ITextAutoCorrectModel[] = await coreService.GetTextAutoCorrectModels(apiKey);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                success: true,
                message: models
            })
        );
    } catch (error) {
        let errorCode = 500; //ByDefault 500 InternalServerError
        if (error instanceof BusinessError) {
            errorCode = error.errorCode;
        }

        res.writeHead(errorCode, { "Content-Type": "application/json" });
        res.end(
            JSON.stringify({
                success: false,
                error: error,
            })
        );
    }
});

export default router;