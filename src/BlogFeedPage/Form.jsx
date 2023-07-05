import { useRef } from "react";

function Form({ form, updateForm, updatePostList }) {
    const titleInput = useRef('');

    // update PostList
    const handleSubmit = (e) => {
        e.preventDefault();
        updatePostList({
            title: form.title,
            message: form.message
        })
        updateForm({
            title: '',
            message: ''
        })
        titleInput.current.focus()
    }

    // Update Form
    const handleTitleChange = (e) => {
        const { value } = e.target;
        updateForm({'title': value})
    }
    const handleMessageChange = (e) => {
        const { value } = e.target;
        updateForm({'message': value})
    }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
        <h1>Crear nueva publicacion</h1>
        <p>Para agregar una nueva publicacion complete este formulario</p>
        <input ref={titleInput} onChange={(e) => handleTitleChange (e)} type="text" name="title" className="border-2" value={form.title} />
        <textarea onChange={e => handleMessageChange (e)} name="message" id="" cols="30" rows="10" className="border-2" value={form.message}></textarea>
        <button type='submit' className="px-3 py-2 bg-black text-white">PUBLICAR</button>
    </form>
  )
}

export default Form;