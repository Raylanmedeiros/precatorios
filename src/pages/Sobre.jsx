import React, { useState } from "react";
import "./Sobre.css";

const faqs = [
  {
    pergunta: "O que são precatórios?",
    resposta:
      "Precatórios são dívidas do município reconhecidas pela Justiça, que devem ser pagas aos cidadãos ou empresas após decisão judicial definitiva.",
  },
  {
    pergunta: "Como funciona a consulta?",
    resposta: (
      <ol className="sobre-lista">
        <li>Informe seu nome completo.</li>
        <li>Digite os 3 primeiros dígitos do seu CPF.</li>
        <li>
          Clique em <b>Consultar</b> para ver os valores disponíveis.
        </li>
      </ol>
    ),
  },
  {
    pergunta: "Transparência e atualização",
    resposta:
      "Os dados são tratados e atualizados para garantir precisão. O valor apresentado corresponde ao percentual do total de precatórios disponíveis para pagamento.",
  },
  {
    pergunta: "Quem pode consultar?",
    resposta: "Qualquer cidadão de Campo Alegre/AL com precatório municipal.",
  },
  {
    pergunta: "Os dados são seguros?",
    resposta: "Sim, todas as informações são tratadas com privacidade.",
  },
  {
    pergunta: "Como saber se tenho valor a receber?",
    resposta: "Basta preencher o formulário na página inicial.",
  },
  {
    pergunta: "Meus dados estão errados, e agora?",
    resposta:
      "Basta entrar em contato pela nossa página de ajuda que iremos solucionar o problema.",
  },
];

export default function Sobre() {
  const [faqAberto, setFaqAberto] = useState(null);

  return (
    <div id="sobre">
      <h2 className="titulo-faq">ℹ️ Informações & FAQ</h2>
      <div className="sobre-faq-wrapper">
        <div className="sobre-faq-list">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`sobre-faq-card${faqAberto === idx ? " aberto" : ""}`}
              onClick={() => setFaqAberto(faqAberto === idx ? null : idx)}
            >
              <div className="sobre-faq-pergunta">
                {faq.pergunta}
                <span className="sobre-faq-icon">
                  {faqAberto === idx ? "▲" : "▼"}
                </span>
              </div>
              {faqAberto === idx && (
                <div className="sobre-faq-resposta">{faq.resposta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
