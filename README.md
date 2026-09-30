# LaymanCad 2D

Editor 2D mínimo para quem precisa mandar cortar uma chapa a laser mas não tem software CAD nem domínio da ferramenta. Desenha linhas, retângulos, círculos e arcos com valores exatos em milímetros e exporta direto em DXF. Todo o processamento acontece no navegador; nenhum arquivo é enviado a um servidor.

Aplicação publicada: https://guizlass-afk.github.io/LaymanCad2D/

## Recursos

- ferramentas de linha, retângulo, círculo e arco (arco por 3 pontos: início, fim e um ponto por onde ele deve passar);
- grade configurável (1/5/10/50 mm) e imã a pontos existentes (extremidades, centros) para desenhar sem precisar de pulso firme;
- painel de propriedades: depois de desenhar de forma aproximada, ajuste as coordenadas exatas de cada peça digitando os valores;
- seleção com arraste do corpo inteiro (move tudo) ou de um ponto específico (remodela só aquele vértice); exclusão (tecla Delete) e desfazer/refazer (Ctrl+Z / Ctrl+Y), preservando a seleção quando a peça editada continua existindo;
- fusão automática de pontos: ao soltar um ponto exatamente sobre o de outra peça, os dois passam a se mover juntos, permitindo fechar contornos com linhas e arcos que continuam conectados ao remodelar qualquer uma das peças;
- salvamento automático no navegador e exportação/importação do projeto em `.json` para retomar depois;
- exportação em DXF R12 ASCII (`LINE`, `CIRCLE`, `ARC`, `POLYLINE` fechada para retângulos), compatível com leitores CAD e serviços de corte a laser;
- interface em 12 idiomas, com bandeiras e suporte à leitura da direita para a esquerda em árabe.

## Como usar

1. Escolha uma ferramenta (Linha, Retângulo, Círculo ou Arco) e clique no quadro para posicionar os pontos.
2. Ajuste os valores exatos (coordenadas, raio, ângulos) no painel **Propriedades**, à esquerda — a peça criada já vem selecionada.
3. Repita para todas as peças do desenho. Use a Grade e o imã para alinhar sem precisar de precisão manual.
4. Clique em **Exportar DXF** e envie o arquivo para a máquina de corte.

## Execução local

Aplicativo estático, sem build. Basta abrir `index.html` em um navegador, ou usar `Abrir LaymanCad 2D.bat`. Para servir a pasta em vez de abrir via `file://`:

```text
python -m http.server 8080
```

## Aparência

O botão de sol/lua ao lado do idioma alterna os temas claro e escuro. A preferência fica salva em `factorytoolbox-theme`, compartilhada entre as ferramentas no mesmo domínio. Sem escolha salva, o tema acompanha a preferência do sistema.

## Licenciamento do código próprio

O código original desta versão tem todos os direitos reservados, conforme `LICENSE`. Esta versão do código próprio não é distribuída sob a licença MIT. As licenças e os avisos de componentes de terceiros são preservados.
