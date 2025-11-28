import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    id: string;
    name: string,
    email: string,
    userType: number
};

interface AuthState {
    user: User | null;
    loggedIn: boolean;
}

interface CurrentUser {
    user: User;
    loggedIn: boolean;
}

interface AuthStore {
    // El estado
    currentUser: CurrentUser | null;

    // Las acciones - fíjate que ahora son métodos directos del store
    login: (userData: CurrentUser) => void;
    logout: () => void;
    getUserID: () => string | number | undefined;
    getUserType: () => number;
    getLoginStatus: () => boolean;
    getUser: () => User | object;
    getUserEmail: () => string;
}

// Creamos el store con el middleware de persistencia
export const useAuthStore = create<AuthStore>()(
    persist(
        (set, get) => ({
            // Estado inicial
            currentUser: null,

            // Acción de login - equivalente a tu dispatch con type 'LOGIN'
            login: (userData) => set({ currentUser: userData }),

            // Acción de logout - equivalente a tu dispatch con type 'LOGOUT'
            logout: () => set({ currentUser: null }),

            // Todos tus métodos helper, ahora usando get() para acceder al estado
            getUserID: () => {
                const state = get();
                return state.currentUser?.user?.id;
            },

            getUserType: () => {
                const state = get();
                return state.currentUser?.user?.userType ?? 0;
            },

            getLoginStatus: () => {
                const state = get();
                return state.currentUser?.loggedIn ?? false;
            },

            getUser: () => {
                const state = get();
                return state.currentUser?.user ?? {};
            },

            getUserEmail: () => {
                const state = get();
                return state.currentUser?.user?.email ?? "";
            },
        }),
        {
            name: 'login', // Este es el nombre de la clave en localStorage
        }
    )
);