import React, { Component } from 'react';
import './Weather.css';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		}
	}
	
	componentDidMount() {    
        fetch("https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='bothell, wa')&format=json")
        .then(res => res.json())
        .then(result => {
            this.setState({ data: result.query.results.channel });
        });
    }
    
    render() {
        let data = this.state.data;
        
        if (data) {
            let currentCondition = data.item.condition;
            let weeklyForecast = data.item.forecast.slice(0,7);
            return (
                <div className="weatherCard">
                <div className="currentForecast">
                <div className="location">
                <h4>{data.location.city}</h4>
                <h5>{currentCondition.date}</h5>
                </div>
                
                <div className="temperature">
                <h4>{currentCondition.temp}° {data.units.temperature}</h4>
                </div>
                
                <div className="condition">
                <h5>{currentCondition.text}</h5>
                <p> {this.state.code}</p>
                </div>
                </div>
                <div className="weeklyForecast">
                {
                    weeklyForecast.map(item => {
                        return (
                            <div className="day">
                            <h5>{item.day}</h5>
                            <p>{item.high}° {data.units.temperature} {item.low}° {data.units.temperature}</p>
                            <p>{item.text}</p>
                            </div>
                            )
                        })
                    }
                    </div>
                    
                    </div>
                    );
                } else {
                    return null;
                }
    }
}

export { Weather };
        