import { createFileRoute } from '@tanstack/react-router'
import RecuperarPassword from '@/Pages/RecuperarPassword'
export const Route = createFileRoute('/recover-password')({
  component: RecuperarPassword,
})
