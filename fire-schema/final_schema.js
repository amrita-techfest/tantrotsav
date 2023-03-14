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
    event_type: "CAD Competition",
    description: [
      {
        point: "Prelims (Online , 24/03/2023) & Finals (Offline, 25/03/2023) ",
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
    date: "24/03/23 - 25/03/23",
    time: "10:00 AM - 12:00 PM ",
    duration: "2 hours",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688582/events/mech/Untitled%20design/Srujan_klwcqm.png",
  },

  mech2: {
    name: "ROBORACE",
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
    date: "24/03/23",
    time: "10:00 AM ",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688578/events/mech/Untitled%20design/Roborace_zxbeh6.png",
  },

  mech3: {
    name: "SPARK",
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
        Name: "Mr. P.R.Raghavendran",
      },
    ],
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    duration: "",
    registrationFees: "Rs. 300/- per head",
    date: "25/03/23",
    time: " 10:00 AM ",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688577/events/mech/Untitled%20design/Spark_vvug9h.png",
  },

  mech4: {
    name: "Maze Solver Challenge",
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
    date: "24/03/23",
    time: " 10:00 AM to 1:00PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688576/events/mech/Untitled%20design/Maze_trjqh1.png",
  },

  mech5: {
    name: "Prastavam",
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
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
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
    date: "25/03/23",
    time: " 10:00 AM to 1:00PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688577/events/mech/Untitled%20design/prastavam_nmhazk.png",
  },

  mech6: {
    name: "Auto Expo",
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
        Name: "Mr.PR Raghavendran",
      },
    ],
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    duration: "",
    registrationFees: " /- ",
    date: "24/03/23",
    time: " 10:00 AM - 1:00PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688576/events/mech/Untitled%20design/Auto_expo_e1tukw.png",
  },

  mech7: {
    name: "stunt-show",
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
        Name: "Mr.PR Raghavendran",
      },
    ],
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    duration: "",
    registrationFees: " /- ",
    date: "24/03/23",
    time: " 10:30 AM - 11:30 AM & 2:30 PM - 3:30 PM",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678688576/events/mech/Untitled%20design/Stunt_kpnpig.png",
  },
};

// --------- CSE EVENTS --------------

