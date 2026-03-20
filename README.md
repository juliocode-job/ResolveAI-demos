# Buggy Codebase Demo

Este repositório contém exemplos de código com bugs intencionais em diversas linguagens e formatos. Ele foi criado para servir como alvo de automações de correção de bugs (como o ResolveAI).

## Estrutura do Repositório

-   `python_bugs/`:
    -   `calculations.py`: Erros de lógica (Divisão por zero, Erros de Tipo).
    -   `data_processor.py`: Erros de índice (`IndexError`) e chaves (`KeyError`).
-   `js_bugs/`:
    -   `utils.js`: Problemas com Async/Await e escopo (`var`).
    -   `server.js`: Servidor Express com requisição que "trava" (Sem resposta).
-   `configs/`:
    -   `config.json`: JSON malformado (Vírgula sobrando, chaves sem aspas).
    -   `settings.yaml`: Erro de indentação (Uso de TAB).
-   `web/`:
    -   `index.html`: Estrutura HTML quebrada (Tags não fechadas).
-   `ts_bugs/`:
    -   `app.ts`: Abuso de Tipos (`any`) e conversões erradas.
-   `go_bugs/`:
    -   `errors.go`: Pointer Dereference e `range` loop bug.
-   `database/`:
    -   `queries.sql`: Sintaxe inválida e vulnerabilidade de SQL Injection.
-   `Dockerfile`: Práticas ruins e ordem de comandos incorreta.


## Objetivo

Use este repositório para testar sua ferramenta de IA. A meta é que ela consiga ler esses arquivos, identificar os comentários `// BUG` ou resolver os erros de sintaxe e lógica automaticamente.
