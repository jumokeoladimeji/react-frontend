import api from './api'
import { Company } from '../types/company.interface'

export default {
    list: async () => {
        return await api.get('companies')
    },
    read: async (companyId: String) => {
        return await api.get(`companies/${companyId}`)
    },
    post: async (data: Company) => {
        return await api.post({ path: 'companies', data })
    }
} 
