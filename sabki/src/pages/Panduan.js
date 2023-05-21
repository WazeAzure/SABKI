import React from "react";
import Layout from "../components/Layout";

import "./Panduan.css";
import daftar_anak from "../data/anak.json";

function Panduan(){
    const data = daftar_anak.tipe;

    return (
        <Layout background="background-9.svg">
            <div style={{minHeight: "100vh"}} className="Panduan">
                <h1>Panduan</h1>
                <h3>Terima kasih atas kesediaan Anda untuk mengisi survei Anak Berkebutuhan Khusus Indonesia.</h3>
                <p style={{textAlign: "left"}}>Survei ini dilaksanakan dalam rangka mendukung peningkatan pelayanan kesehatan dan penyusunan kebijakan seperti mengidentifikasi kebutuhan, menilai keberhasilan pengobatan dan intervensi, menyusun prioritas, dan mengalokasikan sumber daya anak berkebutuhan khusus Indonesia.</p>
                <ul style={{textAlign: "left"}}>
                    {data.map((anak) => (
                        <li>
                            <p className="daftar_anak" id={anak.nomor}>{anak.type}</p>
                            <p>{anak.deskripsi}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
};

export default Panduan;