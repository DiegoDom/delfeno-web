import React from 'react'

export const About = () => {
    return (
        <section id="about" className="about section-bg">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>¿Quienes somos?</h2>
                    <h3><span>Delfeno</span></h3>
                    <p>Soluciones profesionales basadas en la implementación de infraestructura y eficiencia de sistemas informáticos.</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                        <img src="assets/img/about-satis.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        <h3>Somos un equipo altamente cualificado con experiencia que nos respalda.</h3>
                        <p className="font-italic">Nos especializamos en administración de bases de datos, servidores web, soluciones de software y más.</p>
                        <ul>
                            <li>
                                <i className="bx bx-check-shield"></i>
                                <div>
                                    <h5>Soluciones completas</h5>
                                    <p>Tu eficiencia es nuestro objetivo, contamos con herramientas controladas a prueba de fallas y de rapida respuesta.</p>
                                </div>
                            </li>
                            <li>
                                <i className="bx bx-support"></i>
                                <div>
                                    <h5>Atención personalizada</h5>
                                    <p>No queremos ser un servicio más, queremos ser una herramienta indisplensable para tú operación asi que ofrecemos un
                                        servicio personal y colaborador para ti.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
