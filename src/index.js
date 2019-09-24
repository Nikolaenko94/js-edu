/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) { 
      let hours_week ;
      //focus_perfomance
      if(focus== 'top_peformance'){
          hours_week =config['top_peformance'];
      }
      //focus_family
      if(focus== 'family'){
        hours_week =config['family'];
      }
      //focus friends
      if(focus== 'friends'){
        hours_week =config['friends'];
      }
      //normal_life
      if(focus== 'normal_life'){
        hours_week =config['normal_life'];
      }
      //profession
      if(focus== 'profession'){
        hours_week =config['profession'];
      }
      //carrier
      if(focus== 'carrier'){
        hours_week =config['carrier'];
      }


      let all_education = 1300;
      if(knowsProgramming){
        all_education = 800;
      }
      let weeks = all_education/hours_week;
      return Math.ceil(weeks);
    }
    
     

  
  