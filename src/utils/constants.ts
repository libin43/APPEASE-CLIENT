let BASE_URL: string;

if(import.meta.env.MODE === 'production'){
    BASE_URL = 'https://appease-server.onrender.com'
}
else{
    BASE_URL = 'http://localhost:7000/api/v1'
}

export  {BASE_URL}