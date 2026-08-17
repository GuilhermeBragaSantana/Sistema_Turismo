const destinationData = {
    itacare: {
        name: "Itacaré",
        description: "Itacaré é um município no litoral sul da Bahia, famoso pelas praias de surf, trilhas na Mata Atlântica e cachoeiras próximas. Tem um clima jovem e rústico-chique, com pousadas charmosas e boa gastronomia.",
        history: "Fundada por jesuítas no século XVI/XVIII como São Miguel da Barra do Rio de Contas, Itacaré viveu do cacau até o declínio nos anos 1980 com a praga da vassoura-de-bruxa. O isolamento preservou a natureza, e a cidade renascceu turisticamente após a construção da estrada Ilhéus-Itacaré em 1998.",
        photos: [
            {src: "../img/svg/beachicon.svg", alt:"Praias em Itacaré."},
            {src: "../img/svg/villa.svg", caption: "Cidade de Itacaré"},
            {src: "../img/svg/sunset.svg", caption: "Por do sol"},
            {src: "../img/svg/surfing.svg", caption: "Surf"}
        ],
        backgrounds:[
            "var(--verde-400)",
            'var(--verde-100)',
            'var(--verde-200)',
            'var(--verde-300)'
        ]
    },

    morroDeSaoPaulo: {
        name: "Morro de São Paulo",
        description: "Morro de São Paulo é uma vila na Bahia, acessível só de barco, famosa por suas praias numeradas, águas claras e vida noturna animada.",
        history: "Descoberta em 1531, a vila foi fundada em 1535, teve papel de defesa colonial e foi atacada na Segunda Guerra. Só nos anos 70, com a chegada de hippies, deixou de ser um vilarejo isolado de pescadores e virou o polo turístico atual.",
        photos: [
            {src: "../img/svg/beachicon.svg", alt:"Praias em Itacaré."},
            {src: "../img/svg/noCars.svg", caption: "Exemplo"},
            {src: "../img/svg/moon.svg"},
            {src: "../img/svg/sunset.svg", caption: "Por do sol"}

        ],
        backgrounds:[
            "var(--acento-principal-escuro)",
            'var(--acento-suave)',
            'var(--acento-claro)',
            'var(--acento-principal)'
        ]
    },

    barraGrande: {
        name: "Barra Grande",
        description: "Barra Grande é um vilarejo na Península de Maraú, litoral sul da Bahia, banhado pela Baía de Camamu, famoso por suas praias, piscinas naturais e clima tranquilo de ex-vila de pescadores.",
        history: "Ligada à origem de Maraú, fundada em 1705 por frades capuchinhos italianos numa antiga aldeia indígena chamada Mayrahú. A região virou vila em 1761 e cidade em 1938. Barra Grande, antiga vila de pescadores, tornou-se hoje o principal destino turístico da península.",
        photos: [
            {src: "../img/svg/pool.svg"},
            {src: "../img/svg/villa.svg"},
            {src: "../img/svg/sunset.svg"},
            {src: "../img/svg/car.svg"}    
        ],
        backgrounds:[
            'var(--azul-400)',
            'var(--azul-100)',
            'var(--azul-200)',
            'var(--azul-300)'
        ]
    }
}

export { destinationData };