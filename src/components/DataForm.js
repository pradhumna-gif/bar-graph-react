import { useState } from 'react'
const DataForm = ({ onFormSubmit }) => {
    const [angular, setAngular] = useState();
    const [react, setReact] = useState();
    const onSubmit = (e) => {
        e.preventDefault();
        if(react < 0 || angular < 0) {
            alert('No one skill can be negative.');
            return
        }
        onFormSubmit(react, angular)
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>React</label>
                <input type="number" className="form-control" placeholder="React" onChange={(e) => setReact(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Angular</label>
                <input type="number" step="any" className="form-control" placeholder="Angular" onChange={(e) => setAngular(e.target.value)} />
            </div>
            <input type="submit" className="btn btn-primary mt20" value="Submit" />
        </form>
    )
}

export default DataForm;