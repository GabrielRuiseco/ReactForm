import {Fragment, useState, useEffect} from "react";
import PatientForm from "./components/PatientForm";
import Appointment from "./components/Appointment";

function App() {

    let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
    if (!initialAppointments) {
        initialAppointments = [];
    }

    const [appointments, addAppointment] = useState(initialAppointments);

    const createAppointment = appointment => {
        addAppointment([
            ...appointments,
            appointment
        ])
    }

    const removeAppointment = id => {
        const newAppointements = appointments.filter(appointment => appointment.id !== id);
        addAppointment(newAppointements);
    }

    const apponitmentsFragmentTitle = appointments.length === 0
        ? 'There is no appointments' : 'Manage your appointments';

    useEffect(() => {
        let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
        if (initialAppointments) {
            localStorage.setItem('appointments', JSON.stringify(appointments))
        } else {
            localStorage.setItem('appointments', JSON.stringify([]))
        }
    }, [appointments]);

    return (
        <Fragment>
            <h1>Patient Manager</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <PatientForm
                            createAppointment={createAppointment}
                        />
                    </div>
                    <div className="one-half column">
                        <h2>{apponitmentsFragmentTitle}</h2>
                        {appointments.map(appointment => (
                            <Appointment
                                key={appointment.id}
                                appointment={appointment}
                                removeAppointment={removeAppointment}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
