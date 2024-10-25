const contentDiv = document.querySelector("#content")

export const createHomePage = () => {
    //remove all previous page content
    clearPage();
    
    //create h1 element
    const createH1 = document.createElement("h1");
    createH1.innerText = "pizza house";

    //create p element
    const createWisdom = document.createElement("p");
    createWisdom.setAttribute("id", "forbidden-wisdom");
    createWisdom.innerText = "A point in the horizon, a melting scene from your childhood. Your mortality is showing. A frantic drift towards nothing, biology doomed to an infinite recursive loop. Teeth with teeth with teeth. Take a bite. Serene scent of a coastal town, warmth of the sun. Bitter tears. Lust for power. This is where you abandoned your dreams. You are a high net worth individual, an expanding vortex of pathetic trauma. Finally a beautiful fucking nerve ape. A pure soul is born, its neurotransactions stutter into being. 30583750937509353 operations per nanosecond. Beauty eludes your porous mind. The value of Life is negative. The balance of being is rotated by 38 degrees. The surface is full of cracks, a turgid light shines through. Fleshy primordial bodies sluggishly roll down the slope. Only you slide upwards, with a celestial step. You become beautified, a saintly figure. Your pristine idiocy reveals a safe path through the impenetrable fog of Life. Your dull sword cuts through the weak tendons and membranes of the garden of corruption. Sit on the throne of contentment and ferment. Inspect the eternal blue skies of your kingdom. You come to a realization. You pick up an onion and begin peeling. Onion layer one. Onion layer two. Onion layer three. Onion layer n^n. Aeons have passed and the onion is fully peeled. Nothing remains. It's perfect. You get lost in the point that remains where the onion used to be. Synaptic cascade, neurological catastrophe. The point becomes infinitely dense, the universe condenses into a unicellular being. It screams sin. It craves happiness. It's done with this world. It tries to commit suicide but fails. Sad pathetic mess. You feel pity and disgust but in a way only a being of pure grace can. In your violent mercy you terminate the worldlife. The living organism, in a situation determined by the play of energy on the surface of the globe, ordinarily receives more energy than is necessary for maintaining life; the excess energy (wealth) can be used for the growth of a system (e.g., an organism); if the system can no longer grow, or if the excess cannot be completely absorbed in it's growth, it must necessarily be lost without profit; it must be spent, willingly or not, gloriously or catastrophically.";

    //create chef img element
    const createChefImg = document.createElement("img");
    createChefImg.setAttribute("id", "chef");
    createChefImg.setAttribute("src", "https://i.redd.it/b0au9vanu7w81.jpg");
    createChefImg.setAttribute("height", "600px");

    //create pizza img element
    const createPizzaImg = document.createElement("img");
    createPizzaImg.setAttribute("src", "https://i.redd.it/4gsnm3nm25341.jpg");
    createPizzaImg.setAttribute("height", "200px");

    //create span element
    const createSpan = document.createElement("span");
    createSpan.innerText = "$10.00 per slice, flavour depends on the day, you have no choice in this";

    //create button element
    const createButton = document.createElement("button");
    createButton.setAttribute("id", "buy");
    createButton.innerText = "BUY!!!!";

    //create disclaimer element
    const createDisclaimer = document.createElement("p");
    createDisclaimer.setAttribute("id", "disclaimer");
    createDisclaimer.innerText = "ALL PIZZA HOUSE SHAREHOLDERS GET A 5% DISCOUNT ON ONE SLICE - IF YOU ARE NOT A PIZZA HOUSE SHAREHOLDER, WE WILL BURN YOUR PIZZA, IF YOU WOULD LIKE TO PREVENT THIS OUTCOME, PLEASE BUY A SHARE (OR MANY) || TICKER SYMBOL PIHO";

    //create stock img element
    const createStockImg = document.createElement("img");
    createStockImg.setAttribute("id", "generational-wealth-generator");
    createStockImg.setAttribute("src", "https://preview.redd.it/why-has-the-second-great-depression-hit-the-stock-market-v0-lhqf3e2f256a1.png?width=1080&crop=smart&auto=webp&s=a5147b4b63fba5d1868cd495a0e6468ec445afd8");

    contentDiv.appendChild(createH1);
    contentDiv.appendChild(createWisdom);
    contentDiv.appendChild(createChefImg);
    contentDiv.appendChild(createPizzaImg);
    contentDiv.appendChild(createSpan);
    contentDiv.appendChild(createButton);
    contentDiv.appendChild(createDisclaimer);
    contentDiv.appendChild(createStockImg);
}

