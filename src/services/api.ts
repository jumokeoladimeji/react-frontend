import axios from 'axios';
import { Company } from '../types/company.interface';

export default {
    async get(path: string) {
		console.log(process.env)
		const response = await axios.get(`http://localhost:5000/${path}`);
		return response;

    },
    async post({ path, data }: { path: string; data: Company; }) {
        const response = await axios.post(`http://localhost:5000/${path}`, data)
        return response;
    },
}