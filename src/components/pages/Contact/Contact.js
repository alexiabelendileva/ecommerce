import './Contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <div className='contact-container'>

            <div className='contact-flex'>

                <div className='contact-1'>
                    <h2>El Galpón Accesorios Kninos</h2>
                    <p>Accesorios artesanales con calidad 100% premium</p>
                    <p>Estamos ubicados en <h3><FaMapMarkerAlt className='map' />Merlo, Parque San Martín.</h3></p>
                    <h2>Contacto o Preguntas</h2>
                    <p>¿Tenés alguna consulta? Podés ingresar a <Link to='/About' className='faq'>Preguntas Frecuentes</Link> para más información</p>
                    <p>¿Más preguntas? Envianos un mail:</p>
                    <Link className='email' onClick={(e) => { window.location.href = 'mailto:danielmendonza_ac@gmail.com'; }}>danielmendonza_ac@gmail.com </Link>
                    <p>O completa el formulario a continuación para que nos contactemos a la brevedad.</p>
                    <p>¿Quieres conectarte con nosotros? Encuéntranos en Facebook y síguenos en Instagram. Haga clic aquí para ver nuestras páginas: Facebook + <Link className='instagram' to='https://www.instagram.com/elgalpon_accesorioskninos/'>Instagram</Link></p>

                </div>
                <div className="form">
                    <h1 className='contacto'>Contacto</h1>
                    <form>
                        <div className="form-item">
                            <input type="text" id="nombre" autocomplete="off" required='required'></input>
                            <label for="nombre">Nombre</label>
                        </div>

                        <div className="form-item">
                            <input type="text" id="email" autocomplete="off" required='required'></input>
                            <label for="email">Email</label>
                        </div>
                        <div className='form-item'>
                            <textarea type="text" id="email" autocomplete="off" required='required'>

                            </textarea>
                            <label for="email">Mensaje</label>
                        </div>

                    </form>

                </div>

            </div>
        </div>

    )
}

export default Contact; 