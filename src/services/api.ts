// aqui guardei as configurações da Api

import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({

  baseURL: "https://api.forecast.it/api/v1/",
})

export default api;

const config = {
  headers: {
    access_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9mbnc2LmZvcmVjYS5jb21cL2F1dGhvcml6ZVwvdG9rZW4iLCJpYXQiOjE1MjYzMDAzODAsImV4cCI6MTUyNjMwMzk4MCwibmJmIjoxNTI2MzAwMzgwLCJqdGkiOiJxSXl3WVlQNjc1NkczejBEIiwic3ViIjoibFFHa1Y4Z2pIeGUyZU1ibndUUUs4NktqVTY3RXJlS2htenY1IiwicHJ2IjoiYWY3YTAzOThkZGNiNWE3YTUzN2Q3YzdkMjU2NWEyZjgxZGM4ZTQxNCJ9.V8xg6L9yrY9__VH-jdrL_CqXisEpgcfdUa0NoxlGz0k",
    key: "23j98rfsnldkvf3w49hg",
    expires_in: 3600,
    token_type: "bearer"
  }
};

const bodyParameters = {
 key: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY2NTQ4OTY2MywiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NjU0ODk2NjMsImp0aSI6ImRmODQ3Y2M5MjEzMDdjNmYiLCJzdWIiOiJ3ZWRsZXlzaWx2YTIxMDUiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.MD8iZAi3M5WRUA0d0r0Xd-DgrI_5WB0LrkaRy8wkLzg"
};

axios.post( 
'https://api.forecast.it/ api/v1/',
bodyParameters,
config
).then(console.log).catch(console.log);



