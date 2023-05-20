import React from "react";
import daftar_anak from "../data/anak.json";

function Sekolah2({dataSekolah, setDataSekolah}){
    const data = daftar_anak.tipe
    
    const handleUpdate = (e) => {
        const newData = dataSekolah.map((anak) => {
            if (anak.id === parseInt(e.target.id)){
                return {...anak, jumlah: e.target.value}
            }
            return anak
        })

        setDataSekolah(newData)
        console.log(dataSekolah)
    }

    return (
        <div>
            <h2>Sekolah</h2>
            <h3>Rentang Umur Siswa/i 6-12 Tahun</h3>
            <p>Silakan isi sesuai dengan jumlah anak yang sekolah berdasarkan kategori masing-masing→ instansi langsung input jumlahnya dari setiap kategori</p>
            <hr />
            { data.map((anak) => (
                <div className="form-group">
                    <label htmlFor="name" id={anak.nomor}>Silahkan Masukkan Jumlah {anak.type}!</label>
                    <input type="number" className="form-control" id={anak.nomor} placeholder="0" onChange={handleUpdate} required/>
                </div>
            ))}
        </div>
    )
}

export default Sekolah2;