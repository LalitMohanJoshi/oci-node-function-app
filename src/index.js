export const hello_func = ((name = "World") => {
  let objInfo = {};
  objInfo['status'] = false;

  try {
    objInfo['status'] = true;
    objInfo['message'] = 'Hello ' + name + " : " + currentTime();
    console.log('\nInside Node Hello World function');
  } catch (error) {
    objInfo['error'] = 'hello_func error occured ';
  }
  return objInfo;
});

const currentTime = (()=>{
  return new Date();
});