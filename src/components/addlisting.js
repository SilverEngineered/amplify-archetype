import React, {useState} from 'react';
import Amplify, {Auth, Storage} from 'aws-amplify';
import {Navigation} from './portalnavigation';
import aws_config from '../configs/aws_config.json';
Amplify.configure(aws_config);

async function UploadImage(e) {
  e.preventDefault();

  const file = e.target[3].files[0];
  const metadata = {name: file.name,
    date: new Date().toString(),
    price: e.target[1].value.toString(), description: e.target[2].value.toString()};

  try {
    await Storage.put(e.target[0].value, file, {
      metadata: metadata,
      level: 'protected',
      contentType: 'image',


    });
    alert('File Upload Successful');
  } catch (error) {
    alert(error);
    console.log('Error uploading file: ', error);
  }
}

const AddListing = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');


  const handleSubmit = (e) => {
    console.log('Submitted');
  };
  return (
    <div>
      <Navigation/>

      <div>
        <div id='contact'>
          <div className='container'>
            <div className='col-md-8'>
              <div className='row'>
                <div className='section-title'>
                  <h2>Add New Listing</h2>
                  <p>
                  Fill in the required details and we will get your listing published!
                  </p>
                </div>
                <form name='sentMessage' validate onSubmit={UploadImage}>
                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          id='name'
                          name='name'
                          className='form-control'
                          placeholder='Name'
                          required
                          onChange={setName}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Price ($)'
                          required
                          onChange={setPrice}
                        />
                        <p className='help-block text-danger'></p>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <textarea
                      name='message'
                      id='message'
                      className='form-control'
                      rows='4'
                      placeholder='Description'
                      required
                      onChange={setDescription}
                    ></textarea>
                    <p className='help-block text-danger'></p>
                  </div>
                  <div className='form-group'>
                    <input
                      type='file'
                      id='image'
                      className='form-control'
                      placeholder='Name'
                      required
                      onChange={(e) => setFile(e)}
                    />
                    <p className='help-block text-danger'></p>
                  </div>

                  <div id='success'></div>
                  <button type='submit' className='btn btn-custom btn-lg'>
                  Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default AddListing;
