import React from "react";
import Layout from "../components/Layout";
import PetaIndo from "../components/Map";
import BarChart from "../components/VisualisasiData";

function HasilData(){
    return (
        <Layout id="background-9.svg">
            <PetaIndo />

            <h1>Data ABK Indonesia 2023</h1>
            <BarChart />
        </Layout>
    )
};

export default HasilData;