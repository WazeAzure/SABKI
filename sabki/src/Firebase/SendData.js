import { collection, getDocs, addDoc } from "firebase/firestore";
import { app, store } from "./FirebaseConfig";

export function SendDataIndividu(data){
    const sendItem = collection(store, "individu");
    addDoc(sendItem, data)
    .then((res) => {
        console.log("succeed");
    })
    .catch((err) => {
        console.log(err.message);
    })
}

export function SendDataSekolah(data){
    const sendItem = collection(store, "sekolah");
    addDoc(sendItem, data)
    .then((res) => {
        console.log("succeed");
    })
    .catch((err) => {
        console.log(err.message);
    })
}

export function SendDataKlinik(data){
    const sendItem = collection(store, "klinik");
    addDoc(sendItem, data)
    .then((res) => {
        console.log("succeed");
    })
    .catch((err) => {
        console.log(err.message);
    })
}

export function SendDataRS(data){
    const sendItem = collection(store, "rumah_sakit");
    addDoc(sendItem, data)
    .then((res) => {
        console.log("succeed");
    })
    .catch((err) => {
        console.log(err.message);
    })
}