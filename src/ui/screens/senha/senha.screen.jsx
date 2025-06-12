import "./senha.style.css"
import { ContainerScreen } from "../../components"
import { useForm, useToast } from "../../../hook"
import { useNavigate } from "react-router-dom"

export function SenhaScreen() {
    const {formData, setFormData, handleChange} = useForm({cor1: "", cor2: ""})
    const navigate = useNavigate()
    const { toastError } = useToast()

    function handleSubmit(e) {
        e.preventDefault()
        const cor1 = formData.cor1.toLowerCase()
        const cor2 = formData.cor2.toLowerCase()
        if((cor1 == "verde" && cor2 == "rosa") || (cor1 == "rosa" && cor2 == "verde")) {
            navigate("/te-amo")
        }
        else {
            toastError("Cores erradas, tente novamente.")
            setFormData({cor1: "", cor2: ""})
        }
    }

    return (
        <ContainerScreen>
            <div className="senha-screen">
                <h1><span>Digite duas cores.</span> Você sabe quais são.</h1>
                <form onSubmit={handleSubmit}>
                    <section>
                        <input
                        type="text"
                        name="cor1"
                        value={formData.cor1}
                        onChange={handleChange}
                        placeholder="Digite uma cor."
                        />
                        <input
                        type="text"
                        name="cor2"
                        value={formData.cor2}
                        onChange={handleChange}
                        placeholder="Digite uma cor."
                        />
                    </section>
                    <button>Confirmar</button>
                </form>
            </div>
        </ContainerScreen>
    )

}