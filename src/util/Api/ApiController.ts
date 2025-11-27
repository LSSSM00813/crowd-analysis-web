import axios from 'axios';
import { ApiBase } from './ApiModels/ApiBase';

class ApiContoller {
    static readonly HOST = "localhost";
    static readonly PORT = 3001;

    static readonly BASE_URL = `http://${ApiContoller.HOST}:${ApiContoller.PORT}`;

    // 仮APIメソッド
    static async GetResult(): Promise<ApiBase> {
        const api_url = "/api/result";
        const response = await axios.get(this.BASE_URL + api_url, {
            headers: {
                "Cache-Control": "no-cache",
                "Pragma": "no-cache",
                "Expires": "0"
            },
            params: {
                _: new Date().getTime() // キャッシュ防止用ダミーパラメータ
            }
        });
        return new ApiBase(response.data);
    }
}

export default ApiContoller;