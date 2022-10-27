// aqui guardei as configurações da Api


import axios from 'axios'

const api = axios.create({

    baseURL: 'https://api.forecast.it/api/v1/projects',
    APIkey: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wZmEuZm9yZWNhLmNvbVwvYXV0aG9yaXplXC90b2tlbiIsImlhdCI6MTY2NTQ4OTY2MywiZXhwIjo5OTk5OTk5OTk5LCJuYmYiOjE2NjU0ODk2NjMsImp0aSI6ImRmODQ3Y2M5MjEzMDdjNmYiLCJzdWIiOiJ3ZWRsZXlzaWx2YTIxMDUiLCJmbXQiOiJYRGNPaGpDNDArQUxqbFlUdGpiT2lBPT0ifQ.MD8iZAi3M5WRUA0d0r0Xd-DgrI_5WB0LrkaRy8wkLzg'
    
  }
  );

  export default {

    Location() {
        return api.get('https://api.forecast.it/api/v1/location/search/:query')
    }
  }

