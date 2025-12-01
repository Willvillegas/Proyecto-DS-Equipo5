import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios';
import { useAuthStore } from '@/store/auth';
const apiRoute = (import.meta as any).env?.VITE_API_ROOT || 'http://localhost:3000';

const axiosConfig: AxiosRequestConfig = {
    baseURL: apiRoute,
    headers: {
        'Content-Type': 'application/json',
    },
};

const axiosInstance: AxiosInstance = axios.create(axiosConfig);

export interface ApiError {
    message: string;
    statusCode?: number;
    errors?: Record<string, string[]>; // Para errores de validación
}

axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 1. Agregar el token de autenticación si existe
        // Esto es muy útil porque no tienes que agregar el token manualmente en cada petición
        const token = useAuthStore.getState().currentUser?.token;
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }


        // 3. Log para desarrollo (solo en modo desarrollo)
        if ((import.meta as any).env?.DEV) {
            console.log(`🚀 [${config.method?.toUpperCase()}] ${config.url}`, {
                params: config.params,
                data: config.data,
            });
        }
        return config;
    },
    (error: AxiosError) => {
        console.error('❌ Error en request interceptor:', error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // 2. Log para desarrollo (solo en modo desarrollo)
        if ((import.meta as any).env?.DEV) {
            console.log(
                `✅ [${response.config.method?.toUpperCase()}] ${response.config.url}`,
                { data: response.data }
            );
        }
        return response;
    },
    (error: AxiosError) => {
        // Este bloque se ejecuta cuando hay un error (status 4xx, 5xx, o error de red)

        // Log del error en desarrollo
        if ((import.meta as any).env?.DEV) {
            console.error(`❌ [${error.config?.method?.toUpperCase()}] ${error.config?.url}`, {
                status: error.response?.status,
                message: error.message,
                data: error.response?.data,
            });
        }

        // Aquí transformamos el error en nuestra estructura estandarizada
        const apiError: ApiError = {
            message: 'Ocurrió un error inesperado',
            statusCode: error.response?.status,
        };

        // Manejamos diferentes tipos de errores
        if (error.response) {
            // El servidor respondió con un status fuera del rango 2xx
            const data = error.response.data as any;

            // Tu API podría retornar el mensaje de error en diferentes formatos
            // Aquí manejamos los casos más comunes
            apiError.message = data?.message || data?.error || 'Error en el servidor';

            // Si hay errores de validación, los incluimos
            if (data?.errors) {
                apiError.errors = data.errors;
            }

            // Manejo especial para errores de autenticación
            if (error.response.status === 401) {
                apiError.message = 'Sesión expirada. Por favor inicia sesión nuevamente.';

                // Limpiamos el estado de autenticación
                useAuthStore.getState().logout();

                // Redirigimos al login
                // Nota: En un entorno real, podrías usar el router aquí
                window.location.href = '/';
            }

            // Manejo para errores de permisos
            if (error.response.status === 403) {
                apiError.message = 'No tienes permisos para realizar esta acción.';
            }

            // Manejo para recursos no encontrados
            if (error.response.status === 404) {
                apiError.message = 'El recurso solicitado no existe.';
            }

            // Manejo para errores del servidor
            if (error.response.status >= 500) {
                apiError.message = 'Error en el servidor. Por favor intenta más tarde.';
            }

        } else if (error.request) {
            // La petición fue hecha pero no hubo respuesta
            // Esto generalmente significa problemas de red
            apiError.message = 'No se pudo conectar con el servidor. Verifica tu conexión a internet.';
            apiError.statusCode = 0;
        } else {
            // Algo pasó al configurar la petición
            apiError.message = error.message;
        }

        // Retornamos el error transformado
        // Nota: usamos Promise.reject para que el error siga propagándose
        return Promise.reject(apiError);
    }
);