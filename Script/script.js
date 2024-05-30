document.getElementById('calcular-desconto').addEventListener('click', function() {
    const precoAntigo = parseFloat(document.getElementById('preco-antigo').value);
    const precoNovo = parseFloat(document.getElementById('preco-novo').value);

    if (!isNaN(precoAntigo) && !isNaN(precoNovo) && precoNovo > 0) {
        const descontoPorcentagem = ((precoAntigo - precoNovo) / precoNovo) * 100;
        document.getElementById('desconto-porcentagem').value = descontoPorcentagem.toFixed(2);
    } else {
        alert('Por favor, insira valores válidos para os preços.');
    }
});

// Função para gerar o PDF e inseri-lo na página
document.getElementById('pdf-gerar').addEventListener('click', function() {
    const nomeProduto = document.getElementById('nome-produto').value;
    const precoAntigo = document.getElementById('preco-antigo').value;
    const precoNovo = document.getElementById('preco-novo').value;
    const descontoPorcentagem = document.getElementById('desconto-porcentagem').value;

    const docDefinition = {
        content: [
            { text: 'PromoPrint', style: 'header' },
            { text: `Nome do Produto: ${nomeProduto}`, style: 'subheader' },
            { text: `Preço Antigo: R$ ${precoAntigo}`, style: 'content' },
            { text: `Preço Novo: R$ ${precoNovo}`, style: 'content' },
            { text: `Desconto: ${descontoPorcentagem}%`, style: 'content' }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            subheader: {
                fontSize: 18,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            content: {
                fontSize: 14,
                margin: [0, 5, 0, 5]
            }
        }
    };

    pdfMake.createPdf(docDefinition).getDataUrl((dataUrl) => {
        document.getElementById('iframe-pdf').src = dataUrl;
    });
});

// Função para baixar o PDF
document.getElementById('download-pdf').addEventListener('click', function() {
    const nomeProduto = document.getElementById('nome-produto').value;
    const precoAntigo = document.getElementById('preco-antigo').value;
    const precoNovo = document.getElementById('preco-novo').value;
    const descontoPorcentagem = document.getElementById('desconto-porcentagem').value;

    const docDefinition = {
        content: [
            { text: 'PromoPrint', style: 'header' },
            { text: `Nome do Produto: ${nomeProduto}`, style: 'subheader' },
            { text: `Preço Antigo: R$ ${precoAntigo}`, style: 'content' },
            { text: `Preço Novo: R$ ${precoNovo}`, style: 'content' },
            { text: `Desconto: ${descontoPorcentagem}%`, style: 'content' }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            subheader: {
                fontSize: 18,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            content: {
                fontSize: 14,
                margin: [0, 5, 0, 5]
            }
        }
    };

    pdfMake.createPdf(docDefinition).download('produto-desconto.pdf');
});

// Função para imprimir o PDF
document.getElementById('imprimir-pdf').addEventListener('click', function() {
    const nomeProduto = document.getElementById('nome-produto').value;
    const precoAntigo = document.getElementById('preco-antigo').value;
    const precoNovo = document.getElementById('preco-novo').value;
    const descontoPorcentagem = document.getElementById('desconto-porcentagem').value;

    const docDefinition = {
        content: [
            { text: 'PromoPrint', style: 'header' },
            { text: `Nome do Produto: ${nomeProduto}`, style: 'subheader' },
            { text: `Preço Antigo: R$ ${precoAntigo}`, style: 'content' },
            { text: `Preço Novo: R$ ${precoNovo}`, style: 'content' },
            { text: `${descontoPorcentagem}% Desconto`, style: 'content' }
        ],
        styles: {
            header: {
                fontSize: 22,
                bold: true
            },
            subheader: {
                fontSize: 18,
                bold: true,
                margin: [0, 10, 0, 5]
            },
            content: {
                fontSize: 14,
                margin: [0, 5, 0, 5]
            }
        }
    };

    pdfMake.createPdf(docDefinition).print();
});
