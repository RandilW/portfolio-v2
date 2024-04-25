// fetchDataForSecondChart.js
import Papa from 'papaparse';

const fetchDataForSecondChart = (csvPath, labelColumn) => {
    return new Promise((resolve, reject) => {
        Papa.parse(csvPath, {
            download: true,
            header: true,
            complete: (results) => {
                const scores = results.data.map(row => Number(row[labelColumn]));
                const bins = Array.from({length: 9}, (_, i) => 60 + i * 5);  // create an array [60, 65, 70, ..., 100]
                const labels = bins.slice(0, -1).map((bin, i) => `${bin} - ${bins[i + 1]}`);
                const data = labels.map((label, i) => scores.filter(score => score >= bins[i] && score < bins[i + 1]).length);
                resolve({ labels, data });
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export default fetchDataForSecondChart;
