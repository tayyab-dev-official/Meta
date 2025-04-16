try
{
    // console.log(a + b);
    // throw new Error("This is the ERROR");
    throw new ReferenceError("ReferenceError - from user");
}
catch(err)
{
    console.log(err);
    console.log('There was an error in the program.')
}
console.log('Program reached to the end!');