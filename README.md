# AnyBank 🏦

Projeto desenvolvido em Angular para simular operações bancárias simples, como depósitos e saques, com foco em boas práticas de arquitetura, reatividade e internacionalização.

## ✨ Funcionalidades

- 💸 Cadastro e exibição de transações bancárias (depósitos e saques)
- 🧮 Cálculo automático do saldo
- 📝 Formulários dinâmicos com validação
- 🌐 Suporte a múltiplos idiomas (i18n)
- ⚡ Interface reativa e responsiva

## 📚 Principais conceitos aplicados

- 🚀 **Criação e gerenciamento de projetos e componentes com Angular CLI**
- 🔗 **Comunicação entre componentes** usando `@Input` e `@Output`
- 🎨 **Formatação de dados** com pipes como `DatePipe`, `CurrencyPipe`, `TitleCasePipe` e `KeyValuePipe`
- 🌍 **Internacionalização (i18n)** para suporte a diferentes idiomas
- 🔄 **Two-way data binding** com `ngModel` para formulários dinâmicos
- ⚡ **Reatividade otimizada** com `signals` e `computed`
- 🆔 **Geração de identificadores únicos** utilizando [nanoid](https://github.com/ai/nanoid)

## 🚀 Como rodar o projeto

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Rode o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

3. Acesse em [http://localhost:4200](http://localhost:4200)

## 🗂️ Estrutura do projeto

- `src/app/modelos`: Modelos de dados (ex: Transacao)
- `src/app/banner`: Componente de banner
- `src/app/form-nova-transacao`: Formulário para novas transações
- `src/app/extrato`: Listagem de transações
- `src/app/transacao`: Exibição individual de transação

## 🛠️ Tecnologias utilizadas

- [Angular](https://angular.io/)
- [nanoid](https://github.com/ai/nanoid)

## 📈 Aprendizados

Este projeto foi desenvolvido para consolidar conhecimentos em Angular, especialmente sobre reatividade, comunicação entre componentes, formatação de dados e internacionalização.

---

Sinta-se à vontade para contribuir ou sugerir melhorias!
