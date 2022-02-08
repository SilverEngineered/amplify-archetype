import React, {Component} from 'react';
import Amplify, {Auth, Storage} from 'aws-amplify';
import {Navigation} from './portalnavigation';
import {Image} from './image';
import aws_config from '../configs/aws_config.json';
Amplify.configure(aws_config);

class MyListing extends Component {
  constructor() {
    super();
    this.state = {images: []};
  }


  async componentDidMount() {
    const listingNames = [];

    try {
      const listings = await Storage.list('', {level: 'protected'});
      for (const listing in listings) {
        listingNames.push(listings[listing].key);
      }
    } catch (error) {
      alert(error);
      console.log('Error Downloading Files: ', error);
    }

    const images = [];
    for (const listing in listingNames) {
      images.push(await Storage.get(listingNames[listing], {
        level: 'protected',
      }));
    }
    console.log(images);
    this.setState({images: images});
  }
  render() {
    return (
      <div>
        <Navigation/>
        <ul>
          <div className='row'>
            <div className='portfolio-items'>
              {this.state.images.map((item) => (

                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title='title' largeImage={item} smallImage={item} />
                </div>
              ))}
            </div>
          </div>
        </ul>
      </div>
    );
  }
}

export default MyListing;
