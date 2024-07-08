interface Interviewer {
  askQuestions(): string;
}

class Developer implements Interviewer {
  askQuestions() {
    return "";
  }
}
