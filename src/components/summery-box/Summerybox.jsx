import Box from '../box/Box';
import './summery-box.scss';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colors from '../../constants/colors';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const Summerybox = ({ item }) => {
    return (
        <Box>
            <div className='summary-box'>
                <div className='summary-box_info'>
                    <div className='summary-box_info_title'>
                        <div>{item.title}</div>
                        <span>{item.subtitle}</span>
                    </div>
                    <div className='summary-box_info_value'>
                        {item.value}
                    </div>
                </div>
                <div className="summary-box_chart">
                    <CircularProgressbarWithChildren
                    value={item.percent}
                    strokeWidth={10}
                    styles={buildStyles({
                        pathColor: item.percent < 50 ? colors.red : colors.purple,
                        trailColor: 'transparent',
                        strokeLinecap: 'round'
                    })}
                    >
                    <div className='summary-box_chart_value'>
                        {item.percent}%
                    </div>
                    </CircularProgressbarWithChildren>
                </div>
            </div>
        </Box>
    );
};

export default Summerybox;

export const SummeryBoxSpecial = ({item}) => {
    const chartOptions = {
        responsive: true,
        scales: {
            xAxis: {
                display: false
            },
            yAxis: {
                display: false
            }
        },
        plugins: {
            legend: {
                display: false
            }
        },
        elements: {
            point: {
                radius: 0
            }
        }
    }

    const chartData = {
        labels: item.chartData.labels,
        datasets: [
            {
                label: 'Revenue',
                data: item.chartData.data,
                borderColor: '#fff',
                tension: 0.5
            }
        ]
    }

    return (
        <Box purple fullheight>
            <div className="summery-box-special">
                <div className="summery-box-special-title">
                    {item.title}
                </div>
                <div className="summery-box-special-value">
                    {item.value}
                </div>
                <div className="summery-box-special-chart">
                    <Line options={chartOptions} data={chartData} width={'260px'} />
                </div>
            </div>
        </Box>
    )
}
