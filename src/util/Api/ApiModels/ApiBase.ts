// Apiの基本モデル
export class ApiBase {
    result: boolean;

    constructor(data: ApiBase) {
        this.result = data.result;
    }
}