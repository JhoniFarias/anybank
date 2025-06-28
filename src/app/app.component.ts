import { Component, computed, Signal, signal } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { FormNovaTransacaoComponent } from './form-nova-transacao/form-nova-transacao.component';
import { TipoTransacao, Transacao } from './modelos/transacao';
import { ExtratoComponent } from './extrato/extrato.component';

@Component({
  selector: 'app-root',
  imports: [BannerComponent, FormNovaTransacaoComponent, ExtratoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  transacoes = signal<Transacao[]>([]);

  saldo = computed(() => {
    return this.transacoes().reduce((acc, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return acc + transacao.valor;
        case TipoTransacao.SAQUE:
          return acc - transacao.valor;

        default:
          throw new Error('Tipo de transação inválida');
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    if (this.validarOperacao(transacao)) {
      this.transacoes.update((transacoes) => [transacao, ...transacoes]);
    }
  }

  validarOperacao(transacao: Transacao): boolean {
    if (transacao.tipo === TipoTransacao.SAQUE) {
      return this.validarSaldo(transacao);
    }

    return true;
  }

  validarSaldo(transacao: Transacao): boolean {
    const transacaoValida = transacao.valor <= this.saldo();

    if (!transacaoValida) {
      alert('Saldo insuficiente');
    }

    return transacaoValida;
  }
}
