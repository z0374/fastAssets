<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3720 1000" width="3720" height="1000" data-sheet="nestreaming-svgsheet">
  <defs>
    <!-- Gradiente de fundo sutil da grade de sprites -->
    <pattern id="sheet-grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DCE6EE" stroke-width="1" opacity="0.45" />
    </pattern>
  </defs>

  <!-- Fundo opcional da folha de sprites -->
  <rect id="sheet-bg" x="0" y="0" width="3720" height="1000" fill="#F8FAFC" />
  <rect id="sheet-grid-overlay" x="0" y="0" width="3720" height="1000" fill="url(#sheet-grid)" />

  <!-- Quadro 1 (x: 0..1240, y: 0..1000): Personagem à esquerda com balão de fala -->
  <g id="personSpeak" transform="translate(0, 0)">
    <!-- Personagem Alinhado à Esquerda -->
    <g id="personagem-01" transform="translate(-155, 0)">
      <!-- Braços -->
      <g id="bracos-01" fill="#E6C2AA">
        <!-- Braço Esquerdo -->
        <path d="M 278 328 
                 C 245 385, 210 475, 206 575 
                 C 205 605, 210 622, 232 628 
                 C 252 632, 275 634, 290 628 
                 C 302 622, 305 605, 305 585 
                 C 308 515, 335 445, 366 392 
                 L 366 328 Z" />
        <!-- Braço Direito -->
        <path d="M 678 328 
                 C 710 385, 745 475, 750 575 
                 C 751 605, 746 622, 724 628 
                 C 704 632, 682 634, 666 628 
                 C 655 622, 652 605, 652 585 
                 C 648 515, 620 445, 586 392 
                 L 586 328 Z" />
      </g>

      <!-- Pernas -->
      <g id="pernas-01" fill="#E6C2AA">
        <!-- Perna Esquerda -->
        <path d="M 366 502 
                 C 332 548, 306 615, 312 678 
                 C 316 718, 336 752, 355 776 
                 C 340 808, 332 845, 338 882 
                 C 342 908, 358 935, 364 955 
                 C 365 964, 348 972, 348 980 
                 C 348 988, 366 990, 385 989 
                 C 404 988, 424 984, 424 976 
                 C 424 968, 415 960, 415 950 
                 C 416 922, 438 888, 442 852 
                 C 446 822, 438 796, 434 776 
                 C 456 742, 476 696, 476 654 
                 C 476 636, 470 624, 464 616 
                 L 366 502 Z" />

        <!-- Perna Direita -->
        <path d="M 586 502 
                 C 620 548, 646 615, 640 678 
                 C 636 718, 616 752, 597 776 
                 C 612 808, 620 845, 614 882 
                 C 610 908, 594 935, 588 955 
                 C 587 964, 604 972, 604 980 
                 C 604 988, 586 990, 567 989 
                 C 548 988, 528 984, 528 976 
                 C 528 968, 537 960, 537 950 
                 C 536 922, 514 888, 510 852 
                 C 506 822, 514 796, 518 776 
                 C 496 742, 478 696, 478 654 
                 C 478 636, 484 624, 490 616 
                 L 586 502 Z" />
      </g>

      <!-- Linhas de Contorno Interno das Pernas / Joelhos -->
      <g id="detalhes-pernas-01" fill="none" stroke="#B68B70" stroke-width="2.2" stroke-linecap="round">
        <!-- Detalhes Perna Esquerda -->
        <path d="M 386 526 C 388 534, 389 542, 388 548" />
        <path d="M 385 574 C 402 584, 418 596, 428 608" />
        <path d="M 454 714 C 446 728, 438 742, 434 756" />
        <path d="M 356 764 C 362 770, 369 775, 376 779" />

        <!-- Detalhes Perna Direita -->
        <path d="M 566 526 C 564 534, 563 542, 564 548" />
        <path d="M 567 574 C 550 584, 534 596, 524 608" />
        <path d="M 498 714 C 506 728, 514 742, 518 756" />
        <path d="M 596 764 C 590 770, 583 775, 576 779" />
        <path d="M 548 765 C 554 762, 561 760, 568 760" />
      </g>

      <!-- Tronco / Collant Azul com Cintura Marcada -->
      <path id="tronco-01" fill="#9BC3D8" 
            d="M 364 328 
               L 598 328 
               C 598 362, 594 388, 582 414 
               C 572 436, 568 456, 574 478 
               C 578 490, 582 496, 586 502 
               C 562 536, 515 595, 488 622 
               C 480 629, 472 629, 464 622 
               C 437 595, 390 536, 366 502 
               C 370 496, 374 490, 378 478 
               C 384 456, 380 436, 370 414 
               C 362 392, 364 362, 364 328 Z" />

      <!-- Cabeça / Tela Retangular -->
      <g id="cabeca-01">
        <!-- Borda Azul Claro -->
        <rect x="230" y="22" width="486" height="310" rx="14" ry="14" fill="#BDD7E7" />
        <!-- Tela Cinza Escuro -->
        <rect x="238" y="29" width="470" height="295" rx="6" ry="6" fill="#686868" />
      </g>
    </g>

    <!-- Balão de Fala Grande Saindo do Monitor -->
    <g id="balao-fala-01">
      <path d="M 720 75
               L 1170 75
               C 1192 75, 1208 91, 1208 113
               L 1208 367
               C 1208 389, 1192 405, 1170 405
               L 720 405
               C 698 405, 682 389, 682 367
               L 682 232
               L 552 195
               L 682 172
               L 682 113
               C 682 91, 698 75, 720 75 Z"
            fill="#FFFFFF" stroke="#BDD7E7" stroke-width="8" stroke-linejoin="round" />

      <text x="945" y="226" text-anchor="middle" fill="#686868"
            font-family="Arial, Helvetica, sans-serif" font-size="42" font-weight="bold">
        Seu texto aqui!
      </text>
      <text x="945" y="282" text-anchor="middle" fill="#9BC3D8"
            font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="bold">
        Saindo do monitor
      </text>
    </g>
  </g>

  <!-- Quadro 2 (x: 1240..2480, y: 0..1000): Personagem centralizado sem balão -->
  <g id="nestre" transform="translate(1360, 0)">
    <!-- Braços -->
    <g id="bracos-02" fill="#E6C2AA">
      <!-- Braço Esquerdo -->
      <path d="M 278 328 
               C 245 385, 210 475, 206 575 
               C 205 605, 210 622, 232 628 
               C 252 632, 275 634, 290 628 
               C 302 622, 305 605, 305 585 
               C 308 515, 335 445, 366 392 
               L 366 328 Z" />
      <!-- Braço Direito -->
      <path d="M 678 328 
               C 710 385, 745 475, 750 575 
               C 751 605, 746 622, 724 628 
               C 704 632, 682 634, 666 628 
               C 655 622, 652 605, 652 585 
               C 648 515, 620 445, 586 392 
               L 586 328 Z" />
    </g>

    <!-- Pernas -->
    <g id="pernas-02" fill="#E6C2AA">
      <!-- Perna Esquerda -->
      <path d="M 366 502 
               C 332 548, 306 615, 312 678 
               C 316 718, 336 752, 355 776 
               C 340 808, 332 845, 338 882 
               C 342 908, 358 935, 364 955 
               C 365 964, 348 972, 348 980 
               C 348 988, 366 990, 385 989 
               C 404 988, 424 984, 424 976 
               C 424 968, 415 960, 415 950 
               C 416 922, 438 888, 442 852 
               C 446 822, 438 796, 434 776 
               C 456 742, 476 696, 476 654 
               C 476 636, 470 624, 464 616 
               L 366 502 Z" />

      <!-- Perna Direita -->
      <path d="M 586 502 
               C 620 548, 646 615, 640 678 
               C 636 718, 616 752, 597 776 
               C 612 808, 620 845, 614 882 
               C 610 908, 594 935, 588 955 
               C 587 964, 604 972, 604 980 
               C 604 988, 586 990, 567 989 
               C 548 988, 528 984, 528 976 
               C 528 968, 537 960, 537 950 
               C 536 922, 514 888, 510 852 
               C 506 822, 514 796, 518 776 
               C 496 742, 478 696, 478 654 
               C 478 636, 484 624, 490 616 
               L 586 502 Z" />
    </g>

    <!-- Linhas de Contorno Interno das Pernas / Joelhos -->
    <g id="detalhes-pernas-02" fill="none" stroke="#B68B70" stroke-width="2.2" stroke-linecap="round">
      <!-- Detalhes Perna Esquerda -->
      <path d="M 386 526 C 388 534, 389 542, 388 548" />
      <path d="M 385 574 C 402 584, 418 596, 428 608" />
      <path d="M 454 714 C 446 728, 438 742, 434 756" />
      <path d="M 356 764 C 362 770, 369 775, 376 779" />

      <!-- Detalhes Perna Direita -->
      <path d="M 566 526 C 564 534, 563 542, 564 548" />
      <path d="M 567 574 C 550 584, 534 596, 524 608" />
      <path d="M 498 714 C 506 728, 514 742, 518 756" />
      <path d="M 596 764 C 590 770, 583 775, 576 779" />
      <path d="M 548 765 C 554 762, 561 760, 568 760" />
    </g>

    <!-- Tronco / Collant Azul com Cintura Marcada -->
    <path id="tronco-02" fill="#9BC3D8" 
          d="M 364 328 
             L 598 328 
             C 598 362, 594 388, 582 414 
             C 572 436, 568 456, 574 478 
             C 578 490, 582 496, 586 502 
             C 562 536, 515 595, 488 622 
             C 480 629, 472 629, 464 622 
             C 437 595, 390 536, 366 502 
             C 370 496, 374 490, 378 478 
             C 384 456, 380 436, 370 414 
             C 362 392, 364 362, 364 328 Z" />

    <!-- Cabeça / Tela Retangular -->
    <g id="cabeca-02">
      <!-- Borda Azul Claro -->
      <rect x="230" y="22" width="486" height="310" rx="14" ry="14" fill="#BDD7E7" />
      <!-- Tela Cinza Escuro -->
      <rect x="238" y="29" width="470" height="295" rx="6" ry="6" fill="#686868" />
    </g>
  </g>

  <!-- Quadro 3 (x: 2480..3720, y: 0..1000): Ícone monitor + base azul -->
  <g id="icon" transform="translate(2600, 0)">
    <!-- Base / Tronco Inferior Azul -->
    <path id="tronco-03" fill="#9BC3D8" 
          d="M 358 552 
             L 665 552 
             L 665 785 
             C 665 805, 658 818, 646 832 
             L 538 968 
             C 524 984, 502 984, 488 968 
             L 376 832 
             C 364 818, 358 805, 358 785 
             Z" />

    <!-- Cabeça / Tela Retangular -->
    <g id="cabeca-03">
      <!-- Borda Azul Claro -->
      <rect x="85" y="18" width="854" height="538" rx="26" ry="26" fill="#BDD7E7" />
      <!-- Tela Cinza Escuro -->
      <rect x="99" y="31" width="826" height="511" rx="14" ry="14" fill="#686868" />
    </g>
  </g>
</svg>
