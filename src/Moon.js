import React from 'react';
import MoonZipForm from './components/moonZipForm';
import MoonTable from '././components/moonTable';
import MoonInfoTitles from '././components/moonInfoTitles';

const API_KEY = process.env.REACT_APP_MOON_KEY;

class Moon extends React.Component {

	state = {
		zone: undefined,
		zip: undefined,
        moonrise: undefined,
        moonset: undefined,
        moonphase: undefined,
        illumination: undefined,
        error: undefined
    }

    getMoonInfoByZip = async (e) => {
        e.preventDefault();
        const zip = e.target.elements.zip.value;
        const api_call = await fetch(`https://api.worldweatheronline.com/premium/v1/astronomy.ashx?q=${zip}&key=${API_KEY}&tp=24&format=json`);
        const data = await api_call.json();

        if (zip) {
            console.log(data);
            this.setState({
            	zone: data.data.time_zone[0].zone,
            	zip: data.data.request[0].query,
            	moonrise: data.data.time_zone[0].moonrise,
            	moonset: data.data.time_zone[0].moonset,
            	moonphase: data.data.time_zone[0].moon_phase,
            	illumination: data.data.time_zone[0].moon_illumination,               
                error: ""
        });
        } else {
            this.setState({
            	zone: undefined,
                zip: undefined,
                moonrise: undefined,
                moonset: undefined,
                moonphase: undefined,
                illumination: undefined,
                error: "Please enter the value."
            });
        }
    }

    render() {
        return (
            <React.Fragment>

                <MoonInfoTitles/>
      
                <MoonZipForm getMoonInfoByZip = {this.getMoonInfoByZip}/>               

        		<MoonTable
        				zone={this.state.zone}
        				zip={this.state.zip}
        				moonrise={this.state.moonrise}
        				moonset={this.state.moonset}
        				moonphase={this.state.moonphase}
        				illumination={this.state.illumination}   				
        		/> 
        		  		
      		</React.Fragment>
        );
    }
};

export default Moon;