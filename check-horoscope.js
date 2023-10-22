// Javascript Functions

// Array elements with various signs, description and Images
const Horoscope = [
  {
    SignName: "Aquarius",
    SignDescription:
      "Aquarius is known for its humanitarianism and altruism. You are often the first to lend a helping hand when someone is in need and are always ready to fight for a cause you believe in. Aquarians are also known for their progressive thinking, placing you ahead of the curve when it comes to new ideas and trends. However, your independent streak can sometimes make you seem aloof or uninterested when in reality, you are just a deep thinker who needs time to process everything around you.",
    SgnImage: "Assets/ZodiacSign/AquariusSign.png",
  },
  {
    SignName: "Pisces",
    SignDescription:
      "You belong to the twelfth house of the Zodiac circle, Pisces. You are usually intuitive, trusting, loving and creative. You are a very compassionate and caring person, generous with your time and resources, and always ready to lend a listening ear or a helping hand to those less fortunate than yourself - one of the most admirable qualities of Pisces. You are very sensitive to the needs of others and are always willing to lend a helping hand, even if it means making personal sacrifices. You are also very intuitive and have a strong sixth sense.",
    SgnImage: "Assets/ZodiacSign/PiscesSign.png",
  },
  {
    SignName: "Aries",
    SignDescription:
      "Courageous, energetic, competitive and pioneering - that's what you are when you belong to the first house of the Zodiac circle 'Aries'. And undoubtedly, you are gifted with natural leadership qualities. As a member of the cardinal fire sign, you are also blessed with an abundance of energy and enthusiasm for life. You are always up for anything, and your impulsive nature means you are always ready to take risks. ",
    SgnImage: "Assets/ZodiacSign/AriesSign.png",
  },
  {
    SignName: "Taurus",
    SignDescription:
      "You are a member of the second sign of the zodiac, and just like the Bull that represents this zodiac sign, people born under the sign of Taurus are often very stubborn and determined. You are a Taurus, which also means that you are loyal, dependable, very sensual, and you crave and enjoy the good things in life. Being a fixed earth sign, Taurus represents an enduring, practical reality.",
    SgnImage: "Assets/ZodiacSign/TaurusSign.png",
  },
  {
    SignName: "Gemini",
    SignDescription:
      " As a Gemini, you are known for being intelligent, adaptable, and curious. You are also known for being able to see both sides of every issue.Gemini are always up for a good debate and are not afraid to voice your opinion. You are a quick thinker, and you are always on the go. You are also known for being a bit of a social butterfly. You enjoy being around people and are always up for a good time.",
    SgnImage: "Assets/ZodiacSign/GeminiSign.png",
  },
  {
    SignName: "Cancer",
    SignDescription:
      "As a cancer, you are ruled by your emotions. You are a natural nurturer and care deeply for those around you. You tend to be a private person, and you like to keep your thoughts and feelings to yourself. You can be moody and sensitive, and you sometimes have a hard time dealing with change. But overall, you are a kind, loving, and generous person.",
    SgnImage: "Assets/ZodiacSign/CancerSign.png",
  },
  {
    SignName: "Leo",
    SignDescription:
      "As a Leo native, born between July 23 and August 22, you are known for your courage, confidence, and charisma - just like the powerful, regal Lion that represents the zodiac. Leo, the fifth sign of the zodiac, is ruled by the Sun. Leo is a Fire sign; like all Fire signs, you are passionate, dynamic, and expressive. Leo is also a Fixed sign, which means you are loyal, reliable, and hard-working.",
    SgnImage: "Assets/ZodiacSign/LeoSign.png",
  },
  {
    SignName: "Virgo",
    SignDescription:
      "You know the expression, if you want something done, give it to a busy person? Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
    SgnImage: "Assets/ZodiacSign/VirgoSign.png",
  },
  {
    SignName: "Libra",
    SignDescription:
      "Being a Libra means, you're probably always striving to create harmony in your life and the lives of those around you. You're a natural diplomat and always try to see both sides of every issue. You're also a gifted artist and may enjoy using your creativity to bring beauty into the world.",
    SgnImage: "Assets/ZodiacSign/LibraSign.png",
  },
  {
    SignName: "Scorpio",
    SignDescription:
      "Scorpio, the eighth sign of the zodiac, is a Fixed Water sign ruled by Mars and Pluto. As a Scorpio, you are probably aware of your well-known reputation: you’re intense, passionate, and can be a little bit intimidating to others. You’re also known for being secretive, resourceful, and investigative.As a scorpio, you know all about your strong and intense persona and you are not afraid of confrontation, and not one to shy away from a challenge. You’re also fiercely loyal and protective of those you love.",
    SgnImage: "Assets/ZodiacSign/ScorpioSign.png",
  },
  {
    SignName: "Sagittarius",
    SignDescription:
      "Sagittarians, you are known for you openness and direct speech. While this can be seen as a positive trait, it can also be misunderstood by others. You are often seen as blunt or insensitive, when in reality you are just being honest and that direct speech is in total innocence. This directness can sometimes be off-putting to others, but it is also one of the things that make you guys so likeable.",
    SgnImage: "Assets/ZodiacSign/SagittariusSign.png",
  },
  {
    SignName: "Capricorn",
    SignDescription:
      "Like the goat that represents your sign, Capricorns are strong, sure-footed, hard-working, and determined. You are ambitious and goal-oriented and will stop at nothing to achieve what you set out to do, making you very successful in your career. Capricorns are ruled by the planet Saturn. Saturn is a planet of responsibility and hard work. It is also a planet of limitations and restrictions.",
    SgnImage: "Assets/ZodiacSign/CapricornSign.png",
  },
  {
    SgnImage: "Assets/image-ring.png",
  },
];
// Declaring Global Variable
var cancelButton = document.querySelector(".cancelMe");
var popUp = document.querySelector(".Popup");

