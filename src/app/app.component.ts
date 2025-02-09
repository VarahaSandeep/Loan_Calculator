import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  maxFunding = 17484500;
  loanAmount = 14500000;
  minLoanAmount = 1000000;
  maxLoanAmount = 17480000;
  loanPeriod = 12;
  minLoanPeriod = 6;
  maxLoanPeriod = 18;
  estimatedInstallment = 150000;

  updateInstallment() {
    this.estimatedInstallment = Math.floor(this.loanAmount / this.loanPeriod / 10);
  }

  applyLoan() {
    console.log('Loan Amount:', this.loanAmount);
    console.log('Loan Period:', this.loanPeriod);
    console.log('Estimated Installment:', this.estimatedInstallment);
  }
}
