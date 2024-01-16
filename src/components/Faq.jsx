import { FaChevronDown, FaChevronUp } from "react-icons/fa6";

import { useState } from "react";

export default function Faq() {
  const [activequestion, setactivequestion] = useState(null);
  const questions = [
    {
      id: 1,
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes,education flashcards can be tailored to diffrent age groups and learning levels.These are flashcards designed for preschoolers,elementary school students,high school students,and even for college-level and adult learners.",
    },
    {
      id: 2,
      question: "How do flashcards work?",
      answer:
        "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other.Users can review the cards repeatedly,reinforcing their memory and enhancing learning through repetition.",
    },
    {
      id: 3,
      question: "Can education flashcards be used test preparation?",
      answer:
        "Absolutely.Flashcards are an excellent tool preparation,allowing students to review key concepts,terms and facts.They provide a quick and focused way to reinforce knowledge before exams.",
    },
  ];
  return (
    <>
      <div className="w-screen h-screen  justify-end items-center ">
        <div className="pt=0 pl=0 pb=4">
          <p className="text-blue-800 text-4xl font-bold px-20">FAQ</p>
        </div>
        <div className="w-[89]% m-auto max-w-[1400px] p-8  rounded-xl shadow-md ">
          {questions.map((qsn) => (
            <div key={qsn.id} className="mb-4 last:mb-0">
              <button
                className="w-full text-left text-xl focus:outline-none p-5 rounded-lg shadow-md flex justify-between items-center"
                onClick={() =>
                  setactivequestion(activequestion === qsn.id ? null : qsn.id)
                }
              >
                {qsn.question}
                {activequestion === qsn.id ? (
                  <FaChevronUp />
                ) : (
                  <FaChevronDown />
                )}
              </button>
              {activequestion === qsn.id && (
                <div className="mt-2 ml-4">
                  <p>{qsn.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
