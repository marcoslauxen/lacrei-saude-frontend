Lacrei Saúde - Frontend 🌈
🚀 Plataforma inclusiva para conectar a comunidade LGBTQIAPN+ a profissionais de saúde qualificados.

📜 Descrição
Este é um desafio técnico de front-end para a Lacrei Saúde, utilizando Next.js 13+ com TypeScript e Styled Components. O projeto possui duas páginas principais, um header e footer responsivos, além de testes automatizados com Jest.

🔹 Tecnologias Utilizadas
🖥 Next.js (versão App Router)
📜 TypeScript
💅 Styled Components
🎯 Jest e Testing Library
🎨 Figma - Marsha Design System
🔹 Funcionalidades Principais
✅ Páginas Home, Usuário e Profissional
✅ Header responsivo com menu hamburguer
✅ Footer estilizado com redes sociais
✅ Botões interativos para navegação
✅ Responsividade aprimorada para mobile
✅ Testes unitários nos componentes principais

🛠 Instalação e Execução
1️⃣ Clone o Repositório
sh
Copiar
Editar
git clone https://github.com/seu-usuario/lacrei-saude-frontend.git
cd lacrei-saude-frontend
2️⃣ Instale as Dependências
sh
Copiar
Editar
npm install
# ou
yarn install
3️⃣ Inicie o Servidor
sh
Copiar
Editar
npm run dev
# ou
yarn dev
🔹 O projeto estará rodando em http://localhost:3000.

🎨 Design System - Marsha
O projeto segue as diretrizes do Marsha Design System, garantindo identidade visual consistente.
🔗 Acesse o Figma para detalhes sobre cores, tipografia e componentes.

🧪 Testes
Os testes são escritos com Jest e Testing Library.
Para rodá-los, utilize:

sh
Copiar
Editar
npm test
# ou
yarn test
Exemplo de Teste do Botão:
tsx
Copiar
Editar
import { render, screen } from '@testing-library/react';
import Button from '../../src/app/components/Button';
import '@testing-library/jest-dom';

test('renders button with text', () => {
  render(<Button>Testar</Button>);
  expect(screen.getByText(/Testar/i)).toBeInTheDocument();
});
🌍 Conclusão
Este projeto representa mais do que apenas um desafio técnico – é uma oportunidade de fazer parte de algo maior, promovendo a inclusão e acessibilidade na saúde.

Cada linha de código contribui para um ambiente digital mais seguro e acolhedor para a comunidade LGBTQIAPN+.

A Lacrei Saúde segue com sua missão de conectar pessoas a profissionais qualificados, garantindo respeito, cuidado e dignidade.

🔹 Junte-se a essa causa e ajude a construir um futuro mais inclusivo! 🌈✨


