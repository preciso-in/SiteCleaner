const currentlyReadingList = [
  "24 Hour Love",
  "A Good Day To Pitch A Tent",
  "A Guide to Corrupting Them With Hypnosis",
  "A Pervert's Daily life",
  "A Rich Lady",
  "A Secret Lesson With My Younger Sister",
  "A Sexless Wife Finds Pleasures",
  "A Sweet Part Time Job",
  "A Twisted Day",
  "A Wise Driver's Life",
  "A Wonderful New World",
  "Absolute Hypnosis in Another World",
  "Addicted to My Stepmom",
  "Aharoo",
  "An Alley story",
  "As If Daughter",
  "Bad Guy",
  "Bad Thinking Diary",
  "Barefoot : The Leash Season 2",
  "Bastard",
  "Bastard’s Dead Man",
  "Benefactor's Daughters",
  "Between Us",
  "Big Boss Gone Bad",
  "Boarding Diary",
  "Body Choke",
  "Boobie Trap",
  "Bought By The Demon Lord Before The Ending",
  "Breakaway : Joys of Travel",
  "Bunk Beds",
  "Campus Live",
  "Campus Today",
  "Childhood Bride",
  "Circles",
  "Club Sodom",
  "College Secrets",
  "Concubine",
  "Could You Please Touch Me There?",
  "Cucumber Market",
  "Daddy’s Wild Oats",
  "Dance Department's Female Sunbaes",
  "Delivery",
  "Department Store Ladies",
  "Difficult Choices",
  "Do It One More Time",
  "Elf Who Likes To Be Humiliated",
  "Eunha’s Advice",
  "Everything Is Agreed",
  "Falling for her",
  "Family Adjustments",
  "Family with Benefits",
  "Family Secret",
  "Father's Lust",
  "Floor Noise",
  "Forcing the Woman I Despise Into Submission",
  "Freshman",
  "Friend’s Girlfriend",
  "Friends with Secrets",
  "Girls I Used to Teach",
  "Go Ahead, Mom",
  "God Model",
  "God of Pleasure",
  "Goddess Hunting",
  "Golden Facade",
  "Grand Disciple",
  "Heart Stealer",
  "Heaven",
  "Her 4 Incher",
  "His Place",
  "Honestly, I like you a lot!",
  "How About This Pose?",
  "How to Train Her",
  "Hunting for Cougars",
  "I Became a Sugar Daddy",
  "Ice Love",
  "In Her Place",
  "In The Summer",
  "Intern Haenyeo",
  "Is It Your Mother or Sister?",
  "Is there an Empty Room?",
  "It’s Okay Because We’re Family",
  "I’ll Eat Your Mom First",
  "I'm The Leader Of A Cult",
  "Just Right There!",
  "Kitsch Year",
  "Ladies’ Man",
  "Learning The Hard Way",
  "Let's Hang Out from Today",
  "Let Me Drive",
  "Lightning Rod",
  "Lilith’s Cord",
  "Live With : Do You Want To Do It?",
  "Locked Up",
  "Love Limit Exceeded",
  "Lucky Guy",
  "Lust Awakening",
  "MAD : Escort Driver",
  "Maid Rehabilitation",
  "MILF Hunting In Another World",
  "Madam",
  "Magnetic Pull",
  "Man of The House",
  "Marriage Agency Review",
  "May I Help you?",
  "Moby Dick",
  "Modern Apartment, Gyeonseong 1930",
  "My Aunt in Puberty",
  "My Brother's Slipped Inside Me in The Bathtub",
  "My First and Last",
  "My Landlady Noona",
  "My Memory of You",
  "My New Family Treats me Well",
  "My Sister-in-law’s Skirt",
  "My Sister’s Friends",
  "My Sweet Home",
  "Naughty Girl",
  "New Town",
  "Nightmare",
  "Not at Work",
  "Not Safe for Work ♡",
  "Not the Daughter, but the Mother",
  "Not to be missed",
  "Obsessive Romance",
  "Oppa, Not There",
  "Panty Note",
  "Paradise Lost",
  "Park Moojik Hit the Jackpot",
  "Peek",
  "Perfect Half",
  "Pervert Diary",
  "Pheromone",
  "Please Scan Here",
  "Pulse",
  "Queen Bee",
  "Relationship Reversal",
  "Resume",
  "Revenge",
  "Roomie",
  "Roommates with benefits",
  "S Class",
  "Sahwa: Secret Commission",
  "Salamander",
  "Secret Class",
  "Secret Cohabitation",
  "Secret Office",
  "Secret Tutor",
  "Secret World of Martial Arts",
  "Serenade",
  "Sexercise",
  "Sextudy Group",
  "Sexual Exploits",
  "Sexy Man and Woman",
  "Shall We Ride?",
  "Sharing is Caring",
  "She is Working Out",
  "Shh! Her Secret",
  "Should I Study at Noryangjin?",
  "Show Me Your Color",
  "Siblings",
  "Simple yet Sexy",
  "Siren (Getty)",
  "Sister’s Sex Education",
  "Sister in Law",
  "Soothe Me",
  "Sponsor Me Please",
  "Staying with Ajumma",
  "Stepsister",
  "Supervisor Access",
  "Sweet Family",
  "Taiyo’s Sisters-In-Law Need His Seed",
  "Taming a Maid",
  "Taste of Forbbiden Fruit",
  "Teacher’s Pet",
  "Teacher Punishment",
  "Team Leader Report",
  "The Cheat Code Hitter Fucks Them All",
  "The Desperate Housewife",
  "The Escape",
  "The Four Of Us Can't Live Together",
  "The Girlfriend Dice",
  "The Hole Diary",
  "The Hole is Open",
  "The Housemaid",
  "The Hypnosis App was Fake",
  "The Lustful Demon is the King of Demons",
  "The Man Who Devours",
  "The Mismatch",
  "The Real Deal",
  "The Regressed Son of a Duke is an Assassin",
  "The Runaway Family",
  "The Share House's Secret Rule",
  "The Sharehouse",
  "The Third Party",
  "The Woman Who Lives In My Room",
  "Thorns of Innocence",
  "Touch to Unlock",
  "Turned On By My Nephew",
  "Twenty",
  "Twin Takes",
  "Under the Radar",
  "Understanding of Flirting",
  "Unlocking her",
  "Wait, I’m a Married Woman!",
  "Wanna live by the countryside?",
  "Water Overflow",
  "What's wrong with this family?",
  "What Do I Do Now?",
  "What Do You Take Me For?",
  "What’s for Dinner",
  "What’s for Today Dinner?",
  "When Did We Start Dating?!",
  "White Angels Have No Wings",
  "Women's University Student who Served in the Military",
  "Wreck My Bias",
  "Young Aunt",
  "Young Boss",
  "Young Housemaid",
  "Your Wife Was Amazing",
].map(standardiseString); // Standardise ’, trim, lowercase,
