'use client'
// MyChart.js
import { useEffect, useRef, useState } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

const MyChart = ({ data, labels, chartLabel, borderRadius, xStepSize, yStepSize }) => {
    const chartRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            setIsVisible(entries[0].isIntersecting);
        });

        observer.observe(chartRef.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible && chartRef.current) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: chartLabel,
                        data: data,
                        backgroundColor: '#545d4f',
                        borderColor: '#dbdad4',
                        borderWidth: 0,
                        borderRadius: borderRadius,
                    }],
                },
                options: {
                    scales: {
                        x: {
                            type: 'category',
                            title: {
                                display: true,
                                text: 'Score'
                            },
                            grid: {
                                display: false
                            },
                            ticks: {
                                stepSize: xStepSize,
                            }
                        },
                        y: {
                            type: 'linear',
                            title: {
                                display: true,
                                text: 'Number of Restaurants'
                            },
                            grid: {
                                display: false
                            },
                            ticks: {
                                stepSize: yStepSize,
                                precision: 0
                            }
                        },
                    },
                    animation: {
                        duration: 2000,
                        delay: context => context.dataIndex * 300,
                    },
                    hover: {
                        animationDuration: 1000,
                    },
                    responsiveAnimationDuration: 1000,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                },
            });
            return () => chartInstance.destroy();
        }
    }, [isVisible, chartRef, data, labels]);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', paddingTop: '0px', paddingLeft: '50px', paddingRight: '50px', marginBottom: '-450px'}}>
            <div style={{width: '750px', height: '800px'}}>
                <canvas ref={chartRef} />
            </div>
        </div>
    );
};

export default MyChart;
