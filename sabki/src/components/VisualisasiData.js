import React, { useState } from 'react';
import { useEffect } from 'react';
import { store } from '../Firebase/FirebaseConfig';
import { getDocs, collection } from 'firebase/firestore';
import { TransformDataBar } from '../Firebase/GetData';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";

import "./VisualisasiData.css";

function BarChart() {
    const [dataInd, setDataInd] = useState();
    const [dataKlinik, setDataKlinik] = useState();
    const [dataSekolah, setDataSekolah] = useState();
    const [dataRS, setDataRS] = useState();

    const [total, setTotal] = useState();
    const [totalByProv, setTotalByProv] = useState();
    const [barChart, setBarChart] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# jumlah anak',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(255, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(255, 192, 203, 0.2)',
            'rgba(0, 128, 128, 0.2)',
            'rgba(75, 0, 130, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(255, 192, 203, 1)',
            'rgba(0, 128, 128, 1)',
            'rgba(75, 0, 130, 1)',
        ],
        borderWidth: 1,
      },
    ],
    });
    const [barChart2, setBarChart2] = useState({
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# jumlah anak',
        data: [0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(0, 255, 255, 0.2)',
            'rgba(255, 0, 255, 0.2)',
            'rgba(0, 255, 0, 0.2)',
            'rgba(255, 192, 203, 0.2)',
            'rgba(0, 128, 128, 0.2)',
            'rgba(75, 0, 130, 0.2)',
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(0, 255, 255, 1)',
            'rgba(255, 0, 255, 1)',
            'rgba(0, 255, 0, 1)',
            'rgba(255, 192, 203, 1)',
            'rgba(0, 128, 128, 1)',
            'rgba(75, 0, 130, 1)',
        ],
        borderWidth: 1,
      },
    ],
    });

    const GetAllDataBar = async () => {
        const data_ind = collection(store, "individu");
        const data_ind_snapshot = await getDocs(data_ind);
        const raw_individu = []
        data_ind_snapshot.forEach((doc) => {
            // console.log(doc.data());
            raw_individu.push({id: doc.id, data: doc.data()})
        });
        
        const data_klinik = collection(store, "klinik");
        const data_klinik_snapshot = await getDocs(data_klinik);
        const raw_klinik = []
        data_klinik_snapshot.forEach((doc) => {
            // console.log(doc.data());
            raw_klinik.push({id: doc.id, data: doc.data()})
        });
    
        const data_sekolah = collection(store, "sekolah");
        const data_sekolah_snapshot = await getDocs(data_sekolah);
        const raw_sekolah = []
        data_sekolah_snapshot.forEach((doc) => {
            // console.log(doc.data());
            raw_sekolah.push({id: doc.id, data: doc.data()})
        });
    
        const data_rs = collection(store, "rumah_sakit");
        const data_rs_snapshot = await getDocs(data_rs);
        const raw_rs = []
        data_rs_snapshot.forEach((doc) => {
            // console.log(doc.data());
            raw_rs.push({id: doc.id, data: doc.data()})
        });

        // console.log(raw_individu)

        const data_clean = TransformDataBar(raw_individu, raw_klinik, raw_rs, raw_sekolah);
        console.log(data_clean[1])
        setTotal(data_clean[0]);
        setTotalByProv(data_clean[1]);

        setBarChart({
            ...barChart,
            labels: data_clean[0].map((data) => {return data.type}),
            datasets: [{
                label: "# jumlah anak",
                data: data_clean[0].map((data) => {return data.jumlah})
            }]
        })
        data_clean[1].sort((a, b) => b.jumlah - a.jumlah);

        setBarChart2({
            ...barChart2,
            labels: data_clean[1].map((data) => {return data.name}),
            datasets: [{
                label: "# jumlah anak",
                barThickness: 6,
                maxBarThickness: 10,
                data: data_clean[1].map((data) => {return data.jumlah})
            }]
        })

    }

    useEffect(() => {
        GetAllDataBar();
    }, [])

    ChartJS.register(ArcElement, Tooltip, Legend);
    ChartJS.register(CategoryScale, LinearScale, BarElement);

    const options = {
    plugins: {
        legend: {
            display: true,
        }
    },
    mainAspectRatio: true
    };

    const options2 = {
    indexAxis: 'y',
    scales: {
        x: {
        beginAtZero: true,
        },
        y: {
        beginAtZero: true,
        },
    },
    plugins: {
        legend: {
            display: true,
        }
    },
    };

    // console.log(barChart);
    return (
        <div className="row" style={{borderRadius: "1rem", backgroundColor: "rgba(255, 248, 220, 0.5)", padding: "1rem", margin: "2rem"}}>
            
            <div className="col-sm">
                <h2>Jumlah ABK Berdasarkan Kategori</h2>
                <Doughnut data={barChart} options={options}/>
            </div>
            <div className="col-sm">
                <h2>Jumlah ABK Berdasarkan Provinsi</h2>
                <Bar data={barChart2} options={options2}/>
            </div>

        </div>
    )
}

export default BarChart;