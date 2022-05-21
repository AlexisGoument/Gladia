import fs from 'fs';
import ITextAutoCorrectModel from '../models/ITextAutoCorrectModel';

export default class TextRepository {
    public async GetTextAutoCorrectModels() : Promise<ITextAutoCorrectModel[]> {
        let path = 'src/datas/textAutoCorrectModels.json';
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    resolve(JSON.parse(data));
                } catch (error) { //Throws JSON parsing error
                    reject(error);
                }
            });
        })
    }
}