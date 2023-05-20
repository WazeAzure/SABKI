import React from "react";
import Layout from "../components/Layout";

import "./Panduan.css";
import daftar_anak from "../data/anak.json";

function Panduan(){
    const data = daftar_anak.tipe;

    return (
        <Layout>
            <div style={{minHeight: "100vh"}} className="Panduan">
                <h1>Panduan</h1>
                <h3>Kategori Anak</h3>
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