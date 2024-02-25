const ClassForm = (props) => {
    const {students} = props;

    return (
        <ul>
            {students.map(student => (
              <li key={student.id}>{student.name}</li>
            ))}
        </ul>
    )
}

export default ClassForm;