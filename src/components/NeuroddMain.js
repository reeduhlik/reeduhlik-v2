import React from "react";

const NeuroddMain = () => (
  <div className="content">
    <div className="neurodd-header">
      <div className="container">
        <img src="/assets/Neurodd/title.png" className="neurodd-header-img" />
        <h5 className="neurodd-header-subtitle">Designed and developed by <a href="https://reeduhlik.com">Reed Uhlik.</a>
        </h5>
      </div>
    </div>
    <div className="neurodd-content">
      <div className="extra-container">
        <h1 className="neurodd-main-header">
          Introducing Neurodd,
        </h1>
        <h2 className="neurodd-sub-header">an AI model designed to predict outcomes of NFL games.</h2>
        <div className="neurodd-block-seperator"></div>
        <h3 className="neurodd-date-line">11/17/21  |  Reed Uhlik</h3>
        <p className="neurodd-main-text">
        Two things I love in this world are football and coding.  For the past two years, I've worked tirelessly to marry the two and create an AI model that accurately predicts the outcomes of NFL games.  After hundreds of hours designing, developing, tweaking, and fine-tuning my model, I'm excited to introduce Neurodd to the world.
        </p>
        <p className="neurodd-main-text">
         <strong>How does it work?</strong><br></br>
         Neurodd uses millions of data points from past NFL games to make predictions for current matchups.  Every week, the advanced neural network performs billions of calculations on this data to forecast each game.  Neurodd has achieved an astounding <strong>45-24 (65.22%) win rate against the spread</strong> this season from internal testing. 
        </p>

      <p className="neurodd-main-text">
        <strong>What to expect</strong><br></br>
        For the rest of the 2021 NFL season, I will be publishing Neurodd's picks on Twitter <a href="https://twitter.com/NeuroddModel">@NeuroddModel</a>, completely free to the public.  I'm confident that Neurodd is the most consistent and accurate model available today. It's now time for you to see the results yourself.
      </p>
      <p className="neurodd-main-text">
      <br></br>
      Feeling generous with your winnings from Neurodd's picks? Venmo donations <strong>@reed-uhlik</strong> help support the development of Neurodd!
      </p>
      </div>
    </div>
  </div>
);

export default NeuroddMain;
