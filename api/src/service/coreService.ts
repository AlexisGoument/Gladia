import ITextAutoCorrectModel from '../models/ITextAutoCorrectModel';
import TextRepository from '../repositories/textRepository';

export default class CoreService {
    private textRepository: TextRepository;

    public constructor() {
        this.textRepository = new TextRepository();
    }
    
    public async GetTextAutoCorrectModels(): Promise<ITextAutoCorrectModel[]> {
        return this.textRepository.GetTextAutoCorrectModels();
    }
}