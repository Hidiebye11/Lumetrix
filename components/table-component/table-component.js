// Wait for DOM to be ready before rendering tables
document.addEventListener('DOMContentLoaded', function() {
  
  // Introduction Table (Team Members)
  const introTable = document.getElementById("introduction-table");
  if (introTable) {
    new gridjs.Grid({
      columns: ["Name", "Matric Number"],
      data: [
        ["Hassan Bin Azhar", "A0265149X"],
        ["Tan Mei Ling, Felicia","A0258676J"],
      ],
    }).render(introTable);
  }

  // Performance Metrics Table
  const perfTable = document.getElementById("performance-metrics-table");
  if (perfTable) {
    new gridjs.Grid({
      columns: ["Metric", "Target Value", "Achieved Value", "Status"],
      data: [
        ["Data Acquisition Rate", "1 kHz", "1.2 kHz", "✅ Exceeded"],
        ["Prediction Accuracy", "90%", "95%", "✅ Exceeded"],
        ["Response Time", "< 100ms", "85ms", "✅ Met"],
        ["System Uptime", "> 99%", "99.2%", "✅ Met"],
        ["Integration Progress", "60%", "60%", "✅ On Track"],
      ],
    }).render(perfTable);
  }

  // Literature Values Table
  const literatureTable = document.getElementById("table-literature");
  if (literatureTable) {
    new gridjs.Grid({
      columns: [gridjs.html("Ea (J mol<sup>-1</sup>)"), gridjs.html("A (ml mol<sup>-1</sup> min<sup>-1</sup>)"), gridjs.html("Reference")],
      data: [
        [gridjs.html("4.880 × 10<sup>4</sup>"), gridjs.html("2.620 × 10<sup>12</sup>"), gridjs.html('<a href="#ref18">[18]</a>')],
        [gridjs.html("5.240 × 10<sup>4</sup>"), gridjs.html("2.620 × 10<sup>12</sup>"), gridjs.html('<a href="#ref19">[19]</a>')],
        [gridjs.html("3.840 × 10<sup>4</sup> ≤ Ea ≤ 4.800 × 10<sup>4</sup>"), gridjs.html("5.050 × 10<sup>10</sup> ≤ A ≤ 3.660 × 10<sup>12</sup>"), gridjs.html('<a href="#ref20">[20]</a>')],
      ],
    }).render(literatureTable);
  }

  // Lambda Values Table
  const lambdaTable = document.getElementById("table-lambda");
  if (lambdaTable) {
    new gridjs.Grid({
      columns: ["λ", "Metric", "PINN", "PINN-Discovery"],
      data: [
        ["0.25", gridjs.html("R<sup>2</sup>"), "0.770", "0.786"],
        ["0.25", "Physics Loss", gridjs.html("3.211 × 10<sup>-2</sup>"), gridjs.html("5.665 × 10<sup>-3</sup>")],
        ["0.5", gridjs.html("R<sup>2</sup>"), "0.753", "0.810"],
        ["0.5", "Physics Loss", gridjs.html("2.638 × 10<sup>-2</sup>"), gridjs.html("3.698 × 10<sup>-3</sup>")],
        ["0.75", gridjs.html("R<sup>2</sup>"), "0.749", "0.808"],
        ["0.75", "Physics Loss", gridjs.html("2.428 × 10<sup>-2</sup>"), gridjs.html("3.166 × 10<sup>-3</sup>")],
        ["1", gridjs.html("R<sup>2</sup>"), "0.73794", "0.807"],
        ["1", "Physics Loss", gridjs.html("2.312 × 10<sup>-2</sup>"), gridjs.html("2.895 × 10<sup>-3</sup>")],
      ],
    }).render(lambdaTable);
  }

  // Statistical Significance Table
  const significanceTable = document.getElementById("table-significance");
  if (significanceTable) {
    new gridjs.Grid({
      columns: ["Metric", "PINN & PINN-Discovery", "NN & PINN-Discovery"],
      data: [
        [gridjs.html("R<sup>2</sup>"), gridjs.html("4.940 × 10<sup>-14</sup>"), gridjs.html("5.409 × 10<sup>-5</sup>")],
        ["MSE", gridjs.html("6.460 × 10<sup>-12</sup>"), gridjs.html("7.664 × 10<sup>-3</sup>")],
        ["Physics Loss", gridjs.html("6.580 × 10<sup>-03</sup>"), gridjs.html("1.460 × 10<sup>-18</sup>")],
      ],
    }).render(significanceTable);
  }

  // Model Performance Table
  const performanceTable = document.getElementById("table-performance");
  if (performanceTable) {
    new gridjs.Grid({
      columns: ["Metric", "NN", "PINN", "PINN-Discovery"],
      data: [
        [gridjs.html("R<sup>2</sup>"), "0.755", "0.738", "0.807"],
        ["MSE", gridjs.html("1.509 × 10<sup>-11</sup>"), gridjs.html("1.613 × 10<sup>-11</sup>"), gridjs.html("1.190 × 10<sup>-11</sup>")],
        ["Physics Loss", gridjs.html("9.637 × 10<sup>-3</sup>"), gridjs.html("2.312 × 10<sup>-2</sup>"), gridjs.html("2.895 × 10<sup>-3</sup>")],
      ],
    }).render(performanceTable);
  }

  // Model Features Comparison Table
  const featuresTable = document.getElementById("table-features");
  if (featuresTable) {
    new gridjs.Grid({
      columns: ["Feature", "NN", "PINN", "PINN-Discovery"],
      data: [
        ["Physics Weight, λ", "0", "1", "1"],
        [gridjs.html("Empirical Parameters"), "N/A", gridjs.html("Ea = 50kJ mol<sup>-1</sup><br/>A = 1.00 × 10<sup>12</sup> ml mol<sup>-1</sup> min<sup>-1</sup><br/>Fixed"), gridjs.html("Ea = 50kJ mol<sup>-1</sup><br/>A = 1.00 × 10<sup>12</sup> ml mol<sup>-1</sup> min<sup>-1</sup><br/>Updated through training")],
        [gridjs.html("Loss Function"), gridjs.html("L<sub>data</sub>"), gridjs.html("L<sub>data</sub> + λ · L<sub>phys</sub>"), gridjs.html("L<sub>data</sub> + λ · L<sub>phys</sub>")],
        ["Trainable Parameters", "Network Weights", "Network Weights", "Network Weights + Ea and A"],
      ],
    }).render(featuresTable);
  }

  // Architecture Table
  const architectureTable = document.getElementById("table-architecture");
  if (architectureTable) {
    new gridjs.Grid({
      columns: ["Component", "Specification"],
      data: [
        [gridjs.html("Input Layer"), gridjs.html("4 neurons (C<sub>A0</sub>, C<sub>B0</sub>, τ, T)")],
        ["Hidden Layer", "2 layers, with 10 neurons each"],
        [gridjs.html("Output Layer"), gridjs.html("1 neuron (C<sub>A</sub>)")],
        ["Optimizer", "Adam"],
        ["Hidden layer activation function", "Rectified Linear Unit (ReLU)"],
      ],
    }).render(architectureTable);
  }

  // Averaged Values Table
  const averagedTable = document.getElementById("table-averaged");
  if (averagedTable) {
    new gridjs.Grid({
      columns: ["Empirical parameters", "Empirical values (units)"],
      data: [
        ["Ea", gridjs.html("50 (kJ mol<sup>-1</sup>)")],
        ["A", gridjs.html("1.00 × 10<sup>12</sup> (ml mol<sup>-1</sup> min<sup>-1</sup>)")],
      ],
    }).render(averagedTable);
  }

  // Keep the original table for reference
  const demoTable = document.getElementById("table-1");
  if (demoTable) {
    new gridjs.Grid({
      columns: ["Name", "Email", "Phone Number"],
      data: [
        ["John", "john@example.com", "(353) 01 222 3333"],
        ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
        ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
        ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
        ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
      ],
    }).render(demoTable);
  }
});

class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
