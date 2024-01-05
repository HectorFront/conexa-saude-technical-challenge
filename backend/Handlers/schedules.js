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
