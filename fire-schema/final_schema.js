const firebase = require("firebase");
const _ = require("lodash");

firebase.default.initializeApp({
  apiKey: "AIzaSyAPu3Fr1Ed4u5ZtHjmIKbJIxOrTd0gBBaU",
  authDomain: "techfest-90fcb.firebaseapp.com",
  projectId: "techfest-90fcb",
  storageBucket: "techfest-90fcb.appspot.com",
  messagingSenderId: "1005972251908",
  appId: "1:1005972251908:web:12aa068dad8e78d82d9c51",
});

const eventLists = [
  {
    id: "event1",
    value: "Strigrays League - Gaming Jam",
    regFee: 100,
    maxTeamSize: 4,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event2",
    value: "Battle Of The Ice - Gaming Tournment",
    regFee: 250,
    maxTeamSize: 4,
    time: "8.00 am to 10.00pm",
    Date: "23/03/23",
  },
  {
    id: "event3",
    value: "Zh3r0-Capture the Flag",
    regFee: 100,
    maxTeamSize: 4,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event4",
    value: "Platonic",
    regFee: 200,
    maxTeamSize: 3,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event5",
    value: "Bidders Coding Camp",
    regFee: 100,
    maxTeamSize: 4,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event6",
    value: "BotBattleBash B3",
    regFee: 200,
    maxTeamSize: 3,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event7",
    value: "ML-XLR8",
    regFee: 200,
    maxTeamSize: 2,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event8",
    value: "Colay",
    regFee: 150,
    maxTeamSize: 4,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event9",
    value: "Dare to be Different (Ideathon)",
    regFee: 100,
    maxTeamSize: 2,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event10",
    value: "Forensics Investigation Challenges",
    regFee: 200,
    maxTeamSize: 4,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event11",
    value: "Intro to React JS",
    regFee: 200,
    maxTeamSize: 1,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event12",
    value: "AR/VR",
    regFee: 200,
    maxTeamSize: 1,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event13",
    value: "Quantum Computing",
    regFee: 200,
    maxTeamSize: 1,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event14",
    value: "DevOps",
    regFee: 200,
    maxTeamSize: 1,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event15",
    value: "Mobile App",
    regFee: 200,
    maxTeamSize: 1,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event17",
    value: "Machine Learning/Deep Learning",
    regFee: 100,
    maxTeamSize: 1,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
  {
    id: "event18",
    value: "Project Expo",
    regFee: 100,
    maxTeamSize: 4,
    time: "8.00 am to 12.00pm",
    Date: "23/03/23",
  },
];

// --------- MECH EVENTS --------------

const eventmech = {
  mech1: {
    name: "SRUJAN",
    mode_type: "Offline",
    event_type: "CAD Competition",
    description: [
      {
        point: "Prelims (Online , 03/04/2023) & Finals (Offline, 04/04/2023) ",
      },
      {
        point: "Requisites of the CAD designing ",
      },
      {
        point:
          "Should include all the details of the work. The design must have title block and should be filled according",
      },
      {
        point:
          "Proper usage of different lines [Construction line, Thick-thin Continuous line, Dash, Dash Space, Long Dash-Dot etc.]",
      },
      {
        point: `Proper dimensioning is mandatory`,
      },
      {
        point: `Judging criteria for CAD designing:`,
      },
      {
        point: `How closely the given solution is related to the mentioned problem.`,
      },
      {
        point: "Easiness of solution given by competitor and eye pleasing.",
      },
      {
        point: `
        Minimal complexity of design, so that the design suggested can further be 
improved and used in real time`,
      },
      {
        point: `
        Time of submission`,
      },
      {
        point: `Note: The question statements will be provided during the commencement of the event.`,
      },
    ],
    rules: [
      {
        rule: `The competitor should select only one question statement and should give solution accordingly`,
      },
      {
        rule: `No two competitor should not have same design`,
      },
      {
        rule: `The suggested solution for given problem statement should be genuine.`,
      },
      {
        rule: "The participant should strictly abide by time restriction.",
      },
    ],
    prizeMoney: [
      {
        prize: "1st Prize : Rs. 3000",
      },
      {
        prize: "2nd Prize : Rs. 2000",
      },
    ],
    venue: "CAE Studio",
    studentCoordinator: [
      {
        Name: "Sujit M",
        Dept: "Mech",
        Year: "3rd Year",
        contact: "9791796848",
      },
      {
        Name: "Yashwanth R K",
        Dept: "Mech",
        Year: "1st Year",
        contact: "93444 13359",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Sunil Kumar",
      },
      {
        Name: "Dr. Piyush Pratap Singh",
      },
    ],
    registrationFees: "Rs. 150/- per head",
    date: "03/04/2023 - 04/04/2023",
    time: "10:00 AM - 12:00 PM ",
    duration: "2 hours",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688582/events/mech/Untitled%20design/Srujan_klwcqm.png",
  },

  mech2: {
    name: "ROBORACE",
    mode_type: "Offline",
    event_type: "Competition",
    description: [
      {
        point:
          "Roborace is the mobile robot competition controlled by using the bluetooth android app.",
      },
      {
        point: `A four-wheeled robot vehicle has to cross the finish line from the start line with obstacles and various terrains in the shortest possible time.`,
      },
      {
        point: `Challenges includes speed breaker, pebbles, sand, banking angle curve and ramp. `,
      },
      {
        point: `Each of the challenges has the marks and skipping the hurdles will be subjected to negative marking.`,
      },
      {
        point: `
        Surprise hurdles will be introduced during the competition which may increases the steering skill of the operator and the mobile robot.`,
      },
      {
        point: "Time and hurdles are the factors which decides the winner.",
      },
    ],
    rules: [
      {
        rule: "https://docs.google.com/file/d/1gXgf8eUq5rmG2GFJLQ5lytUfNhXuQtYK/edit?usp=docslist_api&filetype=msword",
      },
    ],
    prizeMoney: [
      {
        prize: "1st Prize : Rs. 5000",
      },
      {
        prize: "2nd Prize : Rs. 3000",
      },
    ],
    venue: "RACE",
    studentCoordinator: [
      {
        Name: "Aswin S Rajesh",
        Dept: "Mech",
        Year: "2nd Year",
        contact: "6369 682 067 ",
      },
      {
        Name: "A Jayamalar",
        Dept: "ARE",
        Year: "1st Year",
        contact: "",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. G. Rajkumar",
      },
      {
        Name: "Mr. Badri Narayanan K B ",
      },
    ],

    duration: "",
    registrationFees: "Rs 300/- per team (max 3 per team)",
    date: "03/04/23",
    time: "10:00 AM ",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688578/events/mech/Untitled%20design/Roborace_zxbeh6.png",
  },

  mech3: {
    name: "SPARK",
    mode_type: "Offline",
    event_type: "Workshop ",
    description: [
      {
        point: `SPARK- An initiative by Center for Advanced Research in Vehicle Development and Electrification and (CARVE) organises training program which mainly focuses on skills development through hands on experience.`,
      },
      {
        point: `The training involves important technical details, Industry updates and practical training on automobiles.`,
      },
      {
        point: `A hands-on workshop in which a batch of participants will be provided with Bajaj DTS-I Twin Spark engine and will be trained by Industry leading MSME certified trainers to do the periodical maintenance and measures to be taken to avoid vehicle breakdowns.`,
      },
    ],
    rules: [
      {
        rule: "Shoes are mandatory inside the workshop",
      },
    ],
    venue: "Workshop",
    studentCoordinator: [
      {
        Name: "Arun Ashwin S ",
        Dept: "Mech",
        Year: "2nd Year",
        contact: "9445945466",
      },
      {
        Name: "Karthik M",
        Dept: "ARE",
        Year: "1st Year",
        contact: "8610428706",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. M. Vignesh",
      },
    ],
    prizeMoney: [],
    duration: "",
    registrationFees: "Rs. 300/- per head",
    date: "04/04/23",
    time: " 10:00 AM ",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688577/events/mech/Untitled%20design/Spark_vvug9h.png",
  },

  mech4: {
    name: "Maze Solver Challenge",
    mode_type: "Offline",
    event_type: "Competition",
    description: [
      {
        point: `Maze Solver Challenge is a team event with maximum of 3 people in a team , the participants are required to present their tiny self-contained autonomous robot that can navigate a maze as quickly as feasible.`,
      },
      {
        point: `Power Source: The robot must be powered by a power source such as a battery fixed on the robot.
        The Robot cannot be powered by a stationary power source connected to the robot by a cord.`,
      },
    ],
    rules: [
      {
        rule: "https://docs.google.com/file/d/1cJ8-ANHqlN2XYOUZs0CsTlijNW8KXTaX/edit?usp=docslist_api&filetype=msword",
      },
    ],
    prizeMoney: [
      {
        prize: "1st Prize : Rs. 5000",
      },
      {
        prize: "2nd Prize : Rs. 3000",
      },
    ],
    venue: "RACE",
    studentCoordinator: [
      {
        Name: "R. Sai Ruthwique ",
        Dept: "MEE",
        Year: "2nd Year",
        contact: "7893717151",
      },
      {
        Name: "M.Naresh ",
        Dept: "MEE",
        Year: "1st Year",
        contact: "8056192847",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Mr.G.Deenadayalan ",
      },
    ],
    duration: "",
    registrationFees: "Rs. 300/- per team (max 3 per team)",
    date: "03/04/23",
    time: " 10:00 AM to 1:00PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688576/events/mech/Untitled%20design/Maze_trjqh1.png",
  },

  mech5: {
    name: "Prastavam",
    mode_type: "Offline",
    event_type: "Competition ",
    description: [
      {
        point: `Prastavam (Paper presentation) is a team event with a maximum of 3 people in a team`,
      },
      {
        point:
          "The participants are required to present their paper which consists of not more than 15 slides.",
      },
      {
        point:
          "Total duration is 10 minutes( 7 mins presentation + 3 mins Q&A)",
      },
    ],
    rules: [
      {
        rule: "Should include all the technical details of the work.",
      },
      {
        rule: "White background, font type: TIMES NEW ROMAN, Font Size Heading: 20; Font size body:14",
      },
      {
        rule: `Idea plagiarism and content plagiarism is strictly not entertained.`,
      },
    ],
    prizeMoney: [],
    venue: "AB105 class room",
    studentCoordinator: [
      {
        Name: ".Shreyaa Krishnamoorthy ",
        Dept: "MEE",
        Year: "2nd Year",
        contact: "",
      },
      {
        Name: "Midushan",
        Dept: "MEE",
        Year: "1st Year",
        contact: "8148820805",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.AK Hemnath ",
      },
      {
        Name: "Dr.Shubrajit Bhaumik",
      },
    ],
    duration: "",
    registrationFees: "Rs.150 /- per team",
    date: "04/04/23",
    time: " 10:00 AM to 1:00PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688577/events/mech/Untitled%20design/prastavam_nmhazk.png",
  },

  mech6: {
    name: "Auto Expo",
    mode_type: "Offline",
    mode: "Competition",
    event_type: "Competition ",
    description: [
      {
        point:
          "Rev up your engines and get ready for the ultimate auto experience at our Auto Expo",
      },
    ],
    rules: [
      {
        rule: "Assemble at the venue by the specified time",
      },
    ],
    venue: "Car Parking",
    studentCoordinator: [
      {
        Name: "Arun Ashwin S",
        Dept: "MEE",
        Year: "2nd Year",
        contact: "9445945466",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. M. Vignesh",
      },
    ],
    prizeMoney: [],
    duration: "",
    registrationFees: " /- ",
    date: "03/04/23 - 04/04/23",
    time: " 10:00 AM - 1:00PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688576/events/mech/Untitled%20design/Auto_expo_e1tukw.png",
  },

  mech7: {
    name: "stunt-show",
    mode_type: "Offline",
    event_type: "Exhibition ",
    description: [
      {
        point: `A breath taking stunt show by 'VALIMAI' fame team 'PSYCHO DEVILZ'`,
      },
    ],
    rules: [
      {
        rule: "Assemble at the venue by the specified time",
      },
      {
        rule: "Dont come inside the road during the show",
      },
    ],
    venue: "Road",
    studentCoordinator: [
      {
        Name: "Arun Ashwin S",
        Dept: "MEE",
        Year: "2nd Year",
        contact: "9445945466",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. M. Vignesh",
      },
    ],
    prizeMoney: [],
    duration: "",
    registrationFees: " /- ",
    date: "03/04/23",
    time: "10:30 AM - 11:30 AM & 2:30 PM - 3:30 PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688576/events/mech/Untitled%20design/Stunt_kpnpig.png",
  },
};

// --------- CSE EVENTS --------------

const events = {
  event1: {
    name: "Strigrays League - Gaming Jam",
    mode: "Game Development",
    mode_type : 'Offline',
    event_type: "Competition ",
    description: [
      {
        point: "Team size: 1-2",
      },
      {
        point: "Event type: Offline ",
      },
      {
        point: "Event 1: Map creation",
      },
      {
        point: "Timing: 03/04/23: 10.00am to 12.30pm",
      },
      {
        point:
          "The event will be about creating a map for 3rd-first/third person game. ",
      },
      {
        point: "Assets will be given to the respected teams.",
      },
      {
        point:
          "It is just a drag & drop concept on the game development platform called Unity.",
      },
      {
        point: "Event 2: Character Creation",
      },
      {
        point: "Timing: 03/04/23: 1.00pm to 04/04/23 1.00pm",
      },
      {
        point:
          "This event will be about creating a 2D character on the platform called blender.",
      },
      {
        point:
          "Blender is a beginner tool for creations of characters, game assets, etc..",
      },
    ],
    rules: [
      {
        rule: `Requirements:`,

      },
      {
        rule: `Latest version of Unity/Any other platform you are going to use.`,

      },
      {
        rule: `Pc of i5(U or H series)/Ryzen 5(H series), 8Gb Ram and at least 2 GB graphics card(Any version: Nvidia/Amd).`,
      },
      {
        rule: `Needed prior knowledge on Unity/any other game development platform.`,
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 3000",
      },
      {
        prize: "2nd prize: 2000",
      },
    ],
    time: "10.00 am to 04.30pm",
    date: "03/04/23 and 04/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Karuppiah Sabari Kumar",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "9488519924",
      },
      {
        Name: "Varun kishore",
        Dept: "CYS",
        Year: "3rd year",
        contact: "9360015992",
      },
      {
        Name: " Kishore",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "9952803109",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    registrationFees: 100,
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Strigrays%20league%20gaming%20jam.png?alt=media&token=51f6fd62-5951-48e7-a686-ea2004cfa972",
  },

  event2: {
    name: "Battle Of The Ice - Over Watch",
    mode: "Online Gaming ",
    event_type: "Competition",
    mode_type : 'Online',
    description: [
      {
        point: `This event is a classic gaming tournament where teams will be competing against each other to win the game.`,
      },
      {
        point: "Team Size: 5 + 1 sub.",
      },
    ],
    rules: [
      {
        rule: "Standard game rules apply.",
      },
    ],

    prizeMoney: [
      {
        prize: "1st prize: 3500",
      },
      {
        prize: "2nd prize: 1500",
      },
    ],

    time: "10.00 am to 4.00 pm",
    date: "03/04/23 & 04/04/23",
    venue: "",
    studentCoordinator: [
      {
        Name: "Karuppiah Sabari Kumar",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "9488519924",
      },
      {
        Name: "Raaj Eshwar",
        Dept: "Cse",
        Year: "2nd year",
        contact: "9952099734",
      },
      {
        Name: "Lokesh kumar",       
        Dept: "CSE",
        Year: "3rd-year",
        contact: "80728 52971",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Battle%20of%20the%20ice.png?alt=media&token=8d99fc69-3276-43c0-a8dc-b2964691b6a8",
    registrationFees: "Team Rs.250 ( Max: 5/team)",
  },

  event3: {
    name: "Z3r0-Capture the Flag",
    mode: "Capture the Flag",
    event_type: "Competition-Online ",
    mode_type : 'Offline',
    description: [
      {
        point:
          "It is a jeopardy style CTF ( The well-known Cybersecurity Competition to Capture The Flag).",
      },
      {
        point: `Participants around the world would test their cybersecurity knowledge in various domains 
        (Web Exploitation detecting vulnerabilities ,Digital Forensics and Incident Response, Reverse Engineering Skill, 
        Cryptography, Binary Exploitation, etc).`,
      },
      {
        point:
          "Teams can gain points for every solved task on various domains.",
      },
      {
        point: "Points vary according to the complexity of tasks.",
      },
    ],
    rules: [
      {
        rule: "Do not brute force, perform denial of service or attack the platform.",
      },
      {
        rule: "Do not share flags nor send/post any kind of hints.",
      },
      {
        rule: "Do not use the machines to perform any malicious activities.",
      },
      {
        rule: "Do not hack any service except the intended ones.",
      },
      {
        rule: "Each task in the event will include instructions on interacting with the practical material. Please follow them carefully!",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    time: "4:00pm to 11:30pm",
    date: "03/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Prathunan K.K",
        Dept: "CYS",
        Year: "2nd-year",
        contact: "8610185441",
      },
      { Name: "Siddhanth kundragi", 
        Dept: "CYS", 
        Year: "2nd-year", 
        contact: "9372699515" },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Velusamy ",
      },
      {
        Name: "Dr.Mathivanan",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Z3ro.png?alt=media&token=eb27a32d-85f9-459f-80bd-799bfa32b88d",
    registrationFees: "Team Rs.100 ( Max: 4/team)",
  },
  event4: {
    name: "Platonic ( Ideathon)",
    mode: "Innovative idea proposal competation.",
    mode_type : 'Offline',
    event_type: "Competition ",
    description: [
      {
        point: `Platonic is an event where individuals or teams come together to generate new ideas for solving a 
        specific problem or addressing a particular challenge.`,
      },
      {
        point: `Participants are usually given a set amount of time to brainstorm, research, and present their ideas to a panel 
        of judges or other participants.`,
      },
      {
        point: `The goal of an Ideathon is to encourage creativity and innovation, and to develop new solutions to complex 
        problems.`,
      },
      {
        point: `Ideathons can be organized in a variety of fields, including business, technology, healthcare, education, 
        and social issues, among others.`,
      },
      {
        point: `They are often used as a tool for generating new ideas and fostering collaboration among participants 
        with diverse backgrounds and skill sets.`,
      },
    ],
    rules: [
      {
        rule: "The concept must be valid and at least 75% realisable.",
      },
      {
        rule: "The idea should be presented in a PowerPoint presentation with no more than 10-15 slides.",
      },
      {
        rule: "The team should be aware of an idea within the first hour so that it may be reviewed for feasibility.",
      },
      {
        rule: "Individuals must bring their own laptops, and internet access will be provided.",
      },
      {
        rule: "A team can have 3-4 members.",
      },
    ],

    time: "10.00 am to 12.30pm",
    date: "03/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Swarna Venkata Naga Aditya",
        Dept: "CSE",
        Year: "3rd-year",
        contact: "6305961101",
      },
      {
        Name: "Satya Raman",
        Dept: "CSE",
        Year: "3rd Year",
        contact: "9989234259",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Diviya",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    registrationFees: "Team - Rs,200 ( Max 3/team)",
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Platonic.png?alt=media&token=2dad14f0-c52f-433b-a79f-14e63ba5f65c",
  },
  event5: {
    name: "Bidders Coding Camp",
    mode_type : 'Offline',
    mode: "Coding event to earn/spend points in Unique way",
    event_type: "Competition ",
    description: [
      {
        point: `This is a coding camp where the participant will 
        code the given problem, earn points depending 
        on the solution and Bid for the prizes with the 
        points.`,
      },
    ],
    rules: [
      {
        rule: "Number of participants per team: 1-2 members.",
      },
      {
        rule: "System will be provided for the competition.",
      },
      {
        rule: "Almost all the Online-sites will be banned.",
      },
      {
        rule: "No additional time will be given.",
      },
      {
        rule: "Participants shouldn't speak to other teams during the event(Will be monitored).",
      },
      {
        rule: "Usage of ChatGPT or AI is Prohibited.",
      },
      {
        rule: `Judges' decision is final.`,
      },

      {
        rule: "Points will be awarded based on FCFS basis.",
      },
      {
        rule: "Certificates will be provided.",
      },
    ],
    time: "10:00 am to 12.30pm",
    date: "03/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Abhishek Sharma",
        Dept: "CYS",
        Year: "2nd-year",
        contact: "9445025701",
      },
      {
        Name: "Aditya Vatsa ",
        Dept: "CYS",
        Year: "2nd-year",
        contact: "9470490474",
      },
      {
        Name: "Gaurav Kheitan",
        Dept: "CSE",
        Year: "2nd-year",
        contact: " 8384026490",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Velusamy ",
      },
      {
        Name: "Dr.Mathivanan",
      },
    ],
    prizeMoney : [
      {
        prize: "Win exiting prizes of worth 5k",
      },
    ],
    registrationFees: "Team Rs.250 ( Max: 4/team)",
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Bidders%20coding%20acamp.png?alt=media&token=7b162bf8-4eb5-4cb4-be0a-7df92ab5bb63",
  },
  event6: {
    name: "BotBattleBash B3",
    mode: "Build a chat bot",
    event_type: "Competition ",
    mode_type : 'Offline',
    description: [
      {
        point:
          "BotBattleBash B3 is an event where programmers and coders can come forward to build chatbots which will be based on the theme provided on the day of the event.",
      },
      {
        point:
          "Participants will be given a duration of time to make a working model of the bot and record a demo video for the same.",
      },
      {
        point:
          "The goal is to promote the rise of automation, intelligent bots and their development.",
      },
      {
        point:
          "The bots will be judged mostly by the criteria of :",
      },
      {
        point:
          "     - Innovation",
      },
      {
        point:
          "     - Functionality",
      },
      {
        point:
          "     - User experience",
      },
      {
        point:
          "     - Presentation",
      },
      {
        point:
          "     - Originality",
      },
    ],
    rules: [
      {
        rule: "Bot could be made on any platform",
      },
      {
        rule: `Bring your own device to build the bot        `,
      },
      {
        rule: `Team should consist of 2-3 people.        `,
      },
      {
        rule: "Participants must submit a working prototype of their chat bot, as well as a demo video demonstrating its features and functionality",
      },
      {
        rule: `The demo video should be no more than 3 minutes long and should emphasize the primary functionalities and use cases of the chat bot      `,
      },
      {
        rule: `A brief textual description of the chat bot, including the programming language and platform utilized, should also be included in the application.       `,
      },
      {
        rule: "The chat bot must be the team's unique innovation. Any plagiarism or usage of third-party code must be mentioned in the submission or the entry will be disqualified."        ,
      },
    ],
    time: "10.00 am to 3.00pm",
    date: "03/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Abhiram",
        Dept: "CSE",
        Year: "3rd-year",
        contact: "9390795749",
      },
      {
        Name: " Suraj S",
        Dept: "CSE",
        Year: "3rd-year",
        contact: "6354386352",
      },
      {
        Name: "Kakavakam Jaswanth Sai",
        Dept: "CSE",
        Year: " 3rd year",
        contact: "6301218072",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Anitha ",
      },
      {
        Name: "Dr.Ashwini",
      },
    ],
    prizeMoney: [
      {
        prize: "1 st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/BotBattleBash.png?alt=media&token=a41658f6-c13c-4c9e-b76d-ec4ffcd247ae",
    registrationFees: "Team - Rs.200 ( Max 3/team)",
  },
  event7: {
    name: "ML-XLR8",
    mode: "Hackathon",
    event_type: "Competition ",
    mode_type : 'Offline',
    description: [
      {
        point: `Machine learning hackathon event with diverse problem statements for teams to choose from, encouraging innovation and impact. Finalists will present their projects on the event day and be evaluated based on creativity, feasibility, and impact.`,
      },
      {
        point: `Participants are required to select one of the three domains and develop innovative ML solutions to address specific challenges in their chosen domain.` 
      },
      {
        point: `For the Personalized Learning domain, participants will develop ML solutions that can analyze data from various sources to tailor learning content and teaching methods to individual students' needs, preferences, and abilities. Personalized learning can help students achieve better academic outcomes and engagement.`
      },
      {
        point: `For the Smart City domain, participants will focus on using machine learning to optimize urban services and make cities more efficient, sustainable, and livable. This involves developing algorithms that can analyze data from various sources such as transportation, energy consumption, waste management, and public safety to improve these services.`
      },
      {
        point: `In the Healthcare domain, participants will work on developing algorithms that can analyze medical data to improve diagnosis, prediction, treatment, and drug discovery. Machine learning can help healthcare providers personalize treatment plans and make more informed decisions, leading to better patient outcomes.`
      },
    ],
    rules: [
      {
        rule: "Team Size : 4 members",
      },
      {
        rule: " Proposal submission deadline: One week before the event (28/03/2023)",
      },

      {
        rule: `Proposal evaluation criteria: Creativity, feasibility, relevance to the problem statement`,
      },
      {
        rule: `Team notification: Three days prior to the event day (01/04/2023)`,
      },
      {
        rule: ` Presentation and evaluation: On the day of the hackathon, teams will present their projects to judges and participants. Evaluation criteria include originality, creativity, feasibility, technical implementation, and impact. Judges will provide feedback and select winners based on scores.`,
      },
      {
        rule: `For further queries, contact us: mlxlr8hackathon@gmail.com`,
      },
    ],
    time: "10.00 am to 4.00pm",
    date: "04/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Varsha P",
        Dept: "AIE",
        Year: "3rd-year",
        contact: "",
      },
      {
        Name: "Bharathraj S",
        Dept: "AIE",
        Year: " 3rd year",
        contact: "8098051236",
      },
    ],
    facultyCoordinator: [
      {
        Name: "D.Sasikala",
      },
      {
        Name: "Deena.S",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/ML%20XLR8.png?alt=media&token=fe1c4629-c083-4523-898d-f0766c3f001b",
    registrationFees: "Team - Rs.200(Max 4/team)",
  },
  event8: {
    name: "Colay",
    mode: "Coding competition (code relay)",
    event_type: "Competition ",
    mode_type : 'Offline',
    description: [
      {
        point: `Colay is a thrilling code relay event that will test the participants' coding skills and teamwork.`,
      },
      {
        point: `Colay is a thrilling code relay event that will test the participants' coding skills and teamwork.`,
      },
      {
        point: `The event will consist of 10 teams, each with 4 participants. 
        The objective of the event is to complete the given computer programming problems, 
        with each participant taking turns to work on the code for a fixed period of time before passing the task on to the next member of their team.`,
      },
      {
        point: `The team that completes all three problems and produces the correct outputs in the fastest time will be declared the winner of the event, 
        with the second-fastest team earning the runner-up position.`,
      },
    ],
    rules: [
      {
        rule: "To ensure fair play, the following rules will be in place for the event:",
      },
      {
        rule: "Each team will be given a maximum of 5 minutes to discuss and plan their strategy before the event starts.",
      },
      {
        rule: "Each participant will be given a maximum of 5 minutes to work on the code.",
      },
      {
        rule: "Participants must switch places with their team members once their allotted time has elapsed, and cannot continue working on the code till their next turn.",
      },
      {
        rule: "Participants may not use external resources such as the internet or other code libraries during the event.",
      },
      {
        rule: "The team that completes all three problems and produces the correct outputs in the fastest time will be declared the winner.",
      },
    ],
    time: "10.00 am to 12.30pm",
    date: "03/04/23",
    venue: "Intel AI lab",
    studentCoordinator: [
      {
        Name: "Venkatakrishnan R",
        Dept: "AIE",
        Year: " 3rd year",
        contact: "8248477584",
      },
      {
        Name: "Jawahar C",
        Dept: "AIE",
        Year: "3rd-year",
        contact: "6374259405",
      },
      {
        Name: "Sheeba ",
        Dept: "AIE",
        Year: "2nd-year",
        contact: "",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Annamalai R",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Colay.png?alt=media&token=a83ec1fe-9a38-422b-a2a4-d90cea41073f",
    registrationFees: "Team - Rs 150(Max 4/team)",
  },
  event9: {
    name: "Dare To be Different (Ideathon)",
    mode: "Ideathon",
    event_type: "Competition ",
    mode_type : 'Offline',
    description: [
      {
        point: `The event is all about unlocking the burgeoning
        ideas with hidden innovation underlying among the students using modern technologies.`,
      },
      {
        point: `Each participant will work individually in the first round, which is a coding assessment. The ones that qualify for the next round, are randomly paired in groups of two.`,
      },
      {
        point: `The main goal of this ideathon is to ensure that the team members are able to coordinate and communicate with each other to formulate a novel and inventive idea.`,
      },
      {
        point: `These skills would prove to be extremely helpful in the real world, while working in a new job environment.`,
      },
    ],
    rules: [
      {
        rule: `Round 1: It is the coding round to short list the participants`,
      },
      {
        rule: `         participation will be on an individual basis.`,
      },
      {
        rule: `Round 2 : On the basis of your performance,we will be shortlisting the participants as a group of 2.`,
      },
      {
        rule: `         You have to come up with an idea and demonstrate the idea within three hours.        `,
      },
      {
        rule: `         PPT is required`,
      },
    ],
    time: "11.00 am to 4.00pm",
    date: "03/04/23",
    venue: "Class Room",
    studentCoordinator: [
      {
        Name: "Lakshmikanth",
        Dept: "CYS",
        Year: "2nd-year",
        contact: "9182515804",
      },
      {
        Name: "P.Priyanka",
        Dept: "Cys",
        Year: " 3rd year",
        contact: "",
      },
      {
        Name: "T.Mahima Singh",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr Dharminder",
      },
      {
        Name: "Dr.Indira",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Dare%20to%20be%20different.png?alt=media&token=b9baa7a1-fb76-44d5-8c16-579022840643",
    registrationFees: "Team - Rs 50(Max 2/team)",
  },
  event10: {
    name: "Forensics Investigation Challenge",
    mode: "Investigation Competition ",
    event_type: "Competition ",
    mode_type : 'Offline',
    description: [
      {
        point: `The majority of us would have yelled, ""I think this was the 
        cause for the crime,"" at that point while enjoying the nerve 
        biting revelation of Crime Scene!`,
      },
      {
        point: `Here is your chance for 
        proving your intuition right.`,
      },
      {
        point: `Pile up the evidence, narrow 
        down suspects using physical and digital investigation to 
        prove that your detective skills are undeniably the best in 
        town by submitting the best accurate investigation report
        to the authorities.`,
      },
      {
        point: "The arena awaits you!",
      },
    ],
    rules: [
      {
        rule: ` The participants are supposed to solve a crime case based on the embedded evidence collected from the crime scene  
        they feel would help in solving case.`,
      },
      {
        rule: `The investigation consists of 2 levels. The first level will be more of physical forensics binding with a bit of digital forensics. 
        The team can move into the second level, which is more of digital forensic techniques binded with a bit of physical evidences to complete the case`,
      },
      {
        rule: `The challenge will be Maximum of 6 hours and the participants have to complete the challenge and 
        should be able to explain the crime scene within the given time to the authorities in a professional manner.`,
      },
      {
        rule: `The participants are expected to bring their own laptops and necessary stationary items for their investigation`,
      },
      {
        rule: "Internet access will be provided.",
      },
      {
        rule: "Hampering of scene Environmental or any props will lead to disqualification",
      },
      {
        rule: "Complete details of each round will be disclosed at the time of the event.",
      },
      {
        rule: "Performing DoS attack or generating huge traffic by any means is strictly prohibited.",
      },
    ],
    time: "10.00 am to 4.00pm",
    date: "04/04/23",
    venue: "Classrooms (AB-103) and Conference Hall (near Prayer Hall )",
    studentCoordinator: [
      {
        Name: " Gummanur Abhishek",
        Dept: "Cys",
        Year: " 3rd year",
        contact: "9515523033",
      },
      {
        Name: "Enaganti Karun Kumar",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "7671867969",
      },
      {
        Name: "Annadanam Padmasini",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "",
      },
      {
        Name: "Kumoulica Allu",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Udhaya Kumar",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Forensics.png?alt=media&token=8143c4ce-8079-43e2-a3d9-389607ef6fd1",
    registrationFees: "Team - 300 (Max 4/Team) ",
  },
  event11: {
    name: "Intro to React JS",
    mode: "Workshop",
    event_type: "Workshop",
    mode_type : 'Offline',
    description: [
      {
        point: `This workshop on UI designing and ReactJS will focus on helping participants understand the fundamentals of 
      UI design, such as the principles of visual hierarchy, typography, color theory, and user experience.`,
      },
      {
        point: `On The other hand with combination of React.js, A framework widely used for building complex user interfaces, 
        Participants will learn how to use ReactJS to create reusable UI components, manage state and props, and interact with APIs.`,
      },
      {
        point: `Additionally, the workshop will cover best practices for integrating UI design principles with ReactJS development,
        enabling participants to create high-quality interfaces that are both visually appealing and functional.`,
      },
    ],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    prizeMoney: [],
    time: "9.00 am to 2.30pm",
    date: "03/04/23",
    venue: "Class Room",
    studentCoordinator: [
      {
        Name: " Abhinandhan S",
        Dept: "CSE",
        Year: " 3rd year",
        contact: "9080942165",
      },
      {
        Name: "Vignesh Kumar",
        Dept: "CSE",
        Year: "3rd-year",
        contact: "9514521819",
      },
      {
        Name: "Mukesh K",
        Dept: "AI",
        Year: "3rd-year",
        contact: "8778223845",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Sophiya E",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678096848/events/intro%20to%20react.png",
    registrationFees: 200,
  },
  event12: {
    name: "AR/VR",
    mode: "Workshop",
    mode_type : 'Offline',
    event_type: "Workshop",
    description: [
      {
        point: `This workshop on UI designing and ReactJS will focus on helping participants understand the fundamentals of UI design, such as the principles of visual hierarchy, typography, color theory, and user experience.`,
      },
      {
        point: `On The other hand with combination of React.js, 
        A framework widely used for building complex user interfaces, Participants will learn how to use ReactJS to create reusable UI components, manage state and props, and interact with APIs. `,
      },
      {
        point: `Additionally, the workshop will cover best practices for integrating UI design principles with ReactJS development, 
        enabling participants to create high-quality interfaces that are both visually appealing and functional.`,
      },
    ],
    prizeMoney: [],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "9.00 am to 2.30pm",
    date: "04/04/23",
    venue: "Class Room",
    studentCoordinator: [
      {
        Name: " Aparna",
        Dept: "CSE",
        Year: " 3rd year",
        contact: "",
      },
      {
        Name: "Minaal Kumar",
        Dept: "CSE",
        Year: "3rd-year",
        contact: "7983695362",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Vidyasagar ( resource person Dr.R.Parthipan)",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/AR_VR.png?alt=media&token=30102137-3d89-4fef-a922-805d4b4b9571",
    registrationFees: 200,
  },
  event13: {
    name: "Quantum Computing",
    mode: "Workshop",
    event_type: "Workshop",
    mode_type : 'Offline',
    description: [
      {
        point: "A quantum computing workshop is a specialized training program that aims to educate participants on the principles and practical applications of quantum computing. These workshops typically include lectures, discussions, and hands-on activities that provide attendees with a basic understanding of quantum mechanics, quantum algorithms, and quantum hardware.",
      },
      {
        point: "Participants are also provided practical training in programming quantum computers using languages such as Qiskit or Cirq. They work in teams to develop and test quantum algorithms on real quantum hardware or simulators, allowing them to gain hands-on experience with this emerging technology.",
      },
      {
        point: "Overall, a quantum computing workshop is an excellent opportunity for individuals with a background in physics, computer science, mathematics, or engineering to explore the cutting-edge field of quantum computing and its potential applications in fields such as cryptography, optimization, and simulation. By the end of the workshop, attendees will have gained a solid foundation in quantum computing and will be able to apply their knowledge to real-world problems.",
      }

    ],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "9.30 am to 1.30pm",
    date: "04/04/23",
    venue: "Class Room",
    studentCoordinator: [
      {
        Name: " Varshini ",
        Dept: "AIE",
        Year: " 3rd year",
        contact: "",
      },
      {
        Name: "Ippatapu Venkata Srisurya",
        Dept: "AIE",
        Year: " 3rd year",
        contact: "6300646327",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr S Sridevi",
      },
    ],
    prizeMoney: [],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Devops.png?alt=media&token=6b835faf-ba5a-4aa4-94a6-72bf1d71f528",
    registrationFees: 200,
  },
  event14: {
    name: "DevOps",
    mode: "Workshop",
    event_type: "Workshop",
    mode_type : 'Offline',
    description: [
      {
        point: `DevOps workshop is a training session designed to help individuals or teams understand the principles, practices,
        and tools associated with DevOps.`,
      },
      {
        point: `The workshop typically covers topics such as automation, infrastructure as code, 
        monitoring and logging, and collaboration between development and operations teams.`,
      },
      {
        point: `Participants will learn how to use tools such as Git, Jenkins, Docker, Kubernetes, and AWS to implement DevOps practices. 
        Participation certificates will be provided on successful completion of the workshop.`,
      },
    ],
    rules: [
      {
        rule: "Bring your own laptop, chargers and required gadgets for the session.",
      },
    ],
    prizeMoney: [],
    time: "10.00 am to 3.30pm",
    date: "03/04/23",
    venue: "Class Room",
    studentCoordinator: [
      {
        Name: " Saaketh",
        Dept: "AIE",
        Year: " 3rd year",
        contact: "9491519189",
      },
      {
        Name: "Abinandhini",
        Dept: "AIE",
        Year: "2nd-year",
        contact: "",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Bharathi Mohan.G",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Devops.png?alt=media&token=6b835faf-ba5a-4aa4-94a6-72bf1d71f528",
    registrationFees: 200,
  },
  event15: {
    name: "Mobile App",
    mode: "Workshop",
    event_type: "Workshop",
    mode_type : 'Offline',
    description: [
      {
        point: `The workshop focus on teaching participants how to develop a mobile app from scratch, covering everything from ideation and wireframing to coding and testing.        `,
      },
      {
        point: `This workshop introduce participants to popular mobile app development tools and technologies, such as React Native, Flutter, or Xcode. Participants could learn how to use these tools to build functional and visually appealing mobile apps.        `,
      },
      {
        point: `Best techniques for testing and debugging mobile apps could be covered in the event. Participants could learn how to test their apps using emulators and real devices, as well as how to use debugging tools to find and repair bugs.`,
      },
    ],
    rules: [
      {
        rule: "Bring your own laptop, chargers and required gadgets for the session.",
      },
    ],
    time: "1.00 am to 4.00pm",
    date: "04/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Vifert Jenuben Daniel V",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "9444539047",
      },
      {
        Name: "Vimal Dharan",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "6374784736",
      },
    ],
    prizeMoney: [],

    facultyCoordinator: [
      {
        Name: "B.Natarajan",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Mobile%20app.png?alt=media&token=168b4bcf-e502-4cc0-92a5-bae593e1c79d",
    registrationFees: 200,
  },
  event16: {
    name: "X Gen Learning",
    mode: "Workshop",
    event_type: "Workshop",
    mode_type : 'Offline',
    description: [
      {
        point: "Basic introduction on the X Gen learning",
      },
    ],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "9.00 am to 4.00pm",
    date: "03/04/23",
    venue: "",
    studentCoordinator: [
      {
        Name: "Varun Maniappan",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "9498370478",
      },
      {
        Name: "Archanaa N",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "",
      },
      { Name: "Sukesh", 
        Dept: "AIE", 
        Year: " 2nd year", 
        contact: "" },
      { Name: "Jaikanth Y", 
        Dept: "AIE", 
        Year: " 2nd year", 
        contact: "" },
    ],
    facultyCoordinator: [
      {
        Name: "Ms.Rithani",
      },
    ],
    prizeMoney: [],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/X%20gen.png?alt=media&token=f1a9bc6b-c46e-499c-aefb-41c4b8689bae",
    registrationFees: 200,
  },
  event17:{
    name: "ETH Amrita",
    mode: "Workshop & Hackathon",
    mode_type : 'Offline',
    event_type: "Workshop & Hackathon",
    description: [
      {
        point: "The Reclaim Protocol workshop and hackathon on blockchain aims to educate participants on the fundamentals of the protocol and provide hands-on experience in building decentralized applications using the Reclaim Protocol.",
      },
      {
        point: "The workshop will cover topics such as the design principles of the protocol, its architecture, and its applications in real-world scenarios.",
      },
      {
        point: " The hackathon will provide participants with the opportunity to work collaboratively and use their skills to build innovative solutions using the Reclaim Protocol, with the chance to win prizes for their creations.",
      },
    ],
    rules: [
      {
        rule: "The hackathon will have a specific start and end time, as well as scheduled breaks and presentations. Make sure you are aware of the schedule and follow it. Participants should bring their own devices.",
      },
      {
        rule: "The judges will select the winners based on their scores and provide feedback to all participants. ",
      },
      {
        rule: "On the day of the Hackathon, teams will present their projects and demo along with a 10min small speech to the judges and other participants.",
      },
    ],
    time: "09.00 am to 03.00pm",
    date: "04/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Balaji",
        Dept: "ECE",
        Year: " 4th year",
        contact: "7675852414",
      },
      { Name: "Dibyajyoti", Dept: "CSE", Year: " 4th year", contact: "" },
      { Name: "K Gnapika Sindhu", Dept: "AIE", Year: "3rd year", contact: ""},
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Prasanna Kumar",
      },
    ],
    prizeMoney: [],
    registrationFees: 300,
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/ETH%20logo.png?alt=media&token=654f01d2-1eb0-4aac-8f61-a9f5e7907029",
  },
  event18: {
    name: "Project Expo",
    mode: "Exhibition",
    event_type: "Exhibition and demonstration",
    mode_type : 'Offline',
    description: [
      {
        point:
          "Basic knowledge, skill set, ethics and attitude related to computational problem solving to be exhibited and demonstrated.",
      },
    ],
    rules: [
      {
        rule: "Team size max 5, the project must be unique, novel, demonstratable, logically explainable, ethically feasible and have societal impact.",
      },
    ],
    time: "9.30 am to 1.30pm",
    date: "04/04/23",
    venue: "Classroom/prayer hall",
    studentCoordinator: [
      {
        Name: "Arun kaarthic T P",
        Dept: "CSE",
        Year: " 2nd year",
        contact: "7010707517",
      },
      {
        Name: "Kishore Kumar K P",
        Dept: "CSE",
        Year: "2nd year",
        contact: "9962009520",
      }
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Natarajan",
      },
      {
        Name: "Dr.Rajati",
      },
    ],
    prizeMoney: [
      {
        prize: "1st place: 5000",
      },
      {
        prize: "2nd place: 3000",
      },
    ],
    img: "https://firebasestorage.googleapis.com/v0/b/techfest-90fcb.appspot.com/o/Project%20expo.png?alt=media&token=2ee2f1b9-7125-423b-a117-62c18cb3cbff",
    registrationFees: 100,
  },

  event19: {
    name: "Battle Of The Ice - Clash of Clans",
    mode: "Online Gaming",
    event_type: "Competition",
    mode_type : 'Online',
    description: [
      {
        point: `This event is a classic gaming tournament where teams will be competing against each other to win the game.`,
      },
      {
        point: "Team Size: 5+1 sub",
      },
    ],
    rules: [
      {
        rule: "Standard game rules apply.",
      },
    ],

    prizeMoney: [
      {
        prize: "1st prize: 1000",
      },
    ],

    time: "4.00 pm to 6.00 pm",
    date: "03/04/23 & 04/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Karuppiah Sabari Kumar",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "9488519924",
      },
      {
        Name: "Harsha Vardhan",
        Dept: "3rd year",
        Year: "Cys",
        contact: "8668169291",
      },
      {
        Name: "Lokesh kumar",       
        Dept: "CSE",
        Year: "3rd-year",
        contact: "80728 52971",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    img : 'https://user-images.githubusercontent.com/73429989/225873381-f3edc034-af8a-4940-ad1a-a3cf7bf1bf5c.png',
    registrationFees: "Team Rs.250 ( Max: 5/team)",
  },
  event20: {
    name: "Battle Of The Ice - Call of Duty Mobile - TDM",
    mode: "Online Gaming",
    mode_type : 'Online',
    event_type: "Competition ",
    description: [
      {
        point: `This event is a classic gaming tournament where teams will be competing against each other to win the game.`,
      },
      {
        point: "Team Size: Solo (1) or Duo (2)",
      },
    ],
    rules: [
      {
        rule: "Standard game rules apply.",
      },
    ],

    prizeMoney: [
      {
        prize: "1st prize: 2000",
      },
      {
        prize: "2nd prize: 1000",
      },
    ],

    time: "6.30 pm to 10.00 pm",
    date: "03/04/23 & 04/04/23",
    venue: "",
    studentCoordinator: [
      {
        Name: "Karuppiah Sabari Kumar",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "9488519924",
      },
      {
        Name: "Harsha Vardhan",
        Dept: "3rd year",
        Year: "Cys",
        contact: "8668169291",
      },
      {
        Name: "Lokesh kumar",       
        Dept: "CSE",
        Year: "3rd-year",
        contact: "80728 52971",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    img : 'https://user-images.githubusercontent.com/73429989/225873747-dd0d1377-44a6-4aaf-8bc6-570665e68a7a.png',
    registrationFees: "Team Rs.250 ( Max: 5/team)",
  },
  event21: {
    name: "Battle Of The Ice - Valorant",
    mode: "Online Gaming ",
    mode_type : 'Online',
    event_type: "Competition ",
    description: [
      {
        point: `This event is a classic gaming tournament where teams will be competing against each other to win the game.`,
      },
      {
        point: "Team Size: 5 + 1 sub.",
      },
    ],
    rules: [
      {
        rule: "Standard game rules apply.",
      },
    ],

    prizeMoney: [
      {
        prize: "1st prize: 3500",
      },
      {
        prize: "2nd prize: 2000",
      },
      {
        prize: "3rd prize: 500",
      }
    ],

    time: "10.00 am to 2.00 pm",
    date: "03/04/23 and 04/04/23",
    venue: " ",
    studentCoordinator: [
      {
        Name: "Karuppiah Sabari Kumar",
        Dept: "CYS",
        Year: "3rd-year",
        contact: "9488519924",
      },
      {
        Name: "Raaj Eshwar",
        Dept: "Cse",
        Year: "2nd year",
        contact: "9952099734",
      },
      {
        Name: "Lokesh kumar",       
        Dept: "CSE",
        Year: "3rd-year",
        contact: "80728 52971",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    img : 'https://user-images.githubusercontent.com/73429989/225873918-236d4edc-0b51-4edf-a56a-ba9928353bb7.png',
    registrationFees: "Team Rs.250 ( Max: 5/team)",
  },
};
// --------- ECE EVENTS --------------

const eceEvents = {
  ece1: {
    name: "POSTER PRESENTATION",
    mode_type: "Offline",
    description: [
      {
        point: `
        Should include all the details of the work. The poster should be easily readable at a distance of two meters.
        Use Sentence case for the text on the poster
        Usage of only two FONT styles of their choice is permitted.
        The posters can be from any engineering domain.`,
      },
      {
        point: "Poster Presentation is an individual event.",
      },
      {
        point:
          "The event will be held offline where the participants are requested to visit the campus.",
      },
      {
        point:
          "The participants have to present their poster for 5-7 minutes to the jury members.",
      },
      {
        point:
          "Based on the marks awarded by the jury the winners will be announced.",
      },
    ],
    rules: [
      {
        rule: "https://acsha.vercel.app/",
      },
    ],
    prizeMoney : [
      {
        prize : '1st place : Rs. 3000/-'
      },
      {
        prize : '2nd place : Rs. 2000/-'
      }
    ],

    date: " 3rd April 2023",
    time: "10:00AM - 1:00PM",
    duration: "",
    venue: "VLSI LAB",
    studentCoordinator: [
      {
        Name: "G. Anuradha Reddy",
        Dept: "Ece",
        Year: " 4th year",
        contact: "8688450467",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. C. Ganesh Kumar",
      },
      {
        Name: "Dr. Sakthi Abirami B",
      },
    ],
    registrationFees: "UG - Rs.100 Per person PG - Rs.150 Per person",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343674/events/ece/poster_aytmba.png",
  },
  ece2: {
    name: "CIRCUITAL DILEMMA",
    duration: "",
    mode_type: "Offline",
    description: [
      {
        point: "This is a group event with maximum of 3 participants.",
      },
      {
        point:
          "The event will be held offline where the participants are requested to visit the campus.",
      },
      {
        point:
          "Teams are requested to build a circuit based on the problem statement given.",
      },
    ],

    rules: [
      {
        rule: "https://acsha.vercel.app/",
      },
    ],

    prizeMoney : [
      {
        prize : '1st place : Rs. 5000/-'
      },
      {
        prize : '2nd place : Rs. 3000/-'
      }
    ],

    date: " 3rd April 2023",
    time: "1:00PM - 3:00PM",
    venue: "VLSI LAB & SDR LAB",
    studentCoordinator: [
      {
        Name: "Pavithra Arcot",
        Dept: "Ece",
        Year: " 3rd year",
        contact: "7569910084",
      },
      {
        Name: "G. Anuradha Reddy",
        Dept: "EEE",
        Year: " 4th year",
        contact: "8688450467",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Maran Ponnambalam",
      },
      {
        Name: "Dr. Parthasarathy Srinivasan",
      },
    ],
    registrationFees: "Rs. 150 per team (2-3 participants)",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343637/events/ece/circuital_nppvoz.png",
  },
  ece3: {
    name: "IoT-Banda Dhavaja (CTF)",
    duration: "-",
    mode_type: "Offline",
    description: [
      {
        point: "IoT-CTF is a group event of maximum 3 participants.",
      },
      {
        point: "It tests the knowledge of solving IOT related problems.",
      },
      {
        point:
          "The event will be held offline where the participants are requested to visit the campus.",
      },
      {
        point:
          "Teams are requested to build a circuit based on the problem statement given.",
      },
    ],
    rules: [
      {
        rule: "https://acsha.vercel.app/",
      },
    ],
    prizeMoney : [
      {
        prize : '1st place : Rs. 5000/-'
      },
      {
        prize : '2nd place : Rs. 3000/-'
      }
    ],
    date: "4th April 2023",
    time: "9:00AM - 12:00AM",
    venue: "VLSI LAB and SDR Lab",
    studentCoordinator: [
      {
        Name: "Kadambari Sree Rama Aditya",
        Dept: "Ece",
        Year: "3rd year",
        contact: "8978041081",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. N. AISHWARYA",
      },
      {
        Name: "Dr. K P Jayaram",
      },
    ],
    registrationFees: "Rs. 200 per team (2-3 participants)",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343742/events/ece/iot_jcrqf1.png",
  },
  ece4: {
    name: "PASSIVE HACK",
    duration: "-",
    mode_type: "Offline",
    description: [
      {
        point: "Passive Hack is a group event with maximum 3 participants.",
      },
      {
        point:
          "The event will be held offline where the participants are requested to visit the campus.",
      },
      {
        point: "Teams are requested to build a circuit of their choice.",
      },
      {
        point:
          "The circuit winners will be announced based on the usability and innovation.",
      },
    ],
    rules: [
      {
        rule: "https://acsha.vercel.app/",
      },
    ],
    prizeMoney : [
      {
        prize : '1st place : Rs. 5000/-'
      },
      {
        prize : '2nd place : Rs. 3000/-'
      }
    ],

    date: "4th April 2023",
    time: " 11:00AM - 01:00PM",
    venue: "VLSI LAB and SDR Lab",
    studentCoordinator: [
      {
        Name: "Thota Rishkasree",
        Dept: "Cce",
        Year: " 2nd year",
        contact: "9676759918",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. S A Lakshman",
      },
      {
        Name: "Dr. Ramachandran",
      },
    ],
    registrationFees: "Rs. 150 per team (2-3 participants)",  
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343739/events/ece/passive_mkimfl.png",
  },
  ece5: {
    name: "INGENIUM",
    duration: "",
    mode_type: "Offline",
    description: [
      {
        point:
          "Ingenium 2023 will be a 24-hour Hackathon with open-ended themes where one could build anything which is fascinating as per the respective theme.",
      },
      {
        point:
          "Participants will be assigned mentors from ASE-Chennai to assist and answer their queries during the hackathon.",
      },
      {
        point: "Participants can work as a Team of a maximum of 3 members.",
      },
      {
        point:
          "All participants submitting an eligible project will receive participation certiﬁcates and the best ones will be featured in our oﬃcial blog.",
      },
      {
        point:
          "Participants are expected to submit their hack, with appropriate documentation, poster and a pitch video on the working of their hack.",
      },
      {
        point:
          "The shortlisted participants will be invited to pitch their product live in the ﬁnal round (offline).",
      },
      {
        point: "Winners and runners will be announced for both themes.",
      },
    ],
    rules: [
      {
        rule: "https://acsha.vercel.app/",
      },
    ],
    prizeMoney : [
      {
        prize : '1st place : Rs. 5000/-'
      },
      {
        prize : '2nd place : Rs. 3000/-'
      }
    ],

    date: "3rd April and 4th March 2023",
    time: " 24h (Starts at 10AM on 3rd April and Ends At 12PM on 4th April)",
    venue: "INTEL IoT lab",
    studentCoordinator: [
      {
        Name: "Soundar Rajan .G",
        Dept: "Ece",
        Year: " 3rd year",
        contact: "8667449639",
      },
      {
        Name: "Vishwanathan R",
        Dept: "Ece",
        Year: " 3rd year",

        contact: "8072590936",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. K Manoj Prabhakaran",
      },
      {
        Name: "Dr. Sita Devi Bharatula",
      },
      {
        Name: "Mr. V Damodaran",
      },
    ],
    registrationFees: "Rs. 150 per team (2-3 participants)",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343738/events/ece/ingenium_k47f15.png",
  },
};

// --------- C20 EVENTS --------------

const c20Events = {
  "c20-1": {
    name: "Smart Trivia",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    themes: [
      {
        theme: `Education and Digital Transformation`,
      },
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: `Integrated Holistic Health: Mind, Body and Environment`,
      },
      {
        theme: `Sustainable Resilient Communities: Climate, Environment 
& Net Zero Targets`,
      },
      {
        theme: "Technology Security and Transparency",
      },
    ],
    description: [
      {
        point : `Smart Trivia is an engaging and interactive quiz game that challenges players' knowledge across a range of topics.`
      },
      {
        point : ` With timed questions and multiple levels of difficulty, players can compete against each other to see who can answer the most questions correctly and climb the leaderboard.`
      },
      {
        point : 'Questions will be based on the above mentioned themes.',
      },
    ],
    
    rules: [
      {
        rule: "Each team will consist of 2 members.",
      },
      {
        rule: "Smart trivia will consist of 5 rounds with C20 theme.",
      },

      {
        rule : "Each question will be of 10 marks."
      },
      {
        rule : 'Time limit for each question will be 30 seconds.'
      },
      {
        
        rule : 'The questions will be asked to the respective groups. If a group fails to answer, the question will be passed to the next group for 5 marks.'  
      },
      {
        rule : 'All participants must remain respectful to the host and other competitors.'
      },
      {
        rule  :'If any kind of malpractice (answers from the audience, using mobiles, etc.), the turn for that team will be disqualified.'
      },
      {
        rule  : "No outside resources, such as phones or tablets, are allowed during the competition."
      },

    ],
    time: "10:00 AM to 12:00 PM",
    date: "03/04/23",
    venue: "AB1-30",
    studentCoordinator: [
      {
        Name: "Prateek Kumar",
        Dept: "AIE",
        Year: "1st year",
        contact: "9566171444",
      },
      {
        Name: "Jeevan Sendur",
        Dept: "AIE",
        Year: "1st year",
        contact: "8148460232",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. IR Oviya",
      },
    ],
    judging : [
      {
        criteria : 'Team with maximum points at the end wins. In the event of a tie, a tie-breaker question will be asked.'
      }
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704253/events/smart_trivia_nibhsc.png",
    registrationFees: "Rs. 100 per team",
  },

  "c20-2": {
    name: "SelfieGram",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    themes: [
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: `Integrated Holistic Health: Mind, Body and Environment`,
      },
    ],
    description: [
      {
        point : `A selfie competition is a creative platform for individuals to showcase their unique style and personality through self-portrait photography.`
      },
      {
        point : `It's a chance to join the selfie craze and express oneself creatively.`
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
      {
        point : 'Maximum of 2 participants per team is allowed'
      }
    ],
    rules: [
      {
        rule: `The selfie should be original and creative.`,
      },
      {
        rule: "The selfie can be taken with a smartphone or any other camera device.",
      },
      {
        rule: "The participants have to submit two selfies of each portraiting the above-mentioned themes in the given link below by April 1st 2023 before 7pm",
      },
      {
        rule: `Maximum number of participants for a team is 2. This doesn’t mean only these 2 people have to be in the selfie. But the responsibility of the work goes to those 2 students.`,
      },
      {
        rule: "The selfie should be accompanied by a brief description that explains how it relates to the theme.",
      },
      {
        rule: "The selfies should not contain any offensive or discriminatory content.",
      },
      {
        rule: "The submitted selfies will be posted in the tantrostsav official Instagram page  by 1st April 2023.",
      },
      {
        rule: "On based on the likes of each selfie, the participants will be selected for the next round and will receive the confirm mail by 2nd April 2023.",
      },
      {
        rule: "The selected participants should come here physically and should take the third selfie on the theme given within the stipulated time and the final judgement will be done on the third selfie by the jury.",
      },
      {
        rule: `Submission link: https://forms.gle/MbNvxBPqtNMGzmPi6`,
      },
    ],
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria : 'Quality of the photo.'
      },
      {
        criteria : 'The effectiveness of the description in conveying the message of the selfie.'
      }
    ],
    time: "1:00 PM to 2:00 PM",
    date: "03/04/23",
    venue: "AB1-26",
    studentCoordinator: [
      {
        Name: "Mohanraj",
        Dept: "CYS",
        Year: "1st year",
        contact: "9080906985",
      },
      {
        Name: "Jeyanth Khanna",
        Dept: "CYS",
        Year: " 1st year",
        contact: "9384508330",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Deepak",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701664/Selfiegram_icon_mjejhi.png",
    registrationFees: "Rs. 100 per team",
  },

  "c20-3": {
    name: "Reels",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria : 'Quality of the video.'
      },
      {
        criteria : 'The effectiveness of the description in conveying the message of the video.'
      }
    ],
    themes: [
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: `Sustainable Resilient Communities: Climate, Environment 
        & Net Zero Targets`,
      },
    ],
    description: [
      {
        point: 'A reels competition is a social media contest where participants create short videos using the Reels feature on platforms such as Instagram.'
      },
      {
        point: "It is a team event(MAX 4 participants per team).",
      },
    
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
      
    ],
    rules: [
      {
        rule: "Reel video must be between 5 - 90 seconds long and have an aspect ratio of 9:16.",
      },
      {
        rule: `Video should not intend to hurt the sentiments of any individual, community, sect or religion. 
        Any type of humorous consisting of the above-mentioned is not encouraged.`,
      },
      {
        rule: `The reel should be informative, entertaining, and fun, with twists having LOL and WOW factors.`,
      },
      {
        rule: "The reel should be made within 2 hours, as the TOPIC WILL BE GIVEN ON SPOT.",
      },
      {
        rule: "Participants must bring their own devices (mobile, laptop) with software (editing apps, etc.,)",
      },
    ],
    time: "12.30 PM to 4.30 PM",
    date: "03/04/23",
    venue: "AB1-34",
    studentCoordinator: [
      {
        Name: "Mithun.R ",
        Dept: "CYS",
        Year: "1st year",
        contact: "6383270756",
      },
      {
        Name: "Aravindhan",
        Dept: "CYS",
        Year: "1st year",
        contact: "7397412269",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Mathivanan",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701663/Copy_of_Reels_aqok3b.png",
    registrationFees: "Rs. 100/-per team",
  },
  "c20-4": {
    name: "Sail On the Idea",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria: `How impactful is the idea in solving the problem or an aspect of the problem 
        (Impact) → 25%`,
      },
      {
        criteria: "The clarity the team has in terms of what might  be needed in taking the idea to fruition (Clarity, technical feasibility) →  25% ",
      },
      {
        criteria: "Product Innovation →  25%",
      },
      {
        criteria: "Market research analysis → 15%",
      },
      {
        criteria: "Financial feasibility → 10%",
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme:
          "Sustainable Resilient Communities: Climate, Environment & Non-Zero Targets.",
      },
      {
        theme: "Technology Security and Transparency",
      },
    ],
    description: [
      {
        point : 'Sale on the Idea is an ideathon that challenges participants to come up with innovative and creative ideas to solve a specific problem or meet a particular need.'
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
      {
        point:
          "New ideas are the source of innovation. We need new perspectives and ideas for development.",
      },
      {
        point: "It is a team event(MAX 2 participants per team).",
      },
    ],
    rules: [
      {
        rule: "Teams will be assigned with their on-spot problem/topics statement.",
      },
      {
        rule: "Laptops are mandatory.",
      },
      {
        rule: "The Competition will be conducted in two rounds.",
      },
      {
        rule: "Copying of idea is strictly prohibited.",
      },
      {
        rule: "During event you can express your idea through any mode of presentation (videos, animation, presentation(ppt),etc.)",
      },
    ],
    time: "10.00 am to 2.30 pm",
    date: "04/04/2023",
    venue: "AB1-13",
    studentCoordinator: [
      {
        Name: "Sridharan S",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9345724598",
      },
      {
        Name: "Saravanan  R",
        Dept: "CYS",
        Year: "2nd year",
        contact: "8870465652",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Veluchamy",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704617/events/sail_on_the_idea_bph6lo.png",
    registrationFees: "Rs. 100/ -per team",
  },

  "c20-5": {
    name: "SnapArt (Collage Making)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and Uniqueness.'
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme: "Integrated Holistic Health: Mind, Body and Environment",
      },
      {
        theme: "Technology Security and Transparency",
      },
    ],
    description: [
      {
        point : `Are you ready to unleash your inner artist and showcase your creative skills? A collage making competition is the perfect opportunity to do so! Participants use a variety of materials to craft a unique and visually stunning piece of art that tells a story or evokes emotions.`
      },
      
      {
        point : 'Max 1-3 members per team'
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
      {
        point: `Among the above three themes, any one topic will be given on the spot.`,
      },
    ],
    rules: [
      {
        rule: "Collage to be made on chart paper (A1 size)",
      },
      {
        rule: "Participants are required to bring their own stationary materials.",
      },
      {
        rule: "Magazine cutting, newspaper cutting and paintings can be included.",
      },
      {
        rule: "Internet can be used for reference.",
      },
    ],
    time: "10.30 am to 1.00 pm",
    date: "04/04/23",
    venue: "AB 2-30",
    studentCoordinator: [
      {
        Name: "Sidesh",
        Dept: "AIE",
        Year: "2nd year",
        contact: "9385627182",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Ms. Rithani",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704254/events/snap_art_wt2gar.png",
    registrationFees: "Rs.100",
  },

  "c20-6": {
    name: "Face Painting",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    themes: [
      {
        theme:
          "Gender Equality and Disability"
      },
      {
        theme:
          "Integrated Holistic Health: Mind, Body and Environment - Nutritional Health",
      },
      {
        theme:
          "Sustainable Resilient Communities: Climate, Environment Net Zero Targets - Net-Zero",
      },
    ],
    
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria: "Decision of the judges will be final and binding.",
      },
    ],

    description: [
      {
        point : `A face painting competition is a contest where participants showcase their artistic skills by creating unique and creative designs on human faces using paints and makeup.`
      },
      {
        point : `The competition can have different themes or categories, and the designs are judged based on creativity, technique, and overall presentation.`
      },
      {
        point : `Winners are usually awarded prizes or recognition for their outstanding work.`
      },
      {
        point: "It is a team event of where one of the person should be a model and the other should paint.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },       
    ],
    rules: [
      {
        rule: "Participants should bring their own colours, brushes etc.",
      },
      {
        rule: "Time limit is 60 minutes.",
      },
      {
        rule: "Themes will be provided on spot",
      },
    ],
    time: "1.00pm to 2.00pm",
    date: "04/04/23",
    venue: "AB1-11",
    studentCoordinator: [
      {
        Name: "Ashutosh P",
        Dept: "CSE",
        Year: "3rd year",
        contact: "9790803450",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Devi Sowjanya",
      },
      {
        Name: "Ms.Divya",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://user-images.githubusercontent.com/73429989/225205310-46e81623-c025-450c-854e-f980b46d3088.png",
    registrationFees: "Rs. 100/ -per team",
  },

  "c20-7": {
    name: "Essay Writing",
    mode_type: "Offline", 
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    event_type: "Competitions",
    judging : [
      {
        criteria: "The evaluation will be made on the basis of logical, coherent, and relevant content with a suitable format.",
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],

    themes: [
      {
        theme:
          "Integrated Holistic Health: Mind, Body and Environment - Nutritional Health",
      },
      {
        theme:
          "Sustainable Resilient Communities: Climate, Environment Net Zero Targets - Net-Zero",
      },
      {
        theme: "Education and Digital Transformation",
      },
      {
        theme: "Technology Security and Transparency",
      },
    ],
    description: [
      {
        point : 'An essay writing competition is a contest where participants are asked to write an essay on a particular topic or theme.'
      },
      {
        point : 'The essays are judged based on criteria such as originality, creativity, coherence, grammar, and overall quality.'
      },
      {
        point : 'Prizes may be awarded to the winners, and the competition may be open to different age groups and skill levels.'
      },
      {
        point: "It is an individual event.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      }, 
    ],
    rules: [
      {
        rule: "The time allotted for writing the essay is 1.30 hours.",
      },
      {
        rule: "Sheets for writing will be provided by the university. Other required stationary needs to be carried by the participants.",
      },
      {
        rule: "Word limits for the essay will be 750-1000.",
      },

    ],
    time: "10:00 am to 12:00 pm",
    date: "04/04/23",
    venue: "AB1-337",
    studentCoordinator: [
      {
        Name: "Vishal R",
        Dept: "ARE",
        Year: "1st year",
        contact: "8015411811",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Jeyalakshmi",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-8": {
    name: "Thought Talk (Poetry Competition)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria: "The evaluation will be made on the basis of logical, coherent, and relevant content with a suitable format.",
      },
      {
        criteria: "Discipline should be maintained by the participants such as following the code of conduct of a competition, and avoiding plagiarism",
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: "Integrated Holistic Health: Mind, Body and Environment",
      },
    ],
    description: [
      {
        point : `It is a poetry competition that invites participants to share their thoughts and emotions through their poetry.`
      },
      {
        point : `Participants can showcase their writing skills, creative use of language, and ability to connect with the audience emotionally.`
      },
      {
        point : `The competition encourages participants to experiment with different forms and styles of poetry to bring their ideas to life.`
      },
      {
        point: "It is an individual event.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
    ],
    rules: [
      {
        rule: "The topic will be announced on the spot.",
      },
      {
        rule: "The time allotted for drafting the peotry is 1.30 hours.",
      },
      {
        rule: "Sheets for writing will be provided by the university. Other required stationery needs to be carried by the participants.",
      },
    ],
    time: "1:00 PM to 3:00 PM",
    date: "04/04/23",
    venue: "AB1-12",
    studentCoordinator: [
      {
        Name: "Arun Adityan",
        Dept: "ECE",
        Year: "2nd year",
        contact: "7870732427",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Mr. Hariharan",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://user-images.githubusercontent.com/73429989/225205698-69829cc5-e783-4fd0-8df4-0fc0ac573c96.png",
    registrationFees: "Rs. 100",
  },

  "c20-9": {
    name: "NovelNolan (Short Film Making Competition)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [ 
      {
        criteria : 'The winner among the top 10 (1st and 2nd) will be selected based on the following metrics'
      },
      {
        criteria  : '70℅ - Jury decision'
      },
      {
        criteria : '30℅ - Audience polling'
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: "Integrated Holistic Health: Mind, Body and Environment",
      },
      {
        theme: "Technology Security and Transparency",
      },
    ],
    description: [
      {
        point : `Ready to take the world by storm with your cinematic storytelling skills? A short film making competition is the perfect arena to showcase your creativity and filmmaking prowess.`
      },
      
      {
        point: "A team may consist of maximum 7 members.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
    ],
    rules: [
      {
        rule: "Film time span must be 6-8 minutes",
      },
      {
        rule: "The film should be filmed in any of the languages [English, Tamil, Malayalam, Hindi, Telugu ].",
      },
      {
        rule: "Any foul language/misleading content leads to elimination from the contest.",
      },
      
      {
        rule : 'Submission details will be shared with the registered teams separately.'
      },
      {
        rule : 'A copy of the script paper should be submitted (to avoid any sort of proxy or malpractice).'
      },
      {
        rule : 'The event is only for college students and strictly not for any part-time or full-time filmmakers.'
      },
      {
         rule : 'All submitted movies (last date 31st march) will be considered for initial screening by the expert jury.'
      },
      {
        rule : "Among the submission top 10 will be selected and announced on April 2nd. These 10 movies will be screened during the tech fest for the audience on April 4th."
      },
      {
        rule : 'A special mention for the following four category will be announced at the end of the screening on April 4 : Best Director, Best Performer, Best Cinematographer, Best Editor'
      }
    ],
    time: "10:00 AM to 12:00 PM",
    date: "04/04/23",
    venue: "AB1-02",
    studentCoordinator: [
      {
        Name: "S.Sarveshvaran",
        Dept: "CCE",
        Year: "1st year",
        contact: "8778993228",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Mr. Dhamodharan",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100/ -per team",
  },

  "c20-10": {
    name: "Rang De (Rangoli Competition)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: `Sustainable Resilient Communities: Climate, Environment 
        & Net Zero Targets`,
      },
    ],
    description: [
      {
        point : 'Rangoli competition is a traditional Indian art form where patterns and designs are created on the floor using colored powder, flowers, and other materials.'
      },
      {
        point :  'The competition celebrates the rich cultural heritage of India and promotes teamwork and artistic expression.'
      },
      {
        point: "It is a team event of maximum 2 members",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
    ],
    rules: [
      {
        rule: "Time :90 minutes",
      },
      
      {
        rule: "The rangoli should be max of 3ft x 3ft",
      },
      {
        rule: "All the teams should strictly adhere to the themes mentioned.",
      },
      {
        rule: "Multiple entries by one person is not allowed",
      },
      {
        rule: "Participants are instructed to bring their OWN materials for the competition.",
      },
    ],
    time: "10:00 AM to 12:00 PM",
    date: "04/04/23",
    venue: "Prayar Hall",
    studentCoordinator: [
      {
        Name: "N.Sarrvesh",
        Dept: "AIE",
        Year: "2nd year",
        contact: "9655879116",
      },
      {
        Name: "Paranav Raj S",
        Dept: "AIE",
        Year: "2nd year",
        contact: "8939977933",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Sindhu",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100/ -per team",
  },

  "c20-11": {
    name: "Shutter Showcase (Photography Competition)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme: `Sustainable Resilient Communities: Climate, Environment 
        & Net Zero Targets`,
      },
    ],
    description: [
      {
        point  : `This competition invites participants to submit their best photos.`
      },
      {
        point : `The competition requires participants to capture stunning moments with a click of their camera and showcase their creativity and talent.`
      },
      {
        point: "This is an individual event and one participant can submit a maximum of five photo.",
      },
  
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
    ],
    rules: [
      {
        rule: "All photos must be original, meaning you may only enter photographs that you took. plagiarism is strictly restricted.",
      },
      {
        rule: "Content of the submission must be suitable for a global, public audience. entries with offensive or inappropriate content or those which promote any specific brand will be disqualified.",
      },
      {
        rule: "The copyrights of the photo remains to the photographer but organisers reserve the rights to use the images for publicity and other uses.",
      },
      {
        rule: "Organisers reserve the right to crop photos",
      },
      {
        rule: "Please read the photograph specifications very carefully. failing to adhere to the format will lead to disqualification",
      },
      {
        rule: "Specifications : Any Camera can be used.",
      },
      {
        rule: "Photo submissions should be in landscape mode.",
      },
      {
        rule: "Photos must be submitted in jpeg format. non-digital formats are not accepted. File size should be between 3 megabytes (minimum) and 10 megabytes (maximum).",
      },
      {
        rule: "The EXIF data of the photograph must remain intact.",
      },
      {
        rule: "Digitally manipulating photos should be kept to a minimum.",
      },
      {
        rule : 'Your photograph must authentically depict the setting as you saw it when you took the photograph.'
      },
      {
        rule: "Images must not include a border. if an image includes a border, organisers reserves the right to crop the border.",
      },
      {
        rule: "A subtle watermark in the corner of the image is acceptable, but organisers re- serve the right to crop photos, which may remove a watermark.",
      },
      {
        rule : 'The watermark should cover no more than 5% of the photo.'
      },
      {
        rule : "The deadline for submitting the photographs is till 30th March,2023, 5pm"
      },
      {
        rule : "Link to submit the photograph : https://forms.gle/3Zj6X2ormMM4NBZs5"
      },
      {
        rule : "Shortlisted participants for the next level will be intimated by mail on 2nd April,2023"
      }
    ],
    time: "11:00 AM to 1:00 PM",
    date: "04/04/23",
    venue: "Prayar Hall",
    studentCoordinator: [
      {
        Name: "Arun Rajesh",
        Dept: "Mech",
        Year: "3rd year",
        contact: "9526525576",
      },
      {
        Name: "Surya S",
        Dept: "Mech",
        Year: "2nd year",
        contact: "8921569817",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. Piyush Pratap Singh",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701667/PICK_AND_CLICK_photo_zj2rfj.png",
    registrationFees: "Rs. 100",
  },

  "c20-12": {
    name: "Gen-Z Hoffman (Poster Making)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    themes: [
      {
        theme: "Education and Digital Transformation.",
      },
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: `Sustainable Resilient Communities: Climate, Environment 
        & Net Zero Targets`,
      },
    ],
    description: [
      {
        point : `Get ready to channel your inner artist and create an impactful message through a poster making competition! Participants are challenged to design a poster that effectively communicates a message or theme on social issues, health and safety, or any relevant topic.`
      },
      {
        point : `The winning entry is chosen based on the creative design, powerful message, and visual impact.`
      },
      {
        point : 'The prizes and recognition received are just the icing on the cake, as the winning posters may be used for promotional or awareness-raising purposes, creating a lasting impact on society.'
      },
      {
        point: "It is an individual event.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
    ],
    rules: [
      {
        rule: "The poster should be in A4 size.",
      },
      {
        rule: "Each participant can create only one poster.",
      },
      {
        rule: "All Poster should be original work of participant. No copyrighted content can be used. Any participant found violating rules and regulation will be disqualified from competition",
      },
      {
        rule: "Contestants must create poster only in  the given 1.30 hours at the venue.",
      },
      {
        rule: "Final file format should be pdf with maximum size of 10MB.",
      },
    ],
    time: "10:30 AM to 12:00 PM",
    date: "03/04/23",
    venue: "AB1-24",
    studentCoordinator: [
      {
        Name: "Sujit M",
        Dept: "Mech",
        Year: "3rd year",
        contact: "9791796848",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Mr.A K Hemanth",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704254/events/gen-_hoffman_i5mnqr.png",
    registrationFees: "Rs. 100",
  },

  "c20-13": {
    name: "Sketch Art (Sketching)",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    themes: [
      {
        theme: "Integrated Holistic Health: Mind, Body and Environment",
      },
      {
        theme: "Gender Equality and Disability",
      },
      {
        theme: `Sustainable Resilient Communities: Climate, Environment 
        & Net Zero Targets`,
      }
    ],
    description: [
      {
        point : 'A sketch art competition is an event where participants create drawings using various techniques such as pencil, charcoal, or ink.'
      },
      {
        point: "It is an individual event.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      },
    ],
    rules: [
      {
        rule: "Participants have to carry their own drawing sheet, stationery material, colors etc.",
      },
      {
        rule: "The sketch is open to both 2-dimensional and 3-dimensional works.",
      },
      {
        rule: "Any Sketch Pencils, Water/Fabric color/Pastels can be used.",
      },
    ],
    time: "9:30 AM to 11:00 AM",
    date: "04/04/23",
    venue: "AB1-35",
    studentCoordinator: [
      {
        Name: "Jeshwanth",
        Dept: "CSE",
        Year: "3rd year",
        contact: "6301218072",
      },
      {
        Name: "Jaiadhithyan",
        Dept: "CSE",
        Year: "2nd year",
        contact: "9486731136",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr. G Saranya",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://user-images.githubusercontent.com/73429989/225205876-1f48ec68-ff55-4d86-a61d-b7f75af8e120.png",
    registrationFees: "Rs. 100",
  },

  "c20-14": {
    name: "Brushless Painting",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
    ],
    themes: [
      {
        theme:
          "Education and Digital Transformation",
      },
      {
        theme : 'Gender Equality and Disability'
      },
      {
        theme: "Integrated Holistic Health: Mind, Body and Environment",
      },
    ],
    description: [
      {
        point : 'A brushless painting competition is a creative contest where the participant should not use any conventional painting tools or devices instead they can use any other objects and paint a unique painting potraiting the C20 themes which will be given on the same day.'
      },
      
      {
        point: "It is an individual event.",
      },  
      
    ],
    rules: [
      {
        rule: "The use of any conventional painting tools is strictly prohibited.",
      },
      {
        rule: `Paints, fingers, a palette knife, newsprint, cloth rags, earbuds, and threadbare can all be used to create artwork. 
      Any other supportable equipment other than a brush is permissible.`,
      },
      
      {
        rule:
          "Participants will be given 45 minutes, and only time-bound submissions will be evaluated.",
      },
      {
        rule: "Participants should bring their Drawing sheets (A2 size).",
      },
      {
        rule: "Students must bring their own colors and other stationar materials.",
      },
    ],
    time: "11.30am to 12.30pm",
    date: "04/04/23",
    venue: "AB1-06",
    studentCoordinator: [
      {
        Name: "Vijay Kumar",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9629329074",
      },
      {
        Name: "Vijay Varma",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9778597445",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Devi Sowjanya",
      },
      {
        Name: "Ms.Divya",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://user-images.githubusercontent.com/73429989/225205589-a8874707-de0d-48b0-9daa-c729f17c79ea.png",
    registrationFees: "Rs. 100",
  },

  "c20-15": {
    name: "Cloth Painting",
    mode_type: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    judging : [
      {
        criteria : 'Relevance to the theme of the competition.'
      },
      {
        criteria  : 'Creativity and originality.'
      },
      {
        criteria: "Decision of the judges will be final and binding.",
      },
    ],
    themes: [
      {
        theme:
          "Integrated Holistic Health: Mind, Body and Environment - Nutritional Health",
      },
      {
        theme:
          "Sustainable Resilient Communities: Climate, Environment Net Zero Targets - Net-Zero",
      },
      {
        theme:
          "Technology Security and Transparency - Security, Safety, And Resilience",
      },
    ],
    description: [
      {
        point : `Cloth Painting competition challenges participants to showcase their creativity and artistic skills on fabric or cloth.`
      },
      {
        point : `The competition is judged based on the design's uniqueness, the use of colors, and how well the design complements the fabric. `
      },
      {
        point : `The competition encourages participants to experiment with different styles, techniques, and mediums to create stunning and unique fabric paintings.`
      },
      {
        point: "It is an individual event.",
      },
      {
        point: `Competition will be based on the above mentioned themes.`,
      }, 
      
    ],
    rules: [
      {
        rule: "Participants should bring their own colours, brushes etc.",
      },
      {
        rule : 'The dimension of white cloth is 48cm x 48cm. (White XXL size cloth)'
      },
      {
        rule: "Time limit is 60 minutes.",
      },
    ],
    time: "2.30pm to 3.30pm",
    date: "04/04/23",
    venue: "AB1-07",
    studentCoordinator: [
      {
        Name: "B Bhanu Sai Mani Kiran",
        Dept: "CCE",
        Year: "3rd year",
        contact: "7995677214",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Devi Sowjanya",
      },
      {
        Name: "Ms.Divya",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "2nd prize : Rs. 2000",
      },
    ],
    img: "https://user-images.githubusercontent.com/73429989/225205111-acb2184f-965f-4730-b064-5d4f2fbd5b82.png",
    registrationFees: "Rs. 100",
  },
};

function run() {
  const db = firebase.default.firestore();
  const docRef = db.collection("events_final"); // collection name
  // const docRef = db.collection("events"); // collection name
  let i = 0;
  while (i < _.keys(c20Events).length) {
    docRef.doc(_.keys(c20Events)[i]).set({
      name: c20Events[_.keys(c20Events)[i]].name,
      mode_type: c20Events[_.keys(c20Events)[i]].mode_type,

      content: c20Events[_.keys(c20Events)[i]].content,
      themes : c20Events[_.keys(c20Events)[i]].themes,
      judging : c20Events[_.keys(c20Events)[i]].judging,
      // duration : c20Events[_.keys(c20Events)[i]].duration,

      description: c20Events[_.keys(c20Events)[i]].description,
      rules: c20Events[_.keys(c20Events)[i]].rules,
      venue: c20Events[_.keys(c20Events)[i]].venue,
      studentCoordinator: c20Events[_.keys(c20Events)[i]].studentCoordinator,
      facultyCoordinator: c20Events[_.keys(c20Events)[i]].facultyCoordinator,
      registrationFees: c20Events[_.keys(c20Events)[i]].registrationFees,
      img: c20Events[_.keys(c20Events)[i]].img,
      date: c20Events[_.keys(c20Events)[i]].date,
      prizeMoney : c20Events[_.keys(c20Events)[i]].prizeMoney,
      time: c20Events[_.keys(c20Events)[i]].time,
    });
    console.log("schema", c20Events[_.keys(c20Events)[i]].prizeMoney);
    i++;
    console.log(i + 1 + "done"); // just to check if the loop is working
  }
  console.log(_.keys(c20Events).map((event) => c20Events[event].name));
}

run();

function cseEvents() {
  const db = firebase.default.firestore();
  const docRef = db.collection("events_final"); // collection name
  // const docRef = db.collection("events"); // collection name
  let i = 0;
  while (i < _.keys(events).length) {
    docRef.doc(_.keys(events)[i]).set({
      name: events[_.keys(events)[i]].name,
      mode_type: events[_.keys(events)[i]].mode_type,

      description: events[_.keys(events)[i]].description,
      rules: events[_.keys(events)[i]].rules,
      venue: events[_.keys(events)[i]].venue,
      studentCoordinator: events[_.keys(events)[i]].studentCoordinator,
      facultyCoordinator: events[_.keys(events)[i]].facultyCoordinator,
      registrationFees: events[_.keys(events)[i]].registrationFees,
      img: events[_.keys(events)[i]].img,
      date: events[_.keys(events)[i]].date,
      prizeMoney : events[_.keys(events)[i]].prizeMoney,
      time: events[_.keys(events)[i]].time,
    });
    console.log("schema", events[_.keys(events)[i]].prizeMoney);
    i++;
    console.log(i + 1 + "done"); // just to check if the loop is working
  }
  console.log(_.keys(events).map((event) => events[event].name));
}

cseEvents();

function eventMech() {
  const db = firebase.default.firestore();
  const docRef = db.collection("events_final"); // collection name
  // const docRef = db.collection("events"); // collection name
  let i = 0;
  while (i < _.keys(eventmech).length) {
    docRef.doc(_.keys(eventmech)[i]).set({
      name: eventmech[_.keys(eventmech)[i]].name,
      mode_type: eventmech[_.keys(eventmech)[i]].mode_type,

      description: eventmech[_.keys(eventmech)[i]].description,
      rules: eventmech[_.keys(eventmech)[i]].rules,
      venue: eventmech[_.keys(eventmech)[i]].venue,
      studentCoordinator: eventmech[_.keys(eventmech)[i]].studentCoordinator,
      facultyCoordinator: eventmech[_.keys(eventmech)[i]].facultyCoordinator,
      registrationFees: eventmech[_.keys(eventmech)[i]].registrationFees,
      img: eventmech[_.keys(eventmech)[i]].img,
      date: eventmech[_.keys(eventmech)[i]].date,
      prizeMoney : eventmech[_.keys(eventmech)[i]].prizeMoney,
      time: eventmech[_.keys(eventmech)[i]].time,
    });
    console.log("schema", eventmech[_.keys(eventmech)[i]].prizeMoney);
    i++;
    console.log(i + 1 + "done"); // just to check if the loop is working
  }
  console.log(_.keys(eventmech).map((event) => eventmech[event].name));
}

eventMech();

function eventECE() {
  const db = firebase.default.firestore();
  const docRef = db.collection("events_final"); // collection name
  // const docRef = db.collection("events"); // collection name
  let i = 0;
  while (i < _.keys(eceEvents).length) {
    docRef.doc(_.keys(eceEvents)[i]).set({
      name: eceEvents[_.keys(eceEvents)[i]].name,
      mode_type: eceEvents[_.keys(eceEvents)[i]].mode_type,
      description: eceEvents[_.keys(eceEvents)[i]].description,
      rules: eceEvents[_.keys(eceEvents)[i]].rules,
      venue: eceEvents[_.keys(eceEvents)[i]].venue,
      studentCoordinator: eceEvents[_.keys(eceEvents)[i]].studentCoordinator,
      facultyCoordinator: eceEvents[_.keys(eceEvents)[i]].facultyCoordinator,
      registrationFees: eceEvents[_.keys(eceEvents)[i]].registrationFees,
      img: eceEvents[_.keys(eceEvents)[i]].img,
      date: eceEvents[_.keys(eceEvents)[i]].date,
      prizeMoney : eceEvents[_.keys(eceEvents)[i]].prizeMoney,
      time: eceEvents[_.keys(eceEvents)[i]].time,
    });
    console.log("schema", eceEvents[_.keys(eceEvents)[i]].prizeMoney);
    i++;
    console.log(i + 1 + "done"); // just to check if the loop is working
  }
  console.log(_.keys(eceEvents).map((event) => eceEvents[event].name));
}

eventECE();