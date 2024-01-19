import React, { Component } from 'react';
import './App.css';
import Media from './Components/Media';


class App extends Component {
  render(){
    return(
    <header>
        <div className='title'> PANCASILA</div>
        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Pertama</strong>
            <br></br>
            Ketuhanan Yang Maha Esa
          </div>
          <Media image="sila1.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Kedua</strong>
            <br></br>
            Kemanusiaan Yang Adil dan Beradab
          </div>
          <Media image="silakedua.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Ketiga</strong>
            <br></br>
            Persatuan Indonesia
          </div>
          <Media image="silake3.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Keempat</strong>
            <br></br>
            Kerakyatan yang dipimpin oleh hikmat dalam kebijaksanaan permusyawaratan perwakilan
          </div>
          <Media image="silake4.png"></Media>
        </div>

        <div className='head-text'>
          <div className='text-on-image'>
            <strong>Sila Kelima</strong>
            <br></br>
            Keadilan sosial bagi seluruh rakyat Indonesia
          </div>
          <Media image="keli5.png"></Media>
        </div>

        <br></br>
        <hr></hr>

        <div className='kotak'>
          <div className='form-daftar'>
            <p> Form daftar osis</p>
          </div>
        </div>

        <br></br>

        <div className='jarak'>
             <input type="text" id="Nama" className="form-input" placeholder="Nama" />
        </div>
  
        <div className='jarak'>
          {/* <input type="label" id="jenis_kelamin" className="form-input" placeholder="Jenis Kelamin" /> */}
          <select name="gender" id="jenis-kelamin" className='form-input' placeholder='Jenis Kelamin'>  
		        <option value="">Jenis Kelamin</option>  
	        	<option value="Perempuan">Perempuan</option>  
        		<option value="Laki-laki">Laki-laki</option>  
          </select>
        </div>

        <div className='jarak'>
          <input type="text" id="alamat" className="form-input" placeholder="Alamat" />
        </div>

      <div class='jarak'>
          <button type="submit" class="buton" className='bcolor'>Submit</button>
        </div>

        <br />
        <hr />
        <br />

        <button className='mr-1 btn btn-danger'> Button Merah</button>
        <br />
        <button className='mr-1 btn btn-warning'> Button Kuning</button>
        <br />
        <button className='mr-1 btn btn-success'> Button Hijau</button>
        <br />
        <button className='mr-1 btn btn-light'> Button Putih</button>
        <br />
        <button className='mr-1 btn btn-dark'> Button Hitam</button>
        <br />
 
    </header>
    );
  }
}

export default App;


// class App extends Component {
//   render(){
//     return (
//       // <div className="App container">
//       //   <div className='alert alert-info'>
//       //   <h3 className='text-danger'>Ini Project Pertama React Js</h3>
//       //   <p>Belajar React Js itu mudah</p>
//       //   <button className='mr-1 btn btn-success'>success</button>
//       //   <button className='btn btn-info'>iya</button>
//       //   </div>
//       //   </div>

//         <div className='App container col-sm-6'> 
//           <Alert type="danger">danger</Alert>
//           <Alert type="success">success</Alert>
//           <Alert type="warning">warning</Alert>
//         </div>
//     );
//   }
// }
// export default App;
// const BmiCalculator = () => {
//   const [weight, setWeight] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [bmi, setBmi] = useState(0);

//   const calculateBmi = () => {
//     const calculatedBmi = weight / Math.pow(height / 100, 2);
//     setBmi(calculatedBmi.toFixed(2));
//   };

//   return (
//     <div>
//       {/* <h2>BMI Calculator</h2> */}
//       <div className="App container">
//           <div className='alert alert-info'>
//             <h3 className='text-info'>Body Mass Index</h3>
//             <div>
//           <label htmlFor="weight">Weight (kg): </label>
//             <input
//               type="number"
//               id="weight"
//               value={weight}
//               onChange={(e) => setWeight(e.target.value)}
//             />
//           </div>
//           <br></br>
//           <div>
//             <label htmlFor="height">Height (cm): </label>
//             <input
//               type="number"
//               id="height"
//               value={height}
//               onChange={(e) => setHeight(e.target.value)}
//             />
//           </div>
//             </div>
//             </div>
      
//           <button onClick={calculateBmi}>Calculate BMI</button>
//           {bmi > 0 && (
//             <div>
//               <p>Your BMI is: {bmi}</p>
//               {/* Add more logic here to display BMI category */}
//             </div>
//           )}
//         </div>
//         );
// };

//         export default BmiCalculator;