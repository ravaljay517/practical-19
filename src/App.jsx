
import React, { useState } from "react";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Jay Raval",
      email: "jay@gmail.com",
      course: "BCA",
    },
    {
      id: 2,
      name: "Rahul Patel",
      email: "rahul@gmail.com",
      course: "BBA",
    },
    {
      id: 3,
      name: "Priya Shah",
      email: "priya@gmail.com",
      course: "B.Com",
    },
    {
      id: 4,
      name: "Amit Sharma",
      email: "amit@gmail.com",
      course: "BCA",
    },
  ]);

  const [message, setMessage] = useState("");

  // Delete selected student
  const handleDelete = (id) => {
    const student = students.find((item) => item.id === id);

    setStudents((prevStudents) =>
      prevStudents.filter((item) => item.id !== id)
    );

    setMessage(`${student.name} deleted successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
          Student Management
        </h1>

        <p className="text-center text-gray-600 mb-8">
          View and delete student records
        </p>

        {/* Student Count */}
        <div className="bg-white rounded-xl shadow p-5 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Total Students: {students.length}
          </h2>
        </div>

        {/* Message */}
        {message && (
          <div className="bg-green-100 text-green-700 border border-green-300 p-3 rounded-lg mb-6">
            {message}
          </div>
        )}

        {/* Student List */}
        <div className="bg-white rounded-xl shadow-md p-5 sm:p-6">
          <h2 className="text-xl font-bold mb-5 text-gray-800">
            Student List
          </h2>

          {students.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              No students available.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-blue-600 text-white">
                    <th className="p-3">ID</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Course</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {students.map((student) => (
                    <tr
                      key={student.id}
                      className="border-b hover:bg-gray-50"
                    >
                      <td className="p-3">{student.id}</td>
                      <td className="p-3 font-medium text-gray-800">
                        {student.name}
                      </td>
                      <td className="p-3 text-gray-600">
                        {student.email}
                      </td>
                      <td className="p-3">{student.course}</td>
                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
