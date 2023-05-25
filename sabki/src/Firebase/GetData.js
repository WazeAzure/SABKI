import { store } from "./FirebaseConfig";
import { getDocs, getDoc, collection } from "firebase/firestore";
import data_prov from "../data/daftar-provinsi.json";
import data_anak from "../data/anak.json";

export const TransformDataBar = (individu, klinik, rs, sekolah) => {
    // console.log("ini transform data")
    // console.log(individu, klinik, rs, sekolah);

    let daftar_kategori = data_anak.tipe
    let daftar_prov = data_prov.provinsi
    // console.log(daftar_prov)

    daftar_kategori = daftar_kategori.map((data) => {
        return {...data, jumlah: 0}
    })

    // data individu
    individu.forEach((data) => {
        // console.log(data.data.dataIndividu);
        for(var i=0;i<12;i++){
            if (data.data.dataIndividu.kategori === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += 1;
                break
            }
        }

        for(var i=0;i<34;i++){
            if (data.data.provinsi === daftar_prov[i].name){
                // console.log(i)
                daftar_prov[i].jumlah += 1;
                break
            }
        }
    })

    // data sekolah
    sekolah.forEach((data) => {
        // console.log(data)
        
        for(var i=0;i<12;i++){
            if(data.data.dataSekolah1[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataSekolah1[i].jumlah);
            }
            if(data.data.dataSekolah2[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataSekolah2[i].jumlah);
            }
            if(data.data.dataSekolah3[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataSekolah3[i].jumlah);
            }
        }

        let sum = 0;
        for(var i=0;i<12;i++){
            sum += parseInt(data.data.dataSekolah1[i].jumlah);
            sum += parseInt(data.data.dataSekolah2[i].jumlah);
            sum += parseInt(data.data.dataSekolah3[i].jumlah);
        }

        for(var i=0;i<34;i++){
            if (data.data.provinsi === daftar_prov[i].name){
                // console.log(i)
                daftar_prov[i].jumlah += sum;
                break
            }
        }
    })

    // data Klinik
    klinik.forEach((data) => {
        // console.log(data)

        for(var i=0;i<12;i++){
            if(data.data.dataKlinik1[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataKlinik1[i].jumlah);
            }
            if(data.data.dataKlinik2[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataKlinik2[i].jumlah);
            }
            if(data.data.dataKlinik3[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataKlinik3[i].jumlah);
            }
        }

        let sum = 0;
        for(var i=0;i<12;i++){
            sum += parseInt(data.data.dataKlinik1[i].jumlah);
            sum += parseInt(data.data.dataKlinik2[i].jumlah);
            sum += parseInt(data.data.dataKlinik3[i].jumlah);
        }

        for(var i=0;i<34;i++){
            if (data.data.provinsi === daftar_prov[i].name){
                // console.log(i)
                daftar_prov[i].jumlah += sum;
                break
            }
        }
    })

    // data rs
    rs.forEach((data) => {
        // console.log(data)

        for(var i=0;i<12;i++){
            if(data.data.dataRS1[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataRS1[i].jumlah);
            }
            if(data.data.dataRS2[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataRS2[i].jumlah);
            }
            if(data.data.dataRS3[i].tipe === daftar_kategori[i].type){
                daftar_kategori[i].jumlah += parseInt(data.data.dataRS3[i].jumlah);
            }
        }

        let sum = 0;
        for(var i=0;i<12;i++){
            sum += parseInt(data.data.dataRS1[i].jumlah);
            sum += parseInt(data.data.dataRS2[i].jumlah);
            sum += parseInt(data.data.dataRS3[i].jumlah);
        }

        for(var i=0;i<34;i++){
            if (data.data.provinsi === daftar_prov[i].name){
                // console.log(i)
                daftar_prov[i].jumlah += sum;
                break
            }
        }
    })

    // console.log("final")
    // console.log(daftar_kategori)
    // console.log("--------------------------------------------")

    return [daftar_kategori, daftar_prov]
}