import React from "react";
import daftar_anak from "../data/anak.json";

function Sekolah({dataSekolah, setDataSekolah}){
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
            <h3>Rentang Usia Siswa/i 0-5 Tahun</h3>
            <p>Silakan isi sesuai dengan jumlah anak yang sekolah berdasarkan kategori masing-masing→ instansi langsung input jumlahnya dari setiap kategori</p>
            <hr />
            { data.map((anak, index) => (
                <div className="form-group">
                    <label htmlFor="name" id={anak.nomor}>Silahkan Masukkan Jumlah {anak.type}!</label>
                    <input min="0" value={dataSekolah[index].jumlah === 0? "": dataSekolah[index].jumlah} type="number" className="form-control" id={anak.nomor} placeholder="0" onChange={handleUpdate} required/>
                </div>
            ))}
        </div>
    )
}

export default Sekolah;