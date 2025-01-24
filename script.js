const eyeOpen = document.querySelector(".bi-eye");
const eyeClosed = document.querySelector(".bi-eye-slash");

eyeClosed.addEventListener("click", function () {
    toggleVisibility();
    eyeClosed.style.display = "none";
    eyeOpen.style.display = "inline";
});

eyeOpen.addEventListener("click", function () {
    toggleVisibility();
    eyeOpen.style.display = "none";
    eyeClosed.style.display = "inline";
});

function toggleVisibility() {
    const visibleValues = document.querySelectorAll(".visible-value");
    const hiddenValues = document.querySelectorAll(".hidden-value");

    visibleValues.forEach(el => el.style.display = el.style.display === "none" ? "block" : "none");
    hiddenValues.forEach(el => el.style.display = el.style.display === "none" ? "block" : "none");
}

document.querySelectorAll('.container').forEach((container) => {
    const tabs = container.querySelectorAll('.tab');
    const tables = container.querySelectorAll('.table');
  
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabs.forEach((t) => t.classList.remove('active'));
        tables.forEach((table) => table.classList.remove('active'));
  
        tab.classList.add('active');
        const targetTable = container.querySelector(tab.getAttribute('data-target'));
        targetTable.classList.add('active');
      });
    });
  });

const vendasChart = document.getElementById('vendasCancelamentos').getContext('2d');
const historicoChart = document.getElementById('historicoMRR').getContext('2d');
const categoriasChart = document.getElementById('categorias').getContext('2d');
const diasDePicoChart = document.getElementById('diasDePicoChart').getContext('2d');
const taxaOcupacaoChart = document.getElementById('taxaOcupacaoChart').getContext('2d');
const statusClienteChart = document.getElementById('statusClienteChart').getContext('2d');

new Chart(vendasChart, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dev'],
        datasets: [
            {
                label: 'Vendas',
                data: [10, 20, 5, 30, 4, 5, 20, 15, 40, 20, 30, 35],
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Cancelamentos',
                data: [5, 15, 30, 18, 10, 20, 3, 10, 20, 5, 10, 20],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                stacked: false
            },
            y: {
                stacked: false,
                beginAtZero: true
            }
        }
    }
});

new Chart(historicoChart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            label: 'Histórico de MRR',
            data: [10, 20, 15, 25, 10, 35, 25, 30, 15, 30, 40, 50], // Substitua pelos seus dados
            borderColor: '#f6c23e', // Cor da linha
            backgroundColor: 'rgba(246, 194, 62, 0.2)', // Cor de preenchimento abaixo da linha
            tension: 0.4, // Suaviza as curvas
            pointBackgroundColor: '#f6c23e', // Cor dos pontos
            pointBorderWidth: 2,
            pointRadius: function (context) {
                // Destacar o maior ponto
                const index = context.dataIndex;
                const value = context.dataset.data[index];
                return value === Math.max(...context.dataset.data) ? 8 : 4;
            },
            pointHoverRadius: 10
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            }
        },
        scales: {
            x: {
                stacked: false
            },
            y: {
                stacked: false,
                beginAtZero: true
            }
        }
    }
})

new Chart(categoriasChart, {
    type: 'doughnut',
    data: {
        labels: ['Serviços', 'Produtos', 'Assinaturas', 'Pacotes'],
        datasets: [{
            data: [50, 35, 20, 15],
            backgroundColor: ['#6c63ff', '#37d67a', '#03C3EC', '#7e8c99'],
            borderWidth: 0
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Remove a legenda para se parecer mais com o exemplo
            },

        },
        cutout: '75%', // Torna o centro do gráfico vazio (ajusta o tamanho do donut)
        responsive: true,
    }
})

new Chart(diasDePicoChart, {
    type: 'bar',
    data: {
        labels: ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
        datasets: [
            {
                label: 'Dia de pico',
                data: [5, 15, 30, 18, 10, 20, 3],
                backgroundColor: 'rgba(255, 63, 29, 0.62)',
                borderColor: 'rgb(255, 62, 29)',
                borderWidth: 1
            }
        ],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                display: false,
              },
        },
        scales: {
            x: {
                stacked: false
            },
            y: {
                stacked: false,
                beginAtZero: true
            }
        }
    }
});

new Chart(taxaOcupacaoChart, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [75, 25], // Valor e restante para completar 100
            backgroundColor: ['#00d1ff', '#1e1e2f'], // Cor do progresso e fundo
            borderWidth: 0,
            cutout: '80%', // Faz o centro parecer oco
            borderRadius: 2, // Arredonda as pontas
            rotation: -90, // Inicia no topo
            circumference: 180 // Mostra apenas metade do círculo
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: { enabled: false }, // Remove tooltips
          },
          rotation: -90, // Ajusta o ponto inicial
          circumference: 180, // Limita o gráfico a 180º
    }
    
});

new Chart(statusClienteChart, {
    type: 'doughnut',
    data: {
        labels: ['Serviços', 'Produtos', 'Assinaturas', 'Pacotes'],
        datasets: [{
            data: [50, 35, 20],
            backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
            borderWidth: 0
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },

        },
        cutout: '75%',
        responsive: true,
    }
})