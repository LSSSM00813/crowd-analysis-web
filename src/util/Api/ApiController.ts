// import axios from 'axios';
// import { ApiRequestBase } from './ApiModels/ApiBase';

class ApiContoller {
    static readonly HOST = "localhost";
    static readonly PORT = 3001;

    static readonly BASE_URL = `http://${ApiContoller.HOST}:${ApiContoller.PORT}`;

    // // 仮APIメソッド
    // static async GetResult(): Promise<ApiRequestBase> {
    //     const api_url = "/api/result";
    //     const response = await axios.get(this.BASE_URL + api_url, {
    //         headers: {
    //             "Cache-Control": "no-cache",
    //             "Pragma": "no-cache",
    //             "Expires": "0"
    //         },
    //         params: {
    //             _: new Date().getTime() // キャッシュ防止用ダミーパラメータ
    //         }
    //     });
    //     return new ApiRequestBase(response.data as ApiRequestBase<boolean>);
    // }
}

export default ApiContoller;