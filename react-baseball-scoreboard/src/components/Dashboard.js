import React from 'react';

function Dashboard(props){
    return(
        <section className='buttonsContainer'>
            <div className='buttons'>
                <button
                    data-testid='ball'
                    onClick={props.handleCount.bind(null, 'ballCount')}
                    className='buttons_ball'
                >
                    Ball
                </button>
                <button
                    data-testid='strike'
                    onClick={props.handleCount.bind(null, 'strikeCount')}
                    className='buttons_strike'
                >
                    Strike
                </button>
                <button
                    onClick={props.handleFoul.bind(null, 'strikeCount')}
                    className='buttons_foul'
                >
                    Foul
                </button>
                <button
                    onClick={props.handleHit.bind(null, 'homeScore')}
                    className='home_hit'
                >
                    Home Hit
                </button>
                <button
                    onClick={props.handleHit.bind(null, 'awayScore')}
                    className='away_hit'
                >
                    Away Hit
                </button>
            </div>
        </section>
    );
}

export default Dashboard;