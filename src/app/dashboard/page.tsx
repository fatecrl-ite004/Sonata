export default function DashboardPage() {

  return (
    <div>

      <h1 className="text-4xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-4">

        <div className="border rounded-xl p-6">
          Total de alunos
        </div>

        <div className="border rounded-xl p-6">
          Aulas hoje
        </div>

        <div className="border rounded-xl p-6">
          Professores ativos
        </div>

      </div>

    </div>
  )
}
