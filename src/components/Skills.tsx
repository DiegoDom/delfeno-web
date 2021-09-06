import React from 'react'

export const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container" data-aos="fade-up">
                <div className="row skills-content">
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">Consultoría <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Seguridad <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Soporte Técnico <i className="val">75%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="progress">
                            <span className="skill">Administración de servidores <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">Optimización de servicios <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">VIRTUALIZACIÓN <i className="val">55%</i></span>
                            <div className="progress-bar-wrap">
                                <div className="progress-bar" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
