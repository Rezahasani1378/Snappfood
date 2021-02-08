import axios from 'axios';

export const baseURL = 'https://snappfood.ir/mobile/v3/';
export let defaultApi = axios.create({ baseURL });
