/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'

export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Contacto</h2>
                    <h3><span>¡Contactanos!</span></h3>
                    <p>Contacta con nosotros y te asesoraremos en cualquier duda sobre nuestros servicios, que estamos seguros
                        son para ti.
                    </p>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                        <i className="bx bx-map"></i>
                        <h3>Dirección</h3>
                        {/* <p>A108 Adam Street, New York, NY 535022</p> */}
                        <p>Libra 356 Piso 1, Juan Manuel Vallarta, Zapopan Jalisco, 45120</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                        <i className="bx bx-envelope"></i>
                        <h3>Email</h3>
                        <p>contacto@delfeno.com.mx</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="info-box  mb-4">
                        <i className="bx bx-phone-call"></i>
                        <h3>Teléfono</h3>
                        <p>(33) 3650 9320</p>
                        </div>
                    </div>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6 ">
                        <iframe className="mb-4 mb-lg-0" 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d466.58929788182724!2d-103.4125829185928!3d20.681195865962486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af28ae098a3b%3A0x54ec8e9cccfc97b1!2sDELFENO%20-%20Tecnolog%C3%ADa%20Interactiva%20de%20Occidente!5e0!3m2!1ses-419!2smx!4v1631073319265!5m2!1ses-419!2smx"
                            style={{ border:0, width: '100%' , height: '384px' }} title="Contact" allowFullScreen={ true }></iframe>
                    </div>

                <div className="col-lg-6">
                    <form role="form" className="php-email-form">
                    <div className="form-row">
                        <div className="col form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Nombre" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate"></div>
                        </div>
                        <div className="col form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Correo electrónico" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate"></div>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Asunto" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate"></div>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="message" rows={ 5 } data-rule="required" data-msg="Please write something for us" placeholder="Mensaje"></textarea>
                        <div className="validate"></div>
                    </div>
                    <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="button">Contactar</button></div>
                    </form>
                </div>

                </div>

            </div>
        </section>
    )
}
