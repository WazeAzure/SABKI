import React from "react";
import daftar_anak from "../data/anak.json";

function RS3({dataRS, setDataRS, bpjs, setBpjs, nonbpjs, setNonbpjs}){
    const data = daftar_anak.tipe
    
    const handleUpdate = (e) => {
        const newData = dataRS.map((pasien) => {
            if (pasien.id === parseInt(e.target.id)){
                return {...pasien, jumlah: e.target.value}
            }
            return pasien
        })

        setDataRS(newData)
        console.log(dataRS)
    }

    return (
        <div>
            <h2>Rumah Sakit</h2>
            <h3>Rentang Umur Pasien 13-17 Tahun</h3>
            <p>Silakan isi sesuai dengan jumlah pasien yang berada di klinik berdasarkan kategori masing-masing→ instansi langsung input jumlahnya dari setiap kategori</p>
            <hr />
            <div className="form-group">
                <label htmlFor="name" id={1}>Silahkan Masukkan Jumlah Pasien BPJS!</label>
                <input type="number" value={bpjs} className="form-control"  placeholder="0" onChange={(e) => {setBpjs(e.target.value)}} required/>
            </div>
            <div className="form-group">
                <label htmlFor="name" id={1}>Silahkan Masukkan Jumlah Pasien Non-BPJS!</label>
                <input type="number" value={nonbpjs} className="form-control"  placeholder="0" onChange={(e) => {setNonbpjs(e.target.value)}} required/>
            </div>
            { data.map((pasien, index) => (
                <div className="form-group">
                    <label htmlFor="name" id={pasien.nomor}>Silahkan Masukkan Jumlah {pasien.type}!</label>
                    <input value={dataRS[index].jumlah === 0? "": dataRS[index].jumlah} type="number" className="form-control" id={pasien.nomor} placeholder="0" onChange={handleUpdate} required/>
                </div>
            ))}

        </div>
    )
}

export default RS3;