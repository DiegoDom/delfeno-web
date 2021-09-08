/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export const Footer = () => {
    return (<footer id="footer">
        <div className="footer-newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h4>Suscríbase a nuestro boletín</h4>
                        <p>Mantente al tanto de promociones y nuevos servicios</p>
                        <form method="post">
                            <input type="email" name="email" />
                            <input type="button" value="Subscribe" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-contact">
                        {/* <h3>Delfeno<span>.</span></h3> */}
                        <img src="assets/img/logo_oficial_delfeno.png" alt="Logo delfeno" className="img-fluid w-75 mb-3"/>
                        <p>
                            Libra 356 Piso 1 <br/>
                            Juan Manuel Vallarta 45120<br/>
                            Zapopan Jalisco <br/><br/>
                            <strong>Telefono:</strong> (33) 3650 9320<br/>
                            <strong>Email:</strong> contacto@delfeno.com.mx<br/>
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Mapa del sitio</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#header">Inicio</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#about">¿Quienes somos?</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Servicios</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#about">Términos de servicio</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#about">Política de privacidad</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Servicios</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Consultoría</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Seguridad</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Optimización de servicios</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Copias de seguridad</a></li>
                        <li><i className="bx bx-chevron-right"></i> <a href="#services">Administración de servidores</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Nuestras redes sociales</h4>
                        <p>Siguenos y enterate de nuestros casos de éxito más recientes</p>
                        <div className="social-links mt-3">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-4">
            <div className="copyright">
                &copy; Copyright <strong><span>Delfeno</span></strong>. Todos los derechos reservados
            </div>
            <div className="credits">
                {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
        </div>
    </footer>
    )
}
