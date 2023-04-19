import { ChangeEvent, FormEvent, useState } from 'react'
import { HandleFormType } from '../../types/HandleFormT'

interface Params {
  handleForm: HandleFormType
}

export const Form = ({ handleForm }: Params) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [startDate, setStartDate] = useState('')
  const [duration, setDuration] = useState<number>(0)
  const [error, setError] = useState<string>('')

  const handleDuration = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      return
    }
    setDuration(parseInt(event.target.value))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!duration) {
      setError('Debe definir una duración de alquiler')
      return
    }
    handleForm({ duration, startDate, name, email, phone })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="font-medium mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          value={name}
          required
          onChange={(event) => setName(event.target.value)}
          className="border border-gray-400 px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
          className="border border-gray-400 px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="font-medium mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          required
          onChange={(event) => setPhone(event.target.value)}
          className="border border-gray-400 px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="startDate" className="font-medium mb-1">
          Fecha de inicio de alquiler
        </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          required
          onChange={(event) => setStartDate(event.target.value)}
          className="border border-gray-400 px-4 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="duration" className="font-medium mb-1">
          Duración en días del alquiler
        </label>
        <input
          type="number"
          id="duration"
          value={duration}
          min="1"
          required
          onChange={(event) => handleDuration(event)}
          className="border border-gray-400 px-4 py-2 w-full"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Reservar
        </button>
      </div>
      {error && <div className="text-red-500 text-xs my-4">{error}</div>}
    </form>
  )
}
