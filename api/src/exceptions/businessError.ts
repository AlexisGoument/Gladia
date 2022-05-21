export default abstract class BusinessError extends Error {
    public errorCode: number;
    public msg: string;

    public constructor(msg: string, errorCode: number) {
        super(msg);
        this.errorCode = errorCode;
        this.msg = msg;
    }
}