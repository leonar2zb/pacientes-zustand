import { create } from 'zustand'
import { devtools } from 'zustand/middleware';
import { DraftPatient, Patient } from './types'
import { v4 as uuidv4 } from 'uuid'

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

export const usePatientStore = create<PatientState>()(
    devtools((set) => ({
        patients: [],
        addPatient: (data) => {
            const newPatient = createPatient(data)
            set((state) => ({
                patients: [...state.patients, newPatient]
            }))
        },
        deletePatient: (id) => {
            console.log(id)
            set((state) => ({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
        }
    })
    ))