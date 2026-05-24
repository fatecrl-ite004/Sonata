import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-BR">
      <body>

        <div className="flex min-h-screen">

          <aside className="w-64 bg-zinc-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-8">
              ERP Escolar
            </h1>

            <nav className="space-y-4">
              <a href="/dashboard">Dashboard</a>
              <a href="/alunos" className="block">Alunos</a>
              <a href="/professores" className="block">Professores</a>
              <a href="/agenda" className="block">Agenda</a>
            </nav>
          </aside>

          <main className="flex-1 p-8">
            {children}
          </main>

        </div>

      </body>
    </html>
  )
}
