import axios from 'axios';

const KEY = 'AIzaSyDb8s3MVV9EdOER7jHGW3zXCcJiSzolWeM' ;
export default axios.create({
baseURL:'https://www.googleapis.com/youtube/v3',
params:{
part:'snippet',
maxResults: 15,
key:KEY
}
});