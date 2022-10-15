// Javascript Functions

// Array elements with various signs, description and Images
const Horoscope = [
    {
        SignName: "Aquarius",
        SignDescription: 'Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place. ',
        SgnImage: "Assets/ZodiacSign/AquariusSign.png",
    },
    {
        SignName: "Pisces",
        SignDescription: "If you looked up the word psychic in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. ",
        SgnImage: "Assets/ZodiacSign/PiscesSign.png"
    },
    {
        SignName: "Aries",
        SignDescription: "The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!  ",
        SgnImage: "Assets/ZodiacSign/AriesSign.png"
    },
    {
        SignName: "Taurus",
        SignDescription: "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
        SgnImage: "Assets/ZodiacSign/TaurusSign.png"
    },
    {
        SignName: "Gemini",
        SignDescription: "Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!",
        SgnImage: "Assets/ZodiacSign/GeminiSign.png"
    },
    {
        SignName: "Cancer",
        SignDescription: "Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!",
        SgnImage: "Assets/ZodiacSign/CancerSign.png"
    },
    {
        SignName: "Leo",
        SignDescription: "Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.",
        SgnImage: "Assets/ZodiacSign/LeoSign.png"
    },
    {
        SignName: "Virgo",
        SignDescription: "You know the expression, if you want something done, give it to a busy person? Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
        SgnImage: "Assets/ZodiacSign/VirgoSign.png"
    },
    {
        SignName: "Libra",
        SignDescription: "Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.",
        SgnImage: "Assets/ZodiacSign/LibraSign.png"
    },
    {
        SignName: "Scorpio",
        SignDescription: "Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.",
        SgnImage: "Assets/ZodiacSign/ScorpioSign.png"
    },
    {
        SignName: "Sagittarius",
        SignDescription: "Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.",
        SgnImage: "Assets/ZodiacSign/SagittariusSign.png"
    },
     {
        SignName: "Capricorn",
        SignDescription: "What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
        SgnImage: "Assets/ZodiacSign/CapricornSign.png"
    },
    {
        SgnImage: "Assets/image-ring.png",
    },
]
// Declaring Global Variable
var cancelButton = document.querySelector(".cancelMe");
var popUp = document.querySelector(".Popup");


const getValues = () =>{
    let formInput = document.querySelector(".content__left--form");

// HANDLING FORMS
    formInput.addEventListener('submit', function(e){
        e.preventDefault();
        
        var nameInput = document.querySelector("#EnterName").value;
        var monthInput = document.querySelector("#month").value;
        var dayInput = document.querySelector("#day").value;
        var personName =document.getElementById("PopUp_Header-text");
        var zodiacImage = document.querySelector("#SignImage");
        var signTitle = document.querySelector("#sign_Title");
        var description = document.querySelector("#Sign_description");

        // If Condition Statements to specify input
        if((monthInput==1 && dayInput >=20 && dayInput <=31) || 
        (monthInput == 2 && dayInput <=18 )){   
            zodiacImage.setAttribute("src",Horoscope[0].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[0].SignName;
            description.innerHTML=Horoscope[0].SignDescription;
        }
        else if((monthInput==2 && dayInput >=19 && dayInput <=31) || 
        (monthInput == 3 && dayInput <=20 )){
            zodiacImage.setAttribute("src",Horoscope[1].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[1].SignName;
            description.innerHTML=Horoscope[1].SignDescription;
        }
        else if((monthInput==3 && dayInput >=21 && dayInput <=31) || 
        (monthInput == 4 && dayInput <=19 )){
            zodiacImage.setAttribute("src",Horoscope[2].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[2].SignName;
            description.innerHTML=Horoscope[2].SignDescription;
        }
        else if((monthInput==4 && dayInput >=20 && dayInput <=30) || 
        (monthInput == 5 && dayInput <=20 )){
            zodiacImage.setAttribute("src",Horoscope[3].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[3].SignName;
            description.innerHTML=Horoscope[3].SignDescription;
        }
        else if((monthInput==5 && dayInput >=21 && dayInput <=31) || 
        (monthInput == 6 && dayInput <=20 )){
            zodiacImage.setAttribute("src",Horoscope[4].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[4].SignName;
            description.innerHTML=Horoscope[4].SignDescription;
        }
        else if((monthInput==6 && dayInput >=21 && dayInput <=30) || 
        (monthInput == 7 && dayInput <=22 )){
            zodiacImage.setAttribute("src",Horoscope[5].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[5].SignName;   
            description.innerHTML=Horoscope[5].SignDescription;
        }
        else if((monthInput==7 && dayInput >=23 && dayInput <=31) || 
        (monthInput == 8 && dayInput <=22 )){
            zodiacImage.setAttribute("src",Horoscope[6].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[6].SignName;
            description.innerHTML=Horoscope[6].SignDescription;
        }
        else if((monthInput==8 && dayInput >=23 && dayInput <=31) || 
        (monthInput == 9 && dayInput <=22 )){
            zodiacImage.setAttribute("src",Horoscope[7].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[7].SignName;
            description.innerHTML=Horoscope[7].SignDescription;
        }
        else if((monthInput==9 && dayInput >=23 && dayInput <=30) || 
        (monthInput == 10 && dayInput <=22 )){
            zodiacImage.setAttribute("src",Horoscope[8].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[8].SignName;
            description.innerHTML=Horoscope[8].SignDescription;
        }
        else if((monthInput==10 && dayInput >=23 && dayInput <=31) || 
        (monthInput == 11 && dayInput <=21 )){
            zodiacImage.setAttribute("src",Horoscope[9].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[9].SignName;
            description.innerHTML=Horoscope[9].SignDescription;
        }
        else if((monthInput==11 && dayInput >=22 && dayInput <=30) || 
        (monthInput == 12 && dayInput <=21 )){
            zodiacImage.setAttribute("src",Horoscope[10].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[10].SignName;
            description.innerHTML=Horoscope[10].SignDescription;
        }
        else if((monthInput==12 && dayInput >=22 && dayInput <=31) || 
        (monthInput == 1 && dayInput <=19 )){
            zodiacImage.setAttribute("src",Horoscope[11].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you zodiac sign is`;
            signTitle.innerHTML = Horoscope[11].SignName;
            description.innerHTML=Horoscope[11].SignDescription;
        }
        else{
            zodiacImage.setAttribute("src",Horoscope[12].SgnImage );
            personName.innerHTML= `Hi ${ nameInput}, you have enter wrong birthdate. Please try angain.`;
        };

    })
}

// POPUP FUNCTION
function showMe(){
    popUp.classList.add("open-PopUp");
 };
 function hideMe(){
    cancelButton.classList.remove("open-PopUp");
 };
getValues();