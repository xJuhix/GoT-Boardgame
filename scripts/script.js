var playerCards = [
    {
        Id: 238,
        name: 'Cersei Lannister',
        src: 'images/lannister_115487.png',
        alt: '',
        house: 'Lannister',
        IsFemale: true,
        Culture: 'Westerman',
        titles: ['Lady of Casterly Rock', ' Queen Regent'],
        aliases: ['Brother Fucker, The Bitch Wueen'],
        Born: 'In 266 AC, at Casterly Rock',
        Died: '',
        Father: null,
        Mother: null,
        Spouse: 901,
        Children: [],
        Allegiances: [229],
        Books: [1, 2, 3],
        PovBooks: [5, 8],
        PlayedBy: ['Lena Headey'],
        TvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6'],
    },
    {
        Id: 583,
        name: 'Jon Snow',
        src: 'images/targaryen_115480.png',
        alt: '',
        house: 'Targaryen',
        IsFemale: false,
        Culture: 'Northmen',
        titles: ["Lord Commander of the Night's Watch"],
        aliases: [
            'Lord Snow',
            "Ned Stark's Bastard",
            'The Snow of Winterfell',
            'The Crow-Come-Over',
            "The 998th Lord Commander of the Night's Watch",
            'The Bastard of Winterfell',
            'The Black Bastard of the Wall',
            'Lord Crow',
        ],
        Born: 'In 283 AC',
        Died: '',
        Father: null,
        Mother: null,
        Spouse: null,
        Children: [],
        Allegiances: [362],
        Books: [5],
        PovBooks: [1, 2, 3, 8],
        PlayedBy: ['Kit Harington'],
        TvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6'],
    },
    {
        Id: 148,
        name: 'Arya Stark',
        src: 'images/stark.png',
        alt: '',
        house: 'Stark',
        IsFemale: true,
        Culture: 'Northmen',
        titles: ['Princess'],
        aliases: [
            'Arya Horseface',
            'Arya Underfoot',
            'Arry',
            'Lumpyface',
            'Lumpyhead',
            'Stickboy',
            'Weasel',
            'Nymeria',
            'Squan',
            'Saltb',
            'Cat of the Canaly',
            'Bets',
            'The Blind Girh',
            'The Ugly Little Girl',
            'Mercedenl',
            'Mercye',
        ],
        Born: 'In 289 AC, at Winterfell',
        Died: '',
        Father: null,
        Mother: null,
        Spouse: null,
        Children: [],
        Allegiances: [362],
        Books: [],
        PovBooks: [1, 2, 3, 5, 8],
        PlayedBy: ['Maisie Williams'],
        TvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6'],
    },
    {
        Id: 346,
        name: 'Edmure Tully',
        src: 'images/tully_115484.png',
        alt: '',
        house: 'Tully',
        IsFemale: false,
        Culture: 'Rivermen',
        titles: ['Ser', ' Lord of Riverrun'],
        aliases: [],
        Born: 'In or between 267 AC and 274 AC',
        Died: '',
        Father: null,
        Mother: null,
        Spouse: 937,
        Children: [],
        Allegiances: [395],
        Books: [1, 2, 3, 5, 8],
        PovBooks: [],
        PlayedBy: ['Tobias Menzies'],
        TvSeries: ['Season 3', 'Season 6'],
    },
    {
        Id: 1022,
        name: 'Theon Greyjoy',
        src: 'images/greyjoy_115479.png',
        alt: '',
        house: 'Greyjoy',
        IsFemale: false,
        Culture: 'Ironborn',
        titles: ['Prince of Winterfell', ' Lord of the Iron Islands'],
        aliases: ['Prince of Fools', 'Theon Turncloak', 'Reek', 'Theon Kinslayer'],
        Born: 'In 278 AC or 279 AC, at Pyke',
        Died: '',
        Father: null,
        Mother: null,
        Spouse: null,
        Children: [],
        Allegiances: [169],
        Books: [1, 3, 5],
        PovBooks: [2, 8],
        PlayedBy: ['Alfie Allen'],
        TvSeries: ['Season 1', 'Season 2', 'Season 3', 'Season 4', 'Season 5', 'Season 6'],
    },
    {
        Id: 1963,
        name: 'Stannis Baratheon',
        src: 'images/baratheon_115486.png',
        alt: '',
        house: 'Baratheon',
        IsFemale: false,
        Culture: '',
        titles: ['Lord of Dragonstone', ' King of Westeros'],
        aliases: ['The King in the Narrow Sea', ' The King of the Painted Table', 'The King of Dragonstone', 'The King at the Wall', 'Azor Ahai reborncome again'],
        Born: '264 AC',
        Died: '',
        Father: 986,
        Mother: 230,
        Spouse: 1935,
        Children: [975],
        Allegiances: [],
        Books: [1, 2, 3, 5, 8],
        PovBooks: [],
        PlayedBy: ['Stephen Dillane'],
        TvSeries: ['Season 2', 'Season 3', 'Season 4', 'Season 5'],
    },
    {
        Id: 144,
        name: 'Artys I Arryn',
        src: 'images/arryn_115481.png',
        alt: '',
        house: 'Arryn',
        IsFemale: false,
        Culture: 'Andal',
        titles: ['King of Mountain and Vale', ' Ser'],
        aliases: ['Falcon Knight', 'Winged Knight'],
        Born: ", at Giant's Lance",
        Died: '',
        Father: null,
        Mother: null,
        Spouse: null,
        Children: [],
        Allegiances: [],
        Books: [11],
        PovBooks: [],
        PlayedBy: [''],
        TvSeries: [],
    },
    {
        Id: 16,
        name: "Margaery Tyrell",
        src: 'images/tyrell_115483.png',
        alt: '',
        house: 'Arryn', IsFemale: true, Culture: "Westeros", titles: ["Queen of the Seven Kingdoms"], Aliases: ["The Little Queen", "The Little Rose", "Maid Margaery"], Born: "In 283 AC, at Highgarden", Died: "", Father: null, Mother: null, "Spouse": 862
    },
    {
        Id: 130,
        name: "Arianne Martell",
        src: 'images/martell_115485.png',
        alt: '',
        house: 'Arryn',
        IsFemale: true,
        Culture: "Dornish",
        titles: ["Princess of Dorne"],
        Aliases: []
    },
    {
        Id: 132,
        name: "Arlan of Pennytree",
        src: 'images/Pennytree.png',
        alt: '',
        house: 'Pennytree',
        IsFemale: false,
        Culture: "",
        titles: ["Ser"], Aliases: [], Born: "In or between 149 AC and 153 AC, at Pennytree", Died: "In 209 AC, at the Reach",
    },


]

