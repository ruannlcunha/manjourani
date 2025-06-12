import { AudioContainer, ContainerScreen } from "../../components"
import "./principal.style.css"
import correntes from "../../../assets/img/CORRENTES.png"
import medalhao1 from "../../../assets/img/MEDALHAO_1.png"
import medalhao2 from "../../../assets/img/MEDALHAO_2.png"
import { useEffect, useState } from "react"
import { useMusic } from "../../../hook"
import musica from "../../../assets/audio/TEMA.mp3"

export function PrincipalScreen() {
    const [medalhao, setMedalhao] = useState(medalhao1)
    const [estiloAnimacao, setEstiloAnimacao] = useState({})
    const { startMusic } = useMusic()

    useEffect(()=>{
        startMusic(true)
    },[])

    function handleMedalhao() {
        setEstiloAnimacao({animation: "flipar 1s ease-in-out"})
        if(medalhao===medalhao1) setTimeout(()=> {setMedalhao(medalhao2)}, 500)
        if(medalhao===medalhao2) setTimeout(()=> {setMedalhao(medalhao1)}, 500)
        setTimeout(()=> {setEstiloAnimacao({})}, 1000)
    }

    return (
        <ContainerScreen>
            <AudioContainer audio={musica} />
            <div className="principal-screen">
                <section className="esquerda">
                    <p>
                        "Quando estiver perdido na <span>escuridão</span>, procure pela luz"
                        <br />
                        Mas nunca imaginei que quando eu estivesse no completo breu, eu encontrasse a luz mesmo sem procurar por ela.
                        <br />
                        Obrigado por ser minha luz e ter me tirado da <span>escuridão</span>.
                        <br />
                        <br />
                        De: Ru
                    </p>
                </section>
                <section>
                    <div className="amuleto">
                        <img src={correntes} alt="Correntinha de um medalhão." />
                        <img
                        src={medalhao}
                        onClick={handleMedalhao}
                        alt="Medalhão."
                        style={estiloAnimacao}
                        className="medalhao"
                        />
                    </div>
                    <h1>Clique no medalhão.</h1>
                </section>
            </div>
        </ContainerScreen>
    )

}