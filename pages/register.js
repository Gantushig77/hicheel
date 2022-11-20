import { useEffect, useState } from 'react';
import styles from '../styles/pages/register.module.css';

export default function Register() {
  const [inputState, setInputState] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
  });
  const [inputError, setInputError] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    gender: '',
  });

  const inputOnChange = (name, text) => {
    setInputState({
      ...inputState,
      [name]: text,
    });

    if (inputError[name] != null || inputError[name] != undefined) {
      setInputError({
        ...inputError,
        [name]: null,
      });
    }
  };

  const inputOnError = (name, text) => {
    setInputError({
      ...inputError,
      [name]: text,
    });
  };

  const validation = (name, text) => {
    switch (name) {
      case 'firstname':
      case 'lastname':
        if (/^[a-zA-Z]{2,20}$/.test(text)) {
          inputOnChange(name, text);
        } else {
          inputOnError(name, 'At least 2, maximum 20 characters');
        }
        break;
      case 'password':
        if (/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(text)) {
          inputOnChange(name, text);
        } else {
          inputOnError(
            name,
            'Insert at least a symbol, upper and lower case letters and a number'
          );
        }
        break;
      case 'email':
        if (/^\S+@\S+\.\S+$/.test(text)) {
          inputOnChange(name, text);
        } else {
          inputOnError(name, 'Insert valid email address');
        }
        break;
      case 'phone':
        if (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(text)) {
          inputOnChange(name, text);
        } else {
          inputOnError(name, 'Insert valid phone number');
        }
        break;
      case 'gender':
        inputOnChange(name, text);

        break;
    }
  };

  const submit = () => {
    let error = false;
    for (const property in inputError) {
      if (inputError[property] != '') error = true;
      else error = false;
    }

    for (const property in inputState) {
      if (inputState[property] == '') {
        setInputError({
          ...inputError,
          [property]: 'Finish the input.',
        });
        error = true;
      } else error = false;
    }

    if (error == true) {
      alert('Finish all the inputs without error please.');
    } else {
      document.cookie = `test=${JSON.stringify(inputState)}`;
      alert('Successfully registered');
      console.log(document.cookie);
    }
  };

  useEffect(() => {
    console.log('input state :');
    console.log(inputState);
  }, [inputState]);

  useEffect(() => {
    console.log('input error :');
    console.log(inputError);
  }, [inputError]);

  return (
    <div className={styles.container}>
      <h1>Register</h1>
      <div>
        <form className={styles.testStyle}>
          {/* firstname */}
          <label htmlFor='firstname'>Firstname:</label>
          <br />
          <input
            className={inputError['firstname'] ? styles.inputError : styles.input}
            onChange={(e) => validation('firstname', e.target.value)}
            type='text'
            id='firstname'
            name='firstname'
          />
          <br />
          {inputError['firstname'] != null && (
            <p className={styles.errorText}>{inputError['firstname']}</p>
          )}
          <br />
          {/* lastname */}
          <label htmlFor='lastname'>Lastname:</label>
          <br />
          <input
            className={inputError['lastname'] ? styles.inputError : styles.input}
            type='text'
            id='lastname'
            name='lastname'
            onChange={(e) => validation('lastname', e.target.value)}
          />
          <br />
          {inputError['lastname'] != null && (
            <p className={styles.errorText}>{inputError['lastname']}</p>
          )}
          <br />
          {/* password */}
          <label htmlFor='password'>Password:</label>
          <br />
          <input
            className={inputError['password'] ? styles.inputError : styles.input}
            onChange={(e) => validation('password', e.target.value)}
            type='password'
            id='password'
            name='password'
          />
          <br />
          {inputError['password'] != null && (
            <p className={styles.errorText}>{inputError['password']}</p>
          )}
          <br />
          {/* email */}
          <label htmlFor='email'>Email:</label>
          <br />
          <input
            type='email'
            id='email'
            name='email'
            className={inputError['email'] ? styles.inputError : styles.input}
            onChange={(e) => validation('email', e.target.value)}
          />
          <br />
          {inputError['email'] != null && (
            <p className={styles.errorText}>{inputError['email']}</p>
          )}
          <br />
          {/* phone number */}
          <label htmlFor='phone'>Phone number:</label>
          <br />
          <input
            type='tel'
            id='phone'
            name='phone'
            className={inputError['phone'] ? styles.inputError : styles.input}
            onChange={(e) => validation('phone', e.target.value)}
          />
          <br />
          {inputError['phone'] != null && (
            <p className={styles.errorText}>{inputError['phone']}</p>
          )}
          <br />
          {/* gender */}
          <label className={styles.label} htmlFor='gender'>
            Gender:
          </label>
          <br />
          <label className={styles.label} htmlFor='gender'>
            Male:
          </label>
          <input
            checked={inputState.gender == 'male' || false}
            onChange={() => validation('gender', 'male')}
            className={styles.checkBox}
            type='checkbox'
            id='male'
            name='male'
          />
          <br />
          <label className={styles.label} htmlFor='gender'>
            Female:
          </label>
          <input
            checked={inputState.gender == 'female' || false}
            onChange={() => validation('gender', 'female')}
            type='checkbox'
            id='female'
            name='female'
          />
          <br />
          {inputError['gender'] != null && (
            <p className={styles.errorText}>{inputError['gender']}</p>
          )}
        </form>
        <button onClick={() => submit()} className={styles.submit}>
          register
        </button>
      </div>
    </div>
  );
}