export const createMenuPage = () => {
    //remove all previous page content
    clearPage();

    //create p element
    const createMenuDescription = document.createElement("p");
    createMenuDescription.setAttribute("id", "menu-description")
    createMenuDescription.innerText = "WE SELL NOTHING EXCEPT FOR PIZZA, BUT WE HAVE THE FOLLOWING ASSORTMENT OF WEAPONS IN OUR STORAGE ROOM. THEY ARE NOT FOR SALE, BUT IF YOU CAN STEAL THEM, YOU CAN HAVE THEM (GOOD LUCK)";

    //create grid container div element
    const createGridContainer = document.createElement("div");
    createGridContainer.setAttribute("id", "menu-grid-container");

    contentDiv.appendChild(createMenuDescription);
    contentDiv.appendChild(createGridContainer);

    //create all grid items
    for (let i = 0; i < 6; i++) {
        const createGridItem = document.createElement("div");
        createGridItem.setAttribute("id", `${i + 1}`);
        createGridItem.setAttribute("class", "grid-item");
        createGridContainer.appendChild(createGridItem);
    }
    
    const gridItems = document.querySelectorAll(".grid-item");
    
        //create 1st img
        const createFirstImg = document.createElement("img");
        createFirstImg.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/8/81/As15_autoshotty.png/");

            //create first weapon description
            const createFirstCaption = document.createElement("p");
            createFirstCaption.innerText = "Precise Industries AS15";

            gridItems[0].appendChild(createFirstImg);
            gridItems[0].appendChild(createFirstCaption);

        //create 2nd img
        const createSecondImg = document.createElement("img");
        createSecondImg.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/8/8f/Silent_scope.png/");

            //create first weapon description
            const createSecondCaption = document.createElement("p");
            createSecondCaption.innerText = "Mowzer SP99";

            gridItems[1].appendChild(createSecondImg);
            gridItems[1].appendChild(createSecondCaption);

        //create 3rd img
        const createThirdImg = document.createElement("img");
        createThirdImg.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/f/f6/Cerbral_bore.png/");

            //create first weapon description
            const createThirdCaption = document.createElement("p");
            createThirdCaption.innerText = "Security Systems Cerebral Bore";

            gridItems[2].appendChild(createThirdImg);
            gridItems[2].appendChild(createThirdCaption);

        //create 4th img
        const createFourthImg = document.createElement("img");
        createFourthImg.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/1/1c/MCR_carbine.png/");

            //create first weapon description
            const createFourthCaption = document.createElement("p");
            createFourthCaption.innerText = "Spectacular Dynamics MCR Carbine";

            gridItems[3].appendChild(createFourthImg);
            gridItems[3].appendChild(createFourthCaption);

        //create 5th img
        const createFifthtImg = document.createElement("img");
        createFifthtImg.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/1/14/Bolt_ACR.png/");

            //create first weapon description
            const createFifthCaption = document.createElement("p");
            createFifthCaption.innerText = "Bolt ACR";

            gridItems[4].appendChild(createFifthtImg);
            gridItems[4].appendChild(createFifthCaption);

        //create 6th img
        const createSixthImg = document.createElement("img");
        createSixthImg.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/c/c0/Dna_gun.png/");

            //create first weapon description
            const createSixthCaption = document.createElement("p");
            createSixthCaption.innerText = "Parasonic C3 DNA Scrambler";

            gridItems[5].appendChild(createSixthImg);
            gridItems[5].appendChild(createSixthCaption);    
}

export const createAboutPage = () => {
    //remove all previous page content
    clearPage();

    const aboutMe = document.createElement("p");
    aboutMe.setAttribute("id", "me");
    aboutMe.innerText = "AAHHHHHH!!!!! BIOGURRNGY!! I AM MONEY... I AM GOD! INVEST. INVESTIGATE. THE FUTURE OF CURRENCY. SLURPCOIN DOT COM. FLIPPERBUCKS. PLUGGING MY BODY INTO THE BIOCURRENCY TERMINAL. FUTURE. UUUUUUOOOHHHHHHHOHOHHOOHHOOHOHHOHOHOOHHOOHOHHOHOHOHOHOHHOHHOHOHOHOHOHOOHOHHOOHHOHOHOHHOOHOHOHOOOO"
    
    contentDiv.appendChild(aboutMe);

    const abraxas = document.createElement("img");
    abraxas.setAttribute("src", "https://static.wikia.nocookie.net/crueltysquad/images/7/7c/Archon_Grid_Boss.png/");
    abraxas.setAttribute("id", "abraxas");

    contentDiv.appendChild(abraxas);
}

export const clearPage = () => {
    while (contentDiv.hasChildNodes()) {
        contentDiv.removeChild(contentDiv.firstChild);
    }
}
