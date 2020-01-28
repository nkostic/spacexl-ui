const Excerpt = function( str, limit ){
  if(str === null){
    return 'No Details'
  }
  let shortText = str;
  shortText = shortText.substr( 0, shortText.lastIndexOf( ' ', limit ) ) + ' ...';
  return shortText;
}
export default Excerpt;
