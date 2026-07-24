// src/trainer.js

class Trainer {
    constructor(trainerId, name, email, phone, technology, skills) {
        this.trainerId = trainerId;
        this.name = name;                 // corrected from "raceName"
        this.email = email;
        this.phone = phone;
        this.technology = technology;
        this.skills = skills;             // skills is an array of strings
    }
}

export default Trainer;