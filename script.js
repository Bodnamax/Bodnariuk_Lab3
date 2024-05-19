let posts = [
    {
        id: 1,
        title: "Ultramarines",
        description: "By 899.M30, the Ultramarines numbered around 166,000 Astartes, which stood them in the forefront of their peers. With the loss of 50,000 Legionaries sustained during the Third Rangdan Xenocide, the Dark Angels no longer secured primacy over their fellow Legions and had fallen in number and evened this figure. Following the dissolution and/or destruction of the II and XI Space Marine Legions, the ranks of the Ultramarines supposedly swelled to approximately 250,000 Astartes, making them the largest Legion at the start of the Horus Heresy.",
        image: "media\\ultramarine.jpg",
        category: "Loyalists",
        amount: "166000"
    },
    {
        id: 2,
        title: "Alpha Legion",
        description: "Exact figures for the martial strength of the Alpha Legion at the outset of the wars of the Horus Heresy are impossible to obtain. Sources and estimates vary wildly, some making extravagant claims which may both overestimate or undervalue the Alpha Legion's manpower. Most contemporaneous accounts around the time of the Drop Site Massacre put the Alpha Legion at between 120,000 and 130,000 Astartes strong, placing it within the middle tier of Legion strengths. Some theorists have pointed the figure as far lower, somewhere in the 90,000 range based upon the largest concentration of Alpha Legion forces ever seen in operation in a single theatre. With hindsight and diligent corroboration however, evidence of multiple simultaneous battle-groups operating in far distant locales suggests a far higher figure than either of these estimates, well into the range of 180,000 Legionaries which, if accurate, would make it one of the most formidable Legions in sheer size alone, a factor unguessed by both sides of the interstellar civil war that was to follow.",
        image: "media\\alpha legion.jpg",
        category: "Traitors",
        amount:"180000"
    },
    {
        id: 3,
        title: "Dark Angels",
        description: "Once the most numerous and powerful of the Space Marine Legions, conservative estimates placed the Dark Angels Legion at approximately 200,000 Legionaries at the beginning of the Great Crusade. Sadly, their numbers would be depleted and their primacy ended by solar decades of savage warfare, particularly in the wars of the Rangdan Xenocides, one of the most apocalyptic campaigns of the Great Crusade. They suffered massive casualties holding the line during the Third Rangdan Xenocide; the blood of 50,000 Space Marines was spent in preventing the destruction of perhaps the entire northern Imperium by the alien menace from the outer darkness.",
        image: "media\\DarkAngels.png",
        category: "Loyalists",
        amount:"200000"
    },
    {
        id: 4,
        title: "Iron Warriors",
        description: "At the time of the outbreak of the Horus Heresy, the Iron Warriors Legion is estimated to have had an active strength of between 150,000 and 180,000 Astartes, along with a very substantial war fleet of over a hundred capital class vessels. More accurate assessment than this is, however, impossible given the considerable portion of sub-deployments and garrisons that were maintained by the Legion scattered across the Imperium and its increasingly isolationist tendencies in the years before the civil war. It is believed that the Legion had further accelerated its indoctrination and recruiting program, as well as local shipbuilding at Olympia in the lead-up to the rebellion, and so the lower division of these estimates may indeed be erroneous.",
        image: "media\\iron warrior.jpg",
        category: "Traitors",
        amount:"180000"
    },
    {
        id: 5,
        title: "Blood Angels",
        description: "Approximately 120,000 Astartes estimated at the Legion's peak.",
        image: "media\\BloodAngels.png",
        category: "Loyalists",
        amount:"120000"
    },
    {
        id: 6,
        title: "Iron Hands",
        description: "In excess of 113,000 Astartes at the start of the Horus Heresy. Following the disaster of the Drop Site Massacre on Istvaan V, the X Legion was reduced to a mere shadow of its former strength. Exact estimates are unknown.",
        image: "media\\iron hands.png",
        category: "Loyalists",
        amount:"113000"
    },
    {
        id: 7,
        title: "Imperial Fists",
        description: "The strength of the Imperial Fists was never measured in large numbers. Though not small, their tallies of warriors during the Great Crusade never rose above 100,000 Astartes. At the time of the withdrawal to Terra, the Legion records show that the Temple held the majority of its living warriors, although such a number cannot be taken as accurate. The vagaries of Warp travel, Astropathic communication and the volume of space across which the Great Crusade was fought means that all that is certain is that this tally is nothing but plausible estimation.",
        image: "media\\imperial fists.png",
        category: "Loyalists",
        amount:"100000"

    },
    {
        id: 8,
        title:"Sons of Horus",
        description: "130,000-170,000 Astartes during the latter days of the Great Crusade; approximately 70,000-110,000 Legionaries following the losses sustained during the Isstvan III Atrocity. Heavily engaged on the surface of Istvaan III, it is estimated that some 30,000 of the Sons of Horus were dead or unaccounted for in the aftermath of that battle",
        image: "media\\Sons Of Horus.PNG",
        category: "Traitors",
        amount:"110000"
    },
    {
        id: 9,
        title:"World Eaters",
        description: "150,000 Astartes estimated at the XII Legion's peak. It is commonly estimated that of all the Legions that had fought at Istvaan III in the purge of the Loyalist faction within their ranks, it had been the World Eaters who had suffered the greatest casualties, with well over 35,000 World Eaters Legionaries believed to have met their deaths on both sides. Aside from the many wounded, it is recorded that a number had succumbed entirely during the protracted fighting to an insane bloodlust and had to be forcibly restrained and removed back to the World Eaters fleet for containment",
        image: "media\\WorldEaters.png",
        category: "Traitors",
        amount:"150000"
    },
    {
        id: 10,
        title:"Word Bearers",
        description: "Exact numbers unknown; approximately 140,000 Astartes at the time of the Drop Site Massacre, though following their rebukement at Khur, the XVII Legion had grown to far greater strength than was originally reported.",
        image: "media\\WordBearers.png",
        category: "Traitors",
        amount:"140000"
    },
    {
        id: 11,
        title:"Emperor's Children",
        description: "110,000 Astartes during the latter days of the Great Crusade; approximately 50,000 Traitor Legionaries survived the Istvaan III Atrocity. No reliable account exists of the fatalities suffered by the III Legion during the excision of its Loyalist elements on Istvaan III, but it is believed to have been proportionally very high.",
        image: "media\\EmperorsChildren.PNG",
        category: "Traitors",
        amount:"50000"
    },
    {
        id: 12,
        title:"Space Wolves",
        description: "At the time of the Great Crusade and the Horus Heresy, the VI Legion comprised approximately 95,000 to 100,000 Legionaries.",
        image: "media\\SpaceWolves.png",
        category: "Loyalists",
        amount:"100000"
    },
    {
        id: 13,
        title:"Death Guard",
        description: "95,000 Astartes at its peak. With the conclusion of the bitter fighting on Istvaan III, it is estimated that the XIV Legion had been reduced by well over 25,000 casualties, counting both the stubborn Terran Loyalists, betrayed to their deaths in the ash-mantled ruins of Istvaan III's Choral City, and Mortarion's sons of Barbarus whose lives had been spent to purchase their demise.",
        image: "media\\DeathGuard.png",
        category: "Traitors",
        amount:"95000"
    },
    {
        id: 14,
        title:"Thousand Sons",
        description: "Estimated total strength of perhaps 80,000-90,000 Legionaries at the time of the Fall of Prospero in 004.M31. 62,000 were present on Prospero by judgement of after-action reports (many of which are contradictory). Apocryphal sources state that approximately 1,242 Traitor Legionaries supposedly survived the massacre by the Space Wolves to escape to the Planet of the Sorcerers in the Eye of Terror.",
        image: "media\\ThousandSons.png",
        category: "Traitors",
        amount:"90000"
    },
    {
        id: 15,
        title:"Salamanders",
        description: "Total number unknown; approximately 89,000 Astartes at the end of the Great Crusade. 83,000 Legionaries deployed with their Primarch Vulkan to Isstvan V. During the Drop Site Massacre, the XVIII Legion suffered nearly a total loss, rated by some sources as high as 98% of the Legion's Space Marine personnel. However, other detachments such as the garrison maintained at Geryon Deep and the Castellan of Prometheus' forces were comprised of about 2,000 to 3,000 total Astartes, alongside the full intake of Salamanders Neophytes in training on Prometheus. There also were several line companies of the Salamanders Legion on detached deployment elsewhere at the time of the Drop Site Massacre, leaving the total number of the XVIII Legion's effectives after the Drop Site Massacre unknown.",
        image: "media\\Salamanders.png",
        category: "Loyalists",
        amount:"89000"
    },
    {
        id: 16,
        title:"Raven Guard",
        description: "When the Raven Guard committed to the Istvaan V drop, they did so in numbers approaching their full strength, just under 80,000 Legionaries, with all assets, both surface and spaceborne, in attendance. The Raven Guard were to lose nearly 75,000 Astartes during the betrayal known as the Istvaan V Drop Site Massacre, and by the end of the ninety-eight solar days that followed, could muster but a fraction of their former strength. Leaving aside these unknown numbers operating alone in the outer darkness, the Raven Guard barely numbered around 4,000 effectives, including those despatched to garrison Deliverance. For the first time in their glorious history the Raven Guard were truly laid low.",
        image: "media\\RavenGuard.png",
        category: "Loyalists",
        amount:"4000"
    },
    {
        id: 17,
        title:"Night Lords",
        description: "At the time of the Drop Site Massacre, the Night Lords were estimated to comprise slightly over 90,000 Legionaries, though others put their number closer to 120,000 Astartes. Following their campaign against the Dark Angels in the Thramas Sector, their numbers had dwindled to an estimated 10,000 Legionaries. This reduced number comprised the VIII Legion during the remainder of the Horus Heresy.",
        image: "media\\Night Lords.PNG",
        category: "Traitors",
        amount:"120000"
    },
    {
        id: 18,
        title:"White Scars",
        description: "The V Legion is believed to have comprised 95,000 Astartes at the end of the Great Crusade, making it one of the smaller Legions.",
        image: "media\\whitescars.jpg",
        category: "Loyalists",
        amount:"95000"
    },
]

