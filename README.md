
# Consulta de Precatórios Municipais - Campo Alegre/AL

Plataforma web para consulta de precatórios municipais de Campo Alegre/AL. Permite ao cidadão consultar, de forma simples e rápida, o valor percentual e o valor em reais que tem direito a receber, além de compartilhar o extrato por WhatsApp ou baixar em PDF.

## Objetivo

Facilitar o acesso à informação sobre precatórios municipais, promovendo transparência e cidadania. Basta informar o nome completo e os 3 primeiros dígitos do CPF para realizar a consulta.

## Funcionalidades

- SPA responsiva construída com React e Vite
- Consulta por nome completo e 3 primeiros dígitos do CPF
- Resultados centralizados e visualmente destacados
- Botões para envio do extrato por WhatsApp (verde) e download em PDF (vermelho)
- Menu horizontal e menu sandwich para navegação mobile
- Página "Sobre" com FAQ interativo
- Página "Ajuda" com formulário de contato integrado ao Supabase
- Segurança e privacidade dos dados

## Como funciona

1. Acesse a página inicial.
2. Preencha os campos de nome completo e os 3 primeiros dígitos do CPF.
3. Clique em "Consultar" para visualizar o percentual e o valor em reais referente ao total dos precatórios (R$14.185.125,36).
4. Compartilhe o extrato por WhatsApp ou baixe em PDF usando os botões destacados.

## Tecnologias utilizadas

- **React**: Interface web SPA
- **Vite**: Build e desenvolvimento rápido
- **Supabase**: Backend seguro para dados dos precatórios e contatos
- **CSS**: Estilização

## Como rodar o projeto

1. Clone este repositório.
2. Crie um arquivo `.env` na raiz do projeto com as variáveis:
   ```
   VITE_SUPABASE_URL=URL_do_seu_projeto_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anon_publica
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse o endereço local exibido no terminal para utilizar a plataforma.

## Tratamento dos dados

Antes de popular o Supabase, todos os dados dos precatórios foram tratados e corrigidos utilizando Python, garantindo padronização nas informações apresentadas.

## Observações

- Os dados dos precatórios são mantidos e atualizados no Supabase.
- O projeto é open source e pode ser adaptado para outras cidades ou contextos.

---

**Transparência e cidadania para Campo Alegre/AL!**