import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"
import { toast } from 'react-toastify'

type PatientDetailProps = {
    patient: Patient
}

export default function PatientDetails({ patient }: PatientDetailProps) {
    const { deletePatient, getPatientById } = usePatientStore()
    const handleClick = () => {
        deletePatient(patient.id)
        toast('Paciente eliminado', {
            type: 'error',
            autoClose: 2500
        })
    }

    return (
        <div className="mx-5 my-10 px-5 py-5 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label='ID' data={patient.id} />
            <PatientDetailsItem label='Nombre' data={patient.name} />
            <PatientDetailsItem label='Propietario' data={patient.caretaker} />
            <PatientDetailsItem label='Email' data={patient.email} />
            <PatientDetailsItem label='Alta' data={patient.date.toString()} />
            <PatientDetailsItem label='Síntomas' data={patient.symptoms} />
            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    onClick={() => getPatientById(patient.id)}
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase rounded-lg text-white font-bold">
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase rounded-lg text-white font-bold"
                    onClick={handleClick}>
                    Emininar
                </button>
            </div>
        </div>)
}