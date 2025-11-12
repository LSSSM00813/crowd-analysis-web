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
import { QRCodeCanvas } from "qrcode.react";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();

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
    <>
      <div>ダッシュボード</div>
      <Line options={options} data={data} />
      <QRCodeCanvas value={"aaa"} size={200} />
      <div>
        <button onClick={() => navigate("../myqr")}>myQR</button>
        <button onClick={() => navigate("../search")}>search</button>
        <button onClick={() => navigate("../setting")}>setting</button>
      </div>
      {Array.from({ length: 50 }, (_, i) => (<div key={i}>aaa</div>))}
    </>
  );
};

export default Dashboard;
