import { Patient } from "../types"

type PatientDetailProps = {
    patient: Patient
}
export default function PatientDetails({ patient }: PatientDetailProps) {
    return (<>
        <p>
            {patient.name}
        </p>

    </>)
}