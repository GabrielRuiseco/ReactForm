import React, {Fragment, useState} from "react";
import uuid from 'uuid/dist/v4';

const PatientForm = ({createAppointment}) => {

    const [appointment, updateAppointment] = useState({
        pet: '',
        owner: '',
        appointmentDate: '',
        hour: '',
        symptoms: ''
    });

    const [error, updateError] = useState(false)

    const handleChange = e => {
        updateAppointment(
            {
                ...appointment,
                [e.target.name]: e.target.value
            }
        )
    };

    const {pet, owner, appointmentDate, hour, symptoms} = appointment;

    const submitAppointment = e => {
        e.preventDefault();

        if (pet.trim() === '' || owner.trim() === '' || appointmentDate.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
            updateError(true);
            return;
        }
        updateError(false);
        appointment.id = uuid();
        createAppointment(appointment);
        updateAppointment({
            pet: '',
            owner: '',
            appointmentDate: '',
            hour: '',
            symptoms: ''
        });
    };

    return (
        <Fragment>
            <h2>Create appointment</h2>

            {error ? <p className='alerta-error'>All fields required</p> : null}

            <form
                onSubmit={submitAppointment}
            >
                <label>Pet's name</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="pet's name"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Owner's name</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Owner's name"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Date</label>
                <input
                    type="Date"
                    name="appointmentDate"
                    className="u-full-width"
                    onChange={handleChange}
                    value={appointmentDate}
                />
                <label>Hour</label>
                <input
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />
                <label>Symptoms</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptoms}
                >

                </textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Add appointment
                </button>
            </form>
        </Fragment>
    )
}

export default PatientForm
