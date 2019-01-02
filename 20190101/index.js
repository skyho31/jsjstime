func(function(cb1){
  return cb1(function(cb2){
    return cb2(function(cb3){
      return cb3(function(cb4){
        return cb4(function(){
          return 'hell';
        })
      })
    })
  });
});
