import Papa from 'papaparse';

const fetchDataForFirstChart = (csvPath, labelColumn, valueColumn) => {
    return new Promise((resolve, reject) => {
        Papa.parse(csvPath, {
            download: true,
            header: true,
            complete: (results) => {
                const labels = results.data.map(row => row[labelColumn]);
                const data = results.data.map(row => Number(row[valueColumn]));
                resolve({ labels, data });
            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export default fetchDataForFirstChart;
