const scores = [
      {
        marks: 32,
        name: "Yvette Merritt"
      },
      {
        marks: 57,
        name: "Lillian Ellis"
      },
      {
        marks: 22,
        name: "Mccall Carter"
      },
      {
        marks: 21,
        name: "Pate Collier"
      },
      {
        marks: 91,
        name: "Debra Beard"
      },
      {
        marks: 75,
        name: "Nettie Hancock"
      },
      {
        marks: 20,
        name: "Hatfield Hodge"
      }
    ];


    // Task 1
    // Print the name list - As an array

    const getnamelist = scores.map(scores => scores.name);
    console.log(getnamelist)
      
    // Task 2
    // >=40 pass.. find those student that passed (Use array method)

    const marksaboveequal40 = scores.filter(scores => scores.marks >= 40);
    console.log(marksaboveequal40);

    // Task 3
    //  Find all the names who failed the exams (Array methods)  
  
    const namefilter = scores.filter(scores => scores.marks < 40) 
    const failedpername = namefilter.map(namefilter => namefilter.name)
    console.log(failedpername);  

    // Task 4
    // Find the Average mark
    
    const mark = scores.map(scores => scores.marks);
    const allmarks = mark.reduce((sum,curr) => sum+curr);
    const avgmarks = allmarks / mark.length
    console.log(avgmarks);
