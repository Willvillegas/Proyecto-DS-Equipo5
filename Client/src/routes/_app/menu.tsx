import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/menu')({
  component: MenuPage,
})

function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>
      <p>Página temporal - reemplazar con componente real</p>
    </div>
  )
}
