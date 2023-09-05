const CLASSES = {
  DAY: "day",
  EMPTY: "empty",
  BOTTOM: "noTop",
};

const SUBJECTS = {
  THEATRE: "Theatre",
  SINGING: "Singing",
  VISUAL_ARTS: "Visual Arts",
  DANCE: "Dance",
  BALLET_TAP_0: "Pre Ballet & Tap",
  BALLET_TAP_1: "Kids 1 Ballet & Tap",
  BALLET_TAP_2: "Kids 2 Ballet & Tap",
  TUMBLING: "Kids 1 & 2 Tumbling",
  KIDS_JAZZ_1_2: "Kids 1 & 2 Jazz Dance",
  PRE_DANCE_TUMBLE: "Pre Dance & Tumble",
  ADULT_SENIOR_DANCE: "Adult & Senior Dance Class",
  MUSICAL_THEATRE_KIDS: "Musical Theatre Kids",
};

// class boilerplate
// { start: "", end: "", name: SUBJECTS., level: "", monthlyFee: 0 },

const chulaClasses = {
  Saturday: [
    {
      start: "9:00",
      end: "9:45",
      name: SUBJECTS.ADULT_SENIOR_DANCE,
      level: "",
      monthlyFee: 0,
    },
    {
      start: "10:00",
      end: "10:45",
      name: SUBJECTS.BALLET_TAP_1,
      level: "",
      monthlyFee: 0,
    },
    {
      start: "10:45",
      end: "11:15",
      name: SUBJECTS.TUMBLING,
      level: "",
      monthlyFee: 0,
    },
    {
      start: "11:15",
      end: "12:00",
      name: SUBJECTS.BALLET_TAP_2,
      level: "",
      monthlyFee: 0,
    },
  ],
};

// Dance Classes at St Paul’s Cathedral
// 2728 Fifth Avenue
// San Diego, CA 92104
// Saturday
// 8:45-9:30 Pre Dance ages 3-5
// 9:30-10:30 Kids 1 Ballet & Tap ages 6-8
// 10:30-11:00 Tumbling
// 11:00-12:00 Kids 2 Ballet & Tap ages 8-10

// 12:00-1:00 Adult Move & Groove Contemporary Dance/Movement Therapy
// TBA More Classes and Musical Theatre coming soon!

const bankersHillClasses = {
  Saturday: [
    {
      start: "8:45",
      end: "9:30",
      name: SUBJECTS.PRE_DANCE_TUMBLE,
      level: "Ages 3-5",
      monthlyFee: 0,
    },
    {
      start: "9:30",
      end: "10:30",
      name: SUBJECTS.BALLET_TAP_1,
      level: "Ages for 6-8",
      monthlyFee: 0,
    },
    {
      start: "10:30",
      end: "11:00",
      name: SUBJECTS.TUMBLING,
      level: "",
      monthlyFee: 0,
    },
    {
      start: "11:00",
      end: "12:00",
      name: SUBJECTS.BALLET_TAP_2,
      level: "Ages 8-10",
      monthlyFee: 0,
    },
  ],
};

