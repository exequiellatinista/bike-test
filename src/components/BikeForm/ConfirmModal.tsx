import { Modal } from '@mui/material'
import { BikeFormI } from '../../types/BikeFormI'

interface Params {
  showModal: boolean
  handleClose: () => void
  modalInfo: BikeFormI
  saveDataToLocalStorage: () => void
}

export const ConfirmModal = ({
  showModal,
  handleClose,
  modalInfo,
  saveDataToLocalStorage,
}: Params) => {
  const handleSave = () => {
    saveDataToLocalStorage()
  }
  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-4 w-3/6 p-8 bg-white text-black">
        <h1 className="text-3xl">Presupuesto alquiler bicicleta</h1>
        <p>{modalInfo.name} ¿Confirma el alquiler?</p>
        <p className="text-lime-900 text-xl font-bold">
          Monto final ${modalInfo.price}
        </p>
        <div className="flex gap-4">
          <button className="text-white" onClick={() => handleSave()}>
            Confirmar
          </button>
          <button className="text-white" onClick={handleClose}>
            Cancelar
          </button>
        </div>
      </div>
    </Modal>
  )
}
