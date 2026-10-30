import { useEffect, useState } from "react";

function Student() {
  var [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/student/getAllStudents")
      .then((res) => res.json())
      .then((data) => setStudents([...data]));
  }, []);
  return (
    <div className="mybox">
      <h1>Student</h1>
      <table border="2">
        {students?.map((student) => {
          return (
            <tr>
              <td>{student.fullname}</td>
              <td>{student.age}</td>
              <td>{student.company}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Student;
