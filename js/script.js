var audios = [
{
    titulo: "Audio 1 - O Senhor Lutará por vocês; tão somente acalmem-se. Exodos 14:14",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg1.jpg",
    loc: "assets/Audio1.mp3",
},
{
    titulo: "Audio 2 - Audio 2 - Melhor é o pouco com o temor do Senhor, do que um grande tesouro onde há inquietação. Provérbios 15:16",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg2.jpg",
    loc: "assets/Audio2.mp3",
},
{
    titulo: "Audio 3 - O coração ansioso deprime o homem, mas uma palavra bondosa o anima. Provérbios 12:25",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg3.jpg",
    loc: "assets/Audio3.mp3",
},
{
    titulo: "Audio 4 - Lancem sobre ele toda a sua ansiedade, porque ele tem cuidado de vocês. 1 Pedro 5:7",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg4.jpg",
    loc: "assets/Audio4.mp3",
},
{
    titulo: "Audio 5 - O teu amor é melhor doque a vida! Por isso os meus lábios te exaltarão. Eu te bendirei enquanto viver, e em teu nome levantarei as minhas mãos. Salmos 63:3,4",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg5.jpg",
    loc: "assets/Audio5.mp3",
},
{
    titulo: "Audio 6 - Responde-me quando clamo, Ó Deus que me traz justiça! Dá-me alívio da minha angústia; Tem misericórdia de mim e ouve a minha oração. Salmos 4:1",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg6.jpg",
    loc: "assets/Audio6.mp3",
},
{
    titulo: "Audio 7 - Tu guardarás em perfeita paz aquele cujo propósito está firme, porque em ti confia. Isaías 26:3",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg7.jpg",
    loc: "assets/Audio7.mp3",
},
{
    titulo: "Audio 8 - Por isso não tema, pois estou com você: não tenha medo pois sou o seu Deus. Eu fortalecerei e o ajudarei; Eu o segurarei com a minha mão direita vitoriosa. Isaías 41:10",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg8.jpg",
    loc: "assets/Audio8.mp3",
},
{
    titulo: "Audio 9 - Bendito seja o Deus e Pai do nosso Senhor Jesus Cristo, o Pai das misericórdias e o Deus de toda a consolação; 2 Coríntios 1:3",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg9.jpg",
    loc: "assets/Audio9.mp3",
},
{
    titulo: "Audio 10 - Ouve, Senhor, e tem misericórdia de mim; Senhor, sê tu o meu auxílio. salmos 30:10",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg10.jpg",
    loc: "assets/Audio10.mp3",
},
{
    titulo: "Audio 11 - Posso tudo naquele que me fortalece. Filipenses 4:13",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg11.jpg",
    loc: "assets/Audio11.mp3",
},
{
    titulo: "Audio 12 - Reconhecendo Gratidão.",
    description: "Meditação para ansiedade e exercícios de atenção plena.",
    imagem: "assets/bg12.jpg",
    loc: "assets/Audio12.mp3",
},
{
    titulo: "Audio 13 - Meditação da bondade amorosa.",
    description: "Essa prática tem o objetivo de nos ajudar a direcionar nossos corações e mentes para um maior senso de bondade e compaixão.",
    imagem: "assets/bg13.jpg",
    loc: "assets/Audio13.mp3",
},
];

function gerahtmldoaudio(audio){
    return `<div class="audio filter">
            <div class="info">
            <div class="imgbgcard">
            <img src="${audio.imagem}">
            </div>
            <div class="description">
            <h2>${audio.titulo}</h2>
            <h6>${audio.description}</h6>
            </div>
            </div>
            <div class="audioplayer">
            <audio src="${audio.loc}" controls=True></audio>
            </div>
            </div>`   
    }
    
    $(document).ready(function() {
    for (let audio of audios){
      let body = $(".listadeaudios")
      let html = gerahtmldoaudio(audio)
          body.append(html)
    }
    });

