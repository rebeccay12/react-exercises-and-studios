import styles from './Description.module.css';
import React from'react';

function RecipeAuthor() {
    let authorLink = "https://holycowvegan.net/vegan-buttermilk-biscuits/"
    let authorPhoto = "https://holycowvegan.net/wp-content/uploads/2022/03/vaishy-profile-pic-180x180.jpg"
    let authorName = "Vaishali"
    return(
   <div className = {styles.recipeAuthorBlock}>
      <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
      <div>
         <h3>{authorName}</h3>
         <a href={authorLink}>Blog name</a> 
      </div>
   </div>
);
}



class RecipeDescription extends React.Component {
    render() {
     
     return (<div> 
        <div>
           <h1>Recipe Title</h1>
           <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
     </div>)
    }
}

export default RecipeDescription;