function loadPosts(category){
    let container = document.getElementById("container");
    let postsHtml = "";
    let postsFiltered = [];
    if(category){
        postsFiltered = posts.filter(elem => elem.category === category);
    }else{
        postsFiltered = posts;
    }
    postsFiltered.forEach(elem => {
        let postHtml = `<div class="card"><p>${elem.title}</p><image src="${elem.image}"/><p>${elem.description}</p><button id="${elem.id}" class="ds" onclick="Selected(${elem.id})"><img src="media/Tzeentch.png"  class="df"></div>`;
        postsHtml += postHtml;
    })
    container.innerHTML = postsHtml;
}
function loadAllPosts() {
    loadPosts();
}





const modalAd = document.getElementById('modal-ad');
const closeButton = document.getElementById('close-button');

function showModalAd() {
    modalAd.style.display = 'block';
  }
  
  
  function hideModalAd() {
    modalAd.style.display = 'none';
  }
  
  
  closeButton.addEventListener('click', hideModalAd);
  
  
  setTimeout(() => {
    showModalAd();
  
    let remainingTime = 5; 
  
    const timerFunction = () => {
      remainingTime--;
  
      closeButton.textContent = `Understood (${remainingTime})`;
  
      closeButton.disabled = true;
      if (remainingTime === 0) {
        closeButton.disabled = false;
        return;
      }
  
      setTimeout(timerFunction, 1000);
    };
  
    timerFunction();
  }, 5000);
  var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value;
