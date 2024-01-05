# Documentação (Agendamentos - Conexa Saúde)
<hr/>
<img src="src/assets/logos/default.svg" width="auto" height="50px"/>

# Back-end
Não continha as rotas:
- Buscar Consultas => GET http://localhost:3333/consultations?_expand=patient
- Nova Consulta => POST http://localhost:3333/consultations

## Added

### server
```javascript
server.post('/consultations', registerSchedules);
server.get('/consultations', dataSchedules);
```

### Handlers/schedules
```javascript
/**
 * @author Hector Rodrigues da Silva
 */
const path = require('path')
const db = require(path.join(__dirname, '../db.json'));

let localDatabase = Object.assign({}, db);

/**
 *
 * @param req
 * @param response
 * @returns {any}
 */
const registerSchedules = (req, response) => {
    const { patient_id, date } = req.body;
    localDatabase.consultations.push({
        date: date,
        patientId: Number(patient_id),
        id: localDatabase.consultations.length + 1
    });
    return response.status(200).json({ message: 'Successfully registered' });
}

/**
 *
 * @param _req
 * @param response
 * @returns {any}
 */
const dataSchedules = (_req, response) => {
    const payload = Object.assign({}, localDatabase);
    payload.consultations.forEach(consult => {
        payload.patients.forEach(patient => {
            if(consult.patientId === patient.id) {
                const currentConsults = patient.consults?.slice() ?? [];
                delete consult.patientId;
                patient.consults = [...currentConsults, consult];
            }
        });
    });
    delete payload.consultations;
    return response.status(200).json(payload);
    // ** RESULT **
        // [
        //     {
        //         "id": 1,
        //         "first_name": "Frodo",
        //         "last_name": "Baggins",
        //         "email": "frodo.baggins@mail.com",
        //         "consults": [
        //             {
        //                 "id": 1,
        //                 "date": "Fri Feb 05 2021 10:20:00 GMT-0300 (Brasilia Standard Time)"
        //             }
        //         ]
        //     },
        //     {
        //         "id": 2,
        //         "first_name": "Samwise",
        //         "last_name": "Gamgee",
        //         "email": "samwise.gamgee@mail.com",
        //         "consults": [
        //             {
        //                 "id": 3,
        //                 "date": "Thu Feb 11 2021 10:00:00 GMT-0300 (Brasilia Standard Time)"
        //             }
        //         ]
        //     },
        //     {
        //         "id": 3,
        //         "first_name": "Saruman",
        //         "last_name": "The White",
        //         "email": "saruman.thewhite@mail.com",
        //         "consults": [
        //             {
        //                 "id": 2,
        //                 "date": "Thu Feb 11 2021 09:00:00 GMT-0300 (Brasilia Standard Time)"
        //             },
        //             {
        //                 "id": 4,
        //                 "date": "Thu Feb 11 2021 13:00:00 GMT-0300 (Brasilia Standard Time)"
        //             }
        //         ]
        //     }
        // ]
}

module.exports = {dataSchedules, registerSchedules};
```

# Front-end

<p align="left" dir="auto">
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" rel="nofollow"> <img src="https://cdn.simpleicons.org/javascript" alt="javascript" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://www.typescriptlang.org/" rel="nofollow"> <img src="https://cdn.simpleicons.org/typescript" alt="typescript" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://babeljs.io/" rel="nofollow"> <img src="https://cdn.simpleicons.org/babel" alt="babel" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://gulpjs.com/" rel="nofollow"> <img src="https://cdn.simpleicons.org/gulp" alt="gulpjs" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://reactjs.org/" rel="nofollow"> <img src="https://cdn.simpleicons.org/react" alt="react" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://reactrouter.com/en/main" rel="nofollow"> <img src="https://cdn.simpleicons.org/reactrouter" alt="reactrouter" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://getbootstrap.com" rel="nofollow"> <img src="https://cdn.simpleicons.org/bootstrap" alt="Bootstrap" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://styled-components.com/" rel="nofollow"> <img src="https://cdn.simpleicons.org/styledcomponents" alt="styled-components" width="auto" height="50" style="max-width: 100%;"> </a>
<a href="https://m3.material.io/" rel="nofollow"> <img src="https://cdn.simpleicons.org/materialdesign" alt="materialdesign" width="auto" height="50" style="max-width: 100%;"> </a>
</p>

## Core

Alert

```typescript jsx
type AlertProps = {
    type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark",
    ...
}

<Alert
    {...}
    show={true}
    title="title"
    type="danger"
    className=""
>
    ...
</Alert>
```

<hr/>

Box
```javascript
<Box className="" {...}>
    ...
</Box>
```

<hr/>

Button
```javascript
<Button
    {...}
    size="lg"
    className=""
    icon="login" // Material Icons
    outline={false}
    secondary={true}
    onClick={() => {}}
>
    ...
</Button>
```

<hr/>

Card
```javascript
<Card className="" {...}>
    ...
</Card>
```

<hr/>

Fallback
```javascript
<Suspense fallback={<LoaderFallback/>}>
    ...
</Suspense>
```

<hr/>

Grid (Col)
```javascript
cols = "sm md lg xl xxl";
    
<Col
    {...}
    cols="12 12 12 5 5 classNames"
>
    ...
</Col>
```

<hr/>

Grid (Row)
```javascript
<Row className="" {...}>
    ...
</Row>
```

<hr/>

Icon (Material Icons)
```javascript
 type MaterialIconProps = {
     type: "outlined" | "filled" | "rounded" | "sharp" | "two-tone",
    ...
}

 <MaterialIcon
    size={15} // PIXELS
    style={{}}
    icon="login" // REQUIRED
    color="#fff" 
    hover={false}
    pointer={false}
    type={"outlined"}
/>
```

<hr/>

Input Default
```javascript
<InputDefault
    {...}
    error={true}
/>
```

<hr/>

Input Label
```javascript
<InputLabel
    {...}
    label=""
    error={true}
/>
```

<hr/>

Input Password
```javascript
<InputPassword
    {...}
    label=""
    error={true}
/>
```

<hr/>

Input Password Label
```javascript
<InputPasswordLabel
    {...}
    label=""
    error={true}
/>
```

Loaders
```javascript
<LoadingDefault
    {...}
    size={30} // Pixels
    style={{}}
    color="#fff"
/>
```

Modal
```javascript
const [show, setShow] = useState(true);

<Modal show={show} handleClose={() => setShow(false)}>
    <ModalHeader title=""/>
    <ModalBody>
       ...
    </ModalBody>
    <ModalFooter>
        ...
    </ModalFooter>
</Modal>
```

Render
```javascript
<Render condition={true}>
    ...
</Render>
```

`npm i or yarn`

`npm start or yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

#### Build
* Command `npm run build or yarn build`

#### Optimization
* Command `npm i -g gulp`
* Command `gulp build`

**@authors: <a href="https://github.com/HectorFront">Hector Rodrigues da Silva</a>**
