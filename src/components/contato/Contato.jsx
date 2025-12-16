import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contato.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_PUBLIC
      )
      .then(() => {
        alert('Mensagem enviada com sucesso!');
        form.current.reset();
      })
      .catch(() => {
        alert('Erro ao enviar, tente novamente.');
      });
  };

  return (
    <section id="contato" className="contato">
      <h2>Entre em contato</h2>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Seu nome" required />
        <input type="email" name="email" placeholder="Seu email" required />
        <textarea name="message" placeholder="Sua mensagem" required />

        <button type="submit">Enviar mensagem</button>
      </form>
    </section>
  );
};

export default Contact;
