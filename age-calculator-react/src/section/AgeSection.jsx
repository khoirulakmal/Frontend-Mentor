import AgeResult from '../component/AgeResult'
import Form from '../component/Form'
import Arrow from '../component/Arrow'

export default function AgeSection(){
    return(
        <section className="age-section">
        <Form />
        <Arrow />
        <AgeResult />
        </section>
    )
}