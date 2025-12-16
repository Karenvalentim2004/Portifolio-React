import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import profileImage from '../../assets/perfil2.png';

const Hero = () => {
    const canvasRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const text = 'Karen Valentim';

//    EFEITO DE DIGITAÇÃO
    useEffect(() => {
        let index = 0;
        let intervalId;
        setTypedText('');
        intervalId = setInterval(() => {
            if (index < text.length) {
                setTypedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(intervalId);
            }
        }, 100);
        return () => clearInterval(intervalId);
    }, []);

    // PARTÍCULAS 
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
       
        const particles = [];
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 2,
                dx: (Math.random() - 0.5) * 1.5,
                dy: (Math.random() - 0.5) * 1.5
            });
        }
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(211, 99, 202, 0.5)';
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
            });
            requestAnimationFrame(animate);
        };
        animate();
        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);


    return (
        <section className="hero">
            <div className="hero-content">
                <h1>
                    Hello World, eu sou
                    &nbsp; 
                    <span className="typing-group">
                        <span className="typing">{typedText}</span>
                        <span className="emoji">👩🏾‍💻</span>
                    </span>
                </h1>

                <p>
                    Estudante do técnico de informática para Internet (FullStack).
                    <br />
                    Tenho interesse em desenvolvimento web e criação de soluções
                    digitais.
                </p>

                <div className="hero-buttons">
                    <a
                        href="https://github.com/Karenvalentim2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/karen-valentim2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>

            <div className="hero-image">
                <img
                    src={profileImage}
                    alt="Ilustração de Karen como desenvolvedora"
                />
            </div>

            <canvas ref={canvasRef} className="particles" />
        </section>
    );
};

export default Hero;