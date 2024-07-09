import { useState } from "react"



const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
   
  const handleModal = (value: boolean) => {
    setIsModalOpen(value)
  }

  return {isModalOpen, handleModal}
}

export default useModal