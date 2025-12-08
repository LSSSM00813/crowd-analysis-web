// APIモデル
export class ApiRequestBase<T> {
  result: boolean = false;
  message: string = "";
  timestamp: Date = new Date();
  // APIリクエストに応じて変化する
  data: T;

  constructor(data: T) {
    this.data = data;
  }
}
