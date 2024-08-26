import axios from 'axios';
// to load types separately use npm install --save-dev @types/node
import _ from 'lodash';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: { lat: string; lng: string };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

axios
    .get<User []>('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        console.log(res.data);
        const { data } = res;

        console.log(data[0].company.catchPhrase);
    })
    .catch((e) => console.log(`Error ${e}`));
