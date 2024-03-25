//glossary
const synad= {
    'teostus': 'реализация',
    'kavand': 'план',
    'algoritm': 'алгоритм',
    'kasutajaliides': 'пользовательский интерфейс',
    'muudel': 'модель',
    'andmebaasiskeem': 'скема базыданных',
    'standart': 'стандарт',
    'tsükkel': 'цыкл',
    'andmetõõtlus': 'обработка данных',
    'andmestruktuur': 'структура данных',
    'arenduskeskkond': 'среда разработки',
    'projektihaldus töörist': 'работник по управлению проектами',
    'kavandamine': 'планирование',
    'iteratsioon': 'итерация',
    'parandus': 'исправление',
    'koskmudel':'каскадная модель',
    'agiline mudel':'старинная модель',
    'spiraalne mudel':'спиральная модель',
    'inkrementaalne mudel':'инкрементальноя модель',
    'nõudmised': 'требования',
    'realiseerimine':'реализация',
    'testimine': 'тестирование',
    'integreerimine':'интеграция',
    'kasutamine':'использование',
    'hooldus':'обслуживание',
    'eelised':'приемущества',
    'puudused':'недостатки',
    'elutsükkel':'жизненый цикл',
    'arendamine':'разработка',
    'valideerimine':'валидирование',





}

//teeb random sõnad
function randomSyna(){
    // keys = objektid  sõnastikus(glosary) synad
    const keys = Object.keys(synad)
    //random sõna
    const juhuslikSyna=keys[Math.floor(Math.random()*keys.length)]

    //lisame HTML lehele
    document.getElementById("random-sona").innerHTML=juhuslikSyna;
}

//kontrollib sõnu
function sonakontroll(){
// const syna gets element with name kontroll
    const syna= document.getElementById("kontroll").value
    //in element where name is vastus kontrollib if sõna = translated sõna from element random sõna
    document.getElementById("vastus").innerHTML = syna ===synad[document.getElementById("random-sona").innerHTML]

}
const synad1 = {
    'реализация': 'teostus',
    'план': 'kavand',
    'алгоритм': 'algoritm',
    'пользовательский интерфейс': 'kasutajaliides',
    'модель': 'muudel',
    'скема базыданных': 'andmebaasiskeem',
    'стандарт': 'standart',
    'цыкл': 'tsükkel',
    'обработка данных': 'andmetõõtlus',
    'структура данных': 'andmestruktuur',
    'среда разработки': 'arenduskeskkond',
    'pработник по управлению проектами': 'projektihaldus töörist',
    'планирование': 'kavandamine',
    'итерация': 'iteratsioon',
    'исправление': 'parandus',
    'каскадная модель':'koskmuudel',
    'старинная модель':'agiline muudel',
    'спиральная модель':'spiraalne muudel',
    'инкрементальноя модель':'inkrementaalne muudel',
    'требования': 'nõudmised',
    'реализация':'realiseerimine',
    'тестирование': 'testimine',
    'интеграция':'integreerimine',
    'использование':'kasutamine',
    'обслуживание':'hooldus',
    'приемущества':'eelised',
    'недостатки':'puudused',
    'жизненый цикл':'elutsükkel',
    'разработка':'arendamine',
    'валидирование':'valideerimine',
}
function randomSyna1(){
    // keys = objektid  sõnastikus(glosary) synad
    const keys1 = Object.keys(synad)
    //random sõna
    const juhuslikSyna1=keys1[Math.floor(Math.random()*keys1.length)]

    //lisame HTML lehele
    document.getElementById("random-sona1").innerHTML=juhuslikSyna1;
}

function sonakontroll1(){
// const syna gets element with name kontroll
    const syna1= document.getElementById("kontroll1").value
    //in element where name is vastus kontrollib if sõna = translated sõna from element random sõna
    document.getElementById("vastus1").innerHTML = syna1 ===synad1[document.getElementById("random-sona1").innerHTML]

}