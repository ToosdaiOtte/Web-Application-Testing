import React from 'react';

function Dashboard(props){
    return(
        <section className='buttonsContainer'>
            <div className='buttons'>
                <button
                    data-testid='home-ball'
                    onClick={props.handleBallCount}
                    className='buttons_ball'
                >
                    Ball
                </button>
                <button
                    onClick={props.handleStrikeCount}
                    className='buttons_strike'
                >
                    Strike
                </button>
                <button
                    className='buttons_foul'
                >
                    Foul
                </button>
                <button
                    className='hit'
                >
                    Hit
                </button>
            </div>
        </section>
    );
}

export default Dashboard;