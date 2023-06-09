import React from "react";
import daftar_anak from "../data/anak.json"

function Klinik3({dataKlinik, setDataKlinik}){
    const data = daftar_anak.tipe
    
    const handleUpdate = (e) => {
        const newData = dataKlinik.map((pasien) => {
            if (pasien.id === parseInt(e.target.id)){
                return {...pasien, jumlah: e.target.value}
            }
            return pasien
        })

        setDataKlinik(newData)
        console.log(dataKlinik)
    }

    return (
        <div>
            <h2>Klinik</h2>
            <h3>Rentang Umur Pasien 13-17 Tahun</h3>
            <p>Silakan isi sesuai dengan jumlah pasien yang berada di klinik berdasarkan kategori masing-masing→ instansi langsung input jumlahnya dari setiap kategori</p>
            <hr />
            { data.map((pasien, index) => (
                <div className="form-group">
                    <label htmlFor="name" id={pasien.nomor}>Silahkan Masukkan Jumlah {pasien.type}!</label>
                    <input min="0" value={dataKlinik[index].jumlah === 0? "": dataKlinik[index].jumlah} type="number" className="form-control" id={pasien.nomor} placeholder="0" onChange={handleUpdate} required/>
                </div>
            ))}
        </div>
    )
}

export default Klinik3;