import { Component, input } from '@angular/core';
import { TipoTransacao, Transacao } from '../modelos/transacao';
import { NgClass, CurrencyPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [NgClass, CurrencyPipe, DatePipe],
  templateUrl: './transacao.component.html',
  styleUrl: './transacao.component.css',
})
export class TransacaoComponent {
  tipoTransacao = TipoTransacao;
  transacao = input<Transacao>();
}