// Displays Cards
function createCards(playerCards) {
	var cardElement = document.getElementById('cardcontainer')
	
	for (var i = 0; i < playerCards.length; i++) {
		const card = playerCards[i]
		let shrink = card.Id == 132 ? "img-fluid w-75 " : ''
		cardElement.innerHTML +=
			`<div id="${card.Id}" class="card-container col-sm-3 col-md-3 col-lg-2 m-2 mt-3" onclick="cardClicked">
			<img class="${shrink}card-image" src=${card.src} alt=${card.alt} width="100%"></img>
			<h3 class=Card-Name">${card.name}</h3>
			<p class="text-card"> House of: ${card.house}</p>
			<p class="text-card"> Titles: ${card.titles}</p>
			<input class="checkbox" id="check-${card.Id}" type='checkbox' hidden name='char'/>
			</div>`
	}
}

createCards(playerCards);

var container = document.getElementsByClassName('card-container');
for (const i of container) {
  i.addEventListener("click", cardClicked);
}

function cardClicked() {
    const colors = ["#70A6CE", "#FF8428"];

    let box = document.getElementById('check-' + this.id);
    box.checked = !box.checked;
    let boxes = document.getElementsByClassName('checkbox');
    let checked = 0;
    for (const i of boxes) {
        if (i.checked) {
            this.style.outline = "8px solid  " + colors[checked];
            checked++
        }
    }
    if (checked <= 2) {
        if (box.checked) {

        } else {
            this.style.outline = "";
            this.style.border = "4px solid white";
        }
    } else {
        box.checked = !box.checked;
        alert("Only 2 PLAYER can participate in the battle!")
    }
}

var PLAYER = [];
document.getElementById('startbtn').addEventListener('click', () => {
    PLAYER = [];
    let boxes = document.getElementsByClassName('checkbox');
    let checked = 0;
    for (const i of boxes) {
        if (i.checked) {
            checked++;
            PLAYER.push({ Id: i.id.replace("check-", "") });
        }
    }
    if (checked == 2) {
        document.getElementById('cardselection').remove();
        startGame();
    } else {
        alert('Please select 2 Characters to start the battle!')
    }
})


function startGame() {
    playerCards.forEach((val) => {
        for (let i = 0; i < 2; i++) {
            if (val.Id == PLAYER[i].Id) {
                PLAYER[i].name = val.name;
                PLAYER[i].src = val.src;
                var play = PLAYER[i].name;
            }
        }
    })

    PLAYER[0].position = 0;
    PLAYER[1].position = 0;
    
    window.localStorage.setItem('player', JSON.stringify(PLAYER));
    window.location.href = "game.html"
}


