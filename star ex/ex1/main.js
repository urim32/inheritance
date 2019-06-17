class Student {
    constructor(name, courses) {
        this.name = name;
        this.courses = courses;
    }
}
class Programmer extends Student {
    constructor(os, languages, vcs, courses) {
        super("programmer", courses);
        this.os = os;
        this.languages = languages;
        this.vcs = vcs;
    }
    isProgramingIn(language) {
        return this.languages.includes(language);

    }
}


let programmer1 = new Programmer("win", ["c", "c++", "javascript"], "git", ["infi", "statics", "intro to cs"])
programmer1.isProgramingIn("c#");