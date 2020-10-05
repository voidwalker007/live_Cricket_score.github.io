const API_KEY="ATsWz1OXIlR1vmOLaUQN9dMPDxS2";   


export const getMatches =() => {
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}`;

    return  fetch(url)
    .then((response)=> response.json())
    .catch((error)=>console.log("errccor"));


};

export const getMatchdetails =(id)=>{
    const url = `https://cricapi.com/api/matches?apikey=${API_KEY}&unique_id=${id}`;

    return  fetch(url)
    .then((response)=> response.json())
    .catch((error)=>console.log("error"));
};