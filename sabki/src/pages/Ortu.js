import React from "react";
import { useState } from "react";
import data_anak from "../data/anak.json";

function Ortu({dataIndividu, setDataIndividu}){
    const data = data_anak.tipe

    return (
        <div>
            <h2>Individu / Orangtua</h2>
            <div className="form-group">
                <label htmlFor="name">Silahkan Masukkan Nama Anak Anda!</label>
                <input type="text" value={dataIndividu.name} className="form-control" id="name" placeholder="Edbert" onChange={(e) => {setDataIndividu(prevState => ({...prevState, "nama": e.target.value}))}} required/>
            </div>
            <div className="form-group">
                <label htmlFor="usia">Silahkan Masukkan Usia Anak Anda!</label>
                <input type="number" value={dataIndividu.usia} className="form-control" id="usia" placeholder="Edbert" onChange={(e) => setDataIndividu(prevState => ({...prevState, "usia": e.target.value}))} required/>
            </div>
            <div className="form-group">
                <label htmlFor="jenis_kelamin">Silahkan pilih jenis kelamin anak anda!</label>
                <select className="form-control" value={dataIndividu.jenis_kelamin} id="id-jenis_kelamin" onChange={(e) => setDataIndividu(prevState => ({...prevState, "jenis_kelamin": e.target.value}))}  required>
                <option value="" selected disabled hidden className="text-secondary"> </option>
                <option id="men">Laki-Laki</option>
                <option id="women">Perempuan</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="kategori">Silahkan pilih Kategori Disabilitas!</label>
                <select className="form-control" value={dataIndividu.kategori} id="id-kategori" onChange={(e) => setDataIndividu(prevState => ({...prevState, "kategori": e.target.value}))} required>
                <option value="" selected disabled hidden>Kategori</option>
                { data.map((anak) => (
                    <option id={anak.nomor}>{anak.type}</option>
                ))}
                </select>
            </div>
            <hr />
        </div>
    )
}

export default Ortu;