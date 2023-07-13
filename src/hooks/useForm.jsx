import { useState } from "react"

function useForm() {
    const [form, setForm] = useState({
        title: '',
        message: ''
      })

      const updateForm = (newInfo) => {
        setForm({
          ...form,
          ...newInfo
        })
      }

  return [form, updateForm]
}

export default useForm