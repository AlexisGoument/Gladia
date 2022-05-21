import fs from 'fs';

export default class ApiKeyRepository {
    public async IsValidKey(key: string) : Promise<boolean> {
        let path = 'datas/apiKeys.json';
        return new Promise((resolve, reject) => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    let keys = JSON.parse(data);
                    console.log(keys);
                    console.log("provided key is "  + key);
                    console.log(keys.some((k: string) => k === key));
                    resolve(keys.some((k: string) => k === key));
                } catch (error) { //Throws JSON parsing error
                    reject(error);
                }
            });
        })
    }
}