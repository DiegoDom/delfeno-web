/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Featured = () => {
    return (
        <section id="featured-services" className="featured-services">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon"><i className="bx bx-world"></i></div>
                        <h4 className="title"><a href="">Consultoría</a></h4>
                        <p className="description">Conocimiento, especialización y experiencia para abordar proyectos.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                        <div className="icon"><i className="bx bx-tachometer"></i></div>
                        <h4 className="title"><a href="">Optimización de servicios</a></h4>
                        <p className="description">Deje que nos encarguemos de optimizar su servicio web ó de base de datos.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                        <div className="icon"><i className="bx bx-cloud-download"></i></div>
                        <h4 className="title"><a href="">Copias de seguridad</a></h4>
                        <p className="description">Mantenemos tus datos de operación seguros, con las mejores y más confiablez tecnologías.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                        <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                        <div className="icon"><i className="bx bx-devices"></i></div>
                        <h4 className="title"><a href="">Administración de servidores</a></h4>
                        <p className="description">Soluciones integrales de gestión de contenidos (CMS), Portales Web, Intranet, .</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
