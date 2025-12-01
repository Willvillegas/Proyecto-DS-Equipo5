import NavBar from '@/components/NavBar';
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { useAuthStore } from '@/store/auth';
export const Route = createFileRoute('/_app')({
    beforeLoad: async ({ location }) => {
        const isLoggedIn = useAuthStore.getState().getLoginStatus();
        if (!isLoggedIn) {
            throw redirect({
                to: '/login',  // Ruta de login
                search: {
                    // Parámetro para saber a dónde redirigir después del login
                    redirect: location.href,
                },
            });
        }
    },
    component: Route_Component,
})

function Route_Component() {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
}
