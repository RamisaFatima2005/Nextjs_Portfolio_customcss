import React from 'react';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title"><b><i>Projects</i></b></h1>
        <p className="projects-description">
          Command-Line Interface (CLI) Projects
          <br />
          Below are some of the CLI-based projects I&apos;ve developed, 
          <br />showcasing my skills.
        </p>
      </div>
      <div className="projects-grid">
        {/*Calculator*/}
        <div className="projects-item">
          <Image src="/calculator.jpeg" alt="BMI Calculator" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/calc_bmi-calculator"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/calc_bmi-calculator
          </a>
        </div>
        {/* Number Guessing Game*/}
        <div className="projects-item">
          <Image src="/numguess.png" alt="Guess Number Game" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/play_num_guess_game"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/play_num_guess_game
          </a>
        </div>
        {/*ATM*/}
        <div className="projects-item">
          <Image src="/ATM.jpg" alt="ATM Machine" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/cash-amount-atm_machine"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/cash-amount-atm_machine
          </a>
        </div>
        {/*Todo List*/}
        <div className="projects-item">
          <Image src="/Todo.jpeg" alt="To-Do List" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/your_own_todo_list"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/your_own_todo_list
          </a>
        </div>
        {/*Word Counter*/}
        <div className="projects-item">
          <Image src="/Wordcounter.jpeg" alt="Word Counter" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/fta_word_counter"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/fta_word_counter
          </a>
        </div>
        {/*Countdown Timer*/}
        <div className="projects-item">
          <Image src="/countdowntimer.png" alt="Countdown Timer" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/nr_countdown_timer"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/nr_countdown_timer
          </a>
        </div>
        {/*Adventure Game*/}
        <div className="projects-item">
          <Image src="/advntr.jpeg" alt="Adventure Game" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/tf_adventure_game"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/tf_adventure_game
          </a>
        </div>
        {/*Oop Bank*/}
        <div className="projects-item">
          <Image src="/oopbank.jpeg" alt="OOP Bank" width={64} height={64} className="projects-image" />
          <a
            href="https://www.npmjs.com/package/ra_oop_bank"
            className="projects-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.npmjs.com/package/ra_oop_bank
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
