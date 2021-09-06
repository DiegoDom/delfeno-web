/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
/* import { Portafolio } from '../components/Portafolio'; */
import { Featured } from '../components/Featured';
import { Footer } from '../components/ui/Footer';
import { TopBar } from '../components/ui/TopBar';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Counts } from '../components/Counts';
import { Clients } from '../components/Clients';
import { Services } from '../components/Services';
import { Testimonials } from '../components/Testimonials';
/* import { Team } from '../components/Team'; */
import { Pricing } from '../components/Pricing';
import { Faqs } from '../components/Faqs';
import { Contact } from '../components/Contact';

declare function customInitFunction(): void;

export const HomeDelfeno = () => {

    useEffect(() => {
        customInitFunction();
    });

    return (
        <>
            <TopBar/>
               {/* ======= Principal Banner ======= */}
               <section id="hero" className="d-flex align-items-center">
                    <div className="container" data-aos="zoom-out" data-aos-delay="100">
                        <h1>Bienvenido a <span>Delfeno</span>
                        </h1>
                        <h2>Soluciones profesionales basadas en la implementación de infraestructura y eficiencia de sistemas informáticos.</h2>
                        {/* <div className="d-flex">
                            <a href="#about" className="btn-get-started scrollto">Get Started</a>
                            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i className="icofont-play-alt-2"></i></a>
                        </div> */}
                    </div>
                </section>
                {/* ======= ENDS Principal Banner ======= */}
                <main id="main">
                    {/* ======= Featured Services Section ======= */}
                    <Featured/>
                    {/* ======= About Section ======= */}
                    <About/>
                    {/* ======= Skills Section ======= */}
                    <Skills/>
                    {/* ======= Counts Section =======   */}
                    <Counts/>
                    {/* ======= Clients Section ======= */}
                    <Clients/>
                    {/* ======= Services Section ======= */}
                    <Services/>
                    {/* ======= Testimonials Section ======= */}
                    <Testimonials/>
                    {/* ======= Portfolio Section ======= */}
                    {/* <Portafolio/> */}
                    {/* ======= Team Section ======= */}
                    {/* <Team/> */}
                    {/* ======= Pricing Section ======= */}
                    <Pricing/>
                    {/* ======= Frequently Asked Questions Section ======= */}
                    <Faqs/>
                    {/* ======= Contact Section ======= */}
                    <Contact/>
                </main>
            <Footer/>
            <a href="#" className="back-to-top"><i className="icofont-simple-up"></i></a>
        </>
    )
}
