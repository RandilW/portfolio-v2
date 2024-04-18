// fetchDataFromCSV.js
import Papa from 'papaparse';

const fetchDataFromCSV = () => {
    return new Promise((resolve, reject) => {
        Papa.parse('/data.csv', {
            download: true,
            header: true,
            complete: (results) => {
                // Assuming the CSV has columns named 'label' and 'value'
                let labels = results.data.map(row => row.label);
                let data = results.data.map(row => row.value);

                labels = labels = results.data.map(row => row['Zip Code']);
                data = data = results.data.map(row => Number(row['Number of Restaurants']));

                resolve({ labels, data });
                console.log(labels, data);
                resolve({ labels, data });

            },
            error: (error) => {
                reject(error);
            },
        });
    });
};

export default fetchDataFromCSV;
