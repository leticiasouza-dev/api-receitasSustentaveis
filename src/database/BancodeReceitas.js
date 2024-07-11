import Receita from "../models/receita.model.js"

const bancoDeReceitas = [
    new Receita(
        1,
        "Salada de Quinoa",
        ["quinoa", "tomate", "pepino", "cebola roxa", "salsa", "azeite de oliva", "limão"],
        "Cozinhe a quinoa de acordo com as instruções da embalagem. Misture todos os ingredientes em uma tigela e tempere com azeite e limão.",
        "Vegana",
        "20 minutos"
    ),
    new Receita(
        2,
        "Sopa de Lentilha",
        ["lentilha", "cenoura", "cebola", "alho", "tomate", "cominho", "caldo de legumes"],
        "Refogue a cebola e o alho. Adicione os legumes e o caldo de legumes. Cozinhe até que as lentilhas estejam macias.",
        "Vegana",
        "40 minutos"
    ),
    new Receita(
        3,
        "Hambúrguer de Grão-de-Bico",
        ["grão-de-bico", "cebola", "alho", "aveia", "salsa", "cominho", "azeite"],
        "Processe todos os ingredientes no processador. Forme hambúrgueres e cozinhe em uma frigideira até dourar.",
        "Vegetariana",
        "30 minutos"
    ),
    new Receita(
        4,
        "Curry de Vegetais",
        ["batata-doce", "cenoura", "abobrinha", "couve-flor", "leite de coco", "curry em pó", "gengibre"],
        "Refogue os vegetais. Adicione o curry e o leite de coco e cozinhe até que os vegetais estejam macios.",
        "Vegana",
        "45 minutos"
    ),
    new Receita(
        5,
        "Taco de Feijão Preto",
        ["tortilla de milho", "feijão preto", "abacate", "tomate", "alface", "limão"],
        "Aqueça as tortillas. Recheie com feijão, abacate, tomate e alface. Tempere com limão.",
        "Vegana",
        "25 minutos"
    ),
    new Receita(
        6,
        "Panqueca de Banana",
        ["banana", "aveia", "leite vegetal", "canela", "fermento"],
        "Misture todos os ingredientes e cozinhe em uma frigideira até dourar dos dois lados.",
        "Vegetariana",
        "15 minutos"
    ),
    new Receita(
        7,
        "Risoto de Cogumelos",
        ["arroz arbóreo", "cogumelos", "cebola", "alho", "caldo de legumes", "azeite de oliva", "salsa"],
        "Refogue a cebola e o alho. Adicione o arroz e cozinhe com o caldo aos poucos. Adicione os cogumelos e cozinhe até o arroz estar macio.",
        "Vegetariana",
        "35 minutos"
    ),
    new Receita(
        8,
        "Wrap de Hummus",
        ["tortilla", "hummus", "pepino", "cenoura", "pimentão", "alface"],
        "Espalhe hummus na tortilla e adicione os vegetais. Enrole e sirva.",
        "Vegana",
        "10 minutos"
    ),
    new Receita(
        9,
        "Espaguete de Abobrinha",
        ["abobrinha", "tomate cereja", "alho", "azeite de oliva", "manjericão"],
        "Refogue o alho no azeite. Adicione os tomates e a abobrinha em espiral. Cozinhe até a abobrinha estar al dente.",
        "Vegana",
        "20 minutos"
    ),
    new Receita(
        10,
        "Bolo de Cenoura",
        ["cenoura", "farinha de trigo", "açúcar", "óleo", "fermento", "chocolate"],
        "Misture todos os ingredientes e asse em forno pré-aquecido a 180°C por 40 minutos.",
        "Vegetariana",
        "50 minutos"
    ),
    new Receita(
        11,
        "Smoothie Verde",
        ["espinafre", "banana", "maçã", "água de coco", "linhaça"],
        "Bata todos os ingredientes no liquidificador até obter uma mistura homogênea.",
        "Vegana",
        "5 minutos"
    ),
    new Receita(
        12,
        "Bolo de Banana e Aveia",
        ["banana", "aveia", "ovos", "fermento", "canela"],
        "Misture todos os ingredientes e asse em forno pré-aquecido a 180°C por 30 minutos.",
        "Vegetariana",
        "40 minutos"
    ),
    new Receita(
        13,
        "Estrogonofe de Palmito",
        ["palmito", "creme de leite vegetal", "cebola", "alho", "molho de tomate", "champignon"],
        "Refogue a cebola e o alho. Adicione o palmito e o champignon, e depois o molho de tomate e o creme de leite. Cozinhe até aquecer.",
        "Vegana",
        "30 minutos"
    ),
    new Receita(
        14,
        "Tabule",
        ["trigo para quibe", "tomate", "pepino", "cebola", "salsa", "hortelã", "limão"],
        "Hidrate o trigo e misture com os outros ingredientes. Tempere com limão e azeite.",
        "Vegana",
        "20 minutos"
    ),
    new Receita(
        15,
        "Salada de Grãos",
        ["grão-de-bico", "feijão branco", "lentilha", "cebola roxa", "tomate", "pepino", "azeite de oliva", "limão"],
        "Misture todos os ingredientes em uma tigela e tempere com azeite e limão.",
        "Vegana",
        "25 minutos"
    ),
    new Receita(
        16,
        "Bolinho de Espinafre",
        ["espinafre", "farinha de trigo", "ovo", "alho", "fermento", "queijo parmesão"],
        "Misture todos os ingredientes, forme bolinhos e asse em forno pré-aquecido a 180°C por 20 minutos.",
        "Vegetariana",
        "30 minutos"
    ),
    new Receita(
        17,
        "Torta de Legumes",
        ["massa folhada", "cenoura", "ervilha", "milho", "abobrinha", "creme de leite"],
        "Refogue os legumes. Coloque na massa folhada, adicione o creme de leite e asse em forno pré-aquecido a 180°C por 25 minutos.",
        "Vegetariana",
        "45 minutos"
    ),
    new Receita(
        18,
        "Pão de Queijo Vegano",
        ["polvilho doce", "polvilho azedo", "batata doce", "óleo vegetal", "água", "sal"],
        "Misture todos os ingredientes até formar uma massa. Faça bolinhas e asse em forno pré-aquecido a 180°C por 30 minutos.",
        "Vegana",
        "40 minutos"
    ),
    new Receita(
        19,
        "Sushi Vegano",
        ["arroz para sushi", "nori", "abacate", "pepino", "cenoura", "vinagre de arroz"],
        "Cozinhe o arroz e tempere com vinagre de arroz. Enrole os vegetais no nori com o arroz.",
        "Vegana",
        "60 minutos"
    ),
    new Receita(
        20,
        "Patê de Tofu",
        ["tofu", "alho", "limão", "salsa", "cebolinha", "azeite de oliva"],
        "Processe todos os ingredientes até obter uma mistura homogênea. Sirva com torradas.",
        "Vegana",
        "10 minutos"
    )
]

export default bancoDeReceitas