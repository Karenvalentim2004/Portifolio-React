import React from 'react';
import './Timeline.css';

const Timeline = () => {
    return (

        <section id="timeline" className="timeline" data-aos="fade-up">
            <h2>Minha Jornada</h2>
            <div className="timeline-container">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>06/2025</h3>
                        <p><strong>Hackathon Senac</strong> - Desenvolvimento do projeto <em>Mural Já</em>, web app de mural para
                            empreendedores.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>04/2025 - 09/2026</h3>
                        <p><strong>Curso Técnico em Informática para Internet</strong> - Foco em programação, banco de dados e
                            desenvolvimento web.</p>
                    </div>
                </div>
                <div className="timeline-item">
                    <div className="timeline-content">
                        <h3>03/2022 - 10/2025</h3>
                        <p><strong>Flash Informática - </strong> Trabalho em equipe, atendimento ao cliente.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Timeline;