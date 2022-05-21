import MissingParameterError from "../exceptions/missingParameter";

export default class RequestHelper {
    public GetParameter(req: any, name: string): string {
        try {
            let value = req.query[name] as string;
            if (!value)
                throw "no value";

            return value;
        } catch (error) {
            throw new MissingParameterError(name);
        }
    }
}