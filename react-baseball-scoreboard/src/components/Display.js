import React, { useState } from 'react';
import Dashboard from './Dashboard';
// import { useHitScore } from '../hooks/useHitScore';

function Display(){
    const [score, setScore] = useState({ homeScore: 0, awayScore: 0 });
    const [count, setCount] = useState({ ballCount: 0, strikeCount: 0 });

    const { homeScore, awayScore } = score;
    const { ballCount, strikeCount } = count;

    console.log(count);

    const handleCount = countTitle => {
        setCount({
            ...count,
            [countTitle]: count[countTitle] + 1
    });
    console.log(countTitle)
     
        if(ballCount >= 4){
            setCount({ballCount: 0, strikeCount});
        }
        else if(strikeCount >= 3){
            setCount({ballCount, strikeCount: 0});
        }
        
    }

    const handleFoul = () => {
        // e.preventDefault();
        if(strikeCount === 0 ){
            setCount({ballCount, strikeCount: 1})
        } else if(strikeCount === 1){
            setCount({ballCount, strikeCount: 2})
        } 
    }

    const handleHit = val => { 
        setScore({
            ...score,
            [val]: score[val] + 1
        });
        if(ballCount || strikeCount > 0){
            setCount({ballCount: 0, strikeCount: 0});
        }
    }


    return(
        <div className='container'>
            <section className='scoreboard'>
                <div className='topRow'>
                   
                    <div className='home'>
                        <h2 className='home_name'>Astros</h2>

                        <div className='home_score' name="home_score">{homeScore}</div>
                    </div>
                    <div className='timer'>00:05</div>
                    <div className='away'>
                        <h2 className='away_name'>Mets</h2>
                        <div className='away_score' name='away_score'>{awayScore}</div>
                    </div>
                </div>
                <div className='bottomRow'>
                    <div className='ball'>
                        <h3 className='ball_title'>Ball</h3>
                        <div className='ball_value'>{ballCount}</div>
                    </div>
                    <div className='strike'>
                        <h3 className='strike_title'>Strike</h3>
                        <div className='strike_value'>{strikeCount}</div>
                    </div>
                </div>
            </section>
            <Dashboard 
                handleCount={handleCount}
                handleFoul={handleFoul} 
                handleHit={handleHit}
            />
        </div>
    );
}

export default Display;