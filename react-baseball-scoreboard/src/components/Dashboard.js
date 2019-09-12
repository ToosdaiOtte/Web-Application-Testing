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
                    onClick={props.handleFoul}
                    className='buttons_foul'
                >
                    Foul
                </button>
                <button
                    onClick={props.handleHomeHit}
                    className='home_hit'
                >
                    Home Hit
                </button>
                <button
                    onClick={props.handleAwayHit}
                    className='away_hit'
                >
                    Away Hit
                </button>
            </div>
        </section>
    );
}

export default Dashboard;