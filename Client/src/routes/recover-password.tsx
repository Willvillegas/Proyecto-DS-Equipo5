import { createFileRoute } from '@tanstack/react-router'
import RecuperarPassword from '@/pages/SetPassword'
export const Route = createFileRoute('/recover-password')({
  component: RecuperarPassword,
})
