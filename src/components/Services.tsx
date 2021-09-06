import React from 'react'

export const Services = () => {
    return (
        <section id="services" className="services">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Servicios</h2>
                    <h3>Conocé nuestros <span>Servicios</span></h3>
                    <p>No impongas limites a tu proyecto online, contacta con nosotros y descubriras todo lo que podemos ofrecerte.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-world"></i></div>
                            <h4>Consultoría</h4>
                            <p>Conocimiento, especialización y experiencia del equipo técnico para abordar proyectos que complementen los
                                sistemas actuales del cliente, así como el análisis y diseño de nuevas infraestructuras que aporten un mayor
                                rendimiento y valor añadido a la empresa.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-check-shield"></i></div>
                            <h4>Seguridad en el sistema</h4>
                            <p>Análisis y mejora de la seguridad pasiva y activa, control de accesos, detección de intrusos, cortafuegos inteligente.
                                Con nosotros estarás seguro.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-tachometer"></i></div>
                            <h4>Optimización de servicios</h4>
                            <p>Haga que sus servidor rinda más, deje que nos encarguemos de optimizar su servicio web ó de base de datos.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-cloud-download"></i></div>
                            <h4>Copias de seguridad</h4>
                            <p>Los backups son una parte prioritaria en cualquier entorno informático, es necesario que sean frecuentes y
                                confiables. Te implementamos copias de seguridad con tecnologías abiertas y muy seguras.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-server"></i></div>
                            <h4>Administración de servidores</h4>
                            <p>Soluciones integrales de gestión de contenidos (CMS), Portales Web, Intranet, etc.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <div className="icon"><i className="bx bx-support"></i></div>
                            <h4>Soporte Técnico</h4>
                            <p>Soporte Técnico Profesional, capaz de resolver posibles incidencias, problemas de
                                funcionamiento del software, dudas, y consultas, ofreciendo recomendaciones y respuestas
                                a todo tipo de necesidades.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
