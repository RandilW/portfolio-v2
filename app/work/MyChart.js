'use client'
// MyChart.js
import { useEffect, useRef, useState } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

const MyChart = ({ data, labels }) => {
    const chartRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            // Set `isVisible` to `true` if the observed element is in viewport
            setIsVisible(entries[0].isIntersecting);
        });

        // Start observing the chart container
        observer.observe(chartRef.current);

        // Clean up on unmount
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'My Dataset',
                        data: data,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',  // set color of the bars
                        borderColor: 'rgba(75, 192, 192, 1)',  // set color of the bar borders
                        borderWidth: 1,  // set width of the bar borders
                    }],
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            title: {
                                display: true,
                                text: 'Zip Code'  // label for x-axis
                            },
                            grid: {
                                display: false  // remove gridlines
                            }
                        },
                        y: {
                            type: 'linear',
                            title: {
                                display: true,
                                text: 'Number of Restaurants'  // label for y-axis
                            },
                            grid: {
                                display: false  // remove gridlines
                            },
                            ticks: {
                                stepSize: 1,  // set step size to 1
                                precision: 0  // no decimal places
                            }
                        },
                    },
                    animation: {
                        duration: 2000, // general animation time
                        delay: context => context.dataIndex * 300, // add delay between each bar
                    },
                    hover: {
                        animationDuration: 1000, // duration of animations when hovering an item
                    },
                    responsiveAnimationDuration: 1000, // animation duration after a resize
                    plugins: {
                        legend: {
                            display: false  // hide legend
                        }
                    }
                },
            });
            return () => chartInstance.destroy();
        }
    }, [isVisible, chartRef, data, labels]);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingTop: '250px', paddingLeft: '50px', paddingRight: '50px', marginBottom: '-300px'}}>
            <div style={{width: '750px', height: '800px'}}>
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default MyChart;
