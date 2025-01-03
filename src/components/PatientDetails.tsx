import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailProps = {
    patient: Patient
}
export default function PatientDetails({ patient }: PatientDetailProps) {
    return (
        <div className="mx-5 my-10 px-5 py-5 bg-white shadow-md rounded-xl">
            <PatientDetailsItem label='ID' data={patient.id} />
            <PatientDetailsItem label='Nombre' data={patient.name} />
            <PatientDetailsItem label='Propietario' data={patient.caretaker} />
            <PatientDetailsItem label='Email' data={patient.email} />
            <PatientDetailsItem label='Alta' data={patient.date.toString()} />
            <PatientDetailsItem label='Síntomas' data={patient.symptoms} />
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 uppercase rounded-lg text-white font-bold">
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 uppercase rounded-lg text-white font-bold">
                    Emininar
                </button>
            </div>
        </div>)
}