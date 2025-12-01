import RecuperarPassword from '@/pages/SetPassword'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/forgot-password')({
  component: RecuperarPassword,
})
