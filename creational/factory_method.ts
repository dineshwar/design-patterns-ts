interface Interviewer {
  askQuestions(): string;
}

class Developer implements Interviewer {
  askQuestions() {
    return "Asking about design patterns!";
  }
}

class CommunityExecutive implements Interviewer {
  askQuestions() {
    return "Asking about community building";
  }
}
