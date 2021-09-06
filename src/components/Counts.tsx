import React from 'react'

export const Counts = () => {
    return (
        <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="count-box">
                            <i className="icofont-simple-smile"></i>
                            <span data-toggle="counter-up">232</span>
                            <p>Clientes satisfechos</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                        <div className="count-box">
                            <i className="icofont-document-folder"></i>
                            <span data-toggle="counter-up">21</span>
                            <p>Proyectos</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="icofont-live-support"></i>
                            <span data-toggle="counter-up">1,463</span>
                            <p>Houras de soporte</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                        <div className="count-box">
                            <i className="icofont-users-alt-5"></i>
                            <span data-toggle="counter-up">15</span>
                            <p>Empleados</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
