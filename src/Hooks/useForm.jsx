import { useState } from "react"

function useForm() {
    const [form, setForm] = useState({
        title: '',
        message: ''
      })

      const updateForm = (key, value) => {
        setForm({
          ...form,
          [key]: value
        })
      }

  return [form, updateForm]
}

export default useForm