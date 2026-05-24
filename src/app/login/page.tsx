"use client"

import { useState } from "react"

export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault()

    await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        senha
      })
    })
  }

  return (
    <div className="max-w-md mx-auto mt-20">

      <h1 className="text-3xl font-bold mb-8">
        Login
      </h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4"
      >

        <input
          className="border p-2 w-full"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          className="border p-2 w-full"
          placeholder="Senha"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />

        <button className="bg-black text-white px-4 py-2 rounded">
          Entrar
        </button>

      </form>
    </div>
  )
}
