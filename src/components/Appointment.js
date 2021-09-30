import React from "react";

const Appointment = ({appointment, removeAppointment}) => (
    <div className="cita">
        <p>Pet: <span>{appointment.pet}</span></p>
        <p>Owner: <span>{appointment.owner}</span></p>
        <p>Date: <span>{appointment.appointmentDate}</span></p>
        <p>Hour: <span>{appointment.hour}</span></p>
        <p>Symptoms: <span>{appointment.symptoms}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={()=>{removeAppointment(appointment.id)}}
        >
            Remove &times;
        </button>
    </div>
);

export default Appointment
