/**
 * =========================================================================
 * அடியே என் குலசாமியே... ❤️ | Story Configuration & Data File
 * =========================================================================
 * 
 * All story narrative is crafted in cute, lovely, romantic English
 * while preserving the iconic title "அடியே என் குலசாமியே... ❤️".
 */

const STORY_CONFIG = {
  // Couple Information
  names: {
    groom: "Viswajith",
    bride: "Sowmya",
    petNameTamil: "அடியே என் குலசாமியே...",
    petNameTranslit: "Adiye En Kula Saamiyeee...",
    title: "அடியே என் குலசாமியே... ❤️",
    subtitle: "The unexpected love story of Viswajith & Sowmya."
  },

  // Key Milestones
  milestones: {
    officialDate: "August 9",
    goaMonth: "May",
    commitmentYear: "2023",
    startDateIso: "2026-08-09T00:00:00"
  },

  // Audio Settings
  audio: {
    customTrackUrl: "assets/audio/pottala_muttaye.wav",
    trackTitle: "Pottala Muttaye (Acoustic Romance)",
    defaultVolume: 0.18,
    enableWebAudioSynth: true
  },

  // Visual Theme Progression
  theme: {
    darknessQuoteEng: "When my life felt dark and quiet...",
    lightQuoteEng: "You walked in as my brightest light. ❤️"
  },

  // Chapters Data
  chapters: [
    {
      id: "chapter-1",
      number: 1,
      name: "The Opening",
      tagline: "Darkness → The Beginning",
      titleTamil: "அடியே என் குலசாமியே... ❤️",
      titleEng: "Adiye En Kula Saamiyeee...",
      subtitle: "The unexpected love story of Viswajith & Sowmya.",
      textLines: [
        "She was never looking for love.",
        "I wasn't expecting to find mine either.",
        "But one random Instagram request...",
        "Changed everything."
      ],
      ctaText: "Begin Our Story ↓",
      image: "assets/images/sowmya/sowmya_intro.png",
      themeClass: "theme-dark-abyss"
    },
    {
      id: "chapter-2",
      number: 2,
      name: "She Never Wanted Love",
      tagline: "Meet Sowmya • Her Calm World",
      title: "She was never looking for a relationship.",
      subtitle: "Love wasn't something she was searching for.",
      textLines: [
        "A relationship was never part of her plan.",
        "She was content in her own peaceful, independent world.",
        "And somewhere else...",
        "I was about to randomly tap one single button."
      ],
      image: "assets/images/sowmya/sowmya_portrait_1.png",
      themeClass: "theme-dark-glow"
    },
    {
      id: "chapter-3",
      number: 3,
      name: "The Request",
      tagline: "Meet Viswajith • A Regular Clubbing Boy",
      title: "One fine day...",
      highlightQuote: "\"Why not send a follow request?\"",
      viswajithImage: "assets/images/viswajith/viswajith_intro.png",
      viswajithNote: "Just a regular, fun-loving boy who loved music, clubbing, partying, and living life to the fullest with absolutely no plans of settling down.",
      textLines: [
        "Cheering for CSK was my ultimate craze,",
        "And weekends meant lights, beats, and chilling with friends.",
        "I was perfectly happy in my casual world...",
        "Until I decided to send her an Instagram request.",
        "No master plan, no idea what was coming,",
        "But everything beautiful in my life started that day."
      ],
      interactiveType: "instagram-request",
      themeClass: "theme-dark-purple"
    },
    {
      id: "chapter-4",
      number: 4,
      name: "Random Conversations",
      tagline: "Two Strangers",
      title: "At first, we were just two strangers talking.",
      chatMessages: [
        { sender: "viswajith", text: "Hey! Random hello 👋", time: "10:24 PM" },
        { sender: "sowmya", text: "Haha hi! Do I know you? 😄", time: "10:26 PM" },
        { sender: "viswajith", text: "Not yet, but did you watch the CSK match today? 🏏💛", time: "10:28 PM" },
        { sender: "sowmya", text: "Yesss of course! Sanju's entry was pure magic! 💛🔥", time: "10:30 PM" }
      ],
      textLines: [
        "Random conversations.",
        "Random jokes.",
        "Random replies.",
        "Random sweet moments.",
        "But somehow, the random started becoming magical."
      ],
      themeClass: "theme-deep-blue"
    },
    {
      id: "chapter-5",
      number: 5,
      name: "CSK & IPL",
      tagline: "Yellove & Us 💛🏏",
      title: "And then CSK brought us closer.",
      badge: "Whistle Podu 💛 Yellove",
      textLines: [
        "Somehow, cricket gave us more reasons to talk.",
        "More conversations about matches and wickets.",
        "More playful little arguments.",
        "More endless jokes and shared laughter.",
        "More reasons to wait eagerly for each other's texts.",
        "Somewhere between CSK and all those late-night talks...",
        "We started becoming each other's favorite person."
      ],
      themeClass: "theme-csk-gold"
    },
    {
      id: "chapter-6",
      number: 6,
      name: "Goa",
      tagline: "May Memories 🌴",
      title: "Then came May. Then came Goa.",
      storyQuote: "\"That story was just for you, Sowmya.\"",
      viswajithGoaImage: "assets/images/goa/viswajith_goa.png",
      textLines: [
        "I uploaded a story from my trip.",
        "And while flirting with her...",
        "I told her:",
        "\"That story was just for you, Sowmya.\"",
        "I said it playfully.",
        "Maybe even jokingly.",
        "But that day...",
        "Something inside my heart felt different.",
        "There was a warmth and happiness I couldn't explain.",
        "I didn't even understand why.",
        "Maybe that was the exact moment a sweet joke started becoming real."
      ],
      image: "assets/images/goa/goa_story.jpg",
      themeClass: "theme-goa-sunset"
    },
    {
      id: "chapter-7",
      number: 7,
      name: "I Started Seeing Her Differently",
      tagline: "Falling in Love",
      title: "Every time I looked at her...",
      highlightQuote: "I started admiring her.",
      textLines: [
        "I admired her a little more.",
        "I noticed her a little more.",
        "I wanted to know her a little more.",
        "Her smile.",
        "Her expressions.",
        "Her little habits.",
        "Her playful, childish side.",
        "Everything that made her so uniquely her.",
        "This wasn't just flirting anymore.",
        "She was becoming my whole world."
      ],
      image: "", // Removed as per instructions (only intro pages get individual images, rest are in grand collage/background)
      themeClass: "theme-warm-amber"
    },
    {
      id: "chapter-8",
      number: 8,
      name: "I Didn't Want to Waste Time",
      tagline: "The Confession",
      title: "I didn't want to waste time.",
      confessionQuote: "\"I really like you... Can we fall in love?\" ❤️",
      textLines: [
        "I knew what I felt in my heart.",
        "And I didn't want to pretend otherwise.",
        "So I told her:",
        "\"I really like you... Can we fall in love?\"",
        "At first, she thought I was probably joking.",
        "She thought maybe I was just playing around.",
        "But I wasn't.",
        "For the first time, I meant every single word from the bottom of my heart."
      ],
      image: "",
      themeClass: "theme-intense-crimson"
    },
    {
      id: "chapter-9",
      number: 9,
      name: "Her Fear, My Promise",
      tagline: "Unconditional Love",
      title: "She was scared.",
      herFear: "\"My family might not accept us...\"",
      hisPromise: "\"I will wait for you.\"",
      hisPromiseSecond: "\"Until you fall in love with me, I will love you for the both of us.\" ❤️",
      textLines: [
        "I wasn't asking her to force herself to love me.",
        "I wasn't asking her to ignore her fears.",
        "I just wanted her to know...",
        "My love wasn't temporary.",
        "And I was willing to wait.",
        "And I did."
      ],
      themeClass: "theme-quiet-piano"
    },
    {
      id: "chapter-10",
      number: 10,
      name: "She Started Believing Me",
      tagline: "Trust Blossoms",
      title: "Slowly... She started realizing.",
      textLines: [
        "This wasn't a joke.",
        "This wasn't just casual.",
        "This wasn't temporary flirting.",
        "\"He truly and deeply loves me.\"",
        "She saw that I stayed.",
        "She saw that I waited.",
        "She saw that I meant every single word.",
        "And slowly...",
        "She let her heart believe in us."
      ],
      themeClass: "theme-soft-sunrise"
    },
    {
      id: "chapter-11",
      number: 11,
      name: "August 9 ❤️",
      tagline: "The Commitment",
      dateBadge: "AUGUST 9",
      title: "The day we officially became us.",
      timelineRecap: [
        "From one random Instagram request...",
        "To random conversations...",
        "To CSK matches...",
        "To Goa memories...",
        "To sweet flirting...",
        "To real feelings...",
        "To an unbreakable promise..."
      ],
      commitmentText: "On August 9, we committed to each other. ❤️",
      textLines: [
        "The girl who never wanted a relationship...",
        "Became the girl I cannot imagine living a single day without."
      ],
      image: "", // Removed (now shown in Majestic Hero Background and collage)
      themeClass: "theme-celebration-gold"
    },
    {
      id: "chapter-12",
      number: 12,
      name: "I Took Her Home",
      tagline: "Part of My World",
      title: "And then... I took her home.",
      textLines: [
        "Because she wasn't just someone from Instagram anymore.",
        "She wasn't just someone I talked to.",
        "She wasn't just someone I loved.",
        "She was part of my world.",
        "Someone I was proud to bring home.",
        "Someone I wanted in my life forever."
      ],
      image: "",
      themeClass: "theme-golden-warmth"
    },
    {
      id: "chapter-13",
      number: 13,
      name: "From Her Childhood to My World",
      tagline: "Every Version of You",
      title: "Before you became my love...",
      subtitle: "You were just a little girl.",
      stages: [
        { age: "Childhood", label: "The Little Girl You Were", desc: "Laughing, dreaming, growing up, living life without knowing what the future held.", img: "assets/images/childhood/childhood_1.jpg" },
        { age: "Growing Up", label: "The Beautiful Playful Soul", desc: "Forming your kind heart, sweet smile, and adorable childish nature.", img: "assets/images/childhood/childhood_2.png" },
        { age: "Present", label: "The Woman I Fell In Love With", desc: "My light, my best friend, and my entire world.", img: "assets/images/sowmya/sowmya_present.jpg" }
      ],
      finalNote: "I wish I could go back and tell that little girl:\n\"One day, someone is going to be incredibly grateful that you exist.\"",
      themeClass: "theme-nostalgic-sepia"
    },
    {
      id: "chapter-14",
      number: 14,
      name: "The Girl Who Became My Light",
      tagline: "Darkness to Light",
      title: "Before you...",
      contrastDark: "There were dark days. Days that didn't always feel easy.",
      contrastLightEng: "When my world was in the dark, you walked in as my light. ❤️",
      textLines: [
        "You became the happiness I didn't know I was missing.",
        "You became the person I wanted to tell everything to.",
        "You became my comfort and my peace.",
        "You became my favorite person in the entire universe.",
        "Now, without you...",
        "I genuinely don't know how to imagine my life."
      ],
      image: "",
      themeClass: "theme-radiant-gold"
    },
    {
      id: "chapter-15",
      number: 15,
      name: "The Little Things I Love About You",
      tagline: "Why You?",
      title: "Why you?",
      cards: [
        {
          icon: "✨",
          title: "Your Smile",
          quote: "Because sometimes just seeing you happy is enough to make everything in my life feel okay."
        },
        {
          icon: "❤️",
          title: "Your Childish Side",
          quote: "Because I don't just love the mature version of you. I adore every silly, playful little version too."
        },
        {
          icon: "👀",
          title: "Your Expressions",
          quote: "The cute expressions you probably don't even notice are somehow my favorite things in the world."
        },
        {
          icon: "☀️",
          title: "Your Presence",
          quote: "Because even doing absolutely nothing becomes my favorite memory when you are there."
        },
        {
          icon: "💬",
          title: "Becoming My Person",
          quote: "I never planned it. But somehow you became the very first person I want to tell everything to."
        },
        {
          icon: "♾️",
          title: "Everything About You",
          quote: "And honestly, if I start listing every reason I love you, this website might never end."
        }
      ],
      conclusion: "Maybe I don't love you for just one reason.\nMaybe I just love everything that makes you... you.",
      themeClass: "theme-luxury-glass"
    },
    {
      id: "chapter-16",
      number: 16,
      name: "Our Memories",
      tagline: "A Thousand Little Moments",
      title: "Us, in a thousand little moments.",
      galleryPhotos: [
        { src: "assets/images/couple/couple_16_9.jpg", caption: "Viswajith & Sowmya — Our forever beginning", tag: "Us Together" },
        { src: "assets/images/sowmya/sowmya_smile.jpg", caption: "Every smile shared between us", tag: "Pure Grace" },
        { src: "assets/images/childhood/childhood_2.png", caption: "Your silly, cute and playful side", tag: "Childish & Cute" },
        { src: "assets/images/goa/goa_story.jpg", caption: "Cafe Antonio Goa — 'Forget mountains, I got better views for our date'", tag: "May Goa" },
        { src: "assets/images/couple/memory_1.png", caption: "August 9 – The day we became us", tag: "Committed" },
        { src: "assets/images/childhood/childhood_1.jpg", caption: "From that little girl to my forever love", tag: "Little Sowmya" }
      ],
      quotes: [
        "A random request.",
        "A thousand conversations.",
        "A thousand smiles.",
        "A thousand memories.",
        "And hopefully... A lifetime of more."
      ],
      themeClass: "theme-masonry-gallery"
    },
    {
      id: "chapter-17",
      number: 17,
      name: "A Letter from Viswajith",
      tagline: "From My Heart",
      title: "Sowmya, if I could put my heart into words...",
      letterParagraphs: [
        "Sowmya,",
        "If someone had told me that the Instagram request I sent you one day would lead me here, I probably wouldn't have believed them.",
        "You were never looking for love. I wasn't planning something this serious either. We started with random conversations, CSK somehow gave us more reasons to talk, and then somewhere between all the jokes, flirting, and that Goa story, something changed inside me.",
        "What started as fun slowly became one of the most important things in my life.",
        "I started noticing you differently. I started admiring you. I started loving the little things about you. And before I even fully understood what was happening, I knew I didn't want to waste time pretending that what I felt wasn't real.",
        "So I told you.",
        "At first, you thought I was probably joking. But I wasn't.",
        "And when you were scared that things might not work because your family might not accept us, I made you a promise:",
        "\"I will wait for you. Until you fall in love with me, I will love you for the both of us.\"",
        "And I meant it.",
        "I waited because loving you was never something I wanted to force. I just wanted you to know that I was real. That my feelings were real. That I wasn't going anywhere just because things weren't easy.",
        "Then slowly, you believed me.",
        "And on August 9, we became us.",
        "Today, when I look back at everything, it still amazes me.",
        "The girl who never wanted a relationship became the girl I can't imagine my life without.",
        "The girl I randomly sent a request to became my happiness.",
        "The girl I started talking to because of random conversations and CSK became my favourite person.",
        "The girl I jokingly told, 'That story was just for you, Sowmya,' became the person with whom I want to create an entire future.",
        "You came into my life when it felt dark. And somehow... you became my light.",
        "I don't just want more photos with you. I want more birthdays. More stupid fights. More late-night conversations. More adventures. More memories. More years. More versions of us.",
        "I want the kind of future where years from now, we look back at these pictures and laugh about how everything started with one random Instagram request.",
        "I don't know what every chapter of our future will look like. But I know who I want beside me when I find out.",
        "You. Always you.",
        "— Viswajith ❤️"
      ],
      themeClass: "theme-parchment-letter"
    },
    {
      id: "chapter-18",
      number: 18,
      name: "The Future I See",
      tagline: "Our Tomorrow",
      title: "My favourite future has you in it.",
      visionItems: [
        { icon: "🧭", title: "More Adventures", desc: "Exploring new cities, beaches, and quiet roads together." },
        { icon: "🎂", title: "More Birthdays", desc: "Celebrating every year of your beautiful life." },
        { icon: "🏡", title: "Building a Life", desc: "A cozy sanctuary filled with laughter, love, and our memories." },
        { icon: "🤝", title: "Supporting Each Other", desc: "Standing by you in every triumph and every challenge." },
        { icon: "✨", title: "Growing Older Together", desc: "Holding your hand with silver hair and the same spark in our eyes." }
      ],
      textLines: [
        "I don't just want to remember you.",
        "I want to keep making memories with you.",
        "For years. For decades. For as long as life allows us."
      ],
      themeClass: "theme-dreamy-future"
    },
    {
      id: "chapter-19",
      number: 19,
      name: "One Last Thing",
      tagline: "Before The Question",
      title: "One Last Thing...",
      recapLines: [
        "I showed you where you came from...",
        "I showed you how we found each other...",
        "I showed you how a random request changed everything...",
        "I showed you how a joke became real...",
        "I showed you the promise I made...",
        "I showed you the day we became us...",
        "And I showed you how you became my light."
      ],
      suspenseText: "But there is one thing I haven't asked you yet.",
      buttonText: "One Last Thing, My Love... ❤️",
      themeClass: "theme-dark-suspense"
    }
  ],

  // Proposal Climax Data
  proposal: {
    titleTamil: "அடியே என் குலசாமியே... ❤️",
    titleEng: "WILL YOU MARRY ME? 💍",
    coupleImage: "assets/images/couple/couple_16_9.jpg",
    lines: [
      "Sowmya...",
      "I didn't fall in love with you because I was looking for love.",
      "I fell in love with you because somewhere between one random Instagram request and everything that followed...",
      "You became impossible not to love.",
      "I don't know where life will take us.",
      "I don't know how many difficult days we will face.",
      "I don't know what every chapter of our future will look like.",
      "But I know one thing:",
      "I want to face all of it with you.",
      "I want to choose you on the easy days.",
      "And on the difficult ones.",
      "I want to annoy you for the rest of my life.",
      "I want to grow with you.",
      "I want to grow old with you.",
      "I want every future version of me to still have you beside him.",
      "One random Instagram request gave me you.",
      "And now...",
      "I'm asking you for forever."
    ],
    buttons: {
      yes: "YES, ALWAYS ❤️",
      no: "LET ME THINK 😌"
    },
    playfulNoResponses: [
      "Are you sure? Viswajith is still waiting... 😉",
      "Think carefully, my sweet Kula Saamiye! ❤️",
      "Error 404: 'No' button is out of order! 😂",
      "I said I would wait, but don't keep me waiting too long! 😜",
      "Only one correct answer exists! Click YES! 💍✨",
      "There is no escaping my love, Sowmya! ❤️"
    ]
  },

  // Celebration Finale Data
  celebration: {
    title: "She said YES. ❤️💍",
    timelineSummary: [
      "From one random request...",
      "To random conversations...",
      "To CSK...",
      "To Goa...",
      "To an unbreakable promise...",
      "To August 9...",
      "To us...",
      "To forever."
    ],
    finalNames: "VISWAJITH ❤️ SOWMYA",
    finalSubtitleTamil: "அடியே என் குலசாமியே... ❤️",
    finalQuote: "\"This was never just a website.\nIt was my heart... Asking for a lifetime with you.\" ❤️💍"
  }
};

// Export to global window context
if (typeof window !== 'undefined') {
  window.STORY_CONFIG = STORY_CONFIG;
}
