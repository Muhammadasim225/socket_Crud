import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';
import Input from './Input';

function App() {
  const [info, setInfo] = useState({ id: '', name: '', age: '', email: '',cnic:'' });
  const [ListOfData, SetListOfData] = useState([]);
  const [iseEdit, setIsEdit] = useState(false);
  const socket = io('localhost:5000/');

  const socketConnection = () => {
    socket.on('connection', (sockett) => {
      console.log('Socket connected successfully', sockett);
    });
  };

  useEffect(() => {
    socketConnection();
  }, []);

  function handleEvent(e) {
    let { name, value } = e.target;
    let currentVal = { [name]: value };
    setInfo((prev) => ({ ...prev, ...currentVal }));
  }


  const handleSubmit=()=>{
    if (iseEdit) {
      // Update existing item
      SetListOfData((prev) =>
        prev.map((item) =>
          item.id === info.id
            ? { ...item, name: info.name, age: info.age, email: info.email }
            : item
        )
      );
      socket.emit("editData", info);
      setIsEdit(false); // Exit edit mode
    }
    else {
      // Add new item with a unique ID
      const newItem = { ...info, id: Date.now() }; // Generate an ID
      SetListOfData((prev) => [...prev, newItem]);
      socket.emit("data", newItem); // Emit the new item with ID

    } 
    setInfo({ id: null, name: '', age: '', email: '' ,cnic: ''}); // Reset the form
   
  }
  const handleEdit = (dd) => {
    setInfo(dd);
    setIsEdit(true);
    console.log(dd);
    socket.emit('editData', dd);
  };

  const handleDelete = (id) => {
    socket.emit('deletedata', id);
    console.log('This is delete data', id);
  };

  useEffect(() => {
    socket.on('ListOfData', (res) => {
      console.log(res);
      SetListOfData(res);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-sans">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">CRUD Operations By Socket.io</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <Input
            type="text"
            name="name"
            placeholder="Enter your Name"
            handleEvent={handleEvent}
            value={info.name}
          />
          <Input
            type="text"
            name="age"
            placeholder="Enter your Age"
            handleEvent={handleEvent}
            value={info.age}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email"
            handleEvent={handleEvent}
            value={info.email}
          />
           <Input
            type="cnic"
            name="cnic"
            placeholder="Enter your CNIC"
            handleEvent={handleEvent}
            value={info.cnic}
          />
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition-all"
          >
            {iseEdit ? 'Update' : 'Submit'}
          </button>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ListOfData.map((dd) => (
            <div
              key={dd.id}
              className="bg-white text-gray-800 p-4 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold">{dd.name}</h2>
              <p className="text-sm">Age: {dd.age}</p>
              <p className="text-sm">Email: {dd.email}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(dd)}
                  className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(dd.id)}
                  className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
