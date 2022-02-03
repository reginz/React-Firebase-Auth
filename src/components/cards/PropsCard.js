import React from 'react';
import '../../styles/OilCard.css'
import '../../styles/ThreeView.css'

function PropsCard(props) {

    return (
        <div className='props-card props-card-puprle'>

  <head>    
    <link href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.css" rel="stylesheet" type="text/css"/>
  </head>
 


<nav className="tree-nav">
  <details className="tree-nav__item is-expandable">
    <summary className="tree-nav__item-title">The Realm of the Elderlings</summary>
    <details className="tree-nav__item is-expandable">
    
      <summary className="tree-nav__item-title">The Six Duchies</summary>
      <details className="tree-nav__item is-expandable">
        <summary className="tree-nav__item-title">The Farseer Trilogy</summary>
        <div className="tree-nav__item">
<table style={{width:"100%"}}>
  <tr>
    <th>IP Address</th>
    <th>Object Name</th> 
    <th>Domain Name</th>
    <th>Object Class</th>
    <th>Status</th>
    <th>Mac Address</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
        </div>
      </details>
      
      <details className="tree-nav__item is-expandable">
        <summary className="tree-nav__item-title">The Tawny Man Trilogy</summary>
        <div className="tree-nav__item">
          <a className="tree-nav__item-title"><i className="icon ion-cube"></i> FOOL'S ERRAND</a>
          <a className="tree-nav__item-title"><i className="icon ion-ios-book"></i> GOLDEN FOOL</a>
          <a className="tree-nav__item-title"><i className="icon ion-ios-bookmarks"></i> FOOL'S FATE</a>
        </div>
      </details>
      
      <details className="tree-nav__item is-expandable">
        <summary className="tree-nav__item-title">The Fitz and the Fool Trilogy</summary>
        <div className="tree-nav__item">
          <a className="tree-nav__item-title"><i className="icon ion-ios-bookmarks"></i> FOOL'S ASSASSIN</a>
          <a className="tree-nav__item-title"><i className="icon ion-ios-book"></i> FOOL'S QUEST</a>
          <a className="tree-nav__item-title"><i className="icon ion-android-bookmark"></i> Assassin's Fate</a>
        </div>
      </details>
      
      
    </details>
  </details>



</nav>

        </div>
    );
}

export default PropsCard;