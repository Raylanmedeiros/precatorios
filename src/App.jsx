import { useState } from "react";
import supabase from "./supabaseClient";
import "./App.css";

function removerAcentos(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function App() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [valor, setValor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function calcularValorReceber(percentual, total = 14185125.36) {
    const value = (percentual / 100) * total;
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const handleConsulta = async () => {
    setLoading(true);
    setError("");
    setValor(null);
    if (!nome || cpf.length !== 3) {
      setError("Preencha todos os campos corretamente.");
      setLoading(false);
      return;
    }

    const nomeBusca = removerAcentos(nome.toUpperCase().trim());
    const cpfBusca = cpf.trim();

    try {
      const { data, error: supaError } = await supabase
        .from("precatorios")
        .select("nome_completo, cpf3, valor_a_receber")
        .eq("nome_completo", nomeBusca)
        .eq("cpf3", cpfBusca);
      if (supaError || !data || data.length === 0) {
        setError("Dados não encontrados.");
      } else {
        setValor(data[0].valor_a_receber);
      }
    } catch {
      setError("Erro ao consultar o banco de dados.");
    }
    setLoading(false);
  };

  // Função para gerar texto do extrato
  function gerarTextoExtrato() {
    return `Precatórios Campo Alegre\n\nNome: ${nome}\nValor a receber: ${calcularValorReceber(
      valor
    )} (${valor}% do total de R$14.185.125,36)`;
  }

  // Função para enviar por WhatsApp
  function enviarWhatsApp() {
    const texto = encodeURIComponent(gerarTextoExtrato());
    window.open(`https://wa.me/?text=${texto}`, "_blank");
  }

  // Função para baixar PDF
  function baixarPDF() {
    const texto = gerarTextoExtrato();
    const win = window.open("", "_blank");
    win.document.write(`<pre style='font-size:1.1rem'>${texto}</pre>`);
    win.print();
  }

  return (
    <>
      <div className="container">
        <h2 className="titulo-principal">Consultar valor a receber</h2>
        <div className="form">
          <label className="label-campo" htmlFor="nome">
            Nome completo
          </label>
          <input
            id="nome"
            type="text"
            placeholder="nome completo"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="input"
            required
          />
          <label className="label-campo" htmlFor="cpf">
            Primeiros 3 dígitos do CPF
          </label>
          <input
            id="cpf"
            type="text"
            placeholder="000"
            value={cpf}
            maxLength={3}
            onChange={(e) => setCpf(e.target.value.replace(/\D/g, ""))}
            className="input"
            required
          />
          <button
            onClick={handleConsulta}
            className="button"
            disabled={loading}
          >
            {loading ? "Consultando..." : "Consultar"}
          </button>
        </div>
        {error && <p className="error">{error}</p>}
        {valor && (
          <div className="resultado" style={{ textAlign: "center" }}>
            <h2>Valor a receber:</h2>
            <h3>{calcularValorReceber(valor)}</h3>
            <p>
              esse valor é correspondente a cota parte {valor}% de
              R$14.185.125,36.
            </p>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <button
                className="button button-whatsapp"
                onClick={enviarWhatsApp}
              >
                Enviar por WhatsApp
              </button>
              <button className="button button-pdf" onClick={baixarPDF}>
                Baixar PDF
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
