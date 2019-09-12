import React, { useState } from 'react';
import Dashboard from './Dashboard';

export const addBallCount = score => score + 1;
export const addStrikeCount = score => score + 1;
export const addHomeScore = score => score + 1;
export const addAwayScore = score => score + 1;

function Display(){
    const [homeScore, setHomeScore] =  useState(0);
    const [awayScore, setAwayScore] = useState(0);
    const [ballCount, setBallCount] = useState(0);
    const [strikeCount, setStrikeCount] = useState(0);

    const handleBallCount = e => {
        e.preventDefault();
        setBallCount(addBallCount(ballCount));
        if(ballCount >= 4){
            setBallCount(0)
        }
    }

    const handleStrikeCount = e => {
        e.preventDefault();
        setStrikeCount(addStrikeCount(strikeCount));
        if(strikeCount >= 3){
            setStrikeCount(0)
        }
    }

    const handleFoul = e => {
        e.preventDefault();
        if(strikeCount === 0){
            return setStrikeCount(addStrikeCount(strikeCount))
        } else if(strikeCount === 1){
            return setStrikeCount(2)
        } 
    }
    
    const handleHomeHit = e => {
        e.preventDefault();
        setHomeScore(addHomeScore(homeScore));
        if(strikeCount && ballCount > 0){
            setStrikeCount(0);
            setBallCount(0);
        }
    }
    const handleAwayHit = e => {
        e.preventDefault();
        setAwayScore(addAwayScore(awayScore));
        if(strikeCount && ballCount > 0){
            setStrikeCount(0);
            setBallCount(0);
        }
    }


    return(
        <div className='container'>
            <section className='scoreboard'>
                <div className='topRow'>
                    <div className='timer'>00:05</div>
                    <div className='home'>
                        <h2 className='home_name'>Astros</h2>

                        <div className='home_score'>{homeScore}</div>
                    </div>
                    
                    <div className='away'>
                        <h2 className='away_name'>Mets</h2>
                        <div className='away_score'>{awayScore}</div>
                    </div>
                </div>
                <div className='bottomRow'>
                    <div className='ball'>
                        <h3 className='ball_title'>Balls</h3>
                        <div className='ball_value'>{ballCount}</div>
                    </div>
                    <div className='strike'>
                        <h3 className='strike_title'>Strikes</h3>
                        <div className='strike_value'>{strikeCount}</div>
                    </div>
                </div>
            </section>
            <Dashboard 
                handleBallCount={handleBallCount} 
                handleStrikeCount={handleStrikeCount}
                handleFoul={handleFoul} 
                handleHomeHit={handleHomeHit}
                handleAwayHit={handleAwayHit}
            />
        </div>
    );
}

export default Display;