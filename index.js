 function superbowlWin (arrayOfRecords){
       const found = arrayOfRecords.find(record => {
          if (record.result ==="W") {
           return true
          } else {
           return false
         }
     })
     return found ? found.year : undefined 
}

