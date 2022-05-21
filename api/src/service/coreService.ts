import ITextAutoCorrectModel from '../models/ITextAutoCorrectModel';
import TextRepository from '../repositories/textRepository';
import ApiKeyRepository from '../repositories/apiKeyRepository';
import InvalidApiKeyError from '../exceptions/invalidApiKey'

export default class CoreService {
    private apiKeyRepository: ApiKeyRepository;
    private textRepository: TextRepository;

    public constructor() {
        this.apiKeyRepository = new ApiKeyRepository();
        this.textRepository = new TextRepository();
    }
    
    public async GetTextAutoCorrectModels(apiKey: string): Promise<ITextAutoCorrectModel[]> {
        if (await this.HasValidApiKey(apiKey)) {
            return this.textRepository.GetTextAutoCorrectModels();
        }
        else {
            throw new InvalidApiKeyError(apiKey);
        }
    }

    private async HasValidApiKey(key: string): Promise<boolean> {
        return await this.apiKeyRepository.IsValidKey(key);
    }
}