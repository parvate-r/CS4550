export default function Grades({ params }: { params: { id: string } }) {
  return (
    <div id="wd-grades">
      <h2>Grades</h2>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>Assignment</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Assignment 1</td><td>95</td></tr>
          <tr><td>Assignment 2</td><td>88</td></tr>
          <tr><td>Quiz 1</td><td>90</td></tr>
          <tr><td>Midterm Exam</td><td>85</td></tr>
        </tbody>
      </table>
    </div>
  );
}
