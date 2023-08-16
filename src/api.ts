// API를 fetch하기 위해 적었던 모든 함수
import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"

})

export const getRooms = () => instance.get("rooms/").then(response => response.data);

export const getRoom = () => instance.get(`rooms/1`).then(response => response.data);

