import React, { useState } from "react";
import supabase from "../supabaseClient";

export default function Ajuda() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{9,11}$/.test(telefone)) {
      alert("Digite apenas números no telefone (mínimo 9 dígitos).");
      return;
    }
    setLoading(true);
    const { error } = await supabase
      .from("contatos")
      .insert([{ nome, telefone, mensagem }]);
    setLoading(false);
    if (error) {
      alert("Erro ao enviar. Tente novamente mais tarde.");
      return;
    }
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
    setNome("");
    setTelefone("");
    setMensagem("");
    setEnviado(false);
  };

  return (
    <>
      <div className="container" id="ajuda">
        <h2 className="titulo-principal">Ajuda & Contato</h2>
        <p>
          Se você tem dúvidas ou precisa de informações sobre sua consulta,
          preencha o formulário abaixo:
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label-campo" htmlFor="ajuda-nome">
            Nome
          </label>
          <input
            id="ajuda-nome"
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
            required
          />
          <label className="label-campo" htmlFor="ajuda-telefone">
            Telefone
          </label>
          <input
            id="ajuda-telefone"
            type="tel"
            placeholder="(99) 99999-9999"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value.replace(/[^\d]/g, ""))}
            className="input"
            required
          />
          <label className="label-campo" htmlFor="ajuda-mensagem">
            Sua mensagem
          </label>
          <textarea
            id="ajuda-mensagem"
            placeholder="escreva sua dúvida ou solicitação"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            className="input"
            rows={4}
            required
          />
          <button type="submit" className="button" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </div>
    </>
  );
}
