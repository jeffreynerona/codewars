function multiplicationTable(row,col){
  var table = [];
  var tableColumn = [];
  for(i = 0; i < row; i++) {
	  for(j = 0; j < col; j++) {
		  tableColumn[j] = (j+1);
		  table[i] = tableColumn.map(function(x){return x*(i+1)});
	  }  
  }
  return table;
}