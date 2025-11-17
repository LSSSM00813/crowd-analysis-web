import "./crowdData.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";
import stripJsonComments from "strip-json-comments";
import sampleData from "../../../assets/database/crowd-data.jsonc?raw";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const CrowdData = () => {
    // 表のデータ
    const crowdData: any[] = JSON.parse(stripJsonComments(sampleData));

    // グラフのデータ
    const options: ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Chart.js Line Chart",
            },
        },
    };
    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];
    const data1 = [12, 11, 14, 52, 14, 32, 36];
    const data2 = [22, 31, 17, 32, 24, 62, 66];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: data1,
                borderColor: "rgba(255, 99, 132, 0.8)",
                backgroundColor: "rgba(255, 99, 132, 0.3)",
            },
            {
                label: "Dataset 2",
                data: data2,
                borderColor: "rgba(53, 162, 235, 0.8)",
                backgroundColor: "rgba(53, 162, 235, 0.3)",
            },
        ],
    };

    return (
        <div className="page-crowd-data">
            <div className="panel-horizontal">
                <div>表示日</div>
                <input type="date"></input>
                <div>絞込１</div>
                <select>
                    <option value="all">全て</option>
                    <option value="men">男性</option>
                    <option value="women">女性</option>
                    <option value="other">その他</option>
                </select>
                <div>絞込２</div>
                <select>
                    <option value="all">全て</option>
                    <option value="child">子供</option>
                    <option value="adult">大人</option>
                    <option value="senior">高齢者</option>
                </select>

            </div>
            <Line options={options} data={data} />
            {/* ↓ここからテーブル */}
            <table className="crowd-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>日付</th>
                        <th>人数</th>
                        <th>大人</th>
                        <th>子ども</th>
                        <th>入館時間</th>
                        <th>退館時間</th>
                        <th>滞在時間</th>
                        <th>チェック</th>
                    </tr>
                </thead>
                <tbody>
                    {crowdData.map((x, idx: number) => (
                        <tr key={idx}>
                            <td>{x.No}</td>
                            <td>{x.Date}</td>
                            <td>{x.People}</td>
                            <td>{x.Adult}</td>
                            <td>{x.Child}</td>
                            <td>{x.EnterTime}</td>
                            <td>{x.ExitTime}</td>
                            <td>{x.StayTime}</td>
                            <td>
                                {x.Checked ? "〇" : "×"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
