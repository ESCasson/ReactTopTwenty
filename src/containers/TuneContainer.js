import React, {Component, Fragment} from 'react';
import TuneItem from '../components/TuneItem.js';

class TuneContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      topTwenty: []
    };
  }

  componentDidMount(){
  const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";


fetch(url)
  .then(res => res.json())
  .then(data => this.setState({topTwenty: data.feed.entry}))
  .catch(err =>console.error);

}


render(){
 const tunes = this.state.topTwenty.map((tune, index) => {

   return(


<TuneItem tune={tune} key={index}>{index}</TuneItem>


   );

 });


 return (
   <Fragment>
   <header><h1>The Top 20 Hits</h1></header>

   <div className = "tune-grid">{tunes}</div>

   </Fragment>

 );

}

}

export default TuneContainer;
