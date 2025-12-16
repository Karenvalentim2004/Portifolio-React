import { useState, useEffect } from 'react';
import './Projetos.css';

import Navbar from '../../components/navbar/Navbar';


const imagens = import.meta.glob('../../assets/*.{jpg,png,webp}', {
    eager: true,
});

const projetosData = [
    {
        title: 'Portifolio',
        img: imagens['../../assets/portifolio.png'].default,
        date: 'Dezembro 2025',
        desc: 'Portifolio Pessoal.',
        tec: 'HTML, CSS, JS, React',
        preview: 'https://portifolio-react-sooty-two.vercel.app/',
        github: 'https://github.com/Karenvalentim2004/Portifolio-React',
    },
    {
        title: 'Brigs Confeitaria',
        img: imagens['../../assets/brigs.png'].default,
        date: 'Agosto 2025',
        desc: 'Plataforma de cardapio online para doces da confeitaria.',
        tec: 'HTML, CSS, JS, React',
        preview: 'https://brigs-react.vercel.app/',
        github: 'https://github.com/Karenvalentim2004/brigs-react',
    },
    {
        title: 'Hackathon Senac',
        img: imagens['../../assets/hackathon.png'].default,
        date: 'Setembro 2025',
        desc: 'Plataforma para anuncios, baseado ao quadro de empreendedores que possui na unidade.',
        tec: 'HTML, CSS, JS',
        preview: 'https://hackathon-senac.vercel.app/',
        github: 'https://github.com/Karenvalentim2004/Hackathon-Senac',
    },

];

function Projetos() {
    const [modalOpen, setModalOpen] = useState(false);
    const [projetoSelecionado, setProjetoSelecionado] = useState(null);

    const abrirModal = (projeto) => {
        setProjetoSelecionado(projeto);
        setModalOpen(true);
    };

    const fecharModal = () => {
        setModalOpen(false);
        setProjetoSelecionado(null);
    };

    useEffect(() => {
        if (window.AOS) {
            window.AOS.init();
        }
    }, []);

    return (
        <div className="Projetos">
            <Navbar />

            <h1>Meus Projetos:</h1>

            <section className="projetos-grid">
                {projetosData.map((projeto, index) => (
                    <div className="card" key={index}>
                        <img src={projeto.img} alt={projeto.title} className="card-img" />

                        <div className="card-content">
                            <h3>{projeto.title}</h3>

                            <div className="card-buttons">
                                <a
                                    href={projeto.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn"
                                >
                                    <i className="bi bi-github"></i>
                                </a>

                                <button
                                    className="btn"
                                    onClick={() => abrirModal(projeto)}
                                >
                                    <i className="bi bi-eye"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* MODAL */}
            {modalOpen && projetoSelecionado && (
                <div className="modal show">
                    <div className="modal-content">
                        <button className="close" onClick={fecharModal}>✖</button>

                        <div className="modal-left">
                            <img
                                src={projetoSelecionado.img}
                                alt={projetoSelecionado.title}
                                className="modal-img"
                            />

                            <a
                                href={projetoSelecionado.preview}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="preview-btn"
                            >
                                Prévia <i className="bi bi-display"></i>
                            </a>
                        </div>

                        <div className="modal-right">
                            <div className="info-box">
                                <h4>Nome do projeto</h4>
                                <p>{projetoSelecionado.title}</p>
                            </div>

                            <div className="info-box">
                                <h4>Data de criação</h4>
                                <p>{projetoSelecionado.date}</p>
                            </div>

                            <div className="info-box">
                                <h4>Descrição</h4>
                                <p>{projetoSelecionado.desc}</p>
                            </div>

                            <div className="info-box">
                                <h4>Tecnologias</h4>
                                <p>{projetoSelecionado.tec}</p>
                            </div>

                        </div>
                    </div>
                </div>
            )}


        </div>
    );
}

export default Projetos;
