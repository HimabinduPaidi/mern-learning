function findStudent(students, studentId) {
  return students.find((s) => s.id === studentId) || null;
}

function findCourse(courses, courseId) {
  return courses.find((c) => c.id === courseId) || null;
}

// ----- rules -----
function hasPrerequisites(student, course) {
  return course.prerequisites.every(p => student.completed.includes(p));
}

function seatsRemaining(course, state) {
  const count = state.enrollments.filter(e => e.courseId === course.id).length;
  return course.capacity - count;
}

function applyRequest(state, student, course) {
  if (!hasPrerequisites(student, course)) return state;
  if (seatsRemaining(course, state) <= 0) return state;
  // call smaller functions like processPayment, enroll, log
  return state;
}


function seatsRemaining(courseId, state, courses) {
  // TODO
}

// ----- waitlist -----
function placeOnWaitlist(state, courseId, studentId) {
  const current = state.waitlists[courseId] || [];
  const newWaitlist = { ...state.waitlists, [courseId]: [...current, studentId] };
  return { ...state, waitlists: newWaitlist };
}


function promoteFromWaitlist(state, courseId) {
  // return { state, promotedStudentId }
  // TODO
}

// ----- billing -----
function computeTuition(billing, student) {
  // return function (nCourses) => number
  // TODO
}

function processPayment(student, amount) {
  return { ...student, walletBalance: student.walletBalance - amount };
}

const s = { id: "S1", walletBalance: 500 };
const updated = processPayment(s, 200);
console.log(s.walletBalance);      // 500
console.log(updated.walletBalance); // 300


// ----- enrollment and logging -----
function enroll(state, studentId, courseId) {
  const newEnrollments = [...state.enrollments, { studentId, courseId }];
  return { ...state, enrollments: newEnrollments }; // new state
}

const state = { enrollments: [] };
const updated = enroll(state, "S1", "CS101");
console.log(state.enrollments); // []
console.log(updated.enrollments); // [{ studentId: "S1", courseId: "CS101" }]


function log(state, event) {
  // return new state
  // TODO
}

// ----- main steps -----
function applyRequest(state, students, courses, billing, request) {
  // return { state, students }
  // TODO
}

function runRegistration(state, students, courses, billing, batch) {
  // return { state, students }
  // TODO
}
