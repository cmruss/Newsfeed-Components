/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [{
        title: 'Lambda School Students: "We\'re the best!"',
        date: 'Nov 5th, 2018',
        firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

        secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

        thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
    },
    {
        title: 'Javascript and You, ES6',
        date: 'May 7th, 2019',
        firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

        secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

        thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
    },
    {
        title: 'React vs Angular vs Vue',
        date: 'June 7th, 2019',
        firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

        secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

        thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
    },
    {
        title: 'Professional Software Development in 2019',
        date: 'Jan 1st, 2019',
        firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

        secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

        thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
    },

    {
        title: 'Keep Calm and Pommy Ipsum',
        date: 'Oct 30th, 2019',
        firstParagraph: `Pommy ipsum doing my head in the old bill old chap, codswallop slappers taking the mick Northeners, get away with ya willy tally-ho. How's your father jolly hockey sticks chav and thus scarper a right toff sausage roll, cheesed off narky numbskull some mothers do 'ave 'em. Lost the plot whizz odds and sods what a load of cobblers macca on't goggle box bobby rumpy pumpy skive, football cottage pie jolly whizz hedgehog in a pickle conked him one on the nose. Bloody mary scones Prince Charles a bottle of plonk leisurely, old chap one would like ey up chuck, grub's up picalilly double dutch.`,

        secondParagraph: `Blummin' easy peasy sausage roll every fortnight squirrel biscuits lost her marbles chav, nigh sweets jolly good bovver boots pikey fancied a flutter, scarper it's just not cricket spend a penny ridicule treacle baffled. Fork out bit of a Jack the lad rather smeg conked him one on the nose Geordie we'll be 'avin less of that in the jacksy, River Song muck about flabbergasted driving a mini upper class. Horses for courses trouble and strife marvelous scally pulled out the eating irons grab a jumper it's the bees knees cheerio could murder a pint the black death, off t'shop Kate and Will middle class twiglets rivetting stuff curtain twitching bog roll old chap.`,

        thirdParagraph: `Ey up a diamond geezer completely starkers golly gosh down the village green, naff unhand me sir treacle, knackered tosser blummin'. On his tod ridicule throw a paddy got a lot of brass round our gaff leisurely therewith her Majesty's pleasure barmy, Elementary my dear Watson toad in the whole on't goggle box bottled it fish fingers and custard and we all like figgy pudding. Make a brew what a load of cobblers knee high to a grasshopper i'll be a monkey's uncle I could reet fancy a bloody shambles ridicule porky-pies Big Ben, pants cheerio bit of a div knows bugger all about nowt Big Ben. Up at the crack of dawn completely starkers muck about naff off nutter absolute twoddle, yorkshire pudding who brought loaf supper up North.`
    },
    {
        title: 'The Absurdity of Expression: Nihilism in the works of McLaren',
        date: 'Oct 30th, 2019',
        firstParagraph: `If one examines nihilism, one is faced with a choice: either reject cultural
      discourse or conclude that language is used in the service of sexism, given
      that the premise of neoconceptual desituationism is invalid. It could be said
      that Debord uses the term ‘nihilism’ to denote not appropriation, but
      neoappropriation. Lyotard suggests the use of capitalist preconstructivist
      theory to analyse and modify narrativity.`,

        secondParagraph: `But Marx’s critique of nihilism states that context must come from the
      masses, but only if language is interchangeable with truth. Derrida suggests
      the use of neoconceptual desituationism to modify narrativity. 
      However, the subject is interpolated into a nihilism that includes reality
      as a reality. Baudrillard uses the term ‘postconstructivist deappropriation’ to
      denote the fatal flaw, and eventually the futility, of dialectic class. 
      Therefore, any number of discourses concerning not narrative as such, but
      prenarrative may be found. The stasis of nihilism depicted in Gaiman’s
      Sandman emerges again in Stardust, although in a more
      self-falsifying sense..`,

        thirdParagraph: `In the works of Gaiman, a predominant concept is the distinction between
      ground and figure. However, many theories concerning the neocapitalist paradigm
      of reality exist. The subject is contextualised into a neoconceptual
      desituationism that includes truth as a whole. The main theme of Sargeant’s[1] model of nihilism is the
      role of the participant as poet. In a sense, dialectic sublimation suggests
      that language may be used to reinforce outmoded perceptions of sexuality. Lacan
      promotes the use of nihilism to challenge hierarchy. It could be said that Foucault uses the term ‘cultural discourse’ to denote
      the dialectic, and subsequent futility, of postpatriarchial class. Bataille’s
      essay on the textual paradigm of consensus states that narrative is a product
      of the collective unconscious.`
    }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/
const articles = document.querySelector('.articles');

data.map(data => {
    articles.appendChild(createArticle(data.title, data.date, data.firstParagraph, data.secondParagraph, data.thirdParagraph));
});

function createArticle(title, date, firstParagraph, secondParagraph, thirdParagraph) {

    const article = document.createElement('div');
    const articleTitle = document.createElement('h2');
    const articleDate = document.createElement('p');
    const articleFirstP = document.createElement('p');
    const articleSecondP = document.createElement('p');
    const articleThirdP = document.createElement('p');
    const expand = document.createElement('span');
    const close = document.createElement('span');


    article.appendChild(articleTitle);
    article.appendChild(articleDate);
    article.appendChild(articleFirstP);
    article.appendChild(articleSecondP);
    article.appendChild(articleThirdP);
    article.appendChild(expand);
    article.appendChild(close);


    article.classList.add('article');
    articleDate.classList.add('date');
    expand.classList.add('expandButton');
    close.classList.add('close');

    articleTitle.textContent = title;
    articleDate.textContent = date;
    expand.textContent = `expand/collapse`;
    close.textContent = '\u2716';
    close.style.color = 'grey';
    close.style.fontSize = '12px';
    close.style.cursor = 'pointer';
    articleFirstP.textContent = firstParagraph;
    articleSecondP.textContent = secondParagraph;
    articleThirdP.textContent = thirdParagraph;

    var toggleDisplay = function(item) {
        if (item.style.display === 'none') {
            return item.style.display = 'block';
        } else {
            return item.style.display = 'none';
        }
    };

    expand.addEventListener('click', () => {
        article.classList.toggle('article-open');
    })

    close.addEventListener('click', () => {
        toggleDisplay(article)
    })

    return article;
}