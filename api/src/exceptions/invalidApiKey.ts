import BusinessError from "./businessError";

export default class InvalidApiKeyError extends BusinessError {
    public apiKey: string;

    constructor(apiKey: string) {
        //HtmlCode: 401 Unauthorized
        super(`This api key is not valid : ${apiKey}`, 401);
        this.apiKey = apiKey;
    }
}