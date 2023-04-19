import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Alert, Snackbar } from '@mui/material'

import { Form } from '../components/BikeForm/Form'
import { ConfirmModal } from '../components/BikeForm/ConfirmModal'
import { BikeCard } from '../components/Bike/BikeCard'

import { getPrice } from '../utils/helpers/getPrice'
import { getBikeById } from '../services/getBikeById'

import { BikeFormI } from '../types/BikeFormI'
import { BikeI } from '../types/BikeI'

export const BikeForm = () => {
  const { id } = useParams()
  const [bike, setBike] = useState<BikeI>()
  const [isLoading, setIsLoading] = useState(true)
  const [modalInfo, setModalInfo] = useState<BikeFormI>()
  const [showModal, setShowModal] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const handleForm = ({
    duration,
    startDate,
    name,
    email,
    phone,
  }: BikeFormI) => {
    if (!bike) return
    setShowModal(true)
    const price = getPrice({ type: bike.type, duration, startDate })
    setModalInfo({
      duration,
      startDate,
      name,
      email,
      phone,
      price,
    })
  }

  const saveDataToLocalStorage = () => {
    localStorage.setItem('Reserva', JSON.stringify(modalInfo))
    setShowModal(false)
    setToastMessage('¡Guardado correctamente!')
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const handleCloseToast = () => {
    setToastMessage('')
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return
      const data = await getBikeById({ id })
      if (data) setBike(data)
      setIsLoading(false)
    }
    fetchData()
  }, [id])

  if (isLoading) return <p>Cargando...</p>

  if (!bike) return <p>Sin información</p>

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <BikeCard bike={bike}></BikeCard>
      </div>
      <Form handleForm={handleForm}></Form>
      {modalInfo && (
        <ConfirmModal
          showModal={showModal}
          handleClose={handleClose}
          modalInfo={modalInfo}
          saveDataToLocalStorage={saveDataToLocalStorage}
        ></ConfirmModal>
      )}
      <Snackbar
        open={!!toastMessage}
        autoHideDuration={3000}
        onClose={handleCloseToast}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </section>
  )
}
