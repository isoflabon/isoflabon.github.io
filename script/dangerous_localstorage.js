const accessToken = localStorage.getItem('accessToken');
if ( accessToken ) {
  alert(`dangerous! Your Token is ${accessToken}`);
} else {
  alert('safe! Not found your token.')
}
