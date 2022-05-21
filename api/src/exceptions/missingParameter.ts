import BusinessError from "./businessError";

export default class MissingParameterError extends BusinessError {
    public name: string;

    constructor(name: string) {
        //HtmlCode: 400 Bad request
        super(`The request is missing parameter : ${name}`, 400);
        this.name = name;
    }
}