import { useState } from "react";

const fornecedores = [
  {
    nome: "FullCosmo",
    tipo: "Completo",
    produtos: ["Fórmula", "Embalagem"],
    precoBase: 18.5,
    descricao: "Fornecedor completo: desenvolve fórmula, embalagem e faz o envase."
  },
  {
    nome: "PackBeauty",
    tipo: "Embalagem",
    produtos: ["Embalagem"],
    precoBase: 2.7,
    descricao: "Especialistas em embalagens personalizadas."
  },
  {
    nome: "Formulab",
    tipo: "Fórmula",
    produtos: ["Fórmula"],
    precoBase: 7.2,
    descricao: "Laboratório de formulação com foco em produtos veganos."
  }
];

const etapas = [
  "Briefing inicial",
  "Escolha de fornecedores",
  "Cotações e simulações",
  "Amostras e testes",
  "Documentação e regulamentação",
  "Produção inicial"
];

export default function MatchMakeMockup() {
  const [step, setStep] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [etapaIndex, setEtapaIndex] = useState(0);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '20px' }}>
        <img src="/logo-notracorp.png" alt="Logo Notracorp" width={150} />
        <nav>
          <a href="#" style={{ marginRight: '15px' }}>Home</a>
          <a href="#" style={{ marginRight: '15px' }}>Features</a>
          <a href="#" style={{ marginRight: '15px' }}>Portfólio</a>
          <a href="#">Contato</a>
        </nav>
      </header>

      {step === 0 && (
        <div>
          <h2>Vamos começar?</h2>
          <input placeholder="Descreva sua ideia de produto..." style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <input placeholder="Qual o seu orçamento estimado?" style={{ width: '100%', padding: '10px', marginBottom: '10px' }} />
          <button onClick={() => setStep(1)} style={{ padding: '10px 20px', marginBottom: '20px' }}>Gerar prévia de fornecedores</button>

          {/* Caixinhas de exemplo */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <div style={{ backgroundColor: '#FFF1D8', padding: '10px', borderRadius: '8px', flex: '1' }}>
              <p><strong>💄 Exemplo:</strong><br />"Quero criar um gloss vegano com toque de hortelã e embalagem transparente minimalista."</p>
            </div>
            <div style={{ backgroundColor: '#F1DDF3', padding: '10px', borderRadius: '8px', flex: '1' }}>
              <p><strong>💸 Orçamento:</strong><br />"Tenho até R$15.000 para o desenvolvimento inicial da linha."</p>
            </div>
            <div style={{ backgroundColor: '#C4E2E3', padding: '10px', borderRadius: '8px', flex: '1' }}>
              <p><strong>🎯 Dica:</strong><br />Seja o mais específico possível — isso ajuda o sistema a te sugerir fornecedores mais alinhados.</p>
            </div>
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2>Fornecedores sugeridos</h2>
          {fornecedores.map((f, i) => (
            <div key={i} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
              <strong>{f.nome}</strong>
              <p>Tipo: {f.tipo}</p>
              <p>Serviços: {f.produtos.join(", ")}</p>
              <p>Preço base: R$ {f.precoBase.toFixed(2)}</p>
              <p>{f.descricao}</p>
              <button>Solicitar cotação</button>
            </div>
          ))}
          <button onClick={() => setStep(0)} style={{ marginRight: '10px' }}>Voltar</button>
          <button onClick={() => setStep(2)}>Ver Plano de Ação</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Plano de Ação: Etapa {etapaIndex + 1} de {etapas.length}</h2>
          <p><strong>{etapas[etapaIndex]}</strong></p>
          <p style={{ margin: '10px 0' }}>Descrição da etapa e instruções personalizadas aparecem aqui.</p>
          <div>
            {etapaIndex > 0 && (
              <button onClick={() => setEtapaIndex(etapaIndex - 1)} style={{ marginRight: '10px' }}>Etapa anterior</button>
            )}
            {etapaIndex < etapas.length - 1 ? (
              <button onClick={() => setEtapaIndex(etapaIndex + 1)}>Próxima etapa</button>
            ) : (
              <button onClick={() => setStep(3)}>Finalizar Plano</button>
            )}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Projeto finalizado com sucesso! 🎉</h2>
          <p>Seu plano foi concluído. Agora é só executar com os fornecedores escolhidos.</p>
          <button onClick={() => {
            setStep(0);
            setEtapaIndex(0);
          }}>
            Começar novo projeto
          </button>
        </div>
      )}

      {/* Chatbot flutuante */}
      <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        <button onClick={() => setChatOpen(!chatOpen)} style={{ padding: '10px', borderRadius: '50%', backgroundColor: '#431846', color: '#fff', fontSize: '20px' }}>💬</button>
        {chatOpen && (
          <div style={{ marginTop: '10px', width: '250px', padding: '15px', backgroundColor: '#431846', color: '#fff', borderRadius: '10px' }}>
            <p><strong>Notra.AI:</strong></p>
            <p>Olá! Me pergunte sobre etapas, fornecedores, prazos ou como começar sua marca ✨</p>
          </div>
        )}
      </div>
    </div>
  );
}

