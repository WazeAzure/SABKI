import React from "react";
import Layout from "../components/Layout";
import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import prov from "../data/daftar-provinsi.json";
import data_anak from "../data/anak.json";
import Sekolah from "./Sekolah";
import Klinik from "./Klinik";
import Ortu from "./Ortu";
import RS from "./RS";
// import EndForm from "./EndForm";

import "./Survey.css";

import { SendDataIndividu, SendDataSekolah, SendDataKlinik, SendDataRS } from "../Firebase/SendData";

import RS2 from "./RS2";
import RS3 from "./RS3";
import Klinik2 from "./Klinik2";
import Klinik3 from "./Klinik3";
import Sekolah2 from "./Sekolah2";
import Sekolah3 from "./Sekolah3";

// popup
import { ToastContainer, toast } from "react-toastify";


function Survey(){
    const navigate = useNavigate();

    const [page, setPage] = useState(1);
    const [email, setEmail] = useState("");
    const [kategori, setKategori] = useState("");
    const [provinsi, setProvinsi] = useState("");
    const [provinsiID, setProvinsiID] = useState(0);
    const [kota, setKota] = useState("");
    const [datakota, setDatakota] = useState([{"no":1, "name":""}]);
    const [dataIndividu, setDataIndividu] = useState({
        "usia": "",
        "jenis_kelamin": "",
        "kategori": ""
    })

    const [namaSekolah, setNamaSekolah] = useState("");
    const [namaKlinik, setNamaKlinik] = useState("");
    const [namaRS, setNamaRS] = useState("");
    
    const [tingkatSekolah, setTingkatSekolah] = useState("");
    // Sekolah 1
    const [dataSekolah, setDataSekolah] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Sekolah 2
    const [dataSekolah2, setDataSekolah2] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Sekolah 3
    const [dataSekolah3, setDataSekolah3] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Rumah Sakit 1
    const [bpjs, setBpjs] = useState();
    const [nonbpjs, setNonbpjs] = useState();
    const [dataRS, setDataRS] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Rumah Sakit 2
    const [bpjs2, setBpjs2] = useState();
    const [nonbpjs2, setNonbpjs2] = useState();
    const [dataRS2, setDataRS2] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Rumah Sakit 3
    const [bpjs3, setBpjs3] = useState();
    const [nonbpjs3, setNonbpjs3] = useState();
    const [dataRS3, setDataRS3] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Klinik 1
    const [dataKlinik, setDataKlinik] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Klinik 2
    const [dataKlinik2, setDataKlinik2] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )

    // Klinik 3
    const [dataKlinik3, setDataKlinik3] = useState(
        data_anak.tipe.map((anak) => {
            return {id: anak.nomor, tipe: anak.type, jumlah: 0}
        })
    )


    const data_provinsi = prov.provinsi

    useEffect(() => {
        console.log(provinsiID)
        if (provinsiID !== 0){
            let url = "https://api.binderbyte.com/wilayah/kabupaten?api_key=10140d3d1fbb41af4ae8827769a004177f501fbb50a43f10182e59649ace130f&id_provinsi=" + provinsiID
            console.log(url)
            axios.get(url)
            .then((res) => {
                const data_kota = res.data.value
                setDatakota(data_kota)
                console.log(data_kota)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }, [provinsi])

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [page])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (kategori === "Individu / Orangtua"){
            const data = {
                email: email,
                kategori: kategori,
                provinsi: provinsi,
                provinsiID: provinsiID,
                kota: kota,
                dataIndividu: dataIndividu
            }

            SendDataIndividu(data);
        } else if (kategori === "Sekolah"){
            const data = {
                email: email,
                kategori: kategori,
                provinsi: provinsi,
                provinsiID: provinsiID,
                kota: kota,
                nama_sekolah: namaSekolah,
                jenjang_sekolah: tingkatSekolah,
                dataSekolah1: dataSekolah,
                dataSekolah2: dataSekolah2,
                dataSekolah3: dataSekolah3,
                description: "dataSekolah1 2 3 mengikuti rentang umur 0-5, 6-12, 13-17 tahun"
            }

            SendDataSekolah(data);
        } else if (kategori === "Klinik"){
            const data = {
                email: email,
                kategori: kategori,
                provinsi: provinsi,
                provinsiID: provinsiID,
                kota: kota,
                nama_klinik: namaKlinik,
                dataKlinik1: dataKlinik,
                dataKlinik2: dataKlinik2,
                dataKlinik3: dataKlinik3,
                description: "dataKlinik1 2 3 mengikuti rentang umur 0-5, 6-12, 13-17 tahun"
            }

            SendDataKlinik(data)
        } else if (kategori === "Rumah Sakit"){
            const data = {
                email: email,
                kategori: kategori,
                provinsi: provinsi,
                provinsiID: provinsiID,
                nama_rs: namaRS,
                kota: kota,
                bpjs1: bpjs,
                bpjs2: bpjs2,
                bpjs3: bpjs3,
                nonbpjs1: nonbpjs,
                nonbpjs2: nonbpjs2,
                nonbpjs3: nonbpjs3,
                dataRS1: dataRS,
                dataRS2: dataRS2,
                dataRS3: dataRS3,
                description: "dataRS1 2 3 mengikuti rentang umur 0-5, 6-12, 13-17 tahun"
            }

            SendDataRS(data);
        }

        toast.success('Form submitted successfully!', {
            position: toast.POSITION.TOP_RIGHT
        });

        navigate("/");
    }

    const handleSelected = (e, type) => {
        const selectedOption = e.target.options[e.target.selectedIndex];
        const selectedOptionId = selectedOption.id;
        console.log(selectedOption.value)
        console.log(selectedOptionId)
        if (type === "provinsi"){
            setProvinsi(selectedOption.value)
            setProvinsiID(selectedOptionId)
        } else if (type === "kota"){
            setKota(selectedOption.value)
        }
    }

    const handleNextBtn = () => {
        if (kategori !== ""){
            if (kategori === "Individu / Orangtua" && page === 2){
                setPage(5);
            } else {
                setPage(page+1);
            }
        } else {
            setPage(page);
        }
    }

    const handleBackBtn = () => {
        if(page === 5 && kategori === "Individu / Orangtua"){
            setPage(2);
        } else {
            setPage(page - 1);
        }
    }

    return (
        <Layout background="background-9.svg">
            <div style={{minHeight: "81vh"}}>
            <h1 style={{marginTop: "2rem", color: "rgba(255, 114, 114, 1)", fontWeight: "bold", letterSpacing: "3px"}}>Survey ABK Indonesia</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                { page === 1 && (
                <>
                    <h2>Data Diri</h2>
                    <div className="form-group">
                        <label htmlFor="email">Silahkan Masukkan Email anda!</label>
                        <input type="email" value={email} className="form-control" id="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="kategori">Silahkan pilih kategori!</label>
                        <select value={kategori} className="form-control" id="id-kategori" onChange={(e) => setKategori(e.target.value)}  required>
                        <option value="" selected disabled hidden className="text-secondary">Kategori</option>
                        <option id="sekolah">Sekolah</option>
                        <option id="rumah sakit">Rumah Sakit</option>
                        <option id="klinik">Klinik</option>
                        <option id="individu">Individu / Orangtua</option>
                        </select>
                    </div>
                    { page === 1 && kategori === "Sekolah" && (
                        <>
                        <div className="form-group">
                            <label htmlFor="name">Silahkan Masukkan Nama Sekolah!</label>
                            <input type="text" value={namaSekolah} className="form-control" id="nama sekolah" placeholder="SMP Negeri 1 Balikpapan" onChange={(e) => setNamaSekolah(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="kategori">Silahkan pilih Tingkatan Sekolah!</label>
                            <select value={tingkatSekolah} className="form-control" id="id-kategori" onChange={(e) => setTingkatSekolah(e.target.value)}  required>
                            <option value="" selected disabled hidden className="text-secondary">TK/SD/SMP/SMA</option>
                            <option id="sekolah">TK</option>
                            <option id="sekolah">SD</option>
                            <option id="rumah sakit">SMP/MTS</option>
                            <option id="klinik">SMA/MA</option>
                            <option id="individu">Sekolah Luar Biasa</option>
                            <option id="individu">Sekolah Inklusi</option>
                            <option id="individu">Lainnya</option>
                            </select>
                        </div>
                        </>
                    )}
                    { page === 1 && kategori === "Klinik" && (
                        <>
                        <div className="form-group">
                            <label htmlFor="name">Silahkan Masukkan Nama Klinik!</label>
                            <input type="text" value={namaKlinik} className="form-control" id="nama klinik" placeholder="Klinik Kolibri" onChange={(e) => setNamaKlinik(e.target.value)} required/>
                        </div>
                        </>
                    )}
                    { page === 1 && kategori === "Rumah Sakit" && (
                        <>
                        <div className="form-group">
                            <label htmlFor="name">Silahkan Masukkan Nama Rumah Sakit!</label>
                            <input type="text" value={namaRS} className="form-control" id="nama rs" placeholder="RS Adi Daya" onChange={(e) => setNamaRS(e.target.value)} required/>
                        </div>
                        </>
                    )}
                    <div className="form-group">
                        <label htmlFor="kategori">Silahkan pilih provinsi!</label>
                        <select value={provinsi} className="form-control" id="id-kategori" onChange={(e) => {handleSelected(e, "provinsi")}} required>
                        <option value="" selected disabled hidden>Nama Provinsi</option>
                        { data_provinsi.map((prov) => (
                            <option id={prov.id}>{prov.name}</option>
                        ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="kategori">Silahkan pilih kota!</label>
                        <select value={kota} className="form-control" id="id-kategori" onChange={(e) => {handleSelected(e, "kota")}} required>
                        <option value="" selected disabled hidden>Nama Kota</option>
                        { datakota.map((kota) => (
                            <option id={kota.id}>{kota.name}</option>
                        ))}
                        </select>
                    </div>
                </>
                )}

                

                { page === 2 && kategori === "Sekolah" && <Sekolah dataSekolah={dataSekolah} setDataSekolah={setDataSekolah} /> }
                { page === 2 && kategori === "Rumah Sakit" && <RS dataRS={dataRS} setDataRS={setDataRS} bpjs={bpjs} setBpjs={setBpjs} nonbpjs={nonbpjs} setNonbpjs={setNonbpjs} /> }
                { page === 2 && kategori === "Klinik" && <Klinik dataKlinik={dataKlinik} setDataKlinik={setDataKlinik} /> }
                { page === 2 && kategori === "Individu / Orangtua" && <Ortu dataIndividu={dataIndividu} setDataIndividu={setDataIndividu} /> }
                
                { page === 3 && kategori === "Sekolah" && <Sekolah2 dataSekolah={dataSekolah2} setDataSekolah={setDataSekolah2} /> }
                { page === 3 && kategori === "Rumah Sakit" && <RS2 dataRS={dataRS2} setDataRS={setDataRS2} bpjs={bpjs2} setBpjs={setBpjs2} nonbpjs={nonbpjs2} setNonbpjs={setNonbpjs2} /> }
                { page === 3 && kategori === "Klinik" && <Klinik2 dataKlinik={dataKlinik2} setDataKlinik={setDataKlinik2} /> }
                
                { page === 4 && kategori === "Sekolah" && <Sekolah3 dataSekolah={dataSekolah3} setDataSekolah={setDataSekolah3} /> }
                { page === 4 && kategori === "Rumah Sakit" && <RS3 dataRS={dataRS3} setDataRS={setDataRS3} bpjs={bpjs3} setBpjs={setBpjs3} nonbpjs={nonbpjs3} setNonbpjs={setNonbpjs3} /> }
                { page === 4 && kategori === "Klinik" && <Klinik3 dataKlinik={dataKlinik3} setDataKlinik={setDataKlinik3} /> }

                { page === 5 && (
                    <>
                        <h3>Pastikan Data Sudah Benar!</h3>
                        <h4>SEGALA DATA HASIL SURVEI AKAN DIJAMIN KERAHASIAANNYA.</h4>
                        <button type="submit" className="btn-submit" style={{marginTop: "2rem"}}>Submit</button>
                    </>
                ) }
            </form>
            </div>
            <ToastContainer />
            { page > 1 && (<button className="btn btn-primary" onClick={handleBackBtn} style={{marginBottom: "2rem"}}>Back</button>)}
            { page < 5 && (<button className="btn btn-primary" onClick={handleNextBtn} style={{marginBottom: "2rem"}}>Next</button>)}
        </Layout>
    )
};

export default Survey;