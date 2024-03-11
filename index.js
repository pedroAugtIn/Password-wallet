import React, { useState } from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

const App = () => {
  const [mypasswords, setMyPasswords] = useState([]);
  const [hidePasswords, setHidePasswords] = useState(true);

  const savepassword = (event) => {
    event.preventDefault(); 
    
    const descriptionInput = document.querySelector("#description");
    const passwordInput = document.querySelector("#password");
    
    // Verifica se os campos estão vazios
    if (!descriptionInput.value.trim() || !passwordInput.value.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    
    const descriptionValor = descriptionInput.value;
    const passwordValor = passwordInput.value;

    setMyPasswords([...mypasswords, { description: descriptionValor, password: passwordValor }]);
    
    descriptionInput.value = "";
    passwordInput.value = "";
  };
  
  const deletePassword = (index) => {
    const confirmation = window.confirm("Are you sure you want to delete this password?");
    if (confirmation) {
      const newPasswords = [...mypasswords];
      newPasswords.splice(index, 1);
      setMyPasswords(newPasswords);
    }
  };

  const toggleHidePasswords = () => {
    setHidePasswords(!hidePasswords);
  };

  return (
    <div>
      <div>
        <h1>Password Wallet</h1>
      </div>
      <div>
        <input id="description" placeholder="My password for..." type="text"></input>
        <input id="password" placeholder="Password..."></input>
        <button id="savepress" onClick={savepassword}>Save Password</button>
        <button onClick={toggleHidePasswords}>{hidePasswords ? 'Show Passwords' : 'Hide Passwords'}</button>
      </div>
      <div id="password-list">
        <span>Description</span><span>Password</span>
        {mypasswords.map((password, index) => (
          <div key={index}>
            <p>
              {password.description} - {hidePasswords ? '******' : password.password}
              <button id="delete-pass" onClick={() => deletePassword(index)}>X</button>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.querySelector("#box"));