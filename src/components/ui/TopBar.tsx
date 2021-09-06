/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const TopBar = () => {
    return (
        <>
            {/* ======= Top Bar ======= */}
            <div id="topbar" className="d-none d-lg-flex align-items-center fixed-top">
                <div className="container d-flex">
                    <div className="contact-info mr-auto">
                        <i className="icofont-envelope"></i> <a href="mailto:contact@example.com">contacto@delfeno.com.mx</a>
                        <i className="icofont-phone"></i> +52 (33) 3813 3336
                    </div>
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
                        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
                        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
                    </div>
                </div>
            </div>

            {/* ======= Header =======  */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">

                {/* <h1 className="logo mr-auto"><a href="index.html">BizLand<span>.</span></a></h1> */}
                <a href="#header" className="logo mr-auto"><img src="assets/img/logo_oficial_delfeno.png" alt="Logo delfeno"/></a>

                <nav className="nav-menu d-none d-lg-block">
                    <ul>
                    <li className="active"><a href="#header">Inicio</a></li>
                    <li><a href="#about">¿Quienes somos?</a></li>
                    <li><a href="#services">Servicios</a></li>
                    {/* <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li> */}
                    {/* <li className="drop-down"><a href="">Drop Down</a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="drop-down"><a href="#">Deep Drop Down</a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    <li><a href="#contact">Contacto</a></li>

                    </ul>
                </nav>
                </div>
            </header>
        </>
    )
}