const getValues = () => {
  let formInput = document.querySelector(".content__left--form");

  // HANDLING FORMS
  formInput.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameInput = document.querySelector("#EnterName").value;
    var monthInput = document.querySelector("#month").value;
    var dayInput = document.querySelector("#day").value;
    var personName = document.getElementById("PopUp_Header-text");
    var zodiacImage = document.querySelector("#SignImage");
    var signTitle = document.querySelector("#sign_Title");
    var description = document.querySelector("#Sign_description");

    // If Condition Statements to specify input
    if (
      (monthInput == 1 && dayInput >= 20 && dayInput <= 31) ||
      (monthInput == 2 && dayInput <= 18)
    ) {
      zodiacImage.setAttribute("src", Horoscope[0].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[0].SignName;
      description.innerHTML = Horoscope[0].SignDescription;
    } else if (
      (monthInput == 2 && dayInput >= 19 && dayInput <= 31) ||
      (monthInput == 3 && dayInput <= 20)
    ) {
      zodiacImage.setAttribute("src", Horoscope[1].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[1].SignName;
      description.innerHTML = Horoscope[1].SignDescription;
    } else if (
      (monthInput == 3 && dayInput >= 21 && dayInput <= 31) ||
      (monthInput == 4 && dayInput <= 19)
    ) {
      zodiacImage.setAttribute("src", Horoscope[2].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[2].SignName;
      description.innerHTML = Horoscope[2].SignDescription;
    } else if (
      (monthInput == 4 && dayInput >= 20 && dayInput <= 30) ||
      (monthInput == 5 && dayInput <= 20)
    ) {
      zodiacImage.setAttribute("src", Horoscope[3].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[3].SignName;
      description.innerHTML = Horoscope[3].SignDescription;
    } else if (
      (monthInput == 5 && dayInput >= 21 && dayInput <= 31) ||
      (monthInput == 6 && dayInput <= 20)
    ) {
      zodiacImage.setAttribute("src", Horoscope[4].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[4].SignName;
      description.innerHTML = Horoscope[4].SignDescription;
    } else if (
      (monthInput == 6 && dayInput >= 21 && dayInput <= 30) ||
      (monthInput == 7 && dayInput <= 22)
    ) {
      zodiacImage.setAttribute("src", Horoscope[5].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[5].SignName;
      description.innerHTML = Horoscope[5].SignDescription;
    } else if (
      (monthInput == 7 && dayInput >= 23 && dayInput <= 31) ||
      (monthInput == 8 && dayInput <= 22)
    ) {
      zodiacImage.setAttribute("src", Horoscope[6].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[6].SignName;
      description.innerHTML = Horoscope[6].SignDescription;
    } else if (
      (monthInput == 8 && dayInput >= 23 && dayInput <= 31) ||
      (monthInput == 9 && dayInput <= 22)
    ) {
      zodiacImage.setAttribute("src", Horoscope[7].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[7].SignName;
      description.innerHTML = Horoscope[7].SignDescription;
    } else if (
      (monthInput == 9 && dayInput >= 23 && dayInput <= 30) ||
      (monthInput == 10 && dayInput <= 22)
    ) {
      zodiacImage.setAttribute("src", Horoscope[8].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[8].SignName;
      description.innerHTML = Horoscope[8].SignDescription;
    } else if (
      (monthInput == 10 && dayInput >= 23 && dayInput <= 31) ||
      (monthInput == 11 && dayInput <= 21)
    ) {
      zodiacImage.setAttribute("src", Horoscope[9].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[9].SignName;
      description.innerHTML = Horoscope[9].SignDescription;
    } else if (
      (monthInput == 11 && dayInput >= 22 && dayInput <= 30) ||
      (monthInput == 12 && dayInput <= 21)
    ) {
      zodiacImage.setAttribute("src", Horoscope[10].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[10].SignName;
      description.innerHTML = Horoscope[10].SignDescription;
    } else if (
      (monthInput == 12 && dayInput >= 22 && dayInput <= 31) ||
      (monthInput == 1 && dayInput <= 19)
    ) {
      zodiacImage.setAttribute("src", Horoscope[11].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you zodiac sign is`;
      signTitle.innerHTML = Horoscope[11].SignName;
      description.innerHTML = Horoscope[11].SignDescription;
    } else {
      zodiacImage.setAttribute("src", Horoscope[12].SgnImage);
      personName.innerHTML = `Hi ${nameInput}, you have enter wrong birthdate. Please try angain.`;
    }
  });
};

// POPUP FUNCTION
function showMe() {
  popUp.classList.add("open-PopUp");
}
function hideMe() {
  cancelButton.classList.remove("open-PopUp");
}
getValues();