const DESCRIPTIONS = {
  [SUBJECTS.THEATRE]: {
    description:
      "Participation in a drama class has been proven for gains in reading proficiency, improvement in self-concept, motivation, and higher levels of empathy and tolerance towards others among youth. Drama activities help develop social and language skills, and help students to open up and express themselves with their peers. It challenges them to quickly and creatively come up with solutions to the moment. The skills developed through theater not only train you how to convincingly deliver a message, but they also build the confidence you need to take command of the stage.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.SINGING]: {
    description:
      "Students will learn to read music, vocalize, and properly use their diaphragm & breathe, while learning about Music Theory. Students will also learn to sing songs from Broadway shows as well as pop music.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.VISUAL_ARTS]: {
    description:
      " Through Color Mixing, Painting, Drawing, and Sculpting with “no fire” clay students will explore different art forms. Students will use Math to aid in sculpting, drawing shapes that might be found in their neighborhood, and Science observations for painting clouds, weather, etc. In 'Life Maps and Books,' students will use mixed media to create a collage highlighting high points or important events in their life.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.DANCE]: {
    description:
      "This Dance class includes the techniques of Jazz, Hip Hop, Contemporary, and Musical Theatre basics. Students will learn how to count and dance rhythms, travel across the floor, form patterns, and shapes with their bodies, all while getting fit, motivated, and having fun with their peers.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.BALLET_TAP_1]: {
    description:
      "Ballet & Tap Combination Class for children 6 - 7 years of age. Students learn the basics and vocabulary of Ballet and Tap, increasing their flexibility, strength, coordination, and rhythm.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.BALLET_TAP_2]: {
    description:
      "Ballet & Tap Combination Class for children 8 - 10 years of age. Students will advance, building on the same skills in Kids 1 Ballet & Tap, and learning new dance techniques and vocabulary.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.KIDS_JAZZ_1_2]: {
    description:
      "ZOOM ONLINE class\n\nJazz online class suitable for mixed ages. Students will learn and advance dance techniques.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.BALLET_TAP_0]: {
    description:
      "This class is an introduction to dance for the youngest students. They will learn how to be in a class, how to move together, and gain the fundamentals of creative Ballet & Tap.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.TUMBLING]: {
    description:
      "A beginner and intermediate tumbling moves class. Students will improve strength and flexibility while learning how to move safely.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.ADULT_SENIOR_DANCE]: {
    description:
      "A Dance Movement class for Adults & Seniors to work on  Balance, Grace, to Strengthen and Improve Flexibility incorporates elements of Modern Dance, Pilates, Yoga, a little Musical Theatre and “All That Jazz” Students will explore their creativity through Music, Dance, and Theatre.  Dress in comfortable clothing and shoes. Tennis shoes or non-slip shoes with padded soles are recommended.",
    BankersHillDetails: "",
    ChulaVistaDetails: "",
  },
  [SUBJECTS.PRE_DANCE_TUMBLE]: {
    description:
      "In this age appropriate intro to dance, music, and tumbling, students will explore their creativity through imaginative lessons, all while moving and training their bodies in Creative Ballet, Tap, and Tumbling. Colorful ideas and imagery are incorporated into the curriculum to engage young minds and bodies.  Students should wear any color ballet leotard (skirt ok), and footless or transitional Ballet Pink tights, Pink Ballet slippers, Black Tap shoes, Bare feet for Tumbling and Tumbling mat. (Ikea has some reasonably priced mats)",
    BankersHillDetails: "",
    ChulaVistaDetails:
      "$40\nWednesdays 2:30-3:15   April 13 - June 1 at CV Woman's Club (no class May 11)",
  },
  [SUBJECTS.MUSICAL_THEATRE_KIDS]: {
    description:
      "Students will study Acting, Singing, and Dance while rehearsing for the amazing fun production. This performance opportunity provides youth to engage socially, collaborate and team build while learning stage directions, making connections, and memories.\nSDCAP Director Laura Hodge has written (“rebooted”) an updated version of Alice in Wonderland with music from the 80’s, 90’s, and 2000’s. There’s a part for everyone in this magical exciting production. All students will be cast. All roles are open to everyone.\nStudents should always dress “Ready to Move”- comfortable clothing and shoes. Please bring a notebook, Binder, Pencils,Highlighter, and water bottle.",
    BankersHillDetails: "",
    ChulaVistaDetails:
      '"Alice in Wonderland" Rebooted!\n$50\nTwo 1 ½ hour Classes per week\nWednesdays 3:30-5:00 April 12 - May 31 at Parkway Community Center\nThursdays 3:30-5:00  April 13 - June 1   at CV Woman’s Club (no class May 11)',
  },
};

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  const generateClassDays = (tableBody, classes, location) => {
    for (const day in classes) {
      dayLength = classes[day].length;
      classes[day].forEach((classInfo, classIndex) => {
        const newRow = tableBody.insertRow(-1);
        if (classIndex === 0) {
          const dayName = newRow.insertCell(-1);
          dayName.innerHTML = `<strong>${day}</strong>`;
          dayName.classList.add(CLASSES.DAY);
        } else {
          const emptyCell = newRow.insertCell(-1);
          emptyCell.classList.add(
            classIndex === dayLength - 1 ? CLASSES.BOTTOM : CLASSES.EMPTY
          );
        }
        const classTime = newRow.insertCell(-1);
        classTime.innerHTML = `${classInfo.start}-${classInfo.end}`;
        const className = newRow.insertCell(-1);
        className.innerHTML = `<a href="#${
          classInfo.name.replace(/\s/g, "") + location
        }">${classInfo.name}${
          classInfo.level ? ` (${classInfo.level})` : ""
        }</a>`;
      });
    }
  };

  const generateClassDescriptions = (
    classesContainer,
    icon,
    classes,
    location
  ) => {
    const classesInSession = new Set();
    let totalDescriptionLength = 0;
    let upToHalf = 0;
    for (const day in classes) {
      classes[day].forEach((classInfo) => {
        previousClassesInSessionLength = classesInSession.size;
        classesInSession.add(classInfo.name);
        if (classesInSession.size > previousClassesInSessionLength) {
          totalDescriptionLength +=
            DESCRIPTIONS[classInfo.name].description.length;
        }
      });
    }
    classesInSession.forEach((className) => {
      newDescription = document.createElement("div");
      newDescription.classList.add("courseInfo");
      newDescription.innerHTML = `
            <a class="anchor" id="${
              className.replace(/\s/g, "") + location
            }"></a>
            <h4><strong>${className}</strong></h4>
            ${
              DESCRIPTIONS[className][location + "Details"]
                ? `<strong>${DESCRIPTIONS[className][
                    location + "Details"
                  ].replace(/\n/g, "<br/>")}</strong><br/><br/>`
                : ""
            }
            ${DESCRIPTIONS[className].description}`;

      if (upToHalf < totalDescriptionLength / 2) {
        upToHalf += DESCRIPTIONS[className].description.length;
        classesContainer.insertBefore(newDescription, icon);
      } else {
        classesContainer.appendChild(newDescription);
      }
    });
  };

  /* ---------------------------------------------------------------- */
  /*                        CHULA VISTA CLASSES                       */
  /* ---------------------------------------------------------------- */

  // const chulaTableBody = document.getElementById("chulaClassTable");
  // const chulaClassDescriptions = document.getElementById(
  //   "chulaVistaClassDescriptions"
  // );
  // const chulaClassBallerinaTwo = document.getElementById("classBallerinaTwoC");
  // const chulaLocation = "ChulaVista";

  // generateClassDays(chulaTableBody, chulaClasses, chulaLocation);
  // generateClassDescriptions(
  //   chulaClassDescriptions,
  //   chulaClassBallerinaTwo,
  //   chulaClasses,
  //   chulaLocation
  // );

  /* ---------------------------------------------------------------- */
  /*                       BANKERS HILL CLASSES                       */
  /* ---------------------------------------------------------------- */

  const bankersHillTableBody = document.getElementById("bankersHillClassTable");
  const bankersHillClassDescriptions = document.getElementById(
    "bankersHillClassDescriptions"
  );
  const bankersHillClassBallerinaTwo =
    document.getElementById("classBallerinaTwoB");
  const bankersHillLocation = "BankersHill";

  generateClassDays(
    bankersHillTableBody,
    bankersHillClasses,
    bankersHillLocation
  );
  generateClassDescriptions(
    bankersHillClassDescriptions,
    bankersHillClassBallerinaTwo,
    bankersHillClasses,
    bankersHillLocation
  );
});
