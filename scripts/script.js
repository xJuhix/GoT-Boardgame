var playerCards = [
    {
			Id: 238,
			name: 'Cersei Lannister',
			src: 'images/lannister.png',
			alt: '',
			house: 'Lannister',
			titles: ['Lady of Casterly Rock', ' Queen Regent'],
    },
    {
			Id: 583,
			name: 'Jon Snow',
			src: 'images/targaryen.png',
			alt: '',
			house: 'Targaryen',
			titles: ["Lord Commander of the Night's Watch"],
    },
    {
			Id: 148,
			name: 'Arya Stark',
			src: 'images/stark.png',
			alt: '',
			house: 'Stark',
			titles: ['Princess'],  
    },
    {
			Id: 346,
			name: 'Edmure Tully',
			src: 'images/tully.png',
			alt: '',
			house: 'Tully',
			titles: ['Ser', ' Lord of Riverrun'],
    },
    {
			Id: 1022,
			name: 'Theon Greyjoy',
			src: 'images/greyjoy.png',
			alt: '',
			house: 'Greyjoy',
			titles: ['Prince of Winterfell', ' Lord of the Iron Islands'],
    },
    {
			Id: 1963,
			name: 'Stannis Baratheon',
			src: 'images/baratheon.png',
			alt: '',
			house: 'Baratheon',
			titles: ['Lord of Dragonstone', ' King of Westeros'],
       
    },
    {
			Id: 144,
			name: 'Artys I Arryn',
			src: 'images/arryn.png',
			alt: '',
			house: 'Arryn',
			titles: ['King of Mountain and Vale', ' Ser'],
    },
    {
			Id: 16,
			name: "Margaery Tyrell",
			src: 'images/tyrell.png',
			alt: '',
			house: 'Arryn',
			titles: ["Queen of the Seven Kingdoms"]
		},
		{
			Id:600,
			name:"Joyeuse Erenford",
			src: 'images/erenford.png',
			alt:'',
			house: 'Bar Emmon',
			titles:["Lady of the Crossing"],
		},

		{
			Id:332,
			Name: "Duram Bar Emmon",
			src: 'images/baremmon.png',
			alt:'',
			house: 'Bar Emmon',
			titles:["Lord of Sharp Point"],
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


