const CLASSES = {
  DAY: "day",
  EMPTY: "empty",
  BOTTOM: "noTop",
};

const CHULA_SUBJECTS = {
  THEATRE: "Theatre",
  SINGING: "Singing",
  VISUAL_ARTS: "Visual Arts",
  DANCE: "Dance",
  KIDS_BALLET_TAP_1: "Kids 1 Ballet & Tap",
  KIDS_BALLET_TAP_2: "Kids 2 Ballet & Tap",
  KIDS_JAZZ_1_2: "Kids 1 & 2 Jazz Dance",
  PRE_DANCE: "Pre Dance",
  TUMBLING: "Tumbling",
  PRE_DANCE_TUMBLE: "Pre Dance & Tumble",
  SENIOR_MOVES: "Senior Moves",
  MUSICAL_THEATRE_KIDS: "Musical Theatre Kids",
};

// class boilerplate
// { start: "", end: "", name: CHULA_SUBJECTS., level: "" },

const chulaClasses = {
  Wednesday: [
    {
      start: "2:30",
      end: "3:15",
      name: CHULA_SUBJECTS.SENIOR_MOVES,
      level: "Gentle & Inspiring Dance Class for Seniors",
    },
    {
      start: "3:30",
      end: "5:00",
      name: CHULA_SUBJECTS.MUSICAL_THEATRE_KIDS,
      level: "Ages 6-15",
    },
  ],
  Thursday: [
    {
      start: "2:30",
      end: "3:15",
      name: CHULA_SUBJECTS.PRE_DANCE_TUMBLE,
      level: "Ballet, Tap, & Tumbling for ages 3-5",
    },
    {
      start: "3:30",
      end: "5:00",
      name: CHULA_SUBJECTS.MUSICAL_THEATRE_KIDS,
      level: "Ages 6-15",
    },
  ],
};

const CHULA_DESCRIPTIONS = {
  [CHULA_SUBJECTS.THEATRE]:
    "Participation in a drama class has been proven for gains in reading proficiency, improvement in self-concept, motivation, and higher levels of empathy and tolerance towards others among youth. Drama activities help develop social and language skills, and help students to open up and express themselves with their peers. It challenges them to quickly and creatively come up with solutions to the moment. The skills developed through theater not only train you how to convincingly deliver a message, but they also build the confidence you need to take command of the stage.",
  [CHULA_SUBJECTS.SINGING]:
    "Students will learn to read music, vocalize, and properly use their diaphragm & breathe, while learning about Music Theory. Students will also learn to sing songs from Broadway shows as well as pop music.",
  [CHULA_SUBJECTS.VISUAL_ARTS]:
    " Through Color Mixing, Painting, Drawing, and Sculpting with “no fire” clay students will explore different art forms. Students will use Math to aid in sculpting, drawing shapes that might be found in their neighborhood, and Science observations for painting clouds, weather, etc. In 'Life Maps and Books,' students will use mixed media to create a collage highlighting high points or important events in their life.",
  [CHULA_SUBJECTS.DANCE]:
    "This Dance class includes the techniques of Jazz, Hip Hop, Contemporary, and Musical Theatre basics. Students will learn how to count and dance rhythms, travel across the floor, form patterns, and shapes with their bodies, all while getting fit, motivated, and having fun with their peers.",
  [CHULA_SUBJECTS.KIDS_BALLET_TAP_1]:
    "Ballet & Tap Combination Class, Students learn the basics and vocabulary of Ballet and Tap.",
  [CHULA_SUBJECTS.KIDS_BALLET_TAP_2]:
    "Ballet & Tap Combination Class, students will advance, learning new dance techniques and vocabulary.",
  [CHULA_SUBJECTS.KIDS_JAZZ_1_2]:
    "ZOOM ONLINE class\n\nJazz online class suitable for mixed ages. Students will learn and advance dance techniques.",
  [CHULA_SUBJECTS.PRE_DANCE]:
    "Introduction to dance, how to be in a class, very creative Ballet & Tap.",
  [CHULA_SUBJECTS.TUMBLING]:
    "Beginner Tumbling moves to improve strength and flexibility Half hour class.",
  [CHULA_SUBJECTS.SENIOR_MOVES]:
    "A Dance Movement class for Seniors to work on  Balance, Grace, to Strengthen and Improve Flexibility incorporates elements of Modern Dance, Pilates, Yoga, a little Musical Theatre and “All That Jazz” Students will explore their creativity through Music, Dance, and Theatre.  Dress in comfortable clothing and shoes. Tennis shoes or non-slip shoes with padded soles are recommended.",
  [CHULA_SUBJECTS.PRE_DANCE_TUMBLE]:
    "In this age appropriate intro to dance, music, and tumbling, students will explore their creativity through imaginative lessons, all while moving and training their bodies in Creative Ballet, Tap, and Tumbling. Colorful ideas and imagery are incorporated into the curriculum to engage young minds and bodies.  Students should wear any color ballet leotard (skirt ok), and footless or transitional Ballet Pink tights, Pink Ballet slippers, Black Tap shoes, Bare feet for Tumbling and Tumbling mat. (Ikea has some reasonably priced mats)",
  [CHULA_SUBJECTS.MUSICAL_THEATRE_KIDS]:
    "Students will study Acting, Singing, and Dance while rehearsing for the amazing fun production. This performance opportunity provides youth to engage socially, collaborate and team build while learning stage directions, making connections, and memories.\nSDCAP Director Laura Hodge has written (“rebooted”) an updated version of Alice in Wonderland with music from the 80’s, 90’s, and 2000’s. There’s a part for everyone in this magical exciting production. All students will be cast. All roles are open to everyone.\nStudents should always dress “Ready to Move”- comfortable clothing and shoes. Please bring a notebook, Binder, Pencils,Highlighter, and water bottle.",
};