const events = {
  event1: {
    name: "Strigrays League - Gaming Jam",
    mode: "Game Development",
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
        point: "Timing: 23/03/23: 8.00 am to 12.00pm",
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
        point: "Timing: 23/03/23: 1.00 pm to 5.00pm",
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
        rule: `Requirements:  
        Latest version of Unity/Blender.`,
      },
      {
        rule: `Pc of i5, 8Gb Ram and at least 2 GB graphics card(Any version: Nvidia/Amd).`,
      },
      {
        rule: `No need of prior knowledge on Programming.`,
      },
      {
        rule: `If required, a intro on Unity/Blender will be given to the participants before the event by the club members.`,
      },
    ],
    time: "10.00 am to 12.30pm",
    date: "24/03/23",
    venue: "CYS LAB 2",
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
    prizeMoney: [
      {
        prize: "1 st prize: 3000",
      },
      {
        prize: "2nd prize: 2000",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    registrationFees: 100,
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678093345/events/Strigrays%20League%20-%20Gaming%20Jam.png",
  },
  event2: {
    name: "Battle Of The Ice - Gaming Tournment",
    mode: "Online Gaming ",
    event_type: "Competition ",
    description: [
      {
        point: `This event is a classic gaming tournament where teams will be competing against each other to win the game.`,
      },
      {
        point: "Event 1: Call of duty Mobile-Battle Royale",
      },
      {
        point: "Team Size: Solo (1) or Duo (2)",
      },
      {
        point: "Timing: 23/03/23: 8.00 am to 10.00pm",
      },
      {
        point: "Event 2: Clash of Clans ",
      },
      {
        point: "Team Size: 5+1 sub",
      },
      {
        point: "Timing: 23/03/23: 10.00 am to 1.00pm",
      },
      {
        point: "Event 3: Over-watch",
      },
      {
        point: "Team Size: 5 + 1 sub.",
      },
      {
        point: "Timing: 23/03/23: 2.00 pm to 5.00pm",
      },
      {
        point: "Event 4: Valorant",
      },
      {
        point: "Team Size: 5 + 1 sub.",
      },
      {
        point: "Timing: 24/03/23: 9.00 am to 2.00pm",
      },
      {
        point: "Event 5: Fall guys.",
      },
      {
        point: "Team Size: Solo.",
      },
      {
        point: "Timing: 24/03/23: 3.00 pm to 5.00pm",
      },
    ],
    rules: [
      {
        rule: "Requirements:",
      },
      {
        rule: "Latest version of Participating Game.",
      },
      {
        rule: "Own Gaming PC.",
      },
      {
        rule: "Good network connectivity.",
      },
      {
        rule: "Necessary gadgets required.",
      },
    ],

    prizeMoney: [
      {
        prize: "1 st prize: 3000",
      },
      {
        prize: "2nd prize: 2000",
      },
    ],

    time: "10.00 am to 3.00pm",
    date: "24/03/23",
    venue: "Online Event",
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
        Name: " Ajai raj",
        Dept: "CSE",
        Year: "3rd-year",
        contact: "7806820068",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Udhaya Kumar",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678298458/events/valorant.jpg",
    registrationFees: "Team Rs.250 ( Max: 5/team)",
  },
  event3: {
    name: "Z3r0-Capture the Flag",
    mode: "Capture the Flag",
    event_type: "Competition-Online ",
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
        rule: "A team can have a minimum of 1 members and maximum of 4 members.",
      },
      {
        rule: "DOS attacks or generating huge traffic by any means is strictly prohibited.",
      },
      {
        rule: "Teams are not allowed to share flags, solutions or collaborate in any other ways during the period of competition.",
      },
      {
        rule: "Usage of any kind of AI tools like chat GPT and others are strictly prohibited.",
      },
      {
        rule: "The criteria for final judgement will include duration to collect all flags and final scores.",
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
    time: "10.00 am to 4.00pm",
    date: "24/03/23",
    venue: "Online Event",
    studentCoordinator: [
      {
        Name: "Prathunan K.K",
        Dept: "CYS",
        Year: "2nd-year",
        contact: "8610185441",
      },
      {
        Name: "Pranav ",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9952694417",
      },
      { Name: "Ragul", Dept: "CSE", Year: "2nd-year", contact: "9597664312" },
    ],
    facultyCoordinator: [
      {
        Name: "Dr.Velusamy ",
      },
      {
        Name: "Dr.Mathivanan",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678097189/events/capture%20the%20flag.jpg",
    registrationFees: "Team Rs.100 ( Max: 4/team)",
  },
  event4: {
    name: "Platonic ( Ideathon)",
    mode: "Innovative idea proposal competation.",
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
        rule: "An description of idea in detail should be provided in a document.",
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

    time: "10.00 am to 12.00pm",
    date: "24/03/23",
    venue: "CSE LAB - Gound Floor",
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
        prize: "1 st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    registrationFees: "Team - Rs,200 ( Max 3/team)",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678099706/events/Platonic%20%28%20Ideathon%29.jpg",
  },
  event5: {
    name: "Bidders Coding Camp",
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
        rule: "A team can have a minimum of 1 member and maximum of 2 members.",
      },
      {
        rule: "System will be provided for the competition.",
      },
      {
        rule: "Set of Problems will be provided based on difficulty-levels.",
      },
      {
        rule: "Specific time will be provided to each question for grace points.",
      },
      {
        rule: "Almost all the Online-sites will be banned.",
      },
    ],
    time: "10.00 am to 2.00pm",
    date: "24/03/23",
    venue: "CYS 1 LAB",
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
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    registrationFees: "Team Rs.250 ( Max: 4/team)",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678099142/events/Bidders%20Coding%20Camp.png",
  },
  event6: {
    name: "BotBattleBash B3",
    mode: "Build a chat bot",
    event_type: "Competition ",
    description: [
      {
        point:
          "The B3 Competition is a challenge that invites developers and AI enthusiasts to create their own chat bot.",
      },
      {
        point:
          "Chat bots are becoming increasingly popular as a way to automate customer service, provide personalized interactions, and even simulate human conversations.",
      },
      {
        point:
          "This competition is a great opportunity to showcase your skills and creativity in building chat bots that are engaging, useful, and fun to interact with.",
      },
      {
        point:
          "Participants will have the freedom to choose the platform and programming language of their choice to build their chat bot.",
      },
    ],
    rules: [
      {
        rule: "Eligibility: The competition is open to teams of two to four people.",
      },
      {
        rule: `Submission Requirements: Participants must submit a working prototype of their chat bot, as well as a demo video demonstrating its features and functionality. 
        The demo video should be no more than 3 minutes long and should emphasise the primary functionalities and use cases of the chat bot. 
        A brief textual description of the chat bot, including the programming language and platform utilised, should also be included in the application.`,
      },
      {
        rule: `Plagiarism and originality: The chat bot must be the team's unique innovation.
        Any plagiarism or usage of third-party code must be mentioned in the submission or the entry will be disqualified.`,
      },
    ],
    time: "10.00 am to 3.00pm",
    date: "24/03/23",
    venue: "CSE LAB 1st Floor",
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
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678097401/events/BotBattleBash%20B3.png",
    registrationFees: "Team - Rs.200 ( Max 3/team)",
  },
  event7: {
    name: "ML-XLR8",
    mode: "Hackethon",
    event_type: "Competition ",
    description: [
      {
        point: `Welcome to ML-XLR8, the ultimate machine learning hackathon! 
        This event is your chance to bring your skills to the forefront and showcase your innovative ideas.`,
      },
      {
        point:
          "ML-XLR8 will present a set of diverse and exciting problem statements for teams to choose from.",
      },
      {
        point:
          "The teams will then race against the clock to create a solution that can compete with the best.",
      },
      {
        point:
          "With the freedom to innovate and the power to make an impact, we are inviting all participants to join us in this thrilling event.",
      },
      {
        point: `The finalists will present their projects on the day of the event, and the judges will evaluate their work based on creativity, feasibility, and impact. 
        Don't miss your chance to participate in this fantastic event and take your machine learning skills to the next level!`,
      },
    ],
    rules: [
      {
        rule: "Team Size : 5 members",
      },
      {
        rule: "Proposal Submission: One week before the event, participating teams are required to submit their proposal PowerPoint presentations to the organizing committee.",
      },
      {
        rule: "The proposals will be evaluated based on their creativity, feasibility, and relevance to the given problem statement.",
      },
      {
        rule: `Team Notification: Three days prior to the event day, teams will be notified of their status and whether they have been selected to proceed with the chosen problem statement. 
        We will provide feedback on the proposals to help teams improve their ideas and ensure a high standard of innovation and originality.`,
      },
      {
        rule: `Presentation and Evaluation: On the day of the Hackathon, finalized teams will present their projects to the judges and other participants. The evaluation will be based on the criteria specified in the problem statement, including originality, creativity, feasibility, technical implementation, and impact. 
        The judges will select the winners based on their scores and provide feedback to all participants.`,
      },
    ],
    time: "10.00 am to 4.00pm",
    date: "25/03/23",
    venue: "AI Lab",
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
        prize: "1 st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678099478/events/ml%20and%20deeplearning.jpg",
    registrationFees: "Team - Rs.200(Max 4/team)",
  },
  event8: {
    name: "Colay",
    mode: "Coding competition (code relay)",
    event_type: "Competition ",
    description: [
      {
        point: `Coley is a thrilling code relay event that will test the participants' coding skills and teamwork.`,
      },
      {
        point: `Coley is a thrilling code relay event that will test the participants' coding skills and teamwork.`,
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
    date: "24/03/23",
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
        prize: "1 st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678097270/events/colay.png",
    registrationFees: "Team - Rs 150(Max 4/team)",
  },
  event9: {
    name: "Dare To be Different (Ideathon)",
    mode: "Ideathon",
    event_type: "Competition ",
    description: [
      {
        point: `The event is all about unlocking the burgeoning
        ideas with hidden innovation underlying among the students using modern technologies.`,
      },
    ],
    rules: [
      {
        rule: `Round 1: The first is all about coding,
        and participation will be on an 
        individual basis. `,
      },
      {
        rule: `Round 2 : On the basis of your performance,we will be shortlisting the participants as a group of 2.
        You have to come up with an idea and demonstrate the idea within three hours.`,
      },
    ],
    time: "11.00 am to 4.00pm",
    date: "24/03/23",
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
        prize: "1 st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678098791/events/Dare%20To%20be%20Different%20%28Ideathon%29.png",
    registrationFees: "Team - Rs 50(Max 2/team)",
  },
  event10: {
    name: "Forensics Investigation Challenge",
    mode: "Investigation Competition ",
    event_type: "Competition ",
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
    date: "25/03/23",
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
        prize: "1 st prize: 5000",
      },
      {
        prize: "2nd prize: 3000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678097927/events/forensic.png",
    registrationFees: "Team - 300 (Max 4/Team) ",
  },
  event11: {
    name: "Intro to React JS",
    mode: "Workshop",
    event_type: "Workshop",
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
    time: "9.00 am to 2.30pm",
    date: "24/03/23",
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
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "9.00 am to 2.30pm",
    date: "25/03/23",
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
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678096803/events/VR-and-AR-Technologies-1280x720_z3rpl8.png",
    registrationFees: 200,
  },
  event13: {
    name: "Quantum Computing",
    mode: "Workshop",
    event_type: "Workshop",
    description: [
      {
        point: "",
      },
    ],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "9.30 am to 1.30pm",
    date: "25/03/23",
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
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678098007/events/quantum_computing.png",
    registrationFees: 200,
  },
  event14: {
    name: "DevOps",
    mode: "Workshop",
    event_type: "Workshop",
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
    time: "10.00 am to 3.30pm",
    date: "24/03/23",
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
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678098525/events/devops-icon-software-development-dev-and-it-operations-ops-loop-eight-logo-for-software_gn159a.jpg",
    registrationFees: 200,
  },
  event15: {
    name: "Mobile App",
    mode: "Workshop",
    event_type: "Workshop",
    description: [
      {
        point: `A mobile app development workshop is a learning experience that teaches participants how to develop mobile apps for 
        smartphones and tablets.`,
      },
      {
        point: `Topics covered in the workshop typically include mobile app design, development, and deployment, 
        as well as programming languages and tools commonly used in mobile app development.`,
      },
      {
        point: `Hands-on coding exercises, tutorials, 
        and lectures from experienced mobile app developers may be included in the workshop.`,
      },
      {
        point: `Participants should have gained the knowledge and skills required to create a basic mobile application by the end of the workshop, 
        as well as a better understanding of the mobile app development process.`,
      },
    ],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "1.00 am to 4.00pm",
    date: "25/03/23",
    venue: "Class Room",
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
    facultyCoordinator: [
      {
        Name: "B.Natarajan",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678298180/events/mobileapp.png",
    registrationFees: 200,
  },
  event16: {
    name: "X Gen Learning",
    mode: "Workshop",
    event_type: "Workshop",
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
    time: "10.00 am to 4.00pm",
    date: "25/03/23",
    venue: "Class Room",
    studentCoordinator: [
      {
        Name: "Archanaa.N",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "",
      },
    ],
    facultyCoordinator: [
      {
        Name: "Ms.Rithani",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678099987/events/X%20Gen%20Learning.jpg",
    registrationFees: 200,
  },
  event17: {
    name: "Machine Learning/Deep Learning",
    mode: "Workshop",
    event_type: "Workshop",
    description: [
      {
        point: "Basic knowledge of python programming language is required",
      },
    ],
    rules: [
      {
        rule: "Participants Should bring their own laptop",
      },
    ],
    time: "10.00 am to 4.00pm",
    date: "25/03/23",
    venue: "online,classroom",
    studentCoordinator: [
      {
        Name: "Varun Maniappan",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "9498370478",
      },
      { Name: "Sukesh", Dept: "AIE", Year: " 2nd year", contact: "" },
      { Name: "Jaikanth Y", Dept: "AIE", Year: " 2nd year", contact: "" },
    ],
    facultyCoordinator: [
      {
        Name: "Ms. Rithani",
      },
    ],
    registrationFees: 100,
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678093345/events/Strigrays%20League%20-%20Gaming%20Jam.png",
  },
  event18: {
    name: "Project Expo",
    mode: "Exhibition",
    event_type: "Exhibition and demonstration",
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
    date: "25/03/23",
    venue: "Classroom/prayer hall",
    studentCoordinator: [
      {
        Name: "Sanjev",
        Dept: "CSE",
        Year: " 2nd year",
        contact: "6382101448",
      },
      {
        Name: "Umme Rooman",
        Dept: "CSE",
        Year: " 2nd year",
      },
      {
        Name: "Moulika",
        Dept: "CSE",
        Year: " 2nd year",
      },
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
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678098422/events/project%20expo.png",
    registrationFees: 100,
  },
};

// --------- ECE EVENTS --------------

const eceEvents = {
  ece1: {
    name: "POSTER PRESENTATION",
    mode: "Offline",
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
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    date: " 24th March 2023",
    time: "10:00AM - 1:00PM",
    duration: "-",
    venue: "VLSI LAB",
    duration: "",
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
        Name: "Dr Sakthi Abirami B",
      },
    ],
    registrationFees: "UG - Rs.100 Per person PG - Rs.150 Per person",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343674/events/ece/poster_aytmba.png",
  },
  ece2: {
    name: "CIRCUITAL DILEMMA",
    duration: "-",
    mode: "Offline",
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

    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    date: " 24th March 2023",
    time: " 2:00PM - 3:30PM",
    venue: "VLSI LAB",
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
    registrationFees: "",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343637/events/ece/circuital_nppvoz.png",
  },
  ece3: {
    name: "IoT-CTF",
    duration: "-",
    mode: "Offline",
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
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    date: "25th March 2023",
    time: "9:00AM - 11:00AM",
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
    registrationFees: "",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343742/events/ece/iot_jcrqf1.png",
  },
  ece4: {
    name: "PASSIVE HACK",
    duration: "-",
    mode: "Offline",
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
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    date: "25th March 2023",
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
    registrationFees: "",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343739/events/ece/passive_mkimfl.png",
  },
  ece5: {
    name: "INGENIUM",
    duration: "-",
    mode: "Offline",
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
    prizeMoney: [
      {
        prize: "",
      },
      {
        prize: "",
      },
    ],
    date: "24th and 25th March 2023",
    time: " 24h (Starts At 10AM)",
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
    registrationFees: "",
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678343738/events/ece/ingenium_k47f15.png",
  },
};

// --------- C20 EVENTS --------------

const c20Events = {
  "c20-1": {
    name: "Smart Trivia",
    mode: "Offline",
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
        point: "Number of Teams expected for finals : 5 (2 students per team).",
      },
    ],
    rules: [
      {
        rule: "Preliminary round to selected final teams",
      },
      {
        rule: "Six rounds with min 5 question per team",
      },
    ],
    time: "10:00 AM to 12:00 PM",
    date: "24/03/23",
    venue: "AB1-30",
    studentCoordinator: [
      {
        Name: "Prateek Kumar",
        Dept: "AIE",
        Year: "2nd year",
        contact: "9566171444",
      },
      {
        Name: "Jeevan Sendur",
        Dept: "AIE",
        Year: " 2nd year",
        contact: "8148460232",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704253/events/smart_trivia_nibhsc.png",
    registrationFees: "Rs. 100",
  },

  "c20-2": {
    name: "SelfieGram",
    mode: "Offline",
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
        point: `The theme of the competition is "Inclusive Health and Equality,”. The guidelines are centred around three categories: Gender Equality, Addressing the Disabled, and Integrated holistic health: Mind, body, and environment.`,
      },
    ],
    rules: [
      {
        rule: `Participants should submit a selfie that highlights the theme of the competition. The selfie should be original and creative.`,
      },
      {
        rule: "The selfie can be taken with a smartphone or any other camera device.",
      },
      {
        rule: "Participants can submit only one selfie per category (three selfies in total).",
      },
      {
        rule: `2 Selfies should be taken before the competition (location of the selfie can be inside or outside the campus) and one selfie should be taken on the day of the competition (inside the campus only).`,
      },
      {
        rule: "Maximum participants for a team is 2. Which doesn’t mean only these 2 people have to be in the selfie. But the responsibility of the work goes to those 2 students.",
      },
      {
        rule: "The selfie should be accompanied by a brief description that explains how it relates to the theme.",
      },
      {
        rule: "Participants should use the hashtag #InclusiveHealthAndEqualityC20 in their submissions.",
      },
      {
        rule: "The selfies should not contain any offensive or discriminatory content.",
      },
      {
        rule: "The competition is open for a limited time, and the winners will be announced on the final day of the competition.",
      },
      {
        rule: "Judging: The selfies will be judged on the following criteria: Relevance to the theme of the competition. Creativity and originality. Quality of the photo. The effectiveness of the description in conveying the message of the selfie.",
      },
    ],
    time: "1:00 PM to 2:00 PM",
    date: "24/03/23",
    venue: "",
    studentCoordinator: [
      {
        Name: "Mohanaram",
        Dept: "CYS",
        Year: "1st year",
        contact: "9080906985",
      },
      {
        Name: "Jeevan Sendur",
        Dept: "CYS",
        Year: " 1st year",
        contact: "9384508330",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701664/Selfiegram_icon_mjejhi.png",
    registrationFees: "Rs. 100",
  },
  "c20-3": {
    name: "Reels",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: "",
      },
    ],
    rules: [
      {
        rule: "Reel video must be between 5 and 90 seconds long and have an aspect ratio of 9:16.",
      },
      {
        rule: `Video should not intend to hurt the sentiments of any individual, community, sect or religion. 
        Any type of humorous consisting of the above-mentioned is not encouraged.`,
      },
      {
        rule: `The reel should be informative, entertaining, and fun, with twists having LOL and WOW factors.`,
      },
      {
        rule: "The reel should be made within 2 hours, as the TOPIC WILL BE INFORMED PRIOR to the beginning of the event.",
      },
      {
        rule: "Participants must bring their own devices (mobile, laptop) with software (editing apps, etc.,)",
      },
      {
        rule: `The reel should be related to the theme given, and can contain any cine-clipped clips, trending reel clips, etc.,`,
      },
    ],
    time: "12.30pm to 4.30pm",
    date: "24/03/23",
    venue: "AB01-334",
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
        contact: "8148460232",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701663/Copy_of_Reels_aqok3b.png",
    registrationFees: "Rs. 100",
  },
  "c20-4": {
    name: "Sail On the Idea",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point:
          "New ideas are the source of innovation. We need new perspectives and ideas for development.",
      },
      {
        point: `In order to reach the ideas of large groups and to combine different information into innovative ideas, new idea generation tools and platforms such as Ideathons are 
        becoming more common day by day also have a competition dimension where the innovative ideas revealed by the teams are rewarded as a result of the jury voting.`,
      },
    ],
    rules: [
      {
        rule: "You can register Individually or in Teams of 2  maximum members.",
      },
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
      {
        rule: "Final Judgement on the basis of innovativeness and Feasibility of the Presented Idea.",
      },
      {
        rule: "Final judgement metrics : ",
      },
      {
        rule: `How impactful is the idea in solving the problem or an aspect of the problem 
        (Impact) → 25%`,
      },
      {
        rule: "The clarity the team has in terms of what might  be needed in taking the idea to fruition (Clarity, technical feasibility) →  25% ",
      },
      {
        rule: "Product Innovation →  25%",
      },
      {
        rule: "Market research analysis → 15%",
      },
      {
        rule: "Financial feasibility → 10%",
      },
    ],
    time: "10.00 am to 2.30 pm",
    date: "25.03.2023",
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
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704617/events/sail_on_the_idea_bph6lo.png",
    registrationFees: "Rs. 100",
  },

  "c20-5": {
    name: "SnapArt (Collage Making)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: `Among the above three themes, any one topic will be given on the spot.`,
      },
    ],
    rules: [
      {
        rule: "Collage to be made on chart paper (A1 size)",
      },
      {
        rule: "Participants are required to bring their own materials (like sketches, paint etc).",
      },
      {
        rule: "Magazine cutting, newspaper cutting and paintings can be included.",
      },
      {
        rule: "Internet can be used for reference.",
      },
    ],
    time: "10.30 am to 1.00 pm",
    date: "25/03/23",
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
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678704254/events/snap_art_wt2gar.png",
    registrationFees: "Rs.100",
  },

  "c20-6": {
    name: "Face Painting",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        theme: "Emission Management",
      },
      {
        theme:
          "Technology Security and Transparency - Security, Safety, And Resilience",
      },
    ],
    description: [
      {
        point: "It is a team event. There can be only 2 participants in a team",
      },
      {
        point: "Participants should bring their own colours, brushes etc.",
      },
      {
        point: "Time limit is 60 minutes.",
      },
      {
        point: "Themes are mentioned above.",
      },
      {
        point:
          "Participants will be judged based on creativity, innovation, and design.",
      },
      {
        point: "Decision of the judges will be final and binding.",
      },
    ],
    rules: [
      {
        rule: "Participants from all backgrounds, genders, and geographies are welcome",
      },
    ],
    time: "1.00pm to 2.00pm",
    date: "25/03/23",
    venue: "AB1-11",
    studentCoordinator: [
      {
        Name: "B Bhanu Sai Mani Kiran",
        Dept: "CCE",
        Year: "3rd year",
        contact: "7995677214",
      },
      {
        Name: "Vijay Kumar",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9629329074",
      },
      {
        Name: "Vijay varma",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9778597445",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701663/Copy_of_Reels_aqok3b.png",
    registrationFees: "Rs. 100",
  },

  "c20-7": {
    name: "Essay Writing",
    mode: "Offline",
    // below c20 heading
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
    event_type: "Competitions",

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
        point: "It is an individual event.",
      },
    ],
    rules: [
      {
        rule: "The topic for the essay writing competition will be announced on the spot.",
      },
      {
        rule: "The time allotted for writing the essay is 1.30 hours.",
      },
      {
        rule: "Sheets for writing will be provided by the university. Other required stationery needs to be carried by the participants.",
      },
      {
        rule: "Word limits for the essay will be 500-600.",
      },
      {
        rule: "The evaluation will be made on the basis of logical, coherent, and relevant content with a suitable format.",
      },
      {
        rule: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    time: "10:00 am to 12:00 pm",
    date: "25/03/23",
    venue: "AB1-337",
    studentCoordinator: [
      {
        Name: "Gopi Kishan",
        Dept: "CSE",
        Year: "2nd year",
        contact: "9677187642",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-8": {
    name: "Thought Talk (Poetry Competition)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: "It is an individual event.",
      },
    ],
    rules: [
      {
        rule: "The topic for the essay writing competition will be announced on the spot.",
      },
      {
        rule: "The time allotted for writing the essay is 1.30 hours.",
      },
      {
        rule: "Sheets for writing will be provided by the university. Other required stationery needs to be carried by the participants.",
      },
      {
        rule: "The evaluation will be made on the basis of logical, coherent, and relevant content with a suitable format.",
      },
      {
        rule: "Discipline should be maintained by the participants such as following the code of conduct of a competition, and avoiding plagiarism",
      },
      {
        rule: "The decision of the judges shall be final and binding on all the participants.",
      },
    ],
    time: "1:00 PM to 3:00 PM",
    date: "25/03/23",
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
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-9": {
    name: "NovelNolan (Short Film Making Competition)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: "It is an individual event.",
      },
    ],
    rules: [
      {
        rule: "Film time span must be 6-8 minutes",
      },
      {
        rule: "Strictly English language films (if in case the regional language is used juries will disqualify the entry)",
      },
      {
        rule: "Any foul language/misleading content leads to elimination from the contest.",
      },
      {
        rule: "A team may consist of 6-7 members.",
      },
      {
        rule: "Film must be embedded with any one of the themes",
      },
    ],
    time: "10:00 AM to 12:00 PM",
    date: "25/03/23",
    venue: "Seminar Hall",
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
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-10": {
    name: "Rang De (Rangoli Competition)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: "It is an individual event.",
      },
    ],
    rules: [
      {
        rule: "Time :90 minutes",
      },
      {
        rule: "2 members in a team",
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
        rule: "Participants are instructed to bring their own materials for the competition.",
      },
    ],
    time: "10:00 AM to 12:00 PM",
    date: "25/03/23",
    venue: "Prayar Hall",
    studentCoordinator: [
      {
        Name: "N.Sarrvesh",
        Dept: "",
        Year: "",
        contact: "9655879116",
      },
      {
        Name: "Paranav Raj S",
        Dept: "",
        Year: "",
        contact: "8939977933",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-11": {
    name: "Pick & Click (Photography Competition)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: "Eligibility: All Participants should be students ",
      },
    ],
    rules: [
      {
        rule: "This is an individual event and one participant can submit a maximum of five photo.",
      },
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
        rule: "Specifications :",
      },
      {
        rule: "Please read the photograph specifications very carefully. failing to adhere to the format will lead to disqualification",
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
        rule: "Digitally manipulating photos should be kept to a minimum. Your photograph must authentically depict the setting as you saw it when you took the photograph. ",
      },
      {
        rule: "Images must not include a border. if an image includes a border, organisers reserves the right to crop the border.",
      },
      {
        rule: "A subtle watermark in the corner of the image is acceptable, but organisers re- serve the right to crop photos, which may remove a watermark. The watermark should cover no more than 5% of the photo.",
      },
    ],
    time: "11:00 AM to 1:00 PM",
    date: "25/03/23",
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
        Dept: "",
        Year: "",
        contact: "8921569817",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-12": {
    name: "Gen-Z Hoffman (Poster Making)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        point: "It is an individual event.",
      },
    ],
    rules: [
      {
        rule: "The poster should be in A3 size (portrait or landscape) (11.7 * 16.5 inches) sheet.",
      },
      {
        rule: "Each participant can create only one poster.",
      },
      {
        rule: "All Poster should be original work of participant. No copyrighted content can be used. Any participant found violating rules and regulation will be disqualified from competition",
      },
      {
        rule: `The poster must be related to the given theme "Gender Equality and Disability;
      Sustainable Resilient Communities: Climate, Environment & net zero target;
      Technology Security and Transparency."`,
      },
      {
        rule: "Contestants must create poster only in  the given 1.30 hours at the venue.",
      },
      {
        rule: "Final file format should be pdf with maximum size of 10MB.",
      },
      {
        rule: "Decision of jury will be considered final",
      },
    ],
    time: "10:30 AM to 12:00 PM",
    date: "24/03/23",
    venue: "AB1-24",
    studentCoordinator: [
      {
        Name: "Abhinav Krishnakumar",
        Dept: "",
        Year: "",
        contact: "9500165102",
      },
      {
        Name: "Jaya Malar",
        Dept: "ARE",
        Year: "1st year",
        contact: "9524367891",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-13": {
    name: "Sketch Art (Sketching)",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
      },
      {
        rule: "Technology Security and Transparency",
      },
    ],
    description: [
      {
        point: "It is an individual event.",
      },
    ],
    rules: [
      {
        rule: "Participants have to carry their own drawing sheet, stationery material, colors etc.",
      },
      {
        rule: "A single Participant only should Sketch",
      },
      {
        rule: "The sketch is open to both 2-dimensional and 3-dimensional works.",
      },
      {
        rule: "Any Sketch Pencils, Water/Fabric color/Pastels can be used.",
      },
    ],
    time: "9:30 AM to 11:00 AM",
    date: "25/03/23",
    venue: "AB1-335",
    studentCoordinator: [
      {
        Name: "Jeshwanth",
        Dept: "CSE",
        Year: "3rs year",
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
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701665/Essay_Writing_icon_jimfls.png",
    registrationFees: "Rs. 100",
  },

  "c20-14": {
    name: "Brushless Painting",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        theme: "Emission Management",
      },
      {
        theme:
          "Technology Security and Transparency - Security, Safety, And Resilience",
      },
    ],
    description: [
      {
        point: "It is an individual event.",
      },
      {
        point: "The use of brushes is strictly prohibited.",
      },
      {
        point: `Paints, fingers, a palette knife, newsprint, cloth rags, earbuds, and threadbare can all be used to create artwork. 
      Any other supportable equipment other than a brush is permissible.`,
      },
      {
        point:
          "Digital media during painting is not allowed in the nearby vicinity.",
      },
      {
        point:
          "Participants will be given 45 minutes, and only time-bound submissions will be evaluated.",
      },
      {
        point: "Participants should bring their Drawing sheets (A2 size).",
      },
      {
        point: "Students must bring their own colors.",
      },
      {
        point: "All types of colors are allowed without brushes.",
      },
    ],
    rules: [
      {
        rule: "Participants from all backgrounds, genders, and geographies are welcome",
      },
    ],
    time: "11.30am to 12.30pm",
    date: "25/03/23",
    venue: "AB1-06",
    studentCoordinator: [
      {
        Name: "B Bhanu Sai Mani Kiran",
        Dept: "CCE",
        Year: "3rd year",
        contact: "7995677214",
      },
      {
        Name: "Vijay Kumar",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9629329074",
      },
      {
        Name: "Vijay varma",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9778597445",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701663/Copy_of_Reels_aqok3b.png",
    registrationFees: "Rs. 100",
  },

  "c20-15": {
    name: "Cloth Painting",
    mode: "Offline",
    event_type: "Competitions",
    content: `The Civil Twenty (C20) is a forum of civil society organizations from G20 countries that engage with G20 leaders on issues of global importance, such as sustainable development, human rights, and international cooperation.`,
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
        theme: "Emission Management",
      },
      {
        theme:
          "Technology Security and Transparency - Security, Safety, And Resilience",
      },
    ],
    description: [
      {
        point: "It is an individual event.",
      },
      {
        point: "Participants should bring their own colours, brushes etc.",
      },
      {
        point: "Time limit is 60 minutes.",
      },
      {
        point: "Themes are mentioned above.",
      },
      {
        point:
          "Participants will be judged based on creativity, innovation, and design.",
      },
      {
        point: "Decision of the judges will be final and binding.",
      },
    ],
    rules: [
      {
        rule: "Participants from all backgrounds, genders, and geographies are welcome",
      },
    ],
    time: "2.30pm to 3.30pm",
    date: "25/03/23",
    venue: "AB1-07",
    studentCoordinator: [
      {
        Name: "B Bhanu Sai Mani Kiran",
        Dept: "CCE",
        Year: "3rd year",
        contact: "7995677214",
      },
      {
        Name: "Vijay Kumar",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9629329074",
      },
      {
        Name: "Vijay varma",
        Dept: "CYS",
        Year: "2nd year",
        contact: "9778597445",
      },
    ],
    facultyCoordinator: [
      {
        Name: "",
      },
    ],
    prizeMoney: [
      {
        prize: "1st prize : Rs. 3000",
      },
      {
        prize: "1st prize : Rs. 2000",
      },
    ],
    img: "https://res.cloudinary.com/dtv0aopo3/image/upload/v1678701663/Copy_of_Reels_aqok3b.png",
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
      event_type: c20Events[_.keys(c20Events)[i]].event_type,
      content: c20Events[_.keys(c20Events)[i]].content,
      description: c20Events[_.keys(c20Events)[i]].description,
      rules: c20Events[_.keys(c20Events)[i]].rules,
      venue: c20Events[_.keys(c20Events)[i]].venue,
      studentCoordinator: c20Events[_.keys(c20Events)[i]].studentCoordinator,
      facultyCoordinator: c20Events[_.keys(c20Events)[i]].facultyCoordinator,
      registrationFees: c20Events[_.keys(c20Events)[i]].registrationFees,
      img: c20Events[_.keys(c20Events)[i]].img,
      date: c20Events[_.keys(c20Events)[i]].date,
      // duration : c20Events[_.keys(c20Events)[i]].duration,
      time: c20Events[_.keys(c20Events)[i]].time,
    });
    console.log("schema", c20Events[_.keys(c20Events)[i]].description);
    i++;
    console.log(i + 1 + "done"); // just to check if the loop is working
  }
  console.log(_.keys(c20Events).map((event) => c20Events[event].name));
}

run();
