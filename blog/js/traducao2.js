
// Tradução
let DEFAULT_LANG = 'pt-br';
let DATA_LANG_ELEMENTS = document.querySelectorAll('[data-lang-str]');
let TRANSLATIONS = {
  'en': {
    'header': 'Media, Technology and Health Issues',
    'titulo': 'Media, Technology and Health Issues',
    'paragrafo1': `According to a survey by the Royal Society For Public Health, the UK's multidisciplinary philanthropic body devoted mostly to the field of health, together with the Young Health Movement, the youth health movement, brought alarming data.`,
    'paragrafo2': `In their study published in the year 2019 (note being prior to the COVID-19 pandemic), already pointed out that the excessive use of social networks, damaged the mental health of young people, from their sleep to their self-image (Freud explains: how the being imagines himself). Research data show that the age group between 14 and 24 years old is the public that most consumes social networks and, proportionally, is the public in which there was a 70% increase in cases of anxiety and depression.`,
    'paragrafo3': 'The research was done with about 1,479 individuals.',
    'paragrafo4': `The study showed that sharing photos on Instagram negatively impacts sleep, self-image, and increases young people's fear of missing out on events and trends (FOMO).`,
    'paragrafo5': `The study consisted of building a ranking of the most used social networks and then ranking how much the use of these networks impacted the lives and mental health of their users. The most negative ratings was Instagram.`,
    'paragrafo6': 'Seven out of ten volunteers said that the app made them feel worse about their self-image. Among girls, the Instagram effect was even more devastating: nine out of 10 feel unhappy with their bodies and are considering changing their appearance, even considering surgical procedures. (RSPH,2019)',
    'paragrafo7': `In 2019, this phenomenon caused by Instagram was already alarming and frightening, however, as the popular saying goes:" nothing is so bad that it can't get worse". The year 2020 arrived and with it, the pandemic. `,
    'paragrafo8': `During the period of social isolation, Decode, a company focused on big data and marketing, partnered with Kronberg, an organizational psychology firm, to publish a study highlighting how excessive use of technology harms one's health.`,
    'paragrafo9': `The partnership between Decode and Kronberg was formed to conduct this research to understand the impacts of the pandemic on the workplace and what next steps are needed in the business.`,
    'paragrafo10': `The study showed that searches on terms such as "anxiety" and, "burnout" had a 70% spike in searches and, added to the business field, women were the most affected.`,
    'paragrafo11': `It is worth mentioning that the search for psychological tests to identify psychological deviations increased by 750%.`,

    'fonte1': 'References: Decode & Kronberg, 2020',
    'fonte2': 'References: Decode & Kronberg, 2020',

    'fonte': 'References',

  },

  'pt-br': {
    'header': 'Mídias, Tecnologia e problemas de saúde',
    'titulo': 'Mídias, Tecnologia e problemas de saúde',
    'paragrafo1': `Segundo uma pesquisa da Royal Society For Public Health, a entidade filantrópica multidisciplinar do Reino Unido, dedicada majoritariamente à área de saúde, junto ao Young Health Movement, o movimento de saúde jovem, trouxeram dados alarmantes.`,
    'paragrafo2': `Em seu estudo publicado no ano de 2019 (note ser anterior a pandemia do COVID-19), já apontava que o uso excessivo de redes sociais, prejudicava a saúde mental dos jovens, desde seu sono à sua autoimagem (Freud explica: como o ser imagina a si mesmo). Os dados das pesquisas mostram que a faixa-etária de pessoas entre 14 a 24 anos, são o público que mais consome as redes sociais e, proporcionalmente é o público em que houve um aumento de 70% de casos de ansiedade e, depressão. `,
    'paragrafo3': 'Discorrendo acerca disso, a pesquisa foi feita com cerca de 1.479 indivíduos.',
    'paragrafo4': `O estudo mostrou que o compartilhamento de fotos pelo Instagram impacta negativamente o sono, a autoimagem e a aumenta o medo dos jovens de ficar por fora dos acontecimentos e tendências (FOMO, fear of missing out).`,
    'paragrafo5': `O estudo consistia em montar um ranking com as redes sociais mais utilizadas e, posterior a isso, ranquear o quanto o uso dessas redes impactava a vida e saúde mental de seus usuários.`,
    'paragrafo6': 'Sete em cada 10 voluntários disseram que o app fez com que eles se sentissem pior em relação à própria autoimagem. Entre as meninas, o efeito Instagram foi ainda mais devastador: nove em cada 10 se s sentem infelizes com seus corpos e pensam em mudar a própria aparência, cogitando, inclusive, procedimentos cirúrgicos. (RSPH,2019)',
    'paragrafo7': `Em 2019, esse fenômeno causado pelo Instagram já era alarmante e assustador, contudo, como diz o dito popular:” nada é tão ruim que não possa piorar”. O ano de 2020 chegou e com ele, a pandemia.`,
    'paragrafo8': `Durante o período de isolamento social, a Decode, empresa focada em big data e marketing, fez uma parceria com a empresa Kronberg, de psicologia organizacional, publicaram um estudo evidenciando como o uso excessivo de tecnologia prejudica a saúde do ser.`,
    'paragrafo9': `A parceria entre Decode e Kronberg foi formada para realizar esta pesquisa com o objetivo de compreender os impactos da pandemia no trabalho e quais os próximos passos necessários no ramo empresarial.`,
    'paragrafo10': `O estudo mostrou que pesquisas sobre termos como “ansiedade” e, “burnout” tiveram um pico de 70% a mais de pesquisas e, somado ao ramo empresarial, as mulheres foram as mais afetadas`,
    'paragrafo11': `Vale citar que, a busca por testes de cunho psicológicos visando a identificação de desvios psicológicos, aumentaram 750%`,

    'fonte1': 'Fonte: Decode & Kronberg, 2020',
    'fonte2': 'Fonte: Decode & Kronberg, 2020',

    'fonte': 'References',
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
