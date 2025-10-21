import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useEstudiantes() {
    return useQuery({
        queryKey: ['estudiantes'],
        queryFn: async () => {
            const response = await axios.get('/api/estudiantes');
            return response.data;
        }
    });
}