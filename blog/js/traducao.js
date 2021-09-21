
// Tradução
let DEFAULT_LANG = 'pt-br';
let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');
let TRANSLATIONS = {
    'en': {
        'header':'The dilemma of social media',
        'titulo': 'The dilemma of social media',
        'paragrafo1': 'A big thought that we have in the year 2021 is the great need to be connected to technology, media, social networks among others, but one more issue that we have to think about, health and the harm of being connected to technology because as we know the difference between a medicine to poison is the dose.',
        'paragrafo2': 'For many times between the years 2000 and 2010 it was common to hear parents telling us to get out of the house, play games, read a book, do anything instead of being stuck at home on the computer. Now in the year 2020 with the pandemic the roles not only reversed, but adults also had to stay connected to the internet.',
        'paragrafo3': 'With the arrival of COVID-19, we were in a foggy time, jobs ended, schools and day care centers closed, we were forced to isolate ourselves, many things were automated or done via internet, like the home office, what at first could be a light to the old normality, became a new source of insecurities, stress, anxiety and depression, since then life started to be lived by screens.',
        'paragrafo4': 'Anxiety and stress due to technology are present in the lives of many today, and with it many other unpleasant feelings. Many have had to resort to other ways to feel better, there have been simple cases like calling a loved one or in the worst case scenario:',
        'paragrafo5': '"It is presumable that individuals with low levels of resilience find some psychoactive substances and/or other reinforcing behaviors such as gambling, watching pornography, video games, marathon TV series, using social media or surfing the internet are used to ease stress, anxiety and/or soften depressed mood. " (MARTINI, Cornelia, pag2)',
        'paragrafo6': 'The human being is naturally a sociable being, many have seen that being alone can drive someone crazy, much now if it is necessary to do psychology or therapy, an area that after sars-19 has a great demand now, and much if it is advisable that people practice physical exercises, to avoid further health complications.            ',
        'paragrafo7': 'A big point to highlight is that of young people and adolescents, who are in a time of socializing, living, being many imperative and emotional, having to go to the so-called online classes, it ends up being exhausting and tiring to spend 6 to 8 hours in front of a screen being and class, much is known that it is difficult to concentrate, leading to many',
        'fonte':'References',

    },
    'pt-br': {
        'header': 'O dilema das mídias sociais',
        'titulo':'O dilema das mídias sociais',
        'paragrafo1': 'Um grande pensamento que temos no ano de 2021 é da grande necessidade de estar ligado à tecnologia, meios midiáticos, redes sociais entre outros, mas a mais uma questão que temos que pensar, na saúde e os malefícios de estar ligado a tecnologia, pois como já sabemos a diferença de um remédio para um veneno é a dose.',
        'paragrafo2': 'Por muitas vezes entre os anos de 2000 a 2010 era comum ouvir os pais dizerem para sairmos para fora de casa, jogar e brincar, ler um livro, fazer de tudo em vez de ficar preso dentro de casa no computador. Agora no ano de 2020 com a pandemia os papeis não só se inverteram, como os adultos também tiveram que ficar ligado à internet.',
        'paragrafo3': 'Com a chegada do covid 19, estivemos num tempo nebuloso, empregos acabaram, escolas e creches fecharam, fomos obrigados a nos isolar, muitas coisas forma automatizadas ou feitas via internet, como o home office, o que de primeira poderia ser uma luz para a antiga normalidade, se tornou uma nova fonte de inseguranças, estresse, ansiedade e a depressão, desde então a vida começou a ser vivida por telas.',
        'paragrafo4': 'A ansiedade e o estresse devido a tecnologia estão presentes na vida de muitos hoje em dia, e com isso muitos outros sentimentos desagradáveis. Muitos tiveram que recorrer a outras formas de se sentir melhor, houve casos simples como ligar para alguém querido ou no pior dos casos:',
        'paragrafo5': '"É presumível que indivíduos com baixos níveis de resiliência encontrem em algumas substâncias psicoativas e/ou em outros comportamentos de reforços como jogos de azar, assistir pornografia, jogos de vídeo, maratona séries de TV, usar mídias sociais ou navegar na internet sejam utilizados para amenizar o estresse, a ansiedade e/ou abrandamento do humor deprimido. "(MARTINI, Cornelia, pag2)',
        'paragrafo6': 'O ser humano é naturalmente um ser sociavel, muitos já vimos que ficar sozinho pode enlouquecer alguém, muito agora se é necessário fazer psicologia ou terapia, uma área que após o sars-19 possui uma grande demanda agora, e muito se é aconselhável que as pessoas pratiquem exercícios físicos, para evitar mais complicações a saúde.',
        'paragrafo7': 'Um grande ponto a se destacar é a dos jovens e adolescente, que estão em uma época de socializar, viver, sendo muitos imperativos e emocionais, tendo que ir para as chamadas aulas online, acaba sendo exaustivo e cansativo passar de 6 a 8 horas na frente de uma tela estando e aula, muito se sabe que é de difícil concentração, acarretando muitas',
        'fonte': 'Fonte',
    }
}


const translate = (lang = null) => {
    if (lang === null) {
      lang = DEFAULT_LANG;
    }
    let DEFAULT_LANG_LENGTH = Object.keys(TRANSLATIONS[DEFAULT_LANG]).length;
    // Verifica se o idioma selecionado existe.
    if (TRANSLATIONS[lang]) {
      let LANG_LENGTH = Object.keys(TRANSLATIONS[lang]).length;
      if (LANG_LENGTH < DEFAULT_LANG_LENGTH) {
       
      } else {
      }
      DATA_LANG_ELEMENTS.forEach((el) => {
        let STR = el.getAttribute('data-lang-str');
        if (TRANSLATIONS[lang][STR]) {
          el.innerText = (TRANSLATIONS[lang][STR]);
        }
      });
    } else {
     
    }
  }
  
  let BTNS_TRANSLATE = document.querySelectorAll('[name=btn-translate]');
  BTNS_TRANSLATE.forEach((btn) => {
    btn.addEventListener('click', (ev) => {
      translate(btn.getAttribute('data-lang'));
    });
  });
  
  translate();