const BOLD_CHULA_DESCRIPTIONS = {
  [CHULA_SUBJECTS.THEATRE]: "",
  [CHULA_SUBJECTS.SINGING]: "",
  [CHULA_SUBJECTS.VISUAL_ARTS]: "",
  [CHULA_SUBJECTS.DANCE]: "",
  [CHULA_SUBJECTS.KIDS_BALLET_TAP_1]: "",
  [CHULA_SUBJECTS.KIDS_BALLET_TAP_2]: "",
  [CHULA_SUBJECTS.KIDS_JAZZ_1_2]: "",
  [CHULA_SUBJECTS.PRE_DANCE]: "",
  [CHULA_SUBJECTS.TUMBLING]: "",
  [CHULA_SUBJECTS.SENIOR_MOVES]:
    "$80\nWednesdays 2:30-3:15  April 12 - May 31 at Parkway Community Center",
  [CHULA_SUBJECTS.PRE_DANCE_TUMBLE]:
    "$100\nThursdays 2:30-3:15   April 13-June 1   at CV Woman's Club (no class May 11)",
  [CHULA_SUBJECTS.MUSICAL_THEATRE_KIDS]:
    '"Alice in Wonderland" Rebooted!\n$275\nTwo 1 ½ hour Classes per week\nWednesdays 3:30- 5:00 April 12 - May 31 at Parkway Community Center\nThursdays 3:30-5:00  April 13-June 1   at CV Woman’s Club (no class May 11)',
};

$(document).ready(function () {
  $(".dropdown-trigger").dropdown();

  const generateClassDays = (tableBody, classes) => {
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
        className.innerHTML = `<a href="#${classInfo.name.replace(
          /\s/g,
          ""
        )}">${classInfo.name}${
          classInfo.level ? ` (${classInfo.level})` : ""
        }</a>`;
      });
    }
  };

  const generateClassDescriptions = (classesContainer, icon, classes) => {
    const classesInSession = new Set();
    let totalDescriptionLength = 0;
    let upToHalf = 0;
    for (const day in classes) {
      classes[day].forEach((classInfo) => {
        previousClassesInSessionLength = classesInSession.size;
        classesInSession.add(classInfo.name);
        if (classesInSession.size > previousClassesInSessionLength) {
          totalDescriptionLength += CHULA_DESCRIPTIONS[classInfo.name].length;
        }
      });
    }
    classesInSession.forEach((className) => {
      newDescription = document.createElement("div");
      newDescription.classList.add("courseInfo");
      newDescription.innerHTML = `
            <a class="anchor" id="${className.replace(/\s/g, "")}"></a>
            <h4><strong>${className}</strong></h4>
            ${
              BOLD_CHULA_DESCRIPTIONS[className]
                ? `<strong>${BOLD_CHULA_DESCRIPTIONS[className].replace(
                    /\n/g,
                    "<br/>"
                  )}</strong><br/><br/>`
                : ""
            }
            ${CHULA_DESCRIPTIONS[className]}`;

      if (upToHalf < totalDescriptionLength / 2) {
        upToHalf += CHULA_DESCRIPTIONS[className].length;
        classesContainer.insertBefore(newDescription, icon);
      } else {
        classesContainer.appendChild(newDescription);
      }
    });
  };

  /* ---------------------------------------------------------------- */
  /*                        CHULA VISTA CLASSES                       */
  /* ---------------------------------------------------------------- */

  const chulaTableBody = document.getElementsByTagName("tbody")[0];
  const chulaClassDescriptions = document.getElementById("classDescriptions");
  const chulaClassBallerinaTwo = document.getElementById("classBallerinaTwo");

  generateClassDays(chulaTableBody, chulaClasses);
  generateClassDescriptions(
    chulaClassDescriptions,
    chulaClassBallerinaTwo,
    chulaClasses
  );
});
