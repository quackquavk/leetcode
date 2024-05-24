const converter = (query) =>{
    let questions =[
        {question:'',options:[],correctAnswer:0}
    ];
    let num=0
   while(query.length !== num){
    for(let i=0;i<query.length;i++){
        questions.question = query[i].question
        num +=1
    }
   }
   return questions
}
let query = [  {
    question: "What should you do at a stop sign?",
    options: [
      "Stop and proceed if the way is clear",
      "Slow down and honk",
      "Ignore it and keep driving",
      'Call the police.'
    ],
    correctAnswer: 0,
    id: 1,
  },
  {
    question: "Who should first be prioritized on Zebra Crossing?",
    options: ["Male", "Female", "Cattle", "Pedestrian"],
    correctAnswer: 3,
    id: 2,
  },
  {
    question: "How would one know the speed of the vehicle ahead getting slow?",
    options: [
      "By brake Light",
      "Through the driver’s gestures",
      "If the smoke of the silencer is getting less",
      "None of them",
    ],
    correctAnswer: 0,
    id: 3,
  },
  {
    question: "Whom should be prioritized while crossing the road?",
    options: [
      "School students",
      "Physically disabled",
      "Senior Citizen",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 4,
  },
  {
    question: "Which vehicle should be given priority while driving on road?",
    options: ["Hearse Van", "Fire brigade", "Ambulance", "All of the above"],
    correctAnswer: 3,
    id: 5,
  },
  {
    question: "What should be done to overtake the vehicle moving ahead?",
    options: [
      "By turning on headlight",
      "By blowing horn",
      "By turning on side light",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 6,
  },
  {
    question:
      "On which side of the road do people drive their vehicle in Nepal?",
    options: [
      "Right side",
      "Left side",
      "Whatever side available",
      "None of the above",
    ],
    correctAnswer: 1,
    id: 7,
  },
  {
    question: "In which speed is the consumption of fuel low?",
    options: [
      "Slow speed",
      "Medium speed",
      "High speed",
      "Both slow and medium speed",
    ],
    correctAnswer: 0,
    id: 8,
  },
  {
    question:
      "What would you do when you see an ambulance is following your vehicle?",
    options: [
      "Stop your vehicle",
      "Give side, let it go",
      "Increase speed",
      "Overtake it",
    ],
    correctAnswer: 1,
    id: 9,
  },
  {
    question: "In what kind of road is most dangerous if the brake fails?",
    options: [
      "Road going uphill",
      "Road going downhill",
      "Flat road",
      "Gravel road",
    ],
    correctAnswer: 1,
    id: 10,
  },
  {
    question: "In which speed is the consumption of fuel high?",
    options: ["Slow Speed", "Medium Speed", "High speed", "All of the above"],
    correctAnswer: 2,
    id: 11,
  },
  {
    question: "Which vehicle either going up or down, should give side?",
    options: [
      "Moving upward",
      "Moving downward",
      "Both of them",
      "None of them",
    ],
    correctAnswer: 2,
    id: 12,
  },
  {
    question:
      "Which vehicle either going straight or turning round should be prioritized?",
    options: [
      "Vehicle turning round",
      "Vehicle going straight",
      "Both of them",
      "None of them",
    ],
    correctAnswer: 2,
    id: 13,
  },
  {
    question: "Why should one keep on changing gear?",
    options: [
      "To decrease speed",
      "To increase speed",
      "To blow horn",
      "Both to increase or to decrease speed",
    ],
    correctAnswer: 3,
    id: 14,
  },
  {
    question:
      "Which side should be used for driving low-speed vehicle slowly in Nepal?",
    options: [
      "From middle",
      "From right",
      "From left",
      "Whatever side one prefers",
    ],
    correctAnswer: 0,
    id: 15,
  },
  {
    question: "Which part in a four-wheeler do the feet control?",
    options: ["Clutch", "Brake", "Accelerator", "All of the above"],
    correctAnswer: 3,
    id: 16,
  },
  {
    question:
      "Which vehicle either moving upwards or moving downwards should be prioritized?",
    options: [
      "Vehicle moving downward",
      "Vehicle moving upward",
      "Side shouldn’t be given",
      "Whosoever can, should go ahead",
    ],
    correctAnswer: 2,
    id: 17,
  },
  {
    question: "Which vehicle doesn't move on the road?",
    options: ["Ship", "Plane", "Helicopter", "All of the above"],
    correctAnswer: 3,
    id: 18,
  },
  {
    question:
      "What should a driver do to know whether the speed of the vehicle ahead is low or high?",
    options: [
      "By asking the driver",
      "From the gestures of the driver",
      "Guessing",
      "None of these",
    ],
    correctAnswer: 1,
    id: 19,
  },
  {
    question: "What does the oil pressure indicator show in the vehicle?",
    options: ["Diesel", "Mobil", "Water", "Petrol"],
    correctAnswer: 2,
    id: 20,
  },
  {
    question: "When should the seat belt be used?",
    options: [
      "Those who sit at the front",
      "As soon as the police see",
      "While moving down",
      "While moving up",
    ],
    correctAnswer: 3,
    id: 21,
  },
  {
    question: "Which vehicle should not be prioritized first while driving?",
    options: ["Car", "Motorcycle", "Truck", "All of the above"],
    correctAnswer: 3,
    id: 22,
  },
  {
    question:
      "What should be done to allow the vehicle coming from the rear side to move ahead?",
    options: [
      "By gesturing from hand",
      "By turning on side light",
      "Both A & B",
      "None of them",
    ],
    correctAnswer: 2,
    id: 23,
  },
  {
    question: "In Nepal driving on which side is punishable?",
    options: ["Right side", "Left side", "Both", "None of them"],
    correctAnswer: 1,
    id: 24,
  },
  {
    question: "What is the main function of the left hand in four-wheelers?",
    options: [
      "To Brake",
      "To control handle",
      "To use hand brake",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 25,
  },
  {
    question:
      "What should you do when you see a fire brigade coming behind you?",
    options: ["Stop the vehicle", "Give side", "Increase Speed", "Ignore"],
    correctAnswer: 0,
    id: 26,
  },
  {
    question: "What should one do while turning the vehicle?",
    options: [
      "Turn the side light",
      "Lower the speed",
      "Look both sides",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 27,
  },
  {
    question: "What kind of vehicle should be prioritized?",
    options: [
      "Vehicle moving downward",
      "Vehicle moving upward",
      "Both of them",
      "None of them",
    ],
    correctAnswer: 2,
    id: 28,
  },
  {
    question: "What should one do either to lower or increase the speed?",
    options: [
      "Change gear",
      "Press or release accelerator",
      "Both of them",
      "None of them",
    ],
    correctAnswer: 2,
    id: 29,
  },
  {
    question:
      "Which lane of the road should be used while driving the vehicle at higher speed?",
    options: ["Middle Lane", "Side Lane", "Both of them", "None of them"],
    correctAnswer: 0,
    id: 30,
  },
  {
    question: "In general, when should one turn on the headlight?",
    options: [
      "Day Time",
      "Dark/Night Time",
      "On seeing traffic police",
      "On having an accident",
    ],
    correctAnswer: 1,
    id: 31,
  },
  {
    question: "What do we understand by a temporary route permit?",
    options: [
      "To drive on the permitted road only",
      "To get permission to drive on the road which is not stated on the regular permit",
      "To get permission to drive along the local road",
      "To drive time and again",
    ],
    correctAnswer: 1,
    id: 32,
  },
  {
    question: "What shouldn't be done before you get a driving license?",
    options: [
      "Not to drive the vehicle",
      "Not to sit in the vehicle",
      "Not to buy the vehicle",
      "None of the above",
    ],
    correctAnswer: 3,
    id: 33,
  },
  {
    question:
      "What should one do to his or her vehicle while the VIP vehicle is on the road?",
    options: [
      "To stop and give way",
      "To blow horn",
      "To drive the vehicle",
      "All of the above",
    ],
    correctAnswer: 0,
    id: 34,
  },
  {
    question:
      "How should one behave to the traffic police when she or he stops the vehicle showing your fault?",
    options: [
      "To insist that you haven't done anything wrong",
      "To run away from the traffic police.",
      "To realize your mistake politely.",
      "To make other drivers your witness insisting that you haven't done anything wrong",
    ],
    correctAnswer: 2,
    id: 35,
  },
  {
    question: "How much fuel should be better to put in the vehicle?",
    options: [
      "Only a little",
      "Half Tank",
      "Fill the tank if fuel is finished.",
      "Full tank if possible",
    ],
    correctAnswer: 3,
    id: 36,
  },
  {
    question:
      "What kind of vehicle isn't allowed for use in public transportation?",
    options: [
      "Private vehicle",
      "Public vehicle",
      "Tourist vehicle",
      "All of the above",
    ],
    correctAnswer: 0,
    id: 37,
  },
  {
    question: "What do you mean by conductor/steward/attendant?",
    options: [
      "One who drives",
      "One who has got a license to drive",
      "One who assists in the vehicle",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 38,
  },
  {
    question: "What kind of vehicle has an L sign?",
    options: [
      "Government vehicle",
      "Learner's vehicle",
      "Diplomatic vehicle",
      "Public vehicle",
    ],
    correctAnswer: 1,
    id: 39,
  },
  {
    question: "How would one signal while overtaking the vehicle ahead?",
    options: [
      "Requesting him/her to stop by phone",
      "Gesturing with hand",
      "Blowing Horn",
      "None of the above",
    ],
    correctAnswer: 1,
    id: 40,
  },
  {
    question: "For what purpose should the looking glass be used?",
    options: ["To overtake", "To back", "Both of them", "Not of them"],
    correctAnswer: 0,
    id: 41,
  },
  {
    question: "What quality should a driver have?",
    options: ["Patience", "Sweet speaking", "Friendly", "All of the above"],
    correctAnswer: 3,
    id: 42,
  },
  {
    question: "What should be done for a safe journey?",
    options: [
      "Follow the traffic rules",
      "Drive randomly",
      "Drive speedily",
      "All of the above",
    ],
    correctAnswer: 0,
    id: 43,
  },
  {
    question:
      "What should be done while driving if anything is not visible during rain?",
    options: ["Switch wiper", "Speed up", "Stop the vehicle", "Blow horn"],
    correctAnswer: 0,
    id: 44,
  },
  {
    question:
      "Among the following options, which one isn’t in an electric vehicle?",
    options: ["Silencer pipe", "Accelerator", "Clutch", "Gear"],
    correctAnswer: 0,
    id: 45,
  },
  {
    question: "What kind of vehicle is it when it has Ba 1 ba number plate?",
    options: [
      "Private motorcycle",
      "Government motorcycle",
      "Corporation's motorcycle",
      "Rental motorcycle",
    ],
    correctAnswer: 0,
    id: 46,
  },
  {
    question:
      "Among the offices mentioned below, in which office should one pay vehicular tax?",
    options: [
      "Internal Revenue Office",
      "Custom Office",
      "Transport Management Office",
      "Excise Duty Office",
    ],
    correctAnswer: 2,
    id: 47,
  },
  {
    question: "What should be done if the embossed number plate doesn't work?",
    options: [
      "To change it as one likes",
      "To change after submitting an application at the Transport Management Office",
      "To change after repairing",
      "All of the above",
    ],
    correctAnswer: 1,
    id: 48,
  },
  {
    question: "What kind of vehicle is it if it has ma 1 ng?",
    options: ["Private car", "Taxi", "Tempoo", "Corporation's jeep"],
    correctAnswer: 0,
    id: 49,
  },
  {
    question:
      "What is it called if the vehicle is registered in two or more than two persons' names?",
    options: [
      "Vehicle registration",
      "Joint vehicle registration",
      "Vehicle buying or selling",
      "Vehicle ownership",
    ],
    correctAnswer: 1,
    id: 50,
  },
  {
    question: "What is the color of Bluebook?",
    options: ["Black", "Red", "Blue", "Yellow"],
    correctAnswer: 2,
    id: 51,
  },
  {
    question: "Which are the emergency vehicles?",
    options: ["Fire brigade", "Ambulance", "Hearse van", "All of the above"],
    correctAnswer: 3,
    id: 52,
  },
  {
    question: "Which vehicle is used to douse the fire?",
    options: ["Fire brigade", "Ambulance", "Hearse van", "Taxi"],
    correctAnswer: 0,
    id: 53,
  },
  {
    question:
      "Inability to differentiate which of the following color disqualifies a person from getting a driving license?",
    options: ["Red", "White", "Black", "Blue"],
    correctAnswer: 3,
    id: 54,
  },
  {
    question: "What is an embossed number plate?",
    options: [
      "Number plate written with Enamel",
      "Number plate written with etched/ brocaded /carved letter",
      "Number plate written with raised letters",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 55,
  },
  {
    question: "What is First Aid?",
    options: [
      "Taking the patient to the hospital immediately.",
      "Bandaging in ordinary injuries",
      "Calling the doctor if he/she isn't present",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 56,
  },
  {
    question: "Which vehicle is registered in the largest number in Nepal?",
    options: ["Car", "Bus", "Motorcycle", "E-rickshaw"],
    correctAnswer: 2,
    id: 57,
  },
  {
    question: "Among the given vehicles, which one should not be registered?",
    options: [
      "Electric cycle",
      "Electric cycle with pedal",
      "Electric scooter",
      "Electric motorcycle",
    ],
    correctAnswer: 1,
    id: 58,
  },
  {
    question:
      "What happens if one changes the color of the vehicle with his/her own desire?",
    options: ["Looks good", "Looks clean", "Grows Expenses", "Deserves a fine"],
    correctAnswer: 2,
    id: 59,
  },
  {
    question:
      "Which vehicle is used to carry patients/sick people to the hospital?",
    options: ["Fire brigade", "Ambulance", "Hearse van", "Taxi"],
    correctAnswer: 1,
    id: 60,
  },
  {
    question: "What does a vehicle with a green number plate indicate?",
    options: [
      "Private Vehicle",
      "Government vehicle",
      "Corporate vehicle",
      "Tourist vehicle",
    ],
    correctAnswer: 1,
    id: 61,
  },
  {
    question: "Why is a driving license necessary?",
    options: [
      "To drive a vehicle",
      "To buy a vehicle",
      "To sell a vehicle",
      "None of them",
    ],
    correctAnswer: 0,
    id: 62,
  },
  {
    question: "What is a vehicle registration certificate/blue book?",
    options: [
      "Certificate with complete description of the vehicle.",
      "License to drive a vehicle",
      "Certificate with permission to drive a vehicle",
      "None of them",
    ],
    correctAnswer: 0,
    id: 63,
  },
  {
    question: "Which vehicle has a black number plate?",
    options: [
      "Government vehicle",
      "Public vehicle",
      "Corporation vehicle",
      "Tourist vehicle",
    ],
    correctAnswer: 0,
    id: 64,
  },
  {
    question:
      "With what documents should one submit an application to the office if the driving license is lost?",
    options: [
      "Application and fee with traffic police recommendation letter",
      "Recommendation from municipal ward office",
      "Recommendation letter from District Administration Office",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 65,
  },
  {
    question:
      "Among the following options, which condition is considered as disqualification to get the driving license?",
    options: [
      "Visual impairment",
      "Night blindness",
      "Having weak legs & hands",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 66,
  },
  {
    question: "Which office doesn't work for the renewal of the license?",
    options: [
      "Traffic Police Office",
      "Vehicle Fitness Test Center",
      "Department of Transport Management",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 67,
  },
  {
    question:
      "Which office issues the license certificate before permitting the public vehicle to move on the road?",
    options: [
      "District Administration Office",
      "Traffic Police Office",
      "Transport Management Office",
      "All of the above",
    ],
    correctAnswer: 0,
    id: 68,
  },
  {
    question: "Which vehicle isn't allowed to operate without a route permit?",
    options: [
      "Private vehicle",
      "Government Vehicle",
      "Public vehicle",
      "Diplomatic vehicle",
    ],
    correctAnswer: 2,
    id: 69,
  },
  {
    question:
      "Which office has the right to change the permissible speed limit confirmed for the vehicle?",
    options: [
      "Traffic Police Office",
      "Transport Management Office",
      "Department of Transport Management",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 70,
  },
  {
    question: "What should be done before driving out of order vehicle?",
    options: [
      "Repair.",
      "Fill up engine.",
      "Nothing to be done.",
      "Show the police.",
    ],
    correctAnswer: 0,
    id: 71,
  },
  {
    question:
      "Who is the chairperson of the Transportation Management Committee?",
    options: [
      "Chief of Transport Management Office",
      "District Police Chief",
      "Chief of Traffic Police Office",
      "None of them",
    ],
    correctAnswer: 0,
    id: 72,
  },
  {
    question: "How should one drive the vehicle along the three-lane road?",
    options: [
      "From both sides",
      "From three sides",
      "From one side",
      "None of them",
    ],
    correctAnswer: 2,
    id: 73,
  },
  {
    question: "How would you start your four-wheelers?",
    options: [
      "By checking gear",
      "By jamming on brake",
      "By checking oil",
      "By checking engine",
    ],
    correctAnswer: 0,
    id: 74,
  },
  {
    question: "Why should one change gear?",
    options: ["Increase speed", "Decrease speed", "Blow horn", "Both a & b"],
    correctAnswer: 3,
    id: 75,
  },
  {
    question:
      "In what condition can one not get the copy of a driving license?",
    options: [
      "Having lost the license",
      "Having torn",
      "Having old & torn",
      "Having the original with him/herself",
    ],
    correctAnswer: 3,
    id: 76,
  },
  {
    question:
      "Which signal should one give while moving ahead after starting the vehicle?",
    options: [
      "By turning on the headlight",
      "By turning on the right side light",
      "By turning on the left side light",
      "By turning on the emergency light",
    ],
    correctAnswer: 1,
    id: 77,
  },
  {
    question: "In which place should one lower the speed of the vehicle?",
    options: [
      "School area",
      "Crossroads",
      "Densely populated area",
      "All of them",
    ],
    correctAnswer: 3,
    id: 78,
  },
  {
    question: "Which one isn’t among the heavy equipment?",
    options: ["Dozer", "Mini bus", "Loader", "Mobile crane"],
    correctAnswer: 1,
    id: 79,
  },
  {
    question: "When was the first vehicle brought to Nepal?",
    options: ["B.S. 1996", "B.S. 2021", "B.S. 2000", "B.S. 2049"],
    correctAnswer: 0,
    id: 80,
  },
  {
    question: "What is the color of the fog light?",
    options: ["Red", "Yellow", "Green", "Blue"],
    correctAnswer: 1,
    id: 81,
  },
  {
    question:
      "Why is the spelling of ambulance written in a mirror image format?",
    options: [
      "So that it could be read rightly from the looking glass of the vehicle ahead",
      "As it is the convention",
      "To show the difference from others",
      "None of the above",
    ],
    correctAnswer: 0,
    id: 82,
  },
  {
    question: "What does the blue number plate in a vehicle indicate?",
    options: [
      "Diplomatic vehicle",
      "Government vehicle",
      "Private vehicle",
      "Vehicle of Corporation",
    ],
    correctAnswer: 1,
    id: 83,
  },
  {
    question:
      "Which certificate is first needed by a Nepali citizen to obtain a driving license?",
    options: [
      "Certificate given by a driving school",
      "Health Certificate",
      "Nepali citizen certificate",
      "Educational qualification certificate",
    ],
    correctAnswer: 2,
    id: 84,
  },
  {
    question:
      "What is the process followed to re-register a vehicle in another Transport Management Office?",
    options: [
      "Transfer registration",
      "Renewal",
      "Re-registration",
      "Inter-zonal registration",
    ],
    correctAnswer: 2,
    id: 85,
  },
  {
    question:
      "Whose duty is it to operate the exam of the driving license dignified?",
    options: [
      "Transport Management Office",
      "Examinees",
      "Traffic Police`s",
      "All of the above",
    ],
    correctAnswer: 0,
    id: 86,
  },
  {
    question: "What time is known as peak hour?",
    options: [
      "Morning time",
      "Evening time",
      "One hour before and after the office opens and closes",
      "Breakfast/Lunch hour",
    ],
    correctAnswer: 2,
    id: 87,
  },
  {
    question: "For which vehicle, third party insurance is mandatory?",
    options: [
      "Rental bus, truck",
      "Motorcycle",
      "Private Car",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 88,
  },
  {
    question:
      "Who is the chairperson of the driving license examination committee?",
    options: [
      "Chief of Transport Management Office",
      "Chief of the Department of Transport Management",
      "Chief of Traffic Police Office",
      "None of them",
    ],
    correctAnswer: 1,
    id: 89,
  },
  {
    question: "What do you mean by third party insurance?",
    options: [
      "Passenger’s insurance",
      "Pedestrian’s insurance",
      "Vehicle's Insurance",
      "Driver's insurance",
    ],
    correctAnswer: 2,
    id: 90,
  },
  {
    question: "Which office’s vehicle has a yellow number plate?",
    options: [
      "Government vehicle",
      "Private vehicle",
      "Public vehicle",
      "Corporation vehicle",
    ],
    correctAnswer: 0,
    id: 91,
  },
  {
    question: "From which side should one alight after the vehicle stops?",
    options: ["Left side", "Right side", "Back side", "Front side"],
    correctAnswer: 0,
    id: 92,
  },
  {
    question:
      "In what condition can one obtain the duplicate copy of a driving license?",
    options: [
      "Having lost",
      "Having torn",
      "Having stolen",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 93,
  },
  {
    question: "What would you do when you find someone’s driving license?",
    options: [
      "Tearing and throwing",
      "Bring it home",
      "Submit it to the traffic police",
      "Ignore it",
    ],
    correctAnswer: 2,
    id: 94,
  },
  {
    question: "Which vehicle doesn't need a route permit?",
    options: ["Motorcycle", "Public truck", "Public jeep", "Public bus"],
    correctAnswer: 0,
    id: 95,
  },
  {
    question:
      "Which office is primarily responsible for managing the movement of vehicles?",
    options: [
      "District Administration Office",
      "Transport Management Office",
      "District Police Office",
      "Traffic Police Office",
    ],
    correctAnswer: 1,
    id: 96,
  },
  {
    question: "What educational qualification is needed for a driving license?",
    options: [
      "SLC/SEE",
      "Plus 2 or equivalent",
      "Higher Education",
      "Literate",
    ],
    correctAnswer: 2,
    id: 97,
  },
  {
    question: "When was the Department of Transport established?",
    options: ["V.S. 2051", "V.S. 2041", "V.S. 2052", "V.S. 2042"],
    correctAnswer: 0,
    id: 98,
  },
  {
    question: "What is given more consideration while driving during rain?",
    options: ["Brake", "Skidding", "Caution to spread mud", "All of the above"],
    correctAnswer: 3,
    id: 99,
  },
  {
    question: "What kind of vehicle’s ownership shouldn’t be transferred?",
    options: [
      "Those which crossed 20 years by production year.",
      "Those which crossed 15 years by production year.",
      "Those which crossed 5 years by production year.",
      "Those which crossed 25 years by production year.",
    ],
    correctAnswer: 0,
    id: 100,
  },
  {
    question:
      "What should be done if the auctioned vehicle is to be auctioned once again?",
    options: [
      "Auctioned again.",
      "Use it without registration.",
      "Scrapped as per the law.",
      "Register for auction as per the rule.",
    ],
    correctAnswer: 2,
    id: 101,
  },
  {
    question:
      "After how many hours should a long route public vehicle take a break?",
    options: [
      "Every three hours",
      "Every four hours",
      "Every two hours",
      "Every one hour",
    ],
    correctAnswer: 0,
    id: 102,
  },
  {
    question: "Which office renews the driving license?",
    options: [
      "Transportation Management office.",
      "Department of Transport Management",
      "Vehicle Fitness Test Center",
      "Traffic Police Office.",
    ],
    correctAnswer: 1,
    id: 103,
  },
  {
    question: "On what kind of road should we not drive the public vehicle?",
    options: [
      "Not pitched.",
      "Gravel road.",
      "Route not allowed.",
      "Hilly road.",
    ],
    correctAnswer: 2,
    id: 104,
  },
  {
    question:
      "What kind of vehicle wouldn’t have the provision of vehicular tax?",
    options: [
      "Government vehicle.",
      "Corporation vehicle",
      "Diplomatic vehicle.",
      "Applies to all",
    ],
    correctAnswer: 3,
    id: 105,
  },
  {
    question: "What would you do if the engine block of the vehicle breaks?",
    options: [
      "To get it changed at the workshop.",
      "To get it changed after you get permission from Transportation Management Office.",
      "To insert old vehicle’s engine block",
      "To get it changed at the market immediately when it breaks.",
    ],
    correctAnswer: 0,
    id: 106,
  },
  {
    question:
      "What is it called to transform a foreign driving license into Nepal?",
    options: [
      "Internationalization.",
      "Foreignization.",
      "Transforming into Nepali (Nepalization).",
      "Nationalization",
    ],
    correctAnswer: 2,
    id: 107,
  },
  {
    question:
      "What kind of test/trial examination should be taken to transform a foreign driving license into Nepali?",
    options: ["Written.", "Oral.", "Practical.", "None of them."],
    correctAnswer: 2,
    id: 108,
  },
  {
    question:
      "What provision is in Nepal about international/ foreign driving licenses?",
    options: [
      "Remain invalid instantly.",
      "Permission to drive across Nepal.",
      "Permission to drive only in Kathmandu valley.",
      "None of them.",
    ],
    correctAnswer: 0,
    id: 109,
  },
  {
    question: "What kind of driving license’s record/data is deleted?",
    options: [
      "If not renewed till five years after renewal time is finished.",
      "Having an old license.",
      "The driving license of those who had done an accident.",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 110,
  },
  {
    question:
      "When should one go to the office for biometrics after filling the application form for a driving license?",
    options: [
      "Next day.",
      "Within one year.",
      "Within three months.",
      "Visit date given by the system.",
    ],
    correctAnswer: 3,
    id: 111,
  },
  {
    question: "Which type of road is up to 25 KM long?",
    options: ["Long road.", "Short road.", "Local road.", "Medium-sized road."],
    correctAnswer: 2,
    id: 112,
  },
  {
    question:
      "Among the given vehicles, which one shouldn’t take the route permit?",
    options: ["Ambulance.", "Fire brigade.", "Motorcycle.", "All of the above"],
    correctAnswer: 3,
    id: 113,
  },
  {
    question:
      "For what kind of vehicle can the authorized officer renew for up to five years?",
    options: [
      "Government.",
      "Corporation & diplomatic",
      "Private",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 114,
  },
  {
    question: "What kind of vehicle is a fire brigade?",
    options: [
      "Passenger carrier.",
      "Goods carriers.",
      "Hearse Van.",
      "Fire controller.",
    ],
    correctAnswer: 3,
    id: 115,
  },
  {
    question: "What happens if one keeps pressing on the accelerator?",
    options: [
      "Vehicle doesn't work.",
      "Traffic police charges a fine.",
      "Vehicle speeds up.",
      "All of the above",
    ],
    correctAnswer: 2,
    id: 116,
  },
  {
    question:
      "Which entity do the transportation management offices come under?",
    options: [
      "Department of Transport Management",
      "Provincial Ministry for Physical Infrastructure Development",
      "Ministry for Physical Infrastructure & Transportation",
      "None of the above",
    ],
    correctAnswer: 0,
    id: 117,
  },
  {
    question:
      "In what condition do the vehicles maintain a wide distance between each other while driving?",
    options: [
      "During the time of the visit of distinguished personalities.",
      "During sunshine.",
      "When it's not raining.",
      "During foggy/misty time",
    ],
    correctAnswer: 3,
    id: 118,
  },
  {
    question: "What shouldn’t be done while driving?",
    options: [
      "To talk on mobile.",
      "To use an alcoholic drink.",
      "To overtake randomly.",
      "All of the above",
    ],
    correctAnswer: 3,
    id: 119,
  },
  {
    question: "How should we cross the road?",
    options: [
      "Stopping while walking.",
      "Running.",
      "Slowly through the zebra crossing.",
      "Walking smoothly",
    ],
    correctAnswer: 2,
    id: 120,
  },
  {
    question: "What happens to those who blow the pressure horns?",
    options: [
      "Imprisonment",
      "Fine.",
      "Confiscation of the vehicle.",
      "Nothing happens",
    ],
    correctAnswer: 1,
    id: 121,
  },
  {
    question: "What do the marks in the middle of the road indicate?",
    options: [
      "Not to race.",
      "To divide the road lane.",
      "Not to cross the road.",
      "Not to overtake.",
    ],
    correctAnswer: 1,
    id: 122,
  },
  {
    question: "Where should the bluebook be kept?",
    options: ["At home.", "With drivers", "At the office.", "All of the above"],
    correctAnswer: 3,
    id: 123,
  },
  {
    question: "When are the side lights turned on?",
    options: [
      "While changing lane.",
      "While overtaking.",
      "While parking the vehicle.",
      "Both a & b",
    ],
    correctAnswer: 3,
    id: 124,
  }]
console.log(converter(query))


const nepaliQuestions = [
    'स्टप साइनमा के गर्नुपर्छ?',
    'जेब्रा क्रसिङमा पहिले कसलाई प्राथमिकता दिनुपर्छ?',
    'अगाडि गाडीको गति सुस्त हुँदै गएको कसरी थाहा हुन्छ?',
    'सडक पार गर्दा कसलाई प्राथमिकता दिनुपर्छ?',
    '‘सडकमा सवारी चलाउँदा कुन सवारी साधनलाई प्राथमिकता दिनुपर्छ?',
    'अगाडि बढिरहेको गाडीलाई ओभरटेक गर्न के गर्नुपर्छ?',
    '‘नेपालमा सडकको कुन छेउमा मानिसले गाडी चलाउँछन्?',
    'कुन गतिमा इन्धन खपत कम छ?',
    'एम्बुलेन्स तपाईंको गाडी पछ्याउँदै गरेको देख्दा के गर्नुहुन्छ?',
    'ब्रेक फेल भएमा कुन सडकमा सबैभन्दा खतरनाक हुन्छ?',
    'कुन गतिमा इन्धन खपत बढी हुन्छ?',
    'कुन गाडी माथि वा तल जान्छ, साइड दिनु पर्छ?',
    'कुन गाडी या त सीधा जाने वा घुम्नेलाई प्राथमिकता दिनुपर्छ?',
    'किन गियर परिवर्तन गरिरहनुपर्छ?',
    'नेपालमा कम गतिको सवारी साधन बिस्तारै चलाउन कुन पक्ष प्रयोग गर्नुपर्छ?',
    'चार पाङ्ग्रे सवारी साधनको कुन भागले खुट्टा नियन्त्रण गर्छ?',
    'कुन सवारी साधनलाई या त माथि सर्ने वा तल सर्नेलाई प्राथमिकता दिनुपर्छ?',
    "कुन गाडी सडकमा चल्दैन?",
    'अगाडिको गाडीको गति कम वा उच्च छ कि छैन भनेर चालकले के गर्नुपर्छ?',
    'गाडीमा तेलको चाप सूचकले के देखाउँछ?',
    'सिट बेल्ट कहिले प्रयोग गर्नुपर्छ?',
    'ड्राइभिङ गर्दा कुन गाडीलाई पहिले प्राथमिकता दिनु हुँदैन?',
    'पछाडिबाट आउने गाडीलाई अगाडि बढ्न दिन के गर्नुपर्छ?',
    '‘नेपालमा गाडी चलाउँदा कुन पक्षमा दण्डनीय छ?',
    'चार पाङ्ग्रे सवारी साधनमा देब्रे हातको मुख्य काम के हो?',
    'आफ्नो पछाडि फायर ब्रिगेड आउँदै गरेको देख्दा के गर्नुपर्छ?',
    'गाडी घुमाउँदा के गर्नुपर्छ?',
    'कस्तो सवारी साधनलाई प्राथमिकता दिनुपर्छ?',
    'गति घटाउन वा बढाउन के गर्नुपर्छ?',
    '‘तीव्र गतिमा सवारी चलाउँदा सडकको कुन लेन प्रयोग गर्ने?',
    'सामान्यतया, हेडलाइट कहिले खोल्नु पर्छ?',
    'अस्थायी मार्ग अनुमतिबाट हामीले के बुझ्छौं?',
    "तपाईले ड्राइभिङ लाइसेन्स प्राप्त गर्नु अघि के गर्नु हुँदैन?",
    'भीआईपी गाडी सडकमा हुँदा उसको गाडीलाई के गर्नुपर्छ?',
    'तपाईको गल्ती देखाउँदै गाडी रोक्दा ट्राफिक प्रहरीलाई कस्तो व्यवहार गर्नुपर्छ?',
    'गाडीमा कति इन्धन हाल्नु राम्रो हुन्छ?',
    "सार्वजनिक यातायातमा कस्तो प्रकारको सवारी साधन प्रयोग गर्न अनुमति छैन?",
    'कन्डक्टर/भण्डार/परिचर भन्नाले के भन्न खोजेको हो?',
    'कस्तो गाडीमा L चिन्ह छ?',
    'अगाडि गाडी ओभरटेक गर्दा कसरी संकेत हुन्छ?',
    'कस्ता उद्देश्यका लागि लुकिङ ग्लास प्रयोग गर्नुपर्छ?',
    'चालकसँग कस्तो गुणस्तर हुनुपर्छ?',
    'सुरक्षित यात्राको लागि के गर्नुपर्छ?',
    'वर्षाको समयमा केही नदेखिएमा गाडी चलाउँदा के गर्नुपर्छ?',
    'निम्न विकल्पहरू मध्ये, कुन विद्युतीय सवारीमा छैन?',
    'बा १ बा नम्बर प्लेट भएको गाडी कस्तो हुन्छ?',
    'तल उल्लेख गरिएका कार्यालयहरूमध्ये कुन कार्यालयमा सवारी साधन कर तिर्नु पर्छ?',
    "इम्बोस्ड नम्बर प्लेटले काम गर्दैन भने के गर्नुपर्छ?",
    'मा 1 एनजी छ भने यो कस्तो प्रकारको गाडी हो?',
    "गाडी दुई वा दुई भन्दा बढी व्यक्तिको नाममा दर्ता भएमा यसलाई के भनिन्छ?",
    'ब्लुबुकको रंग के हो?',
    'आकस्मिक सवारी साधन कुन हो?',
    'आगो निभाउन कुन गाडी प्रयोग गरिन्छ?',
    'निम्न रङ मध्ये कुन रङ छुट्याउन नसक्दा व्यक्तिलाई ड्राइभिङ लाइसेन्स प्राप्त गर्न अयोग्य बनाउँछ?',
    'इम्बोस्ड नम्बर प्लेट के हो?',
    'प्राथमिक उपचार भनेको के हो?',
    'नेपालमा सबैभन्दा बढी कुन सवारी साधन दर्ता भएको छ?',
    'दिएका सवारी साधनहरूमध्ये कुन दर्ता गर्नु हुँदैन?',
    'आफ्नो इच्छाले गाडीको रंग परिवर्तन भयो भने के हुन्छ?',
    'बिरामी/बिरामीहरूलाई अस्पताल लैजान कुन गाडी प्रयोग गरिन्छ?',
    'हरियो नम्बर प्लेट भएको गाडीले के संकेत गर्छ?',
    'ड्राइभिङ लाइसेन्स किन आवश्यक छ?',
    'वाहन दर्ता प्रमाणपत्र/निलो किताब के हो?',
    'कुन गाडीमा कालो नम्बर प्लेट छ?',
    'ड्राइभिङ लाइसेन्स हराएमा कुन कागजातमा कार्यालयमा निवेदन दिनुपर्छ?',
    'निम्न विकल्पहरू मध्ये, कुन शर्तलाई ड्राइभिङ लाइसेन्स प्राप्त गर्न अयोग्य मानिन्छ?',
    "लाइसेन्स नवीकरणको लागि कुन कार्यालयले काम गर्दैन?",
    'सार्वजनिक सवारी साधनलाई सडकमा जान दिनुअघि कुन कार्यालयले लाइसेन्स प्रमाणपत्र जारी गर्छ?',
    "रुट परमिट बिना कुन गाडी चलाउन अनुमति छैन?",
    'कुन कार्यालयलाई सवारी साधनको लागि पुष्टि गरिएको अनुमतियोग्य गति सीमा परिवर्तन गर्ने अधिकार छ?',
    'अर्डर गाडीबाट बाहिर निस्कनु अघि के गर्नुपर्छ?',
    'यातायात व्यवस्थापन समितिको अध्यक्ष को हो?',
    'तीन लेनको सडकमा गाडी कसरी चलाउने?',
    'तपाईले आफ्नो चार पाङ्ग्रे गाडी कसरी सुरु गर्नुहुन्छ?',
    'किन गियर परिवर्तन गर्नुपर्छ?',
    'कुन अवस्थामा ड्राइभिङ लाइसेन्सको प्रतिलिपि प्राप्त गर्न सकिँदैन?',
    'गाडी सुरु गरेपछि अगाडि बढ्दा कुन संकेत दिनुपर्छ?',
    'गाडीको गति कुन ठाउँमा घटाउनुपर्छ?',
    'भारी उपकरणहरू मध्ये कुन होइन?',
    '‘पहिलो गाडी नेपालमा कहिले ल्याइयो?’?',
    'कुहिरो बत्तीको रंग के हो?',
    'एम्बुलेन्सको हिज्जे मिरर छवि ढाँचामा किन लेखिएको छ?',
    'गाडीमा निलो नम्बर प्लेटले के संकेत गर्छ?',
    'ड्राइभिङ लाइसेन्स लिन नेपाली नागरिकलाई पहिले कुन प्रमाणपत्र चाहिन्छ?',
    'अर्को यातायात व्यवस्थापन कार्यालयमा सवारी साधन पुन: दर्ता गर्ने प्रक्रिया के छ?',
    '‘ड्राइभिङ लाइसेन्सको परीक्षा सम्मानजनक सञ्चालन गर्नु कसको कर्तव्य हो?’?',
    'कति समयलाई पीक आवर भनिन्छ?',
    'कुन गाडीको लागि, तेस्रो पक्ष बीमा अनिवार्य छ?',
    '‘ड्राइभिङ लाइसेन्स परीक्षा समितिको अध्यक्ष को हो?’?',
    'तेस्रो पक्षीय बीमा भन्नाले के भन्न खोजेको हो?',
    'कुन कार्यालयको गाडीमा पहेंलो नम्बर प्लेट छ?',
    'गाडी रोकिएपछि कुन तर्फबाट ओर्लनुपर्छ?',
    'कुन अवस्थामा ड्राइभिङ लाइसेन्सको नक्कल प्रतिलिपि प्राप्त गर्न सकिन्छ?',
    'कसैको ड्राइभिङ लाइसेन्स पाएपछि के गर्नुहुन्छ?',
    "कुन गाडीलाई रुट परमिट चाहिँदैन?",
    'वाहनको आवागमन व्यवस्थापनको मुख्य जिम्मेवारी कुन कार्यालयको हो?',
    'ड्राइभिङ लाइसेन्सका लागि कस्तो शैक्षिक योग्यता चाहिन्छ?',
    'यातायात विभाग कहिले स्थापना भयो?',
    'वर्षाको समयमा गाडी चलाउँदा के बढी ध्यान दिइन्छ?',
    'कस्तो सवारी साधनको स्वामित्व हस्तान्तरण गर्नु हुँदैन?',
]