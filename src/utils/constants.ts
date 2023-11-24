let BASE_URL: string;

if(import.meta.env.MODE === 'production'){
    BASE_URL = 'https://appease-server.onrender.com'
}
else{
    BASE_URL = 'https://appease-server.onrender.com'
}

export  {BASE_URL}