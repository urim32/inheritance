class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}
class Programmer extends Student {
    constructor(name, os, languages, vcs, courses) {
        super(name, courses);
        this.os = os;
        this.languages = languages;
        this.vcs = vcs;
    }
    isProgramingIn(language) {
        return this.languages.includes(language);

    }
}


let programmer1 = new Programmer("uri", "win", ["c", "c++", "javascript"], "git", ["infi", "statics", "intro to cs"]);
let student1 = new Student("avi", ["cs", "javascript"]);
let programmer2 = new Programmer("yaakkov", "ios", ["java", "javascript"], "svn", ["infi", "statics", "geographic"]);
let programmer3 = new Programmer("gilad", "linux", ["c", "c++", "java", "javascript"], "git", ["infi", "statics", "intro to cs"]);
let programmer4 = new Programmer("tomer", "win", ["c", "c++", "javascript"], "git", ["infi", "statics", "intro to cs"]);
students = [student1, programmer1, programmer2, programmer3];
programmer1.isProgramingIn("c#");

function isPrograming(students) {
    for (let i = 0; i < students.length; i++) {

        if (students[i] instanceof Programmer) {
            if (students[i].languages.includes("javascript")) {
                return students[i];
            }

        }

    }
}
isPrograming(students);