slider.oninput = function () {

    output.innerHTML = this.value;
}
let selectedItems = [];

let isSubscribed = false;
let i = 0;
 function loadPosts1() {
    let values = document.getElementById("myRange").value;

    let container = document.getElementById("container");
    let postsHtml = "";
    let postsFiltered = [];
    if (values) {
        postsFiltered = posts.filter(elem => elem.amount <= values);
    } else {
        postsFiltered = posts;
    }
    postsFiltered.forEach(elem => {
        i++;
        let postHtml = `<div class="card"><p>${elem.title}</p><image src="${elem.image}"/><p>${elem.description}</p><button id="${elem.id}" class="ds" onclick="Selected(${elem.id})"><img src="media/Tzeentch.png" class="df"></div>`;
        postsHtml += postHtml;
    })
    container.innerHTML = postsHtml;
    console.log(values);

}
function Selected(id) {
    var buttonID = id;
    let containerBasket = document.getElementById("containerBasket");
    let postsHtml = "";
    let postsFiltered = [];
    let i = 0;
    let buton = document.getElementById(id);
    buton.style.display = "none";
    selectedItems.push(posts.find(p => p.id == buttonID));

    selectedItems.forEach(elem => {
        let postHtml = `<div class="card" id="cart-${elem.id }"><p class="card-amount">${elem.amount} <button id="${elem.id}" class="ds" onclick="remove_card(${elem.id})"><img src="media/crossed.png"  class="df"></button></p><h3 class="card-title">${elem.title}</h3><p><image src="${elem.image}"/>${elem.description}</p></div>`;
        postsHtml += postHtml;
    })
    containerBasket.innerHTML = postsHtml;
}
let basketElement = document.getElementById("basket-modal");
function basketDisplay() {
    drawChart();
    basketElement.style.display = "block";

}
function closeModalBasket() {

    basketElement.style.display = "none";
}
function remove_card(id){
    let buton = document.getElementById(id);
    buton.style.display = "block";
    selectedItems = selectedItems.filter(x => x.id !== id);
    var parent = document.getElementById("containerBasket");
    var child = document.getElementById("cart-" + id);
    parent.removeChild(child);
    drawChart();
}
function drawChart() {
    const ctx = document.getElementById('myChart');
    let chartStatus = Chart.getChart("myChart"); 
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    let category = selectedItems.map(x => x.category);
    let categoryUnique = [...new Set(category)];
    let data = categoryUnique.map(categor =>
    ({
        'count': category.filter(y => y == categor).length,
        'year': categor
    }));

    let dataLables = {
        datasets: [{
            data: data.map(d => d.count)
        }],

        labels: data.map(d => d.year)
    };

    new Chart(ctx, {
        type: 'doughnut',
        data: dataLables
    });
}
window.onscroll = function() {
    let percentageScroll = (window.scrollY / window.innerHeight) * 100;
    if(percentageScroll > 10){
        let buttonScroll = document.getElementById("scroll-up-button");
        buttonScroll.style.display = "block";
    } else{
        let buttonScroll = document.getElementById("scroll-up-button");
        buttonScroll.style.display = "none";
    }
};

function scrollUp(